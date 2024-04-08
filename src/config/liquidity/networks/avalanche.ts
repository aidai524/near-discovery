import multicall from '@/config/contract/multicall';
import weth from '@/config/contract/weth';

const CHAIN_ID = 43114;
const CHAIN_NAME = 'Avalanche';

export default {
  chainId: CHAIN_ID,
  chainName: CHAIN_NAME,
  multicallAddress: multicall[CHAIN_ID],
  wethAddress: weth[CHAIN_ID],
  connectProps: {
    noAccountTips: 'Avalanche Liquidity Collection',
    wrongNetworkTips: `To proceed, kindly switch to ${CHAIN_NAME} Chain.`,
    chainId: CHAIN_ID,
    chainName: CHAIN_NAME,
  },
  defalutDex: 'Trader Joe',
  dapps: {},
};
