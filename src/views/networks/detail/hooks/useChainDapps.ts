import { useEffect, useState } from "react";
import { get } from '@/utils/http';
import { QUEST_PATH } from "@/config/quest";
import { CategoryList } from "@/views/AllDapps/config";
import chainCofig from "@/config/chains";
import useDappReward from "@/views/AllDapps/hooks/useDappReward";
import { useDebounceFn } from "ahooks";

export function useChainDapps(chain_id: string, category?: string | number) {

  const [ loading, setLoading ] = useState<boolean>(false);
  const [ dappList, setDappList ] = useState<any>([]);
  const [ allDappList, setAllDappList ] = useState<any>([]);
  const [ total , setTotal ] = useState<number>(0);
  const [ pageTotal, setPageTotal] = useState<number>(0);
  const [ pageIndex, setPageIndex] = useState<number>(1);
  const [rewardList, setRewardList] = useState<any>([]);
  const pageSize = 9;
  const {fetchRewardData} = useDappReward();

  const fetchDappList = async () => {
    try {
      setLoading(true);
      const result = await get(
        `${QUEST_PATH}/api/dapp/list_by_network`,
        {chain_id}
      );
      const data = result.data || [];
      data.forEach((dapp: any) => {
        //#region format categories
        dapp.categories = [];
        dapp.dapp_category && dapp.dapp_category.forEach((it: any) => {
          const curr = CategoryList.find((_it) => _it.key === it.category_id);
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
      });
      let filteredData = data;
      if (category) {
        filteredData = data.filter((item: any) => item.dapp_category && item.dapp_category.find((dapp: any) => dapp.category_id == category));
      }
      setAllDappList(filteredData);
      onPage(1, filteredData, true);
      setTotal(filteredData.length);
      setPageTotal(Math.ceil(filteredData.length / pageSize));
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  const getRewardList = async () => {
    const result = await fetchRewardData();
    setRewardList(result ?? []);
  }

  const { run } = useDebounceFn(() => setLoading(false), { wait: 300 });

  const onPage = (page: number, allData?: any, noLoading?: boolean) => {
    if (!noLoading) {
      setLoading(true);
    }
    setPageIndex(page);
    setDappList((allData ?? allDappList).slice((page - 1) * pageSize, page * pageSize));
    if (!noLoading) {
      run();
    }
  }

  useEffect(() => {
    getRewardList();
  }, []);

  useEffect(() => {
    if (!chain_id) {
      return;
    }
    fetchDappList();
  }, [chain_id, category]);


  return {
    loading,
    dappList,
    total,
    pageTotal,
    pageIndex,
    fetchDappList,
    pageSize,
    onPage
  }
};