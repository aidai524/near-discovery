import { basic as HorizonDEXBasic, networks as HorizonDEXNetworks } from '../dapps/horizon-dex';
import { basic as IziSwapBasic, networks as IziSwapNetworks } from '../dapps/izi-swap';
import { basic as SyncSwapBasic, networks as SyncSwapNetworks } from '../dapps/sync-swap';
import { basic as VelocoreV2Basic, networks as VelocoreV2Networks } from '../dapps/velocore-v2';

const CHAIN_ID = 59144;

export default {
  chainId: CHAIN_ID,
  chainName: 'Linea',
  displayChainName: 'Linea',
  wethAddress: '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f',
  connectProps: {
    noAccountTips: 'Linea Dex Collection',
    wrongNetworkTips: 'To proceed, kindly switch to Linea Chain.',
  },
  defalutDex: 'HorizonDEX',
  dexs: {
    HorizonDEX: {
      ...HorizonDEXBasic,
      ...HorizonDEXNetworks[CHAIN_ID],
    },
    iZiSwap: {
      ...IziSwapBasic,
      ...IziSwapNetworks[CHAIN_ID],
    },
    Syncswap: {
      ...SyncSwapBasic,
      ...SyncSwapNetworks[CHAIN_ID],
    },
    'Velocore V2': {
      ...VelocoreV2Basic,
      ...VelocoreV2Networks[CHAIN_ID],
    },
  },
};
