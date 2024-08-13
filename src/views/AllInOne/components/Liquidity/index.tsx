import { memo, useEffect, useMemo, useState } from 'react';

import { ComponentWrapperPage } from '@/components/near-org/ComponentWrapperPage';
import multicallConfig from '@/config/contract/multicall';
import liquidityConfig from '@/config/liquidity/networks';
import useAccount from '@/hooks/useAccount';
import useAddAction from '@/hooks/useAddAction';
import useConnectWallet from '@/hooks/useConnectWallet';
import { usePriceStore } from '@/stores/price';
import { multicall } from '@/utils/multicall';
import { useSetChain } from '@web3-onboard/react';
import liquidityDapp from '@/config/dapp/liquidity'
import stakingDapp from '@/config/dapp/staking'

import useTokensAndChains from '@/components/Bridge/hooks/useTokensAndChains';
import {
  StyledAccountContainer,
  StyledAccountTip,
  StyledConnectButton
} from '@/views/AllInOne/components/Lending/styles';

const Liquidity = (props: Props) => {
  const { chain, menu } = props;
  const { onConnect } = useConnectWallet();
  const { account, chainId } = useAccount();
  const [{ connectedChain, settingChain }, setChain] = useSetChain();
  const { chains } = useTokensAndChains();
  const { addAction } = useAddAction('all-in-one');
  const prices = usePriceStore((store) => store.price);
  const [tabConfig, setTabConfig] = useState<any>({ dapps: {} });
  const currentChain = useMemo(
    () => (connectedChain?.id ? chains[Number(connectedChain?.id)] : null),
    [connectedChain?.id],
  );
  const isRightNetwork = currentChain?.chainId === chain.chainId;
  useEffect(() => {
    const _tabConfig = liquidityConfig[chain?.chainId];
    setTabConfig(_tabConfig);
  }, [chain]);
  if (account && isRightNetwork) {
    return (
      <div>
        <ComponentWrapperPage
          src={menu.path}
          componentProps={{
            addAction,
            multicall,
            chainId: chain.chainId,
            curChain: {
              ...currentChain,
              logo: currentChain?.icon,
              name: currentChain?.chainName,
              chain_id: currentChain?.chainId
            },

            multicallAddress: multicallConfig[currentChain?.chainId as any],
            themeMapping: {
              ...stakingDapp,
              ...liquidityDapp,
            },
            dapps: tabConfig?.dapps,
            prices,
            account,
            onReset: () => {
            },
          }}
        />
      </div>
    );
  } else {
    let _textTip = '';
    if (!account && tabConfig?.connectProps?.noAccountTips) {
      _textTip = tabConfig?.connectProps?.noAccountTips;
    }
    if (account && !isRightNetwork) {
      _textTip = tabConfig?.connectProps?.wrongNetworkTips;
    }
    const _buttonText = !account ? 'Connect Wallet' : `Switch to ${chain.title} Chain`;
    const onButtonClick = () => {
      if (!account) {
        onConnect();
        return;
      }
      setChain({ chainId: `0x${chain.chainId.toString(16)}` });
      const _tabConfig = liquidityConfig[chain?.chainId];
      setTabConfig(_tabConfig);
    };
    return (
      <StyledAccountContainer>
        <StyledAccountTip>{_textTip}</StyledAccountTip>
        <StyledConnectButton onClick={onButtonClick} bg={chain.selectBgColor} color={chain?.iconColor}>
          {_buttonText}
        </StyledConnectButton>
      </StyledAccountContainer>
    );
  }

};

export default memo(Liquidity);

interface Props {
  chain: any;
  menu: any;
}
