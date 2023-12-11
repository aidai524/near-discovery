import { useCallback, useState } from 'react';
import { post } from '@/utils/http';
import { QUEST_PATH } from '@/config/quest';

export default function useReport() {
  const [loading, setLoading] = useState(false);

  const handleReport = useCallback(async (source: string) => {
    if (loading) return;
    setLoading(true);

    try {
      await post(`${QUEST_PATH}/api/quest/source`, {
        source,
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }, []);

  return { loading, handleReport };
}
