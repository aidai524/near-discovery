import Big from 'big.js';
import { isArray } from 'lodash';
import { useEffect, useMemo } from 'react';

import LendingMarketAmount from '@/modules/lending/components/Markets/Amount';
import LendingMarketAsset from '@/modules/lending/components/Markets/Asset';
import LendingMarketAssetList from '@/modules/lending/components/Markets/Asset/List';
import LendingMarketHeader from '@/modules/lending/components/Markets/Header';
import LendingMarketRow from '@/modules/lending/components/Markets/Row';
import { StyledContainer } from '@/modules/lending/components/Markets/styles';
import LendingSummary from '@/modules/lending/components/Markets/Summary';
import { useMultiState } from '@/modules/lending/hooks';
import type { DexProps } from '@/modules/lending/models';
import { DexType, MarketsType } from '@/modules/lending/models';
import { StyledFlex, StyledFont } from '@/styled/styles';
import { formatValueDecimal } from '@/utils/formate';

const LendingMarkets = (props: Props) => {
  const {
    from,
    markets,
    userTotalCollateralUsd,
    totalCollateralUsd,
    userTotalBorrowUsd,
    userTotalSupplyUsd,
    dexConfig,
    marketsType = MarketsType.Market
  } = props;

  const { type, pools } = dexConfig;

  const [state, updateState] = useMultiState<any>({});

  const COLUMNS = useMemo(() => {
    if (from === 'layer') {
      return [
        {
          key: 'asset',
          label: 'Asset',
          width: '30%'
        },
        {
          key: 'totalSupply',
          label: 'Total supplied',
          width: '17%',
          type: 'amount'
        },
        {
          key: 'supplyApy',
          label: 'Supply APY',
          width: '17%',
          type: 'apy'
        },
        {
          key: 'totalBorrows',
          label: 'Total borrowed',
          width: '17%',
          type: 'amount'
        },
        {
          key: 'borrowApy',
          label: 'Borrow APY',
          width: '17%',
          type: 'apy'
        },
        {
          key: 'handler',
          width: '2%'
        }
      ];
    }

    if (dexConfig?.name === 'InitCapital') {
      return [
        {
          key: 'asset',
          label: 'Asset',
          width: '30%'
        },
        {
          key: 'depositAPY',
          label: 'Deposit APY',
          width: '15%',
          render(data: any) {
            return <StyledFont color="#FFF">{data?.supplyApy}</StyledFont>;
          }
        },
        {
          key: 'borrowAPY',
          label: 'Borrow APY',
          width: '13%',
          render(data: any) {
            return <StyledFont color="#FFF">-{data?.borrowApy}</StyledFont>;
          }
        },
        {
          key: 'utilization',
          label: 'Utilization',
          width: '40%',
          render(data: any) {
            return (
              <StyledFlex gap="120px">
                <StyledFont color="#FFF">{Big(data?.utilization).times(100).toFixed(2)}%</StyledFont>
                <StyledFlex flexDirection="column" gap="8px" alignItems="flex-start">
                  <StyledFlex gap="12px">
                    <StyledFont color="#FFF">Total Deposit:</StyledFont>
                    <StyledFont color="#FFF">{formatValueDecimal(data?.totalSupply, '$', 2, true)}</StyledFont>
                  </StyledFlex>
                  <StyledFlex gap="12px">
                    <StyledFont color="#FFF">Total Borrow:</StyledFont>
                    <StyledFont color="#FFF">{formatValueDecimal(data?.totalBorrows, '$', 2, true)}</StyledFont>
                  </StyledFlex>
                </StyledFlex>
              </StyledFlex>
            );
          }
        },
        {
          key: 'handler',
          width: '2%'
        }
      ];
    }
    if (pools && pools.length > 0) {
      return [
        {
          key: 'asset',
          label: 'Asset',
          width: '20%'
        },
        {
          key: 'poolSize',
          label: 'PoolSize',
          width: '20%',
          type: 'amount'
        },
        {
          key: 'supplyApy',
          label: 'Supply APY',
          width: '20%',
          type: 'apy'
        },
        {
          key: 'borrowApy',
          label: 'Borrow APR',
          width: '20%',
          type: 'apy'
        },

        {
          key: 'userSupply',
          label: 'Supplied',
          width: '18%',
          type: 'amount'
        },

        {
          key: 'handler',
          width: '2%'
        }
      ];
    }
    if (marketsType === MarketsType.Borrow) {
      return [
        {
          key: 'collateral',
          label: 'Collateral',
          width: '20%',
          render: (record: any) => {
            return <LendingMarketAsset icon={record.underlyingToken.icon} symbol={record.underlyingToken.symbol} />;
          }
        },
        {
          key: 'borrow',
          label: 'Borrow',
          width: '20%',
          render: (record: any) => {
            if (isArray(record.borrowToken)) {
              return (
                <LendingMarketAssetList
                  list={record.borrowToken.map((b: any) => ({
                    icon: b.underlyingToken.icon,
                    symbol: b.underlyingToken.symbol
                  }))}
                />
              );
            }
            return <LendingMarketAsset icon={record.borrowToken.icon} symbol={record.borrowToken.symbol} />;
          }
        },
        {
          key: 'totalSupplyUsd',
          label: 'Total Supplied',
          width: '20%',
          render: (record: any) => {
            if (isArray(record.borrowToken)) {
              return (
                <LendingMarketAmount
                  amount={record.totalSupplied}
                  price={record.underlyingPrice}
                  suffixAmountUnit={` ${record.underlyingToken.symbol}`}
                />
              );
            }
            return (
              <LendingMarketAmount
                amount={record.totalSupplied}
                price={record.borrowTokenPrice}
                suffixAmountUnit={` ${record.borrowToken.symbol}`}
              />
            );
          }
        },
        {
          key: 'borrowAPR',
          label: 'Borrow APR',
          width: '20%',
          type: 'apy'
        },
        {
          key: 'Utilization',
          label: 'Utilization',
          width: '17%',
          type: 'apy'
        },
        {
          key: 'handler',
          width: '3%'
        }
      ];
    }
    if (marketsType === MarketsType.Earn) {
      const _columns = [
        {
          key: 'collateral',
          label: 'Collateral',
          width: '25%',
          render: (record: any) => {
            return <LendingMarketAsset icon={record.underlyingToken.icon} symbol={record.underlyingToken.symbol} />;
          }
        },
        {
          key: 'deposit',
          label: 'Deposit',
          width: '25%',
          render: (record: any) => {
            if (isArray(record.borrowToken)) {
              return <LendingMarketAsset icon={record.underlyingToken.icon} symbol={record.underlyingToken.symbol} />;
            }
            return <LendingMarketAsset icon={record.borrowToken.icon} symbol={record.borrowToken.symbol} />;
          }
        },
        {
          key: 'yourDeposits',
          label: 'Your Deposits',
          width: '25%',
          render: (record: any) => {
            if (isArray(record.borrowToken)) {
              return (
                <LendingMarketAmount
                  amount={record.yourLends}
                  price={record.underlyingPrice}
                  suffixAmountUnit={` ${record.underlyingToken.symbol}`}
                />
              );
            }
            return (
              <LendingMarketAmount
                amount={record.yourLends}
                price={record.borrowTokenPrice}
                suffixAmountUnit={` ${record.borrowToken.symbol}`}
              />
            );
          }
        },
        {
          key: 'lendAPR',
          label: 'Lend APR',
          width: '22%',
          type: 'apy'
        },
        {
          key: 'handler',
          width: '3%'
        }
      ];
      if (type === DexType.Dolomite) {
        _columns[0].width = '20%';
        _columns[1].width = '20%';
        _columns[2].width = '20%';
        _columns.splice(3, 1, {
          key: 'lendAPY',
          label: 'Lend APY',
          width: '15%',
          type: 'apy'
        });
        _columns.splice(4, 0, {
          key: 'borrowAPY',
          label: 'Borrow APY',
          width: '15%',
          type: 'apy'
        });
        _columns.splice(5, 0, {
          key: 'liquidationFee',
          label: 'Liquidation Fee',
          width: '15%',
          render: (record: any) => {
            return (
              <span className="text-white text-[14px] font-[400]">
                {Big(record.liquidationFee).times(100).toFixed(2)}%
              </span>
            );
          }
        });
      }
      return _columns;
    }
    return [
      {
        key: 'asset',
        label: 'Asset',
        width: '30%'
      },
      {
        key: 'totalSupply',
        label: 'Total supplied',
        width: '14%',
        type: 'amount'
      },
      {
        key: 'supplyApy',
        label: 'Supply APY',
        width: '12%',
        type: 'apy'
      },
      {
        key: 'totalBorrows',
        label: 'Total borrowed',
        width: '15%',
        type: 'amount'
      },
      {
        key: 'borrowApy',
        label: 'Borrow APY',
        width: '12%',
        type: 'apy'
      },
      {
        key: 'liquidity',
        label: 'Liquidity',
        width: '15%',
        type: 'amount'
      },
      {
        key: 'handler',
        width: '2%'
      }
    ];
  }, [from, pools, type]);

  const data = Object.values(markets || {});

  useEffect(() => {
    if (!totalCollateralUsd && !userTotalBorrowUsd) {
      return;
    }
    updateState({
      borrowLimit: Big(totalCollateralUsd || 0)
        ?.minus(userTotalBorrowUsd || 0)
        .toString()
    });
  }, [totalCollateralUsd, userTotalBorrowUsd]);

  return (
    <StyledContainer>
      {[DexType.BorrowAndEarn, DexType.Dolomite].includes(type) && (
        <LendingSummary
          userTotalCollateralUsd={userTotalCollateralUsd}
          userTotalBorrowUsd={userTotalBorrowUsd}
          userTotalSupplyUsd={userTotalSupplyUsd}
        />
      )}
      <LendingMarketHeader columns={COLUMNS} />
      {data.map((record: any) => (
        <LendingMarketRow
          key={record.address}
          {...props}
          columns={COLUMNS}
          data={record}
          borrowLimit={state.borrowLimit}
          marketsType={marketsType}
        />
      ))}
    </StyledContainer>
  );
};

export default LendingMarkets;

export interface Props extends DexProps {
  marketsType?: MarketsType;
  markets: any;
  userTotalCollateralUsd?: string;
  totalCollateralUsd: string;
  userTotalBorrowUsd: string;
  userTotalSupplyUsd: string;
}
