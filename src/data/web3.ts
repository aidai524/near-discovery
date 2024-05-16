import type { EIP1193Provider } from '@web3-onboard/core';
import injectedModule from '@web3-onboard/injected-wallets';
import ledgerModule from '@web3-onboard/ledger';
import { init, useConnectWallet } from '@web3-onboard/react';
import walletConnectModule from '@web3-onboard/walletconnect';
import { useEffect, useState } from 'react';
import { singletonHook } from 'react-singleton-hook';

const web3onboardKey = 'web3-onboard:connectedWallets';

const wcV2InitOptions: any = {
  version: 2,
  projectId: '72b7b3359ab477e339a070f615806aa6',
  requiredChains: [59144],
};

const walletConnect = walletConnectModule(wcV2InitOptions);
const ledger = ledgerModule(wcV2InitOptions);
const injected = injectedModule();

// initialize Onboard
export const onboard = init({
  wallets: [injected, walletConnect, ledger],
  chains: [
    {
      id: 84532,
      token: 'ETH',
      label: 'Base Sepolia Testnet',
      rpcUrl: 'https://sepolia.base.org',
      icon: 'https://ipfs.near.social/ipfs/bafkreie5bhns75smpybjndl3utvzpaftrlrwqrblwg44ntzjsnit6lajzm',
      color: 'transparent',
    },
  ],
  theme: 'dark',
  accountCenter: {
    desktop: {
      position: 'topRight',
      enabled: false,
      minimal: false,
    },
    mobile: {
      enabled: false,
      position: 'bottomRight',
    },
  },

  containerElements: {},
});

type EthersProviderContext = {
  provider?: EIP1193Provider;
  useConnectWallet: typeof useConnectWallet;
};

const defaultEthersProviderContext: EthersProviderContext = { useConnectWallet };

export const useEthersProviderContext = singletonHook(defaultEthersProviderContext, () => {
  const [{ wallet }] = useConnectWallet();
  const [ethersProvider, setEthersProvider] = useState(defaultEthersProviderContext);

  useEffect(() => {
    (async () => {
      if (typeof localStorage === 'undefined') return;

      const walletsSub = onboard.state.select('wallets');

      // TODO: do we need to unsubscribe?
      // const { unsubscribe } = walletsSub.subscribe((wallets) => {
      walletsSub.subscribe((wallets) => {
        const connectedWallets = wallets.map(({ label }) => label);
        localStorage.setItem(web3onboardKey, JSON.stringify(connectedWallets));
      });
      const previouslyConnectedWallets = JSON.parse(localStorage.getItem(web3onboardKey) || '[]');

      if (previouslyConnectedWallets) {
        // You can also auto connect "silently" and disable all onboard modals to avoid them flashing on page load
        await onboard.connectWallet({
          autoSelect: {
            label: previouslyConnectedWallets[0],
            disableModals: true,
          },
        });
      }
    })();
  }, []);

  useEffect(() => {
    if (!wallet) return;
    setEthersProvider({
      provider: wallet.provider,
      useConnectWallet,
    });
  }, [wallet]);

  return ethersProvider;
});
