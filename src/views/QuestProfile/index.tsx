import { useDebounceFn } from 'ahooks';
import { useRouter } from 'next/router';
import { memo, useEffect, useRef,useState } from 'react';

import useAccount from '@/hooks/useAccount';
import useAuthCheck from '@/hooks/useAuthCheck';
import useInviteList from '@/hooks/useInviteList';
import useUserInfo from '@/hooks/useUserInfo';
import useUserReward from '@/hooks/useUserReward';
import useReport from '@/views/Landing/hooks/useReport';

import DailyTask from './components/DailyTask';
import Favorites from './components/Favorites';
import InviteCodePanel from './components/InviteCode';
import InviteFirendsModal from './components/InviteFirendsModal';
import Pts from './components/Pts';
import Quests from './components/Quests';
import Tabs from './components/Tabs';
import UserInfo from './components/UserInfo';
import { StyledBgImg, StyledContainer, StyledPanelWrapper, StyledTabsBox } from './styles';
import type { Tab } from './types';

const QuestProfileView = () => {
  const router = useRouter();
  let initTab: Tab;
  if (router?.query?.active === 'pts') {
    initTab = 'pts';
  } else {
    initTab = 'quests';
  }
  const { account } = useAccount();
  const [tab, setTab] = useState<Tab>(initTab);
  const [openCodes, setOpenCodes] = useState(false);
  const { inviteInfo, queryInviteList } = useInviteList();
  const { check } = useAuthCheck({ isNeedAk: true, isQuiet: true });
  const { userInfo } = useUserInfo();
  const { info: rewardInfo, queryUserReward } = useUserReward();
  const isMounted = useRef(false);

  const { handleReport } = useReport();

  const { run } = useDebounceFn(
    () => {
      if (!account) {
        router.push('/');
      } else {
        check(() => {
          queryInviteList();
        });
      }
    },
    { wait: 800 },
  );

  useEffect(() => {
    if (isMounted.current) run();
  }, [account]);

  useEffect(() => {
    isMounted.current = true;
    if (account) {
      check(() => {
        queryInviteList();
      });
    }
  }, []);

  return (
    <>
      <StyledContainer>
        <StyledPanelWrapper>
          <UserInfo info={userInfo} rewardInfo={rewardInfo} />
          <InviteCodePanel
            onInviteCodeClick={() => {
              handleReport('invite');
              setOpenCodes(true);
            }}
            total={inviteInfo?.data?.length}
            totalRewards={inviteInfo?.reward}
          />
          <DailyTask
            onSuccess={() => {
              queryUserReward();
            }}
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
        {tab === 'quests' && <Quests />}
        {tab === 'favorites' && <Favorites />}
        {tab === 'pts' && <Pts />}
      </StyledContainer>
      <StyledBgImg />
      <InviteFirendsModal
        open={openCodes}
        list={inviteInfo?.data || []}
        totalRewards={inviteInfo?.reward}
        reward={inviteInfo?.invite_reward}
        onClose={() => {
          setOpenCodes(false);
        }}
      />
    </>
  );
};

export default memo(QuestProfileView);
