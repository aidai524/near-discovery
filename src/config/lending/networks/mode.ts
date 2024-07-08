import multicall from '@/config/contract/multicall';
import weth from '@/config/contract/weth';

import layerBank from '../dapps/layer-bank';

const CHAIN_ID = 34443;
const CHAIN_NAME = 'Mode';

export default {
  chainId: CHAIN_ID,
  chainName: CHAIN_NAME,
  multicallAddress: multicall[CHAIN_ID],
  wethAddress: weth[CHAIN_ID],
  connectProps: {
    noAccountTips: 'Mode Lending Collection',
    wrongNetworkTips: 'To proceed, kindly switch to Mode Chain.',
    chainId: CHAIN_ID,
    chainName: CHAIN_NAME,
  },
  defaultDapp: 'LayerBank',
  dapps: {
    LayerBank: {
      ...layerBank.basic,
      ...layerBank.networks[CHAIN_ID],
    },
  },
};
