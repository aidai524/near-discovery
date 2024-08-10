import {get} from '@/utils/http';
import { QUEST_PATH } from '@/config/quest';
import { Odyssey } from '@/components/DropdownSearchResultPanel/hooks/useDefaultSearch';

interface Reward {
  name: string;
  value: string;
  logo_key: string;
}

export interface FormattedRewardList {
  logo_key: string;
  value: string;
  name: string;
  odysseys: Odyssey[];
}


export default function useDappReward() {
  const formatRewardList = (data: Odyssey[]): FormattedRewardList[] => {
    if (!data || !data.length) return [];
    return data.reduce((result: FormattedRewardList[], item: Odyssey) => {
      const rewards: Reward[] = item.reward ? JSON.parse(item.reward) : [];
  
      rewards.forEach((reward) => {
        const existingReward = result.find(r => r.logo_key === reward.logo_key);
  
        if (existingReward) {
          existingReward.odysseys.push(item);
        } else {
          result.push({
            logo_key: reward.logo_key,
            value: reward.value,
            name: reward.name,
            odysseys: [item],
          });
        }
      });
      return result;
    }, []);
  }

  const fetchRewardData = async () => {
    try {
      const result = await get(`${QUEST_PATH}/api/compass/reward-list`);
      return result?.data ?? [];
    } catch {
      return [];
    }
  }

  return {
    fetchRewardData,
    formatRewardList
  }
}

