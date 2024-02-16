import { memo, useMemo, useState } from 'react';

import useCampaignList from '@/views/Quest/hooks/useCampaignList';
import useCategoryList from '@/views/Quest/hooks/useCategoryList';
import useQuestList from '@/views/Quest/hooks/useQuestList';

import Leaderboard from '@/views/QuestLeaderboard/components/Leaderboard';
import useLeaderboard from '@/views/QuestLeaderboard/hooks/useLeaderboard';
import useUserInfo from '../../hooks/useUserInfo';
import Yours from '../Quest/components/Yours';
import Quests from './components/Quests';
import Swiper from './components/Swiper';
import Tabs from './components/Tabs';
import { StyledContainer } from './styles';
import type { Tab } from './types';

const BnsLeaderboardView = (props: any) => {
  const [tab, setTab] = useState<Tab>('quests');
  const [id, setId] = useState<string>();
  const [updater, setUpdater] = useState(1);
  const { loading, list, page, info, maxPage, handlePageChange, handleRefresh } = useLeaderboard();
  const { loading: userLoading, info: userInfo = {} } = useUserInfo({ id, from: tab, updater });
  const { loading: campaignLoading, campaigns } = useCampaignList();
  const { loading: questingLoading, quests } = useQuestList(id);
  const { loading: categoryLoading, categories } = useCategoryList();
  const banners = useMemo(() => {
    if (!campaigns.length) return [];
    return campaigns
      .filter((campaign: any) => campaign.banner)
      .map((campaign) => ({ banner: campaign.banner, link: campaign.link }));
  }, [campaigns]);

  return (
    <StyledContainer>
      <Yours info={userInfo} />
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
            handlePageChange,
            userLoading,
            userInfo,
            handleRefresh: () => {
              handleRefresh();
              setUpdater(Date.now());
            },
          }}
        />
      )}
      {tab === 'quests' && (
        <Quests
          {...{ campaignLoading, campaigns, questingLoading, quests, categoryLoading, categories, userInfo }}
          onLoad={(id: string) => {
            setId(id);
          }}
        />
      )}
    </StyledContainer>
  );
};

export default memo(BnsLeaderboardView);
