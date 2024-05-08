export default {
  title: 'Gnosis',
  path: 'gnosis',
  icon: 'https://assets.dapdap.net/images/bafkreiazsyndhevopspbjue3ztz5r5mypuzpa5gjragm3hdg6ey33rfheu.svg',
  bgColor: '#04795B',
  bgIcon: '/images/chains/gnosis_white.svg',
  selectBgColor: '#04795B',
  chainId: 100,
  rpcUrls: ['https://rpc.ankr.com/gnosis'],
  defaultTab: 'Swap',
  menuConfig: {
    Swap: {
      tab: 'Trade',
      path: 'bluebiu.near/widget/Gnosis.Swap.Dex',
      description: 'Trade by best price on Gnosis',
    },
    Lending: {
      tab: 'Lending',
      path: 'bluebiu.near/widget/Gnosis.Lending',
      description: 'Trade by best price on Gnosis',
    },
  },
};
