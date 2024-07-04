import { get } from '@/utils/http';
import { useState } from 'react';

export default function useDappRank() {
  const [ranks, setRanks] = useState<any>([]);
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(false);

  const queryRank = async (id?: number) => {
    if (!id) return;
    setLoading(true);
    setRanks([]);
    setUser(null);

    try {
      const result = await get(`/api/dapp/trade/rank?id=${id}`);
      setRanks(result.data.data);
      setUser(result.data.user);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  return { loading, ranks, user, queryRank };
}
