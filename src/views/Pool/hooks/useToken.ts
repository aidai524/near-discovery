import { useCallback, useEffect, useState } from 'react';

import multicallAddresses from '@/config/contract/multicall';
import useAccount from '@/hooks/useAccount';
import { multicall } from '@/utils/multicall';

import useDappConfig from './useDappConfig';

export default function useToken(address: any, chainId: any) {
  const { tokens } = useDappConfig();
  const { provider } = useAccount();
  const [token, setToken] = useState<any>();

  const queryToken = useCallback(async () => {
    const _tokens = tokens[chainId];
    const _token = _tokens[address.toLowerCase()];
    if (_token) {
      setToken(_token);
      return;
    }

    const calls = [
      {
        address,
        name: 'name',
      },
      {
        address,
        name: 'symbol',
      },
      {
        address,
        name: 'decimals',
      },
    ];
    const multicallAddress = multicallAddresses[chainId];
    const [name, symbol, decimals] = await multicall({
      abi: [
        {
          inputs: [],
          name: 'name',
          outputs: [{ internalType: 'string', name: '', type: 'string' }],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'symbol',
          outputs: [{ internalType: 'string', name: '', type: 'string' }],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'decimals',
          outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
          stateMutability: 'view',
          type: 'function',
        },
      ],
      calls,
      options: {},
      multicallAddress,
      provider,
    });

    return { name, symbol, decimals, chainId };
  }, [address, chainId]);

  useEffect(() => {
    if (!address || !chainId) return;
    queryToken();
  }, [address, chainId]);

  return token;
}
