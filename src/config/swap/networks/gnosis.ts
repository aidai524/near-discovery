import { basic as honeySwapBasic, networks as honeySwapNetworks } from '../dapps/honey-swap';
import { basic as sushiBasic, networks as sushiNetworks } from '../dapps/sushi-swap';
import { basic as swaprBasic, networks as swaprNetworks } from '../dapps/swapr';
import { basic as elkBasic, networks as elkNetworks } from '../dapps/elk';
import { basic as balancerBasic, networks as balancerNetworks } from '../dapps/balancer';

const CHAIN_ID = 100;

export default {
  chainId: CHAIN_ID,
  chainName: 'Gnosis',
  displayChainName: 'Gnosis',
  wethAddress: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
  connectProps: {
    noAccountTips: 'Gnosis Dex Collection',
    wrongNetworkTips: 'To proceed, kindly switch to Gnosis Chain.',
  },
  defalutDex: 'Balancer',
  dexs: {
    Balancer: {
      ...balancerBasic,
      ...balancerNetworks[CHAIN_ID],
    },
    Honeyswap: {
      ...honeySwapBasic,
      ...honeySwapNetworks[CHAIN_ID],
    },
    Swapr: {
      ...swaprBasic,
      ...swaprNetworks[CHAIN_ID],
    },
    Elk: {
      ...elkBasic,
      ...elkNetworks[CHAIN_ID],
    },
    SushiSwap: {
      ...sushiBasic,
      ...sushiNetworks[CHAIN_ID],
    },
  },
};
