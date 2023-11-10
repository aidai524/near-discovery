import { useState } from 'react';

import useAccount from '@/hooks/useAccount';
import type { Chain } from '@/types';

export default () => {
  const [switching, setSwitching] = useState(false);
  const { provider } = useAccount();
  const switchNetwork = async (chain: Chain) => {
    try {
      setSwitching(true);
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chain.chainId.toString(16)}` }],
      });
      setSwitching(false);
    } catch (switchError: any) {
      if (switchError?.code !== 4902) {
        setSwitching(false);
        return;
      }
      try {
        await provider.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              ...chain,
              blockExplorerUrls: [chain.blockExplorers],
              chainId: `0x${chain.chainId.toString(16)}`,
            },
          ],
        });
        setSwitching(false);
      } catch (error) {
        console.error('Failed to setup the network in Metamask:', error);
        setSwitching(false);
      }
    }
  };

  return { switching, switchNetwork };
};
