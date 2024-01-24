import { useSimpleLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';
// import QuestLeaderboardView from '@/views/QuestLeaderboard';
import BnsLeaderboardView from '@/views/bns/leaderboard';

const BnsLeaderboardPage: NextPageWithLayout = () => {
  return <BnsLeaderboardView />;
};

BnsLeaderboardPage.getLayout = useSimpleLayout;

export default BnsLeaderboardPage;
