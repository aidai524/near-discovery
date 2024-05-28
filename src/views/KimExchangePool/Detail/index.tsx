import { memo, useMemo } from 'react';
import Big from 'big.js';
import Loading from '@/components/Icons/Loading';
import Header from '@/views/Pool/Detail/components/Header';
import Tokens from '@/views/Pool/Detail/components/Tokens';
import Actions from '@/views/Pool/Detail/components/Actions';
import LiquidityPanel from '@/views/Pool/Detail/components/LiquidityPanel';
import FeesPanel from '@/views/Pool/Detail/components/FeesPanel';
import Range from '@/views/Pool/Detail/components/Range';
import { getTokenAmounts } from '@/views/Pool/Detail/helpers';
import { useRouter } from 'next/router';
import useDappConfig from '@/views/Pool/hooks/useDappConfig';
import usePoolDetail from '../hooks/usePoolDetail';
import useCollectInfo from '@/views/Pool/Detail/hooks/useCollectInfo';
import { StyledContainer, StyledLoadingWrapper, StyledPanels } from './styles';

const Detail = () => {
  const router = useRouter();
  const { theme = {}, tokenId, contracts } = useDappConfig();
  const { detail, loading } = usePoolDetail(tokenId);
  const { loading: collectLoading, info = {}, queryCollectInfo } = useCollectInfo(tokenId, contracts);

  const [amount0, amount1] = useMemo(() => {
    if (!detail) return [0, 0];
    return getTokenAmounts({
      liquidity: detail.liquidity,
      tickLower: detail.tickLower,
      tickUpper: detail.tickUpper,
      currentTick: detail.currentTick,
      token0: detail.token0,
      token1: detail.token1,
    });
  }, [detail]);

  const [feeAmount0, feeAmount1] = useMemo(() => {
    if (!detail) return [0, 0];
    return [
      new Big(info.amount0 || 0).div(10 ** detail.token0.decimals),
      new Big(info.amount1 || 0).div(10 ** detail.token1.decimals),
    ];
  }, [detail, info]);

  return (
    <StyledContainer style={{ ...theme }}>
      <Header tab="positions" />
      {loading || !detail ? (
        <StyledLoadingWrapper>
          <Loading size={36} />
        </StyledLoadingWrapper>
      ) : (
        <>
          <StyledPanels>
            <Tokens {...detail} />
            <Actions
              id={tokenId}
              liquidity={detail.liquidity}
              onRemove={() => {
                router.push(`/dapp/${router.query.dappRoute}/remove?id=${tokenId}`);
              }}
              onIncrease={() => {
                router.push(`/dapp/${router.query.dappRoute}/increase?id=${tokenId}`);
              }}
            />
          </StyledPanels>
          <StyledPanels>
            <LiquidityPanel
              amount0={amount0}
              amount1={amount1}
              currentTick={detail.currentTick}
              token0={detail.token0}
              token1={detail.token1}
            />
            <FeesPanel
              id={tokenId}
              token0={detail.token0}
              token1={detail.token1}
              amount0={feeAmount0}
              amount1={feeAmount1}
              loading={collectLoading}
              onCollectSuccess={() => {
                queryCollectInfo();
              }}
            />
          </StyledPanels>
          <Range
            token0={detail.token0}
            token1={detail.token1}
            tickLower={detail.tickLower}
            tickUpper={detail.tickUpper}
            currentTick={detail.currentTick}
            from="detail"
          />
        </>
      )}
    </StyledContainer>
  );
};

export default memo(Detail);
