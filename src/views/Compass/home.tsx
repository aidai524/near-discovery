import bgImg from '@public/images/others/odyssey/v1/bg.gif';
import g1 from '@public/images/others/odyssey/v1/g1.svg?url';
import g2 from '@public/images/others/odyssey/v1/g2.svg?url';
import g3 from '@public/images/others/odyssey/v1/g3.svg?url';
import g4 from '@public/images/others/odyssey/v1/g4.svg?url';
import g5 from '@public/images/others/odyssey/v1/g5.svg?url';
import subImg from '@public/images/others/odyssey/v1/getPins2.svg?url';
import line1Img from '@public/images/others/odyssey/v1/Line1.svg?url';
import line2Img from '@public/images/others/odyssey/v1/Line2.svg?url';
import mImg from '@public/images/others/odyssey/v1/m.png';
import { useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

import { useDefaultLayout } from '@/hooks/useLayout';

import NextCompoent from './components/NextCompoent';
import Project from './components/Project';
import Qquests from './components/Qquests';
import Record from './components/Record';
import SlotMachine from './components/SlotMachine';
import Social from './components/Social';
import useQuestList from './hooks/useQuestList';
import useSpin from './hooks/useSpin';
import useSummary from './hooks/useSummary';
import useTwitterBind from './hooks/useTwitterBind';

const App = styled.div`
  --main-color: #fff;
  --main-width: 1160px;
  padding-top: 150px;
`;

const BigBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1200px;
  background: rgba(22, 24, 29, 1) url(${bgImg.src});
  background-position: center -180px;
  background-repeat: no-repeat;
  background-size: 100% auto;
  filter: blur(20px);
  opacity: 1;
`;

const BigBg2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1300px;
  background: linear-gradient(to bottom, rgba(22, 24, 29, 0) 0%, rgba(22, 24, 29, 0.8) 50%, rgba(22, 24, 29, 1) 90%);
`;

const MBg = styled.div`
  position: absolute;
  right: 0;
  left: 65%;
  top: 52%;
  height: 939.494px;
  z-index: 0;
  background: url(${mImg.src}) right top no-repeat;
  background-size: auto 100%;
`;

const Title = styled.div`
  color: var(--main-color);
  font-size: 60px;
  font-weight: 700;
  line-height: 90px;
  letter-spacing: 0em;
  text-align: center;
  position: relative;
`;

const IconsWapper = styled.div`
  width: 290px;
  height: 42px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  margin: 25px auto;
  &- > img {
    height: 100%;
  }
  &.sub {
    margin-top: 40px;
  }
`;

const AvatarBox = styled.div`
  width: 60%;
  height: 32px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  margin-left: -8px;
`;

const SubTitle = styled.div`
  color: var(--main-color);
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  text-align: center;
  width: 960px;
  margin: 30px auto 0;
  position: relative;
`;

const RecordBox = styled.div`
  position: relative;
`;

const RecordWapper = styled.div`
  width: var(--main-width);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin: 90px auto 0;
  position: relative;
`;

const RecordLine1 = styled.div`
  position: absolute;
  left: 0;
  right: 23.6219512195122%;
  height: 230px;
  bottom: -48px;
  display: block;
  & > img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const RecordLine2 = styled.div`
  position: absolute;
  height: 509px;
  width: 27.6219512195122%;
  right: 0;
  bottom: -48px;
  & > img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const SubJACKTitle = styled.img`
  width: 482px;
  display: block;
  margin: 130px auto 0;
  &.m180 {
    margin-top: 180px;
  }
`;

const MiniTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: #fff;
  margin-top: 30px;
`;

const ChainImgIcon = styled.img`
  cursor: pointer;
  transition: all 0.3s;
  opacity: 0.3;
  &.selected {
    opacity: 1;
    transform: scale(1.23);
  }
`;

const chains = [g1.src, g2.src, g3.src, g4.src, g5.src];

const questOrder = ['BRIDGE', 'SWAP', 'LEND', 'LIQUIDITY'];

function Compass() {
  const searchParams = useSearchParams();
  const compassId: string = searchParams.get('id') as string;
  const {
    participants,
    winners,
    totalRewardsPts,
    totalSpins,
    availableSpins,
    unclaimedReward,
    setAvailableSpins,
    setTotalSpins,
    setUnclaimedReward,
    getDetail,
    name,
    description
  } = useSummary(compassId);
  const { startSpin, chainList, startCliam, isSpining, isClaiming } = useSpin(
    compassId,
    setAvailableSpins,
    setTotalSpins,
    setUnclaimedReward
  );
  const { questList, getQuestGroupList } = useQuestList(compassId);
  const [chainIndex, setChainIndex] = useState(0);
  const [reward, setReward] = useState(0);
  const { loading, redirectToTwitter } = useTwitterBind({ id: compassId });

  const handleSpin = useCallback(() => {
    if (isSpining) {
      return;
    }
    startSpin().then((res) => {
      setReward(res);
      getDetail();
    });
  }, [isSpining]);

  const handlClaim = useCallback(() => {
    if (unclaimedReward <= 0 || isClaiming) {
      return;
    }
    startCliam().then(() => {
      getDetail();
    });
  }, [unclaimedReward, isClaiming]);

  const qList = questList.dapp.length
    ? questList.dapp[chainIndex].sort((a: any, b: any) => {
        return questOrder.indexOf(a.name) - questOrder.indexOf(b.name);
      })
    : [];

  return (
    <App>
      <BigBg />
      <BigBg2 />
      <MBg />
      <Title>{name}</Title>
      <IconsWapper>
        <img src={g1.src} />
        <img src={g2.src} />
        <img src={g3.src} />
        <img src={g4.src} />
        <img src={g5.src} />
      </IconsWapper>
      <SubTitle>{description}</SubTitle>
      <RecordBox>
        <RecordLine1>
          <img src={line1Img.src} />
        </RecordLine1>
        <RecordWapper>
          <Record title="Participants" renderContent={() => <>{participants}</>} />
          <Record
            title="Grand Prize Winners"
            renderContent={() => (
              <AvatarBox>
                {winners && winners.length
                  ? winners.slice(0, 5).map((v, i) => {
                      return <Avatar key={v} src={v} />;
                    })
                  : '—'}
              </AvatarBox>
            )}
          />
          <Record title="Accumulated Reward [PTS]" renderContent={() => <>{totalRewardsPts}</>} />
        </RecordWapper>
        <RecordLine2>
          <img src={line2Img.src} />
        </RecordLine2>
      </RecordBox>

      <SlotMachine
        chainList={chainList}
        handleSpin={handleSpin}
        handleClaim={handlClaim}
        totalSpins={totalSpins}
        availableSpins={availableSpins}
        unclaimedReward={unclaimedReward}
        reward={reward}
        isSpining={isSpining}
        isClaiming={isClaiming}
      />

      <Qquests list={questList.page} getQuestGroupList={getQuestGroupList} getSumaryDetail={getDetail} />

      <SubJACKTitle src={subImg.src} />
      <MiniTitle>Obtain more spins through on-chain interactive quests</MiniTitle>
      <IconsWapper className="sub">
        {chains.map((chain, index) => {
          return (
            <ChainImgIcon
              onClick={() => setChainIndex(index)}
              className={chainIndex === index ? 'selected' : ''}
              src={chain}
              key={chain}
            />
          );
        })}
      </IconsWapper>

      <Project
        list={qList}
        currentChainIndex={chainIndex}
        getQuestGroupList={getQuestGroupList}
        getSumaryDetail={getDetail}
      />

      <SubJACKTitle className="m180" src={subImg.src} />
      <MiniTitle>Get more spins by sharing and following</MiniTitle>

      <Social
        list={questList.twitter}
        getQuestGroupList={getQuestGroupList}
        getSumaryDetail={getDetail}
        onShare={redirectToTwitter}
        onFollow={redirectToTwitter}
      />

      <NextCompoent />
    </App>
  );
}

Compass.getLayout = useDefaultLayout;

export default Compass;
