import styled from 'styled-components';
import ToggleTab, { Tab } from './components/Tabs';
import useCompassList from '../Home/components/Compass/hooks/useCompassList';
import { useMemo, useState } from 'react';
import { StatusType } from './components/Tag';
import Skeleton from 'react-loading-skeleton';
import dynamic from 'next/dynamic';
import OdysseyChroma from './components/OdysseyChroma'
import RecentRewards from '@/views/Home/components/Rewards';
import Tooltip from '@/components/TitleTooltip';

const StyledWrapper = styled.div`
  --var-container-width: 1244px;
  position: relative;
  .section {
    padding-top: 123px;
    height: 670px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: column wrap;
    gap: 50px;

    @media (max-width: 1440px) {
      .head {
        transform: scale(0.95);
      }
    }

    .head {
      transition: all 0.5s ease 0s;

      .slogen {
        width: 350px;
        height: 50px;
        margin-bottom: 20px;
      }
      .title {
        color: #979abe;
        font-size: 20px;
        line-height: 30px;
      }
    }
  }
  .compass {
    width: 100%;
  }
  .odyssey {
    padding: 55px 0;
    display: flex;
    width: var(--var-container-width);
    margin: 0 auto;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      .all-odyssey-text {
        width: 194px;
        height: 32px;
      }
      .tab {
        width: 192px;
        height: 36px;
      }
    }
  }
  .odyssey-list {
      width: var(--var-container-width);
      margin: 0 auto;
      margin-top: 26px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      .odyssey-card {
        width: 405px;
        margin-bottom: 34px;
      }
    }
`;

const StyledContent = styled.div`
  position: relative;
  z-index: 1;
`

const OdysseyChromaWrapper = styled.div`
  width: 100%;
  height: 745px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`

const LoadingSkeleton = () => (
    <StyledWrapper>
        <div className="odyssey-card">
            {Array.from({ length: 9 }).map((_, index) => (
            <div key={index}>
                <Skeleton height={405} borderRadius={12} style={{ marginBottom: '34px'}} />
            </div>
            ))}
        </div>
    </StyledWrapper>
);

const SwiperList = dynamic(() => import('./components/Swiper'), {
    loading: () => <Skeleton height={405} borderRadius={12} />
  });
  
  const OdysseyCard = dynamic(() => import('@/views/Dapp/components/DappDetail/RelativeOdyssey/Card'), {
    loading: () => <LoadingSkeleton />
  });

const OdysseyList = () => {
  const { compassList } = useCompassList();
  const [tab, setTab] = useState<Tab>(Tab.All);

  const filterConditions = {
    [Tab.All]: () => true,
    [Tab.Live]: (compass: any) => compass.status === StatusType.ongoing,
    [Tab.Ended]: (compass: any) => compass.status === StatusType.ended,
  };

  const filteredCompassList = useMemo(() => {
    return compassList?.filter(filterConditions[tab]);
  }, [tab, compassList]);

  return (
    <>
      <StyledWrapper>
        <StyledContent>
        <div className="section">
          <div className="head">
            <>
              <img className="slogen" src="/images/odyssey/welcome/logo.png" alt="logo"></img>
              <Tooltip sx={{ top: '-28px', left: '10px', zIndex: 11}} content="Embark on your Web3 Odyssey – where every action brings a chance to earn new rewards! Discover exciting missions across multiple networks, while exploring new dApps along the way. Farm optimised airdrop opportunities and earn a wide range of rewards as you navigate the ever-evolving DeFi landscape." />
            </>
            <div className="title">Exclusive Seasonal Lootbox Experiences</div>
          </div>
          <div className="compass">
            <SwiperList />
          </div>
        </div>
        <RecentRewards
          isSubTitle={false}
          style={{
            height: 330,
            justifyContent: 'flex-start',
            paddingTop: 115,
          }}
          titleStyle={{
            marginBottom: 10,
          }}
        />
        <div className="odyssey">
          <div className="header">
            <img className="all-odyssey-text" src="/images/odyssey/all-odyssey-text.png" alt="text" />
            <ToggleTab onClick={(tab) => setTab(tab)} />
          </div>
          <div className="odyssey-list">
            {filteredCompassList?.map((compass: any) => (
              <OdysseyCard
                className="odyssey-card"
                key={compass.id}
                id={compass.id}
                bp='1004-001'
                name={compass.name}
                banner={compass.banner}
                status={compass.status}
                rewards={compass.reward}
                volume={compass.trading_volume}
                users={compass.total_users}
                // medals={[
                //   { icon: '/images/medals/medal-mode-bow.svg', id: 1 },
                // ]}
              />
            ))}
          </div>
        </div>
        </StyledContent>
        <OdysseyChromaWrapper>
          <OdysseyChroma />
        </OdysseyChromaWrapper>
      </StyledWrapper>
    </>
  );
};

export default OdysseyList;
