import multicall from '@/config/contract/multicall';
import weth from '@/config/contract/weth';

import benqi from '../dapps/benqi';
import granary from '../dapps/granary-finance';
import ironBank from '../dapps/iron-bank';
import traderJoe from '../dapps/trader-joe-lend';

const CHAIN_ID = 43114;
const CHAIN_NAME = 'Avalanche';

export default {
  chainId: CHAIN_ID,
  chainName: CHAIN_NAME,
  multicallAddress: multicall[CHAIN_ID],
  wethAddress: weth[CHAIN_ID],
  connectProps: {
    noAccountTips: 'Avalanche Lending Collection',
    wrongNetworkTips: `To proceed, kindly switch to ${CHAIN_NAME} Chain.`,
    chainId: CHAIN_ID,
    chainName: CHAIN_NAME,
  },
  defaultDapp: 'Benqi',
  dapps: {
    Benqi: {
      ...benqi.basic,
      ...benqi.networks[CHAIN_ID],
    },
    'Granary Finance': {
      ...granary.basic,
      ...granary.networks[CHAIN_ID],
    },
    'Iron Bank': {
      ...ironBank.basic,
      ...ironBank.networks[CHAIN_ID],
    },
    'Trader Joe': {
      ...traderJoe.basic,
      ...traderJoe.networks[CHAIN_ID],
    },
  },
};
