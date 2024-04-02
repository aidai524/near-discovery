import * as http from '@/utils/http';
import useConnectWallet from './useConnectWallet';
import useAccount from './useAccount';

let timer: ReturnType<typeof setTimeout> | null = null;

export default function useAuthCheck({ isNeedAk, isQuiet }: { isNeedAk?: boolean; isQuiet?: boolean }) {
  const { account } = useAccount();
  const { onConnect } = useConnectWallet();
  const check = async (cb?: any, quiet?: boolean) => {
    if (!account) {
      if (quiet !== undefined ? quiet : isQuiet) return;
      const result = await onConnect();
      if (result.length) cb?.();
      return;
    }
    if (!isNeedAk) {
      cb?.();
      return;
    }
    const checkAk = async () => {
      const result = window.localStorage.getItem(http.AUTH_TOKENS);
      const parsedResult = result ? JSON.parse(result) : {};
      if (parsedResult.access_token) {
        cb?.();
        return;
      }
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        checkAk();
      }, 500);
    };
    checkAk();
  };

  return {
    check,
  };
}
