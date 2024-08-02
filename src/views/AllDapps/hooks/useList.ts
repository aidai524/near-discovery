import { useEffect, useState } from 'react';
import { CategoryList, PageSize } from '@/views/AllDapps/config';
import { get } from '@/utils/http';
import { QUEST_PATH } from '@/config/quest';
import chainCofig from '@/config/chains';
import { useDebounceFn } from 'ahooks';
import useDappReward from '@/views/AllDapps/hooks/useDappReward';


export default function useList(props: Props) {
  const {
    network,
    sort,
    category,
    searchText,
    rewardNow,
    airdrop,
  } = props;

  const {fetchRewardData} = useDappReward();

  const [loading, setLoading] = useState<boolean>(false);
  const [dappList, setDappList] = useState<any>([]);
  const [rewardList, setRewardList] = useState<any>([]);
  const [pageTotal, setPageTotal] = useState<number>(0);
  const [pageIndex, setPageIndex] = useState<number>(1);

  const fetchDappList = async (page: number) => {
    setPageIndex(page);
    try {
      setLoading(true);
      const params: Record<string, any> = {
        page_size: PageSize,
        page,
        reward_now: rewardNow,
        airdrop,
      };
      if (sort) {
        params.sort = sort;
      }
      if (network && network > -1) {
        params.chain_id = network;
      }
      if (category) {
        params.category_ids = category;
      }
      if (searchText) {
        params.content = searchText;
      }

      const result = await get(
        `${QUEST_PATH}/api/dapp/search`,
        params
      );
      const data = result.data?.data || [];
      data.forEach((dapp: any) => {
        //#region format categories
        dapp.categories = [];
        dapp.dapp_category && dapp.dapp_category.forEach((it: any) => {
          const curr = CategoryList.find((_it) => _it.key === it);
          curr && dapp.categories.push(curr);
        });
        //#endregion
        //#region format networks
        dapp.networks = [];
        dapp.dapp_network && dapp.dapp_network.forEach((it: any) => {
          const curr = chainCofig[it.chain_id];
          curr && dapp.networks.push({ ...curr });
        });
        //#endregion
      });

      data.forEach((dapp: any) => {
        dapp.rewards = [];
        if (dapp?.networks && dapp.networks.length) {
          rewardList.forEach((item: any) => {
            const _reward = dapp.networks.find((network: any) => item.chains_id == network.chainId);
            if (_reward) {
              dapp.rewards.push(item);
            }
          })
        }
      })
      setDappList(data);
      setPageTotal(result.data.total_page || 0);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching resultDapp data:', error);
      setLoading(false);
    }
  };

  const getRewardList = async () => {
    const result = await fetchRewardData();
    setRewardList(result ?? []);
  }

  const { run: getDappList } = useDebounceFn(fetchDappList, { wait: 600 });

  useEffect(() => {
    getDappList(1);
  }, [network, sort, rewardNow, category, searchText, airdrop]);

  useEffect(() => {
    getRewardList();
  }, []);

  return {
    loading,
    dappList,
    pageTotal,
    pageIndex,
    fetchDappList,
  };
}

export interface Props {
  // chainId
  network?: number;
  // sort method
  sort?: any;
  // Bridge: 1
  // Dex(Swap): 2
  // Lending: 3
  // Liquidity: 4
  // Staking: 5
  // Yield: 6
  // Launchpad: 7
  category?: number | string;
  searchText?: string;
  rewardNow?: boolean;
  // data anchor
  bp?: { detail: string; dapp: string; };
  style?: React.CSSProperties;
  // Potential Airdrop
  airdrop?: boolean;
}
