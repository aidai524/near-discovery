import { memo, useMemo, useState } from 'react';

import useUserReward from '@/hooks/useUserReward';
import { useUserStore } from '@/stores/user';
import useCampaignList from '@/views/Quest/hooks/useCampaignList';
import useCategoryList from '@/views/Quest/hooks/useCategoryList';
import Leaderboard from '@/views/QuestLeaderboard/components/Leaderboard';
import useLeaderboard from '@/views/QuestLeaderboard/hooks/useLeaderboard';

import Yours from '../Quest/components/Yours';
import Quests from './components/Quests';
import Swiper from './components/Swiper';
import Tabs from './components/Tabs';
import useQuestList from './hooks/useQuestList';
import { StyledContainer } from './styles';
import type { Tab } from './types';

const BnsLeaderboardView = (props: any) => {
  const [tab, setTab] = useState<Tab>('quests');
  const [id, setId] = useState<string>();
  const { loading, list, page, info, maxPage, handlePageChange, handleRefresh } = useLeaderboard();
  const userInfo = useUserStore((store: any) => store.user);
  const { info: userRewardInfo, queryUserReward } = useUserReward();
  const { loading: campaignLoading, campaigns } = useCampaignList();
  const { loading: questingLoading, questList } = useQuestList(id);
  const { loading: categoryLoading, categories } = useCategoryList();
  const banners = useMemo(() => {
    if (!campaigns.length) return [];
    return campaigns
      .filter((campaign: any) => campaign.banner)
      .map((campaign) => ({ banner: campaign.banner, link: campaign.link }));
  }, [campaigns]);

  return (
    <StyledContainer>
      <Yours info={userRewardInfo} />
      {!!banners.length && <Swiper banners={banners} bp="10015-001" />}
      <Tabs
        current={tab}
        onChange={(_tab) => {
          setTab(_tab);
        }}
        bp="10015-002"
      />

      {tab === 'leaderboard' && (
        <Leaderboard
          {...{
            loading,
            list,
            page,
            info,
            maxPage,
            userInfo,
            userRewardInfo,
            handlePageChange,
            handleRefresh: () => {
              handleRefresh();
              queryUserReward();
            },
          }}
        />
      )}
      {tab === 'quests' && (
        <Quests
          {...{ campaignLoading, campaigns, questingLoading, quests: questList, categoryLoading, categories, userInfo }}
          onLoad={(id: string) => {
            setId(id);
          }}
        />
      )}
    </StyledContainer>
  );
};

export default memo(BnsLeaderboardView);
