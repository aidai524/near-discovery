import { useEffect, useMemo } from 'react';

import ChainWarningBox from '@/modules/components/ChainWarningBox';
import LendingAaveV3 from '@/modules/lending/components/AaveV3';
import LendingCardTabs from '@/modules/lending/components/CardTabs';
import LendingChains from '@/modules/lending/components/Chains';
import LendingCompoundV3 from '@/modules/lending/components/CompoundV3';
import LendingContent from '@/modules/lending/components/Content';
import LendingPools from '@/modules/lending/components/Pools';
import { StyledContainer, StyledHeader, StyledHeaderRight } from '@/modules/lending/Dex/styles';
import { useMultiState } from '@/modules/lending/hooks';
import type { DexProps, Pool, Tab } from '@/modules/lending/models';
import { TabKey } from '@/modules/lending/models';
import { DexType } from '@/modules/lending/models';

interface ILendingProps {
  chainIdNotSupport: boolean;
  toast: any;
  curPool: any;
}

interface RenderLendingComponentProps extends ILendingProps {
  type: DexType;
  tab?: string;
}

const LendingDex = (props: DexProps) => {
  const { CHAIN_LIST, curChain, chainId, account, dexConfig, onSwitchChain, switchingChain, isChainSupported, from } =
    props;

  console.log('%cLendingDex props: %o', 'background: #DC0083; color: #fff;', props);

  const { type, pools = [] } = dexConfig;

  const tabsArray = useMemo<Tab[]>(() => {
    if (type === DexType.BorrowAndEarn) {
      return [
        { key: TabKey.Market, label: 'Borrow' },
        { key: TabKey.Yours, label: 'Earn' }
      ];
    }
    return [
      { key: TabKey.Market, label: 'Market' },
      { key: TabKey.Yours, label: 'Yours' }
    ];
  }, [type]);

  const [state, updateState] = useMultiState<any>({
    tab: TabKey.Market,
    refreshKey: 1,
    curPool: pools[0]?.key
  });

  const handleTabChange = (tab: Tab) => {
    updateState({ tab: tab.key });
  };

  const handlePoolChange = (pool: Pool) => {
    updateState({ curPool: pool.key });
  };

  // FIXME There might be a better refresh way
  useEffect(() => {
    const timer = setTimeout(() => {
      updateState({ refreshKey: state.refreshKey + 1 });
    }, 600);

    return () => {
      clearTimeout(timer);
    };
  }, [chainId, account, state.curPool]);

  const DexComponentMap: Partial<Record<DexType, React.ComponentType<any>>> = {
    [DexType.CompoundV3]: LendingCompoundV3,
    [DexType.AaveV3]: LendingAaveV3
  };

  const RenderLendingComponent: React.FC<RenderLendingComponentProps> = ({ type, ...props }) => {
    const Component: any = DexComponentMap[type] || LendingContent;

    return (
      <Component
        key={state.refreshKey}
        CHAIN_LIST={CHAIN_LIST}
        curChain={curChain}
        wethAddress={dexConfig.wethAddress}
        {...props}
      />
    );
  };

  return (
    <StyledContainer style={dexConfig.theme}>
      {type !== DexType.AaveV3 && (
        <StyledHeader>
          <LendingCardTabs tabs={tabsArray} active={state.tab} onChange={handleTabChange} />
          <StyledHeaderRight>
            {pools && pools.length > 0 && (
              <LendingPools pools={pools} curPool={state.curPool} onSwitchPool={handlePoolChange} />
            )}
            <LendingChains chains={CHAIN_LIST} curChain={curChain} onSwitchChain={onSwitchChain} from={from} />
          </StyledHeaderRight>
        </StyledHeader>
      )}
      <RenderLendingComponent
        type={type}
        chainIdNotSupport={!isChainSupported}
        tab={state.tab}
        curPool={state.curPool}
        {...props}
      />
      {!isChainSupported && (
        <ChainWarningBox
          chain={curChain}
          onSwitchChain={onSwitchChain}
          switchingChain={switchingChain}
          theme={dexConfig.theme?.button}
        />
      )}
    </StyledContainer>
  );
};

export default LendingDex;
