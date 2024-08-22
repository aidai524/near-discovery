import { useCallback, useEffect, useState } from 'react';

import { QUEST_PATH } from '@/config/quest';
import useAuthCheck from '@/hooks/useAuthCheck';
import useToast from '@/hooks/useToast';
import { useUserStore } from '@/stores/user';
import { get, post } from '@/utils/http';

export default function useDailyTask({ onSuccess }: { onSuccess: VoidFunction }) {
  const [tasks, setTasks] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [claiming, setClaiming] = useState(false);
  const [currentDay, setCurrentDay] = useState<any>({});
  const userInfo = useUserStore((store: any) => store.user);
  const [consecutiveDays, setConsecutiveDays] = useState(0);
  const toast = useToast();
  const { check } = useAuthCheck({ isNeedAk: true, isQuiet: true });

  const queryTasks = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const result = await get(`${QUEST_PATH}/api/quest/daily_check_in`);
      const data = result.data.data || [];
      setTasks(data);
      data.some((task: any, i: number) => {
        if (task.status === 'will_claim') {
          setCurrentDay(data[i - 1]);
          return true;
        }
        if (i === data.length - 1 && task.status === 'claim') {
          setCurrentDay(data[i]);
          return true;
        }
        return false;
      });
      setConsecutiveDays(result.data.consecutive_days);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }, [loading]);

  const claim = useCallback(async () => {
    if (claiming) return;
    setClaiming(true);
    try {
      const result = await post(`${QUEST_PATH}/api/quest/daily_check_in`, {});
      if (result.code !== 0) throw new Error(result.msg);
      setClaiming(false);
      toast.success({ title: 'Dapped successfully' });
      onSuccess();
    } catch (err) {
      setClaiming(false);
      toast.fail({ title: 'Dapped failed' });
    }
  }, [claiming, tasks]);

  useEffect(() => {
    if (userInfo?.address) check(queryTasks);
  }, [userInfo]);

  return { loading, tasks, consecutiveDays, claiming, currentDay, claim, queryTasks };
}
