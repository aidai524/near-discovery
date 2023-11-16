import { useCallback, useEffect, useState } from 'react';
import { get } from '@/utils/http';
import { sortTokens } from '../utils/sortTokens';
import { getTokenAddress } from '../utils';

export default function useFeeFrequency({ token0, token1 }: any) {
  const [frequency, setFrequency] = useState<any>({});

  const getFeeFrequency = useCallback(async () => {
    if (!token0 || !token1) return;
    const [_token0, _token1] = sortTokens(token0, token1);
    const _token0Address = getTokenAddress(_token0.address, true);
    const _token1Address = getTokenAddress(_token1.address, true);
    const result = await get(
      `https://test-api.dapdap.net/api/uniswap/mint?token0=${_token0Address.toLowerCase()}&token1=${_token1Address.toLowerCase()}`,
    );
    setFrequency(result?.data || {});
  }, [token0, token1]);

  useEffect(() => {
    getFeeFrequency();
  }, [token0, token1]);

  return frequency;
}
