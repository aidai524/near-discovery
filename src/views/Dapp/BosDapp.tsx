import { useCallback } from 'react';
import { ComponentWrapperPage } from '@/components/near-org/ComponentWrapperPage';
import chainsConfig from '@/config/chains';
import GAS_LIMIT_RECOMMENDATIONS from '@/config/contract/gas-limit';
import multicallConfig from '@/config/contract/multicall';
import wethConfig from '@/config/contract/weth';
import { bridge as dappBridgeTheme } from '@/config/theme/dapp';
import useAddAction from '@/hooks/useAddAction';
import { usePriceStore } from '@/stores/price';
import { multicall } from '@/utils/multicall';
import refresh from '@/utils/refresh';
import useSwitchChain from '@/hooks/useSwitchChain';
import { useLayoutStore } from '@/stores/layout';
import theme from '@/config/theme';
import styled from 'styled-components';
const ComponentWrapperPageContainer: any = styled.div`
  
`
export default function BosDapp({
  dapp,
  chainId,
  account,
  dappChains,
  currentChain,
  localConfig,
  network,
  isChainSupported,
  setCurrentChain,
  setIsChainSupported,
  chains,
}: any) {
  const prices = usePriceStore((store) => store.price);
  const { addAction } = useAddAction('dapp');
  const setLayoutStore = useLayoutStore((store) => store.set);
  const { switching, switchChain } = useSwitchChain();

  const bridgeCb = useCallback(
    () =>
      setLayoutStore({
        defaultTab: 'bridge',
        showAccountSider: true,
      }),
    [],
  );
  const themeType = "light"
  return (
    <ComponentWrapperPageContainer style={theme[themeType]}>
      <ComponentWrapperPage
        componentProps={{
          chainId,
          name: dapp.name,
          account,
          CHAIN_LIST: dappChains,
          curChain: currentChain,
          defaultDex: dapp.name,
          ...dapp,
          wethAddress: wethConfig[currentChain.chain_id],
          multicallAddress: multicallConfig[currentChain.chain_id],
          dexConfig: {
            ...localConfig.basic,
            ...localConfig.networks[currentChain.chain_id],
            theme: localConfig.theme,
          },
          prices,
          addAction,
          bridgeCb,
          onSwitchChain: (params: any) => {
            if (Number(params.chainId) === chainId) {
              setCurrentChain(chains.find((_chain: any) => _chain.chain_id === chainId));
              setIsChainSupported(true);
            } else {
              switchChain(params);
            }
          },
          switchingChain: switching,
          nativeCurrency: chainsConfig[currentChain.chain_id].nativeCurrency,
          theme: { bridge: dappBridgeTheme[currentChain.chain_id] },
          themeType,
          multicall,
          isChainSupported,
          GAS_LIMIT_RECOMMENDATIONS,
          refresh,
          windowOpen: (url: any, target: any) => {
            window.open(url, target)
          }
        }}
        src={network.dapp_src}
      />
    </ComponentWrapperPageContainer>
  );
}
