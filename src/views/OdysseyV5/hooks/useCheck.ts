import { useCallback, useState } from 'react';
import useToast from '@/hooks/useToast';
import { get } from '@/utils/http';

export default function useCheck(quest: any, cb: any, detailLoading: boolean, setDetailLoading: any) {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleRefresh = useCallback(
    async (data?: string) => {
      if (loading || detailLoading) return;
      setLoading(true);
      setDetailLoading(true);
      const toastId = toast.loading({
        title: data ? 'Action confirming' : 'Action refreshing',
      });
      try {
        const params = data ? { id: quest.id, data } : { id: quest.id };
        const result = await get(`/api/compass/check_quest`, params);
        if (result.code !== 0) throw new Error(result.msg);
        setLoading(false);
        setDetailLoading(false);
        toast.dismiss(toastId);
        if (!data) {
          toast.success({
            title: `Action refreshed successfully`,
          });
        }

        if (result.data && result.data.total_completed_times) {
          cb(result.data.total_completed_times);
          if (data) {
            toast.success({
              title: 'Action confirmed successfully',
            });
          }
          return;
        }

        if (data) {
          toast.fail({
            title: 'Action confirmed failed',
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setDetailLoading(false);
        toast.dismiss(toastId);
        toast.fail({
          title: data ? 'Action confirmed failed' : `Action refreshed failed`,
        });
      }
    },
    [quest, detailLoading],
  );

  return { checking: loading, handleRefresh };
}
