import { useState, useEffect, useCallback } from 'react';
import { get } from '@/utils/http';
import { QUEST_PATH } from '@/config/quest';
import { CategoryList } from '@/views/AllDapps/config';
import chainCofig from '@/config/chains';

const useDapps = () => {
  const [featuredDapps, setFeaturedDapps] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState<any>();

  const queryDapps = useCallback(async (_category?: any) => {
    setLoading(true);
    try {
      setFeaturedDapps({titleDapps: []});
      let response: any = {};
      const params: any = {
        page_size: 15,
        page: 1,
        sort: 'volume'
      };
      if (_category) {
          const currCategory = CategoryList.find((it) => it.key == _category);
          if (currCategory) {
            params.category = currCategory.name;
          }
        response =  await get(`${QUEST_PATH}/api/dapp/search`,  params);
      } else {
        response = await get(`${QUEST_PATH}/api/dapp/recommend`);
      }
      const data = response?.data?.data ?? [];
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
      const topDapps = (response?.data?.top_dapps ?? []).map((item: any) => ({logo: item}));
      setFeaturedDapps({dapps: data, titleDapps: topDapps});
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }, [category, loading]);

  const onSelectCategory = (_category: any) => {
    setCategory(_category);
    queryDapps(_category);
  };

  useEffect(() => {
    queryDapps();
  }, []);

  return { loading, featuredDapps, category, onSelectCategory };
};

export default useDapps;
