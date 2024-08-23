import { useEffect, useState } from 'react';

import useAccount from '@/hooks/useAccount';
import useAuthCheck from '@/hooks/useAuthCheck';
import { get } from '@/utils/http';

import type { StatsType } from '../types';
type CompassType = any
export default function useStats() {
  const [stats, setStats] = useState<null | StatsType>(null);
  const [loading, setLoading] = useState(false);
  const queryStats = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const result = await get(`/api/stats`);
      const data = result.data;
      setStats(data);
    } catch (err) {
      console.log(err, 'err');
    } finally {
      setLoading(false);
    }
  };
  // const { run } = useDebounceFn(
  //   () => {
  //     queryStats()
  //   },
  //   { wait: stats ? 800 : 3000 },
  // );
  useEffect(() => {
    queryStats()
  }, []);

  return { loading, stats, queryStats };
}
