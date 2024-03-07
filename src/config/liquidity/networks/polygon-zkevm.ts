import gamma from '../dapps/gamma';
const CHAIN_ID = 1101;

export default {
  chainId: CHAIN_ID,
  chainName: 'Polygon zkEVM',
  displayChainName: 'Polygon zkEVM',
  wethAddress: '0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9',
  connectProps: {
    noAccountTips: 'Polygon zkEVM Liquidity Collection',
    wrongNetworkTips: 'To proceed, kindly switch to Polygon zkEVM Chain.',
  },
  defaultDapp: 'Gamma',
  dapps: {
    Gamma: {
      ...gamma.basic,
      ...gamma.networks[CHAIN_ID],
    },
  },
};
