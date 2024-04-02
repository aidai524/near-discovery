import { useCallback } from 'react';
import { QUEST_PATH } from '@/config/quest';
import { useUserStore } from '@/stores/user';
import useUserReward from '@/hooks/useUserReward';
import { checkAddressIsInvited, getAccessToken, inviteCodeActivate } from '@/apis';
import { get, AUTH_TOKENS } from '@/utils/http';

export default function useInititalDataWithAuth() {
  const setUserInfo = useUserStore((store: any) => store.set);
  const { queryUserReward } = useUserReward();

  const queryUserInfo = useCallback(async () => {
    try {
      const result = await get(`${QUEST_PATH}/api/user`);
      const data = result?.data || {};
      setUserInfo({ user: data });
    } catch (err) {}
  }, []);

  const queryInviteList = useCallback(async () => {
    try {
      const result = await get(`${QUEST_PATH}/api/invite/list`);
      const data = result.data || {};
      setUserInfo({ invite: data });
    } catch (err) {}
  }, []);

  const getInitialDataWithAuth = async (address?: string) => {
    window.localStorage.setItem(AUTH_TOKENS, '{}');
    if (address) {
      const checked = await checkAddressIsInvited(address);
      if (!checked) {
        await inviteCodeActivate(address, '');
      }
      await getAccessToken(address);
      queryUserInfo();
      queryUserReward();
    } else {
      setUserInfo({ user: {} });
    }
  };

  return { getInitialDataWithAuth, queryUserInfo, queryInviteList };
}
