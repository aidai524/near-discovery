import { useConnectWallet } from '@web3-onboard/react';
import { useSearchParams } from 'next/navigation';
import { memo, useEffect, useMemo, useState } from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import Spinner from '@/components/Spinner';
import useUserInfo from '@/hooks/useUserInfo';
import useUserReward from '@/hooks/useUserReward';
import useReport from '@/views/Landing/hooks/useReport';
import useCategoryList from '@/views/Quest/hooks/useCategoryList';

import Yours from '../Quest/components/Yours';
import useCampaignList from '../Quest/hooks/useCampaignList';
import Actions from './components/Actions';
import ClaimedSuccessModal from './components/ClaimedSuccessModal';
import Details from './components/Details';
import Recommends from './components/Recommends';
import useQuestInfo from './hooks/useQuestInfo';
import useRecommendList from './hooks/useRecommendList';
import { StyledContainer, StyledTopBox } from './styles';

const MAX = 100;

const QuestDetailView = () => {
  const searchParams = useSearchParams();
  const [{ wallet, connecting }] = useConnectWallet();
  const { handleReport } = useReport();
  const _id = searchParams.get('id');
  const id = _id?.includes('?') ? _id.split('?')[0] : _id;
  const { loading, info } = useQuestInfo(id || '');
  const { loading: categoryLoading, categories } = useCategoryList();
  const { loading: campaignLoading, campaigns } = useCampaignList();
  const { userInfo, queryUserInfo } = useUserInfo();
  const { info: userRewardInfo, queryUserReward } = useUserReward();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { recommends, handlePageChange, page, maxPage } = useRecommendList(info?.quest.quest_campaign_id, MAX, id);

  const quest = info?.quest ?? null;

  const navs = useMemo(() => {
    if (quest && campaigns.length > 0) {
      const campaign = campaigns.find((campaign) => campaign.id === quest.quest_campaign_id);
      const array = [];
      array[0] = { name: 'Quests Campaign', path: '/quest/leaderboard' };

      if (campaign) {
        if (campaign.category === 'Shush') {
          array[1] = {
            name: campaign.name,
            path: `/shush`,
          };
        } else {
          array[1] = {
            name: campaign.name,
            path: '/quest/leaderboard/' + campaign.name.replace(/\s/g, ''),
          };
        }
        array[2] = { name: 'Detail', path: '/quest/detail' };
      } else {
        array[1] = { name: 'Detail', path: '' };
      }
      return array;
    }
  }, [quest, campaigns]);

  const isBitGetUser = useMemo(() => userInfo.source === 'bitget' || userInfo.source === 'bitget_wallet', [userInfo]);
  const isCoin98User = useMemo(() => userInfo.source === 'coin98_wallet', [userInfo]);
  const isOkxUser = useMemo(() => userInfo.source === 'okx_wallet', [userInfo]);
  useEffect(() => {
    if (wallet?.label.toLowerCase().includes('bitget')) {
      handleReport('bitget_wallet');
    }
  }, []);

  return (
    <StyledContainer>
      <Breadcrumb navs={navs || []} />
      {loading || categoryLoading ? (
        <Spinner />
      ) : (
        info && (
          <>
            <StyledTopBox>
              <Details quest={info.quest} category={categories[info.quest?.quest_category_id]} />
              <Actions
                actions={info.actions}
                endTime={info.quest.end_time}
                startTime={info.quest.start_time}
                rewards={info.quest.reward}
                completed={info.quest.action_completed}
                id={id || ''}
                userInfo={userInfo}
                isLive={info.quest.status === 'ongoing'}
                isBitGetUser={isBitGetUser}
                isCoin98User={isCoin98User}
                isOkxUser={isOkxUser}
                claimed={info.quest.is_claimed}
                onSuccess={() => {
                  queryUserReward();
                }}
                onClaimed={() => {
                  setShowSuccessModal(true);
                  queryUserReward();
                }}
                onBindSuccess={() => {
                  queryUserInfo();
                }}
              />
            </StyledTopBox>
            <Recommends recommends={recommends} />
            <ClaimedSuccessModal
              open={showSuccessModal}
              reward={info.quest.reward}
              isBitGetUser={isBitGetUser}
              isCoin98User={isCoin98User}
              isOkxUser={isOkxUser}
              onClose={() => {
                setShowSuccessModal(false);
              }}
              recommends={recommends}
            />
          </>
        )
      )}
      <Yours info={userRewardInfo} />
    </StyledContainer>
  );
};

export default memo(QuestDetailView);
