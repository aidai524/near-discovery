import multicall from '@/config/contract/multicall';
import weth from '@/config/contract/weth';

// import sonne from '../dapps/sonne';
import granary from '../dapps/granary-finance';
import moonwell from '../dapps/moonwell';
import SeamlessProtocol from '../dapps/seamless-protocol';

const CHAIN_ID = 8453;
const CHAIN_NAME = 'Base';

export default {
  chainId: CHAIN_ID,
  chainName: CHAIN_NAME,
  multicallAddress: multicall[CHAIN_ID],
  wethAddress: weth[CHAIN_ID],
  connectProps: {
    noAccountTips: 'Base Lending Collection',
    wrongNetworkTips: 'To proceed, kindly switch to Base Chain.',
    chainId: CHAIN_ID,
    chainName: CHAIN_NAME
  },
  defaultDapp: 'Moonwell',
  dapps: {
    Moonwell: {
      ...moonwell.basic,
      ...moonwell.networks[CHAIN_ID]
    },
    // Sonne: {
    //   ...sonne.basic,
    //   ...sonne.networks[CHAIN_ID],
    // },
    'Granary Finance': {
      ...granary.basic,
      ...granary.networks[CHAIN_ID]
    },
    'Seamless Protocol': {
      ...SeamlessProtocol.basic,
      ...SeamlessProtocol.networks[CHAIN_ID]
    }
  }
};
