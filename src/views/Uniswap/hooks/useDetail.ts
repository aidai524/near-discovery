import { useEffect, useState } from 'react';
import { usePositionsStore } from '@/stores/positions';
import useAccount from '@/hooks/useAccount';
import useTokens from './useTokens';

import { getPosition, getPositionCollect, getTokenAmounts } from '../utils/getPosition';
import { getPoolSlot } from '../utils/getPool';
import { getTokenURI } from '../utils/getNft';
import { getTokenAddress } from '../utils';

export default function useDetail(tokenId: string) {
  const [detail, setDetail] = useState<any>();
  const [loading, setLoading] = useState<boolean>();
  const positionsStore = usePositionsStore();
  const { provider, account } = useAccount();

  const { getTokens } = useTokens();

  const getDetail = async () => {
    if (!tokenId || !account) return;
    setLoading(true);
    try {
      let position = positionsStore.positions[tokenId];
      if (!position) {
        position = await getPosition(tokenId, provider);
      }
      const [pool, collectInfo, tokenURI] = await Promise.all([
        getPoolSlot({
          token0: position.token0,
          token1: position.token1,
          fee: position.fee,
          provider,
        }),
        getPositionCollect([tokenId, account], provider),
        getTokenURI(tokenId, provider),
      ]);
      const tokens = getTokens();
      const _token0 = tokens[getTokenAddress(position.token0)];
      const _token1 = tokens[getTokenAddress(position.token1)];
      const [liquidityToken0, liquidityToken1] = getTokenAmounts({
        liquidity: position.liquidity,
        sqrtPriceX96: position.sqrtPriceX96,
        tickLow: position.tickLower,
        tickHigh: position.tickUpper,
        Decimal0: _token0.decimals,
        Decimal1: _token1.decimals,
        currentTick: pool.tick,
      });

      const _detail: { [key: string]: any } = {
        fee: position.fee,
        token0: _token0,
        token1: _token1,
        collectToken0: collectInfo.amount0 / 10 ** _token0.decimals,
        collectToken1: collectInfo.amount1 / 10 ** _token1.decimals,
        liquidityToken0,
        liquidityToken1,
        liquidity: position.liquidity,
        tokenURI,
        tickLow: position.tickLower,
        tickHigh: position.tickUpper,
        tick: pool.tick,
      };

      if (position.liquidity.eq(0)) {
        _detail.status = 'removed';
      } else {
        _detail.status = pool.tick < position.tickLower || pool.tick >= position.tickUpper ? 'out' : 'in';
      }
      setDetail(_detail);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetail();
  }, [provider]);

  return { detail, loading };
}
