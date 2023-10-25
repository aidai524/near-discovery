import React, { useEffect, useState } from 'react';
import useEthersSender from './useEthersSender';
import Big from 'big.js';

interface NetCurve24hUserList {
  usd_value_list: number[][];
}

const PUBLIC_DEBANK_URL = 'https://api.debank.com';

const DAPDAP_DEBANK_URL = 'https://test-api.dapdap.net/debank';

export const useNetCurve24h = () => {
  const { sender } = useEthersSender();

  const [netCurve24h, setNetCurve24h] = useState<NetCurve24hUserList>();

  const [diff, setDiff] = useState<{ value: string; dir: 'desc' | 'asc' }>();

  useEffect(() => {
    if (!sender) return;

    fetch(`${PUBLIC_DEBANK_URL}/asset/net_curve_24h?user_addr=${sender}`)
      .then((response) => response.json())
      .then((data) => {
        const value_list = data?.data?.usd_value_list;

        const first_item = value_list[0][1];

        const last_item = value_list[value_list.length - 1][1];

        // calculate percentage last_item to fist_item,

        const diffValue = Big(((last_item - first_item) / first_item) * 100);

        const diffDisplay = diffValue.toFixed(2) + '%';

        setDiff({
          value: diffDisplay,
          dir: diffValue.gt(0) ? 'asc' : 'desc',
        });

        setNetCurve24h(data?.data);
      });
  }, [sender]);

  return { netCurve24h, diff };
};

export const useTotalBalance = () => {
  const { sender } = useEthersSender();

  const [totalBalance, setTotalBalance] = useState<number>();

  useEffect(() => {
    if (!sender) return;

    fetch(`${PUBLIC_DEBANK_URL}/user/total_balance?user_addr=${sender}`)
      .then((response) => response.json())
      .then((data) => setTotalBalance(data?.data?.total_usd_value));
  }, [sender]);

  return totalBalance;
};

interface ChainListItem {
  id: string;
  community_id: number;
  name: string;
  native_token_id: string;
  logo_url: string;
  wrapped_token_id: string;
  is_support_pre_exec: boolean;
}

interface AllChainBalanceInterface {
  total_usd_value: number;
  chain_list: ChainlistBalance[];
}

interface ChainlistBalance {
  id: string;
  community_id: number;
  name: string;
  native_token_id: string;
  logo_url: string;
  wrapped_token_id: string;
  is_support_pre_exec: boolean;
  usd_value: number;
}

interface UserTokenItemInterface {
  id: string;
  chain: string;
  name: string;
  symbol: string;
  display_symbol?: string;
  optimized_symbol: string;
  decimals: number;
  logo_url?: string;
  protocol_id: string;
  price: number;
  price_24h_change?: number;
  is_verified: boolean;
  is_core: boolean;
  is_wallet: boolean;
  time_at?: number;
  amount: number;
  raw_amount: number;
  raw_amount_hex_str: string;
}

export const useSenderPortfolioData = () => {
  const { sender } = useEthersSender();

  const [allChainsBalance, setAllChainsBalance] = useState<AllChainBalanceInterface>({
    total_usd_value: 0,
    chain_list: [],
  });

  const [allChainList, setAllChainList] = useState<ChainListItem[]>([]);

  const [allTokenList, setAllTokenList] = useState<UserTokenItemInterface[]>([]);

  const [protocolList, setProtocolList] = useState<any[]>([]);

  const fetchAll = async () => {
    if (!sender) return undefined;

    const senderParams = JSON.stringify({
      id: sender,
    });

    const allChainsBalance = fetch(`${DAPDAP_DEBANK_URL}?url=/v1/user/total_balance&params=${senderParams}`).then(
      (res) => res.json(),
    );

    const allChainList = fetch(`${DAPDAP_DEBANK_URL}?url=/v1/chain/list`).then((res) => res.json());

    const allTokenList = fetch(`${DAPDAP_DEBANK_URL}?url=/v1/user/all_token_list?params=${senderParams}`).then((res) =>
      res.json(),
    );

    const protocolList = fetch(
      `${DAPDAP_DEBANK_URL}?url=/v1/user/all_complex_protocol_list?params=${senderParams}`,
    ).then((res) => res.json());

    const fetchList = [allChainsBalance, allChainList, allTokenList, protocolList];

    return Promise.all(fetchList).then((responses) => {
      setAllChainsBalance(responses[0].data);
      setAllChainList(responses[1].data);
      setAllTokenList(responses[2].data);
      setProtocolList(responses[3].data);
    });
  };

  useEffect(() => {
    fetchAll();
  }, [sender]);

  return { allChainsBalance, allChainList, allTokenList, protocolList };
};
