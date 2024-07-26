import Big from 'big.js';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useLrtDataStore } from '@/stores/lrts';
import { unifyNumber } from '@/utils/format-number';
import { setNumKMB } from '@/utils/format-number';

import useAllTokensBalance from '../../hooks/useAllTokensBalance';
import { PolygonBtn } from '../';

export enum ActionType {
  STAKE = 'stake',
  RESTAKE = 'restake',
}
const TabWrap = styled(motion.div)``;
const TabHead = styled.div`
  position: fixed;
  bottom: 202px;
  padding-left: 37px;
  z-index: 11;
  left: 50%;
  width: 1346px;
  margin-left: -673px;
  display: flex;
  gap: 12px;
  .item {
    width: 88px;
    height: 75px;
    padding: 5px 9px 0;
    background: url(/images/lrts/bg-th-dark.svg) center no-repeat;

    .text-right {
      text-align: right;
      color: #fff;
      font-family: Orbitron;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    img {
      display: block;
      margin: 0 auto;
    }

    &.active {
      background: url(/images/lrts/bg-th-light.svg) center no-repeat;
    }
  }
`;
const TabBody = styled.div`
  position: fixed;
  z-index: 10;
  left: 50%;
  right: 0;
  margin-left: -673px;
  bottom: 0;
  width: 1346px;

  display: flex;
  justify-content: space-between;
  height: 204px;
  padding: 50px 219px 0 45px;
  background: url(/images/lrts/bg-tab.svg) top center no-repeat;
  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    .prd-wrap {
      position: relative;
      width: 130px;
      height: 100px;
    }
    .prd-token {
      position: absolute;
      left: 0;
      right: 0;
      top: 6px;
      font-size: 12px;
      text-align: center;
      color: white;
      font-family: Orbitron;
    }
    .prd-range {
      position: absolute;
      top: 72px;
      left: 6px;
      color: rgba(255, 255, 255, 0.5);
      font-family: Orbitron;
      font-size: 8px;
      font-weight: 700;
    }
    .prd-apr-min {
      position: absolute;
      top: 62px;
      right: 6px;
      color: rgba(255, 255, 255, 0.5);
      font-family: Orbitron;
      font-size: 8px;
      font-weight: 700;
    }
    .prd-apr-max {
      position: absolute;
      top: 72px;
      right: 6px;
      color: #fff;
      font-family: Orbitron;
      font-size: 10px;
      font-weight: 700;
    }
    .prd-name {
      display: flex;
      align-items: center;
      gap: 5px;
      color: #979abe;
      font-family: Montserrat;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
  .content {
    flex-grow: 1;
    padding-left: 60px;
    .detail {
      display: flex;
      justify-content: space-between;
      margin-bottom: 27px;
    }
  }
  .right {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    gap: 40px;
    padding-left: 100px;
  }
  .btns {
    display: flex;
    gap: 20px;
  }
`;

const ItemName = styled.div`
  color: #fff;
  font-family: Orbitron;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const ItemValue = styled.div`
  color: #fff;
  font-family: Orbitron;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const ItemLink = styled(Link)`
  color: #fff;
  font-family: Orbitron;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
`;

interface IProps {
  lstIndex: number;
  curLrt: any;
  resetTabIndex: number;
  updater: number;
  onTabChange: (symbol: any) => void;
  handleShowModal: (actionType: any) => void;
}

const TabCard: FC<IProps> = ({ lstIndex, curLrt, handleShowModal, onTabChange, resetTabIndex, updater }) => {
  // tab head
  const [tabList, setTabList] = useState<any>([]);
  //tab head index
  const [activeIndex, setActiveIndex] = useState(0);

  // lst & lrts
  const [list, setList] = useState<any>();
  // tab body index
  const [dataIndex, setDataIndex] = useState(0);

  const [isShowHeader, setIsShowHeader] = useState(true);

  const [tokenType, setTokenType] = useState(ActionType.STAKE);
  const tabRef = useRef(null);
  const lrtsData = useLrtDataStore((store: any) => store.data);

  const { loading, balances } = useAllTokensBalance(updater);

  useEffect(() => {
    const _lrtTokens = lrtsData[lstIndex]?.lrtTokens?.map((item: any) => ({
      ...item.token,
      logo: item.logo,
      tvl: item.tvl,
      apr: item.apr,
    }));
    const _list = [
      {
        ...lrtsData[lstIndex].token,
        logo: lrtsData[lstIndex].lstIcon,
        tvl: lrtsData[lstIndex].tvl,
        apr: lrtsData[lstIndex].apr,
      },
      ..._lrtTokens,
    ];

    const _tabList = _list.filter((item: any) => balances[item.address] > 0);

    setTabList(_tabList);
    setIsShowHeader(true);
    setList(_list);
    setActiveIndex(0);
    if (_tabList[0]) {
      const _dataIndex = _list.findIndex((item: any) => item.symbol === _tabList[0].symbol);

      setDataIndex(_dataIndex);
      if (_dataIndex > 0) {
        setTokenType(ActionType.RESTAKE);
      } else {
        setTokenType(ActionType.STAKE);
      }
    } else {
      setDataIndex(0);
      setTokenType(ActionType.STAKE);
    }
  }, [lstIndex, lrtsData, balances]);

  useEffect(() => {
    if (activeIndex !== 0) {
      setActiveIndex(0);
      setDataIndex(0);
    }
    if (tabList.length) {
      setIsShowHeader(true);
    }
  }, [resetTabIndex]);

  useEffect(() => {
    if (!Array.isArray(tabList) || !curLrt) return;

    const _index = tabList.findIndex((item: any) => item.symbol === curLrt?.symbol);
    const _dataIndex = list.findIndex((item: any) => item.symbol === curLrt?.symbol);

    if (_index < 0) {
      // hide tab header
      setIsShowHeader(false);
      const _lstIndex = list.findIndex((item: any) => item.symbol === curLrt?.symbol);
      setActiveIndex(_lstIndex);
      setDataIndex(_lstIndex);
    } else {
      setIsShowHeader(true);
      setActiveIndex(_index);
      setDataIndex(_dataIndex);
    }
  }, [list, tabList, curLrt]);

  const onChange = (index: number, symbol: string) => {
    setActiveIndex(index);
    onTabChange(symbol);
    // click box in tab head
    if (index === 0) {
      setDataIndex(0);
    }
  };
  const anim = {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
    },
    exit: { y: 50, opacity: 0 },
    transition: {
      duration: 0.2,
    },
  };

  useEffect(() => {
    const lsts = lrtsData.map((item: any) => item.token.symbol);

    if (lsts.includes(list?.[dataIndex]?.symbol)) {
      setTokenType(ActionType.STAKE);
    } else {
      setTokenType(ActionType.RESTAKE);
    }
  }, [lrtsData, dataIndex]);

  return Array.isArray(list) ? (
    <TabWrap {...anim} ref={tabRef}>
      <TabHead>
        {Array.isArray(tabList) && isShowHeader
          ? tabList?.map((item: any, index: number) => (
              <div
                key={index}
                className={`item ${activeIndex === index ? 'active' : ''}`}
                onClick={(e: any) => onChange(index, item.symbol)}
              >
                <div className="text-right">{unifyNumber(balances[item.address] || 0)}</div>
                <Image src={item.logo} width={40} height={40} alt={item.symbol} />
              </div>
            ))
          : null}
      </TabHead>
      <TabBody>
        {tokenType === ActionType.STAKE ? (
          <div className="left">
            <div className="prd-wrap">
              <Image src={list?.[dataIndex]?.logo} width={130} height={100} alt="" />
              <div className="prd-token">{lrtsData[lstIndex]?.token?.symbol}</div>
              <div className="prd-range">APR RANGE</div>
              <div className="prd-apr-min">{Number(lrtsData[lstIndex]?.minApr).toFixed(2)}%</div>
              <div className="prd-apr-max">{Number(lrtsData[lstIndex]?.maxApr).toFixed(2)}%</div>
            </div>
            <span className="prd-name">
              <Image src={lrtsData[lstIndex]?.dapp?.logo} width={16} height={16} alt="" />
              {lrtsData[lstIndex]?.dapp?.name}
            </span>
          </div>
        ) : (
          <div className="left">
            <div className="prd-wrap">
              <Image src={list?.[dataIndex]?.logo} width={130} height={100} alt="" />
            </div>
            <span className="prd-name">
              <Image src={list?.[dataIndex]?.icon} width={16} height={16} alt="" />

              {list?.[dataIndex]?.symbol}
            </span>
          </div>
        )}
        <div className="content">
          <div className="detail">
            <div>
              <ItemName>{tokenType === ActionType.STAKE ? 'LST' : 'LRT'}</ItemName>
              <ItemValue>{list?.[dataIndex]?.symbol}</ItemValue>
            </div>
            <div>
              <ItemName>APR</ItemName>
              <ItemValue>{Number(list?.[dataIndex]?.apr).toFixed(2)}%</ItemValue>
            </div>
            <div>
              <ItemName>TVL</ItemName>
              <ItemValue>$ {setNumKMB(list?.[dataIndex]?.tvl, 2)}</ItemValue>
            </div>
          </div>
          <div className="btns">
            <PolygonBtn
              onClick={() => {
                handleShowModal(tokenType);
              }}
              style={{ flexGrow: 1 }}
            >
              {tokenType === ActionType.STAKE ? 'STAKE / UNSTAKE' : 'RESTAKE / UNSTAKE'}
            </PolygonBtn>
            {Big(balances[list?.[dataIndex]?.address] || 0).gt(0) ? (
              <PolygonBtn
                style={{ width: 175 }}
                onClick={() => {
                  handleShowModal('swap');
                }}
              >
                SWAP
              </PolygonBtn>
            ) : null}
          </div>
        </div>
        <div className="right">
          <div>
            <ItemName>Balance</ItemName>
            <ItemValue>{unifyNumber(balances[list?.[dataIndex]?.address] || 0)}</ItemValue>
          </div>
          <ItemLink href={'/lrts/earning'}>Earn more on L2...</ItemLink>
        </div>
      </TabBody>
    </TabWrap>
  ) : null;
};

export default TabCard;
