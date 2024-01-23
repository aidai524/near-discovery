export default {
  title: 'Polygon zkEVM',
  path: 'polygon-zkevm',
  icon: 'https://assets.dapdap.net/images/bafkreielam3balduseacp3gulszhxiwzf7hcyoaau6goxdwgsavqfou5hi.svg',
  bgColor: '#A55FFF',
  selectBgColor: '#A55FFF',
  chainId: 1101,
  rpcUrls: ['https://zkevm-rpc.com'],
  menuConfig: {
    Bridge: {
      tab: 'Bridge',
      path: 'guessme.near/widget/ZKEVMSwap.zkevm-bridge',
    },
    Swap: {
      tab: 'Swap',
      path: 'bluebiu.near/widget/PolygonZkevm.Swap.Dex',
    },
    Liquidity: {
      tab: 'Liquidity',
      path: 'bluebiu.near/widget/ZKEVM.GAMMA',
    },
  },
};
