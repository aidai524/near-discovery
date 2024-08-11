import styled from 'styled-components';
import ToggleTab, { Tab } from './components/Tabs';
import useCompassList from '../Home/components/Compass/hooks/useCompassList';
import { useMemo, useState } from 'react';
import { StatusType } from './components/Tag';
import Skeleton from 'react-loading-skeleton';
import dynamic from 'next/dynamic';


const StyledWrapper = styled.div`
  --var-container-width: 1244px;
  .section {
    background-image: url('/images/odyssey/odyssey-list-bg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 745px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    gap: 116px;
    @media (max-width: 1440px) {
      gap: 56px;
      transition: all 0.5s ease 0s;
    }
    .head {
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
    width: var(--var-container-width);
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
  const { loading, compassList } = useCompassList();
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
        <div className="section">
          <div className="head">
            <img className="slogen" src="/images/odyssey/welcome/logo.png" alt="logo"></img>
            <div className="title">Exclusive Seasonal Lootbox Experiences</div>
          </div>
          <div className="compass">
            <SwiperList />
          </div>
        </div>
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
      </StyledWrapper>
    </>
  );
};

export default OdysseyList;
