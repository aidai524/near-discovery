import { useDebounceFn } from 'ahooks';
import Big from 'big.js';
import { useCallback, useEffect, useState } from 'react';

import chains from '@/config/chains';
import useAccount from '@/hooks/useAccount';
import useAuthCheck from '@/hooks/useAuthCheck';
import { get } from '@/utils/http';
import { getChainLogo, getDappLogo } from '@/views/Portfolio/helpers';

export default function useDapps() {
  const [loading, setLoading] = useState(false);
  const [dapps, setDapps] = useState<any>([]);
  const { account } = useAccount();
  const { check } = useAuthCheck({ isNeedAk: true, isQuiet: true });

  const fetchDapps = useCallback(async () => {
    try {
      setLoading(true);
      setDapps([]);
      const result = await get(`/db3`, {
        url: 'api/balance/dapp/list',
        params: JSON.stringify({ address: account }),
      });
      const _dapps: any = result?.data?.list
        .map((record: any) => {
          let _totalBalance = new Big(0);
          const items: any = {};
          const _typeBalance: any = {};
          record.assets.forEach((item: any) => {
            let _typeTotalBalance = new Big(0);
            const _type = item.type || record.type;
            item.assets.forEach((asset: any) => {
              _totalBalance =
                _type.toLowerCase() === 'borrow'
                  ? _totalBalance.minus(asset.usd || 0)
                  : _totalBalance.add(asset.usd || 0);

              _typeTotalBalance = _typeTotalBalance.add(asset.usd || 0);
            });
            if (items[_type]) {
              items[_type].push(item);
              _typeBalance[_type] = _typeBalance[_type].add(_typeTotalBalance);
            } else {
              items[_type] = [item];
              _typeBalance[_type] = _typeTotalBalance;
            }
            item.usd = _typeTotalBalance;
          });

          return {
            ...record,
            assets: Object.keys(items).map((item: any) => ({
              type: item,
              assets: items[item],
              usd: _typeBalance[item],
            })),
            usd: _totalBalance,
            icon: getDappLogo(record.name),
            chainIcon: getChainLogo(chains[record.chain_id]?.chainName),
          };
        });
      setDapps(_dapps);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching resultNetwork data:', error);
      setLoading(false);
      setDapps([]);
    }
  }, [account]);

  const { run } = useDebounceFn(
    () => {
      if (!account) {
        setLoading(false);
        setDapps([]);
      } else {
        check(fetchDapps);
      }
    },
    { wait: dapps ? 600 : 3000 },
  );

  useEffect(() => {
    run();
  }, [account]);

  return { loading, dapps };
}
