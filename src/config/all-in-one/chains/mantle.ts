export default {
  title: 'Mantle',
  path: 'mantle',
  icon: 'https://assets.dapdap.tech/images/bafkreiboehkc3sfdmzzsv7abvhssavcicom3mjjm4wje3zgm3nzg5w4kbu.svg',
  bgColor: '#000000',
  bgIcon: '/images/chains/mantle_white.svg',
  selectBgColor: 'rgb(0,255,224)',
  chainId: 5000,
  rpcUrls: ['https://mantle-mainnet.public.blastapi.io'],
  defaultTab: 'Swap',
  menuConfig: {
    Swap: {
      tab: 'Swap',
      path: 'bluebiu.near/widget/Mantle.Swap.Dex',
    },
    Liquidity: {
      tab: 'Liquidity',
      path: 'bluebiu.near/widget/Mantle.GAMMA',
    },
    Lending: {
      tab: 'Lending',
      path: 'bluebiu.near/widget/Mantle.Lending',
    },
  },
};
