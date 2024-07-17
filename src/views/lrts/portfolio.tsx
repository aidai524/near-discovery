import { useRouter } from 'next/router';
import type { CSSProperties, FC, ReactNode } from 'react';
import React, { memo, useEffect, useState } from 'react';

import { useLrtDataStore } from '@/stores/lrts';
import { usePriceStore } from '@/stores/price';
import { unifyNumber } from '@/utils/format-number';

import { CustomTable, PolygonBtn, Tabs } from './components';
import useAllTokensBalance from './hooks/useAllTokensBalance';
import useLrtsList from './hooks/useLrtsList';
import { Ad, Assets, AssetTab, Container } from './styles/portfolio.style';
interface IProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}
enum TabType {
  'Portfolio' = 'Portfolio',
  'Unstake' = 'Unstake',
  'History' = 'History',
}

const Portfolio: FC<IProps> = (props) => {
  const { loading, balances } = useAllTokensBalance();
  const prices = usePriceStore((store) => store.price);
  const lrtsData = useLrtDataStore((store: any) => store.data);
  const { completed } = useLrtsList();
  // console.log('prices:', prices);
  const lstAssets = lrtsData.map((item: any, index: number) => ({
    ...item.token,
    assets: item.token.symbol,
    chian: item.token.chianId,
    price: prices[item.symbol] || 0,
    key: index,
    apr: item.apr,
  }));
  const lrtAssets = lrtsData
    .map((item: any) => item.lrtTokens)
    .flat()
    .map((item: any, index: number) => ({
      ...item.token,
      assets: item.token?.symbol,
      chian: item.token?.chianId,
      price: prices[item.symbol] || 0,
      apr: item.apr,
      key: index,
    }));

  const router = useRouter();
  const handleBridge = (toToken: string) => {
    router.push(`/super-bridge?fromChainId=1&toChainId=1&fromToken=ETH&toToken=${toToken}`);
  };

  const items = [
    {
      label: TabType.Portfolio,
      key: 'item-1',
      children: (
        <AssetTab>
          <div className="title">LST Assets</div>
          <CustomTable
            dataSource={lstAssets}
            columns={[
              {
                title: 'Assets',
                dataIndex: 'assets',
                key: 1,
                width: '10%',
                render: (_: any) => {
                  return (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                      <img src={_.icon} alt="" />
                      {_.symbol}
                    </div>
                  );
                },
              },
              {
                title: 'Chain',
                dataIndex: 'chainId',
                key: 2,
                width: '10%',
              },
              {
                title: 'Balance',
                dataIndex: 'balance',
                key: 3,
                width: '10%',
                render: (_: any) => {
                  return unifyNumber(balances[_?.address] || 0);
                },
              },
              {
                title: 'Price',
                dataIndex: 'price',
                key: 4,
                width: '10%',
                render: (_: any) => {
                  return Number(prices[_.symbol] || 0).toFixed(2);
                },
              },
              {
                title: '7d APR',
                dataIndex: 'apr',
                key: 5,
                width: '10%',
                render: (_: any) => {
                  return `${Number(_.apr).toFixed(2)}%`;
                },
              },
              {
                title: 'Action',
                dataIndex: 'Action',
                key: 6,
                width: '50%',
                render: (_: any) => {
                  return (
                    <div style={{ display: 'flex', gap: 10 }}>
                      <PolygonBtn>STAKE / UNSTAKE </PolygonBtn>
                      <PolygonBtn>Swap</PolygonBtn>
                      <PolygonBtn onClick={() => handleBridge(_.symbol)}>Bridge</PolygonBtn>
                    </div>
                  );
                },
              },
            ]}
          />
          <div className="title" style={{ marginTop: 50 }}>
            LRT Assets
          </div>
          <CustomTable
            dataSource={lrtAssets}
            columns={[
              {
                title: 'Assets',
                dataIndex: 'assets',
                key: 1,
                width: '10%',
                render: (_: any) => {
                  return (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                      <img src={_.icon} alt="" />
                      {_.symbol}
                    </div>
                  );
                },
              },
              {
                title: 'Chain',
                dataIndex: 'chainId',
                key: 2,
                width: '10%',
              },
              {
                title: 'Balance',
                dataIndex: 'balance',
                key: 3,
                width: '10%',
                render: (_: any) => {
                  return unifyNumber(balances[_?.address] || 0);
                },
              },
              {
                title: 'Price',
                dataIndex: 'price',
                key: 4,
                width: '10%',
                render: (_: any) => {
                  return Number(prices[_.symbol] || 0).toFixed(2);
                },
              },
              {
                title: '7d APR',
                dataIndex: 'apr',
                key: 5,
                width: '10%',
                render: (_: any) => {
                  return `${Number(_.apr).toFixed(2)}%`;
                },
              },
              {
                title: 'Action',
                dataIndex: 'Action',
                key: 6,
                width: '50%',
                render: (_: any) => {
                  return (
                    <div style={{ display: 'flex', gap: 10 }}>
                      <PolygonBtn>RESTAKE / UNSTAKE </PolygonBtn>
                      <PolygonBtn>Swap</PolygonBtn>
                      <PolygonBtn onClick={() => handleBridge(_.symbol)}>Bridge</PolygonBtn>
                    </div>
                  );
                },
              },
            ]}
          />
        </AssetTab>
      ),
    },
    { label: TabType.Unstake, key: 'item-2', children: 2 },
    {
      label: TabType.History,
      key: 'item-3',
      children: (
        <CustomTable
          dataSource={[
            {
              action: 'Stake',
              sent: '0.1 stETH',
              receive: '0.1 ETH',
              hash: 'SDLGSLDBGLB',
              date: 'Jul 4, 2024 5:39 PM',
              key: 1,
            },
            {
              action: 'UnStake',
              sent: '0.1 stETH',
              receive: '0.1 ETH',
              hash: 'SDLGSLDBGLB',
              date: 'Jul 4, 2024 5:39 PM',
              key: 2,
            },
          ]}
          columns={[
            { title: 'Action', dataIndex: 'action', key: 1 },
            { title: 'Sent', dataIndex: 'sent', key: 2 },
            { title: 'Receive', dataIndex: 'receive', key: 3 },
            { title: 'Hash', dataIndex: 'hash', key: 4 },
            { title: 'Date', dataIndex: 'date', key: 5 },
          ]}
        />
      ),
    },
  ];

  return (
    <Container>
      <Assets>
        <div className="head">
          <div className="item">
            <span className="key">LST Value</span>
            <span className="value">$ 1,035.23</span>
          </div>
          <div className="item">
            <span className="key">LRT Value</span>
            <span className="value">$ 2,535.23</span>
          </div>
          <div className="item">
            <span className="key">Wallet Balance</span>
            <span className="value">$ 5,295.67</span>
          </div>
        </div>
        <div className="body">
          <div className="top">
            <div className="item">
              <span className="key">Staked ETH</span>
              <span className="value">45%</span>
            </div>
            <div className="item">
              <span className="key">Non-staked ETH</span>
              <span className="value">55%</span>
            </div>
          </div>
          <div className="process">
            <div className="process-bar process-bar-stake"></div>
            <div className="process-bar process-bar-nostake"></div>
          </div>
          <div className="bottom">
            <div className="item">
              <span className="key">Restaked ETH</span>
              <span className="value">74%</span>
            </div>
            <div className="item">
              <span className="key">Non-restaked ETH</span>
              <span className="value">26%</span>
            </div>
          </div>
        </div>
      </Assets>
      <Ad src="/images/lrts/ad.png" width={1200} height={103} alt="ad" />
      <Tabs items={items} />
    </Container>
  );
};

export default memo(Portfolio);
