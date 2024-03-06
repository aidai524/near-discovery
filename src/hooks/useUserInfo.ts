import { useCallback, useEffect, useState } from 'react';
import useAuthCheck from '@/hooks/useAuthCheck';
import { QUEST_PATH } from '@/config/quest';
import { get } from '@/utils/http';

export default function useUserInfo({ id, updater, from }: { id?: string; updater?: number; from?: string }) {
  const [info, setInfo] = useState<any>();
  const [loading, setLoading] = useState(false);
  const { check } = useAuthCheck({ isNeedAk: true, isQuiet: true });
  const queryInfo = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const result = await get(`${QUEST_PATH}/api/user${id ? '?campaign_id=' + id : ''}`);
      const data = result.data || {};
      setInfo(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }, [loading, id]);

  useEffect(() => {
    check(() => {
      if (from === 'leaderboard') {
        if (id) queryInfo();
      } else {
        queryInfo();
      }
    });
  }, [id, from, updater]);

  return { loading, info, queryInfo };
}
