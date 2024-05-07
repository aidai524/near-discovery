import { useSetChain } from '@web3-onboard/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import swapConfig from '@/config/swap/networks';
import lendingConfig from '@/config/lending/networks';
import useReport from '@/views/Landing/hooks/useReport';
import useAuthCheck from '@/hooks/useAuthCheck';
import useAccount from '@/hooks/useAccount';
import { ComponentWrapperPage } from '@/components/near-org/ComponentWrapperPage';
import popupsData from '@/config/all-in-one/chains';
import useAddAction from '@/hooks/useAddAction';
import { useDefaultLayout } from '@/hooks/useLayout';
import { usePriceStore } from '@/stores/price';
import { useDebounceFn } from 'ahooks';
import { useAllInOneTabStore, useAllInOneTabCachedStore } from '@/stores/all-in-one';
import { multicall } from '@/utils/multicall';
import type { NextPageWithLayout } from '@/utils/types';
import AllInOneView from '@/views/AllInOne';

const arrow = (
  <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L4 4L1 7" stroke="#979ABE" strokeLinecap="round" />
  </svg>
);

const narrowUrl = 'https://assets.dapdap.net/images/bafkreien4qagdjuudb6yj53wutsj4f6zfodrgv4ztftzjgkvcdtjnjk564.svg';

const checkMark = 'https://assets.dapdap.net/images/bafkreig7b3k2jhkk6znb56pdsaj2f4mzadbxdac37lypsbdgwkj2obxu4y.svg';

interface SelectBgProps {
  bgColor: string;
}
const SelectBg: React.FC<SelectBgProps> = ({ bgColor }) => (
  <svg width="720" height="241" viewBox="0 0 720 241" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.5" filter="url(#filter0_f_510_1870)">
      <ellipse cx="360" cy="120.5" rx="280" ry="40.5" fill={bgColor} />
    </g>
    <defs>
      <filter
        id="filter0_f_510_1870"
        x="0"
        y="0"
        width="720"
        height="241"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_510_1870" />
      </filter>
    </defs>
  </svg>
);

const Container = styled.div`
  margin: 0 8%;
  color: #ffffff;
  position: relative;
  padding-top: 50px;
  .top-login-select {
    margin-right: 16px;
    border-radius: 12px;
    padding: 4px;
    display: flex;
    z-index: 2;
    width: fit-content;
    cursor: pointer;
    position: relative;

    .select-item-wrapper {
      display: flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
    }
    .selsect-item-img {
      width: 32px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      border-radius: 8px;
      margin-right: 8px;
      .select-chain-img {
        /* width: 80%;
        height: 80%; */
      }
    }
    .selsect-item-text {
      padding-top: 16px;
      margin-right: 10px;
      p {
        font-size: 16px;
        font-weight: 700;
        color: #ffffff;
      }
    }
    .selsect-item-icon {
      background: linear-gradient(0deg, rgba(48, 49, 66, 0.5), rgba(48, 49, 66, 0.5));
      border: 1px solid rgba(55, 58, 83, 1);
      border-radius: 6px;
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 16px;
    }
    .login-select-popup {
      position: absolute;
      top: 60px;
      left: 0;
      background: #303142;
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
      padding: 12px;
      width: 249px;
      .select-popups-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        border-radius: 8px;
        .flex-grow {
          flex-grow: 1;
        }
        .popup-item-img {
          width: 32px;
          height: 32px;
          line-height: 32px;
          text-align: center;
          border-radius: 8px;
          margin-right: 8px;
        }
        .popups-item-text {
          font-size: 14px;
          font-weight: 400;
          color: #fff;
        }
      }
      .select-popups-item:hover {
        background: #2a2a3a;
      }
      .selected {
        background: #2a2a3a;
      }
    }
  }
  .content-page {
    z-index: 1;
    width: 100%;
    position: relative;
    /* position: absolute; */
  }
  .select-bg-icon {
    z-index: 0;
    position: absolute;
    top: 60px;
    left: 50%;
    .select-bg-content {
      width: 560px;
      height: 80px;
      position: relative;
      img {
        width: 124px;
        opacity: 0.1;
        position: absolute;
        left: 7%;
      }
      .select-bg {
        position: absolute;
        right: 20%;
        top: -60%;
      }
    }
  }
`;
const BreadCrumbs = styled.div`
  color: #979abe;
  font-size: 14px;
  margin-bottom: 32px;
  a {
    text-decoration: none;
    color: #979abe;
    display: inline-block;
    cursor: pointer;
  }
  svg {
    margin: 0 8px;
  }
  span {
    color: #ffffff;
  }
`;

const AllInOne: NextPageWithLayout = () => {
  const router = useRouter();
  const chain = router.query.chain as string;
  const [currentChain, setCurrentChain] = useState<any>();
  const [isSelectItemClicked, setIsSelectItemClicked] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const { account, chainId } = useAccount();
  const [{ settingChain }, setChain] = useSetChain();
  const { handleReport } = useReport();
  const prices = usePriceStore((store) => store.price);
  const [tab, setTab] = useState('');
  const sourceTab = useAllInOneTabStore((store: any) => store.tab);
  const cachedTabsStore: any = useAllInOneTabCachedStore();
  const { addAction } = useAddAction('all-in-one');
  const popupRef = useRef<HTMLDivElement | null>(null);
  const { check } = useAuthCheck({ isNeedAk: false });

  const { run } = useDebounceFn(
    () => {
      const _currentChain = popupsData[chain] || popupsData['arbitrum'];
      setCurrentChain(_currentChain);
      setShowComponent(true);
      const cachedTab = cachedTabsStore.chains[_currentChain.chainId];
      if (sourceTab) {
        setTab(sourceTab);
      } else if (cachedTab) {
        setTab(cachedTab);
      } else {
        setTab(_currentChain.defaultTab);
      }
    },
    { wait: 500 },
  );

  const handleSelectItemClick = () => {
    setIsSelectItemClicked(!isSelectItemClicked);
  };
  const handleItemClick = async (path: string) => {
    check(async () => {
      setIsSelectItemClicked(false);
      const currentChain = popupsData[path];
      const result = await setChain({ chainId: `0x${currentChain.chainId.toString(16)}` });
      if (result) {
        setShowComponent(false);
        router.push(`/all-in-one/${currentChain.path}`);
      }
    });
  };

  useEffect(() => {
    run();
  }, [chain]);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsSelectItemClicked(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    handleReport('all-in-one');
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const tabConfig = useMemo(() => {
    if (!currentChain || !tab) return {};
    if (tab === 'Swap') return swapConfig[currentChain?.chainId] || {};
    if (tab === 'Lending') return lendingConfig[currentChain?.chainId] || {};
    return {};
  }, [currentChain, tab]);

  return currentChain ? (
    <Container key={chain}>
      <AllInOneView currentChain={currentChain} />
      {/*#region following is the old page */}
      {/*<BreadCrumbs>*/}
      {/*  <Link href="/">Home</Link>*/}
      {/*  {arrow}*/}
      {/*  <span>{currentChain.title} Navigation</span>*/}
      {/*</BreadCrumbs>*/}
      {/*<>*/}
      {/*  {' '}*/}
      {/*  <div className="top-login-select">*/}
      {/*    <div className="select-item-wrapper" onClick={handleSelectItemClick} data-bp="10014-002">*/}
      {/*      <div*/}
      {/*        className="selsect-item-img"*/}
      {/*        style={{*/}
      {/*          backgroundColor: currentChain.bgColor,*/}
      {/*        }}*/}
      {/*      >*/}
      {/*        <img className="select-chain-img" src={currentChain.icon} alt="" />*/}
      {/*      </div>*/}
      {/*      <div className="selsect-item-text">*/}
      {/*        <p> {currentChain.title}</p>*/}
      {/*      </div>*/}
      {/*      <div className="selsect-item-icon">*/}
      {/*        <img*/}
      {/*          style={{ transform: isSelectItemClicked ? 'rotate(180deg)' : 'rotate(0deg)' }}*/}
      {/*          src={narrowUrl}*/}
      {/*          alt=""*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      
      {/*    {isSelectItemClicked && (*/}
      {/*      <div className="login-select-popup" ref={popupRef}>*/}
      {/*        {Object.values(popupsData).map((item) => (*/}
      {/*          <div*/}
      {/*            className={`select-popups-item ${chain === item.path ? 'selected' : ''}`}*/}
      {/*            key={item.path}*/}
      {/*            onClick={() => handleItemClick(item.path)}*/}
      {/*            data-bp="10014-003"*/}
      {/*          >*/}
      {/*            <div className="popup-item-img" style={{ backgroundColor: item.bgColor }}>*/}
      {/*              <img src={item.icon} alt="" />*/}
      {/*            </div>*/}
      {/*            <div className="popups-item-text">{item.title}</div>*/}
      {/*            <div className="flex-grow"></div>*/}
      {/*            {chain === item.path && (*/}
      {/*              <div className="check-mark">*/}
      {/*                <img src={checkMark} alt="check-mark" />*/}
      {/*              </div>*/}
      {/*            )}*/}
      {/*          </div>*/}
      {/*        ))}*/}
      {/*      </div>*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*  {showComponent && (*/}
      {/*    <>*/}
      {/*      <div className="select-bg-icon">*/}
      {/*        <div className="select-bg-content">*/}
      {/*          <img src={currentChain.bgIcon || currentChain.icon} alt="" />*/}
      {/*          <div className="select-bg">*/}
      {/*            <SelectBg bgColor={currentChain.selectBgColor} />*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <div className="content-page">*/}
      {/*        <ComponentWrapperPage*/}
      {/*          src="bluebiu.near/widget/All-in-one"*/}
      {/*          componentProps={{*/}
      {/*            addAction,*/}
      {/*            multicall,*/}
      {/*            chainId: currentChain.chainId,*/}
      {/*            currentChainId: chainId,*/}
      {/*            menuConfig: currentChain.menuConfig,*/}
      {/*            ...tabConfig,*/}
      {/*            prices,*/}
      {/*            tab,*/}
      {/*            account,*/}
      {/*            onReset: () => {},*/}
      {/*            onChangeTab: (tab: string) => {*/}
      {/*              cachedTabsStore.setCachedTab(tab, currentChain.chainId);*/}
      {/*              setTab(tab);*/}
      {/*            },*/}
      {/*          }}*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    </>*/}
      {/*  )}*/}
      {/*</>*/}
      {/*#endregion */}
    </Container>
  ) : (
    <div />
  );
};

AllInOne.getLayout = useDefaultLayout;

export default AllInOne;
