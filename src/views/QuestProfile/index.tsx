import { useRouter } from 'next/router';
import { memo, useState } from 'react';

import useReport from '@/views/Landing/hooks/useReport';
import useAuthCheck from '@/hooks/useAuthCheck';
import useUserInfo from '../../hooks/useUserInfo';
import DailyTask from './components/DailyTask';
import Favorites from './components/Favorites';
import InviteCodePanel from './components/InviteCode';
import InviteFirendsModal from './components/InviteFirendsModal';
import Pts from './components/Pts';
import Quests from './components/Quests';
import Tabs from './components/Tabs';
import UserInfo from './components/UserInfo';
import useInviteList from './hooks/useInviteList';
import { StyledBgImg, StyledContainer, StyledPanelWrapper, StyledTabsBox } from './styles';
import type { Tab } from './types';

const QuestProfileView = () => {
  useAuthCheck({ isRedirect: true });
  const router = useRouter();
  let initTab: Tab;
  if (router?.query?.active === 'pts') {
    initTab = 'pts';
  } else {
    initTab = 'quests';
  }
  const [tab, setTab] = useState<Tab>(initTab);
  const [updater, setUpdater] = useState(Date.now());
  const [openCodes, setOpenCodes] = useState(false);
  const { list, totalRewards, reward } = useInviteList();
  const { info: userInfo = {} } = useUserInfo({ updater });

  const { handleReport } = useReport();

  return (
    <>
      <StyledContainer>
        <StyledPanelWrapper>
          <UserInfo
            info={userInfo}
            onSuccess={() => {
              setUpdater(Date.now());
            }}
          />
          <InviteCodePanel
            onInviteCodeClick={() => {
              handleReport('invite');
              setOpenCodes(true);
            }}
            total={list.length}
            totalRewards={totalRewards}
            list={list}
          />
          <DailyTask
            onSuccess={() => {
              setUpdater(Date.now());
            }}
            key={updater}
          />
        </StyledPanelWrapper>
        <StyledTabsBox>
          <Tabs
            current={tab}
            onChange={(_tab) => {
              setTab(_tab);
            }}
          />
        </StyledTabsBox>
        {tab === 'quests' && <Quests key={updater} />}
        {tab === 'favorites' && <Favorites key={updater} />}
        {tab === 'pts' && <Pts key={updater} />}
      </StyledContainer>
      <StyledBgImg />
      <InviteFirendsModal
        open={openCodes}
        list={list}
        totalRewards={totalRewards}
        reward={reward}
        onClose={() => {
          setOpenCodes(false);
        }}
      />
    </>
  );
};

export default memo(QuestProfileView);
