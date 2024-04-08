import gamma from '../dapps/gamma';
import multicall from '@/config/contract/multicall';
import weth from '@/config/contract/weth';
const CHAIN_ID = 1101;
const CHAIN_NAME = 'Polygon zkEVM';
export default {
  chainId: CHAIN_ID,
  chainName: CHAIN_NAME,
  multicallAddress: multicall[CHAIN_ID],
  wethAddress: weth[CHAIN_ID],
  connectProps: {
    noAccountTips: 'Optimism Liquidity Collection',
    wrongNetworkTips: 'To proceed, kindly switch to Optimism Chain.',
    chainId: CHAIN_ID,
    chainName: CHAIN_NAME,
  },
  defaultDapp: 'Gamma',
  dapps: {
    Gamma: {
      ...gamma.basic,
      ...gamma.networks[CHAIN_ID],
    },
  },
};
