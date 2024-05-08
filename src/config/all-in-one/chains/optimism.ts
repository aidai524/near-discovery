export default {
  title: 'Optimism',
  path: 'optimism',
  icon: 'https://assets.dapdap.net/images/bafkreihejurzfytybrvjy2b5vie5eppb4erhaimhtv25koseml3vhv3lse.svg',
  bgColor: '#CA0C0C',
  bgIcon: '/images/chains/optimism_white.svg',
  selectBgColor: '#CA0C0C',
  chainId: 10,
  rpcUrls: ['https://rpc.ankr.com/optimism'],
  defaultTab: 'Bridge',
  menuConfig: {
    Bridge: {
      tab: 'Bridge',
      path: 'bluebiu.near/widget/Optimism.Bridge',
      description: 'Trade by best price on Optimism',
    },
    Swap: {
      tab: 'Trade',
      path: 'bluebiu.near/widget/Optimism.Dex',
      description: 'Trade by best price on Optimism',
    },
    Lending: {
      tab: 'Lending',
      path: 'bluebiu.near/widget/Optimism.Lending',
      description: 'Trade by best price on Optimism',
    },
  },
};
