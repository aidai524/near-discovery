import { useCallback, useEffect, useState } from 'react';
import { get } from '@/utils/http';
import { QUEST_PATH } from '@/config/quest';

export default function useInviteList() {
  const [list, setList] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [totalRewards, setTotalRewards] = useState(0);
  const [reward, setReward] = useState(0);

  const queryList = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const result = await get(`${QUEST_PATH}/api/invite/list`);
      const data = result.data || [];
      setTotalRewards(data.reward || 0);
      setReward(data.invite_reward || 0);
      setList(data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    queryList();
  }, []);

  return { loading, list, totalRewards, reward };
}
