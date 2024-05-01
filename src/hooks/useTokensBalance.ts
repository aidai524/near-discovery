import { useCallback, useEffect, useState } from 'react';
import useAccount from '@/hooks/useAccount';
import { utils } from 'ethers';
import { multicall } from '@/utils/multicall';
import multicallAddresses from '@/config/contract/multicall';

export default function useTokensBalance(tokens: any) {
  const [loading, setLoading] = useState(false);
  const [balances, setBalances] = useState<any>({});
  const { account, provider } = useAccount();

  const queryBalance = useCallback(async () => {
    if (!account || !tokens.length) return;

    try {
      setLoading(true);
      let hasNative = false;
      const tokensAddress = tokens.filter((token: any) => {
        if (token.address === 'native') hasNative = true;
        return token.address !== 'native';
      });
      const calls = tokensAddress.map((token: any) => ({
        address: token.address,
        name: 'balanceOf',
        params: [account],
      }));

      const multicallAddress = multicallAddresses[tokens[0].chainId];
      const requests = [
        multicall({
          abi: [
            {
              inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
              name: 'balanceOf',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
            },
          ],
          options: {},
          calls,
          multicallAddress,
          provider,
        }),
      ];

      if (hasNative) requests.push(provider.getBalance(account));

      const [results, nativeBalance] = await Promise.all(requests);

      const _balance: any = {};
      if (hasNative && nativeBalance) _balance.native = utils.formatUnits(nativeBalance, 18);

      for (let i = 0; i < results.length; i++) {
        const token = calls[i];
        _balance[token.address] = utils.formatUnits(results[i]?.[0] || 0, token.decimals);
      }
      setBalances(_balance);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, [tokens, account, provider]);

  useEffect(() => {
    queryBalance();
  }, [tokens, account, provider]);

  return { loading, balances, queryBalance };
}
