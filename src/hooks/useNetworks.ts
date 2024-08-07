import { useEffect, useState } from 'react';
import { get } from '@/utils/http';
import { QUEST_PATH } from '@/config/quest';

// query all networks
export function useNetworks(props?: Props) {
  const { isAll, isAllIcon = true } = props || {};

  const initNetworkList: Network[] = [];
  if (isAll) {
    initNetworkList.push({
      ...NetworkAll,
      logo: isAllIcon ? NetworkAll.logo : '',
    });
  }

  const [networkList, setNetworkList] = useState<Network[]>(initNetworkList);
  const [networkLoading, setNetworkLoading] = useState<boolean>(false);

  const getNetworkList = async () => {
    setNetworkLoading(true);
    try {
      const resultNetwork = await get(`${QUEST_PATH}/api/network/list`);
      const data = resultNetwork.data || [];
      if (isAll) {
        data.unshift({
          ...NetworkAll,
          logo: isAllIcon ? NetworkAll.logo : '',
        });
      }
      setNetworkList(data);
    } catch (error) {
      console.error('Error fetching resultNetwork data:', error);
    }
    setNetworkLoading(false);
  };

  useEffect(() => {
    getNetworkList();
  }, []);

  return { networkList, networkLoading };
}

export interface Props {
  isAll?: boolean;
  isAllIcon?: boolean;
}

export const NetworkAll = {
  block_explorer: '',
  chain_id: -1,
  created_at: '',
  description: '',
  id: -1,
  logo: '/images/networks/icon-all.svg',
  name:  'All Networks',
  // JSON string
  native_currency: '',
  // JSON string
  rpc: '',
  tag: '',
  tbd_token: '',
  updated_at: '',
};

export interface Network {
  block_explorer: string;
  chain_id: number;
  created_at: string;
  description: string;
  id: number;
  logo: string;
  name: string;
  // JSON string
  native_currency: string;
  // JSON string
  rpc: string;
  tag: string;
  tbd_token: string;
  updated_at: string;
}
