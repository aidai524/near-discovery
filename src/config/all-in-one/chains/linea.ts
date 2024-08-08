export default {
  title: 'Linea',
  path: 'linea',
  icon: 'https://assets.dapdap.net/images/bafkreiek2q3da5dpzt7jlvdp5y4b7xh2tsdb5syh75b3amfwhb7x6vi7oa.svg',
  bgColor: '#131313',
  bgIcon: '/images/chains/linea_white.svg',
  iconColor: '#000',
  selectBgColor: '#00E2FF',
  chainId: 59144,
  rpcUrls: ['https://linea.blockpi.network/v1/rpc/public'],
  defaultTab: 'Bridge',
  theme: {
    button: {
      bg: '#00E2FF',
      text: '#02051E',
    },
  },
  menuConfig: {
    Bridge: {
      tab: 'Bridge',
      path: 'bluebiu.near/widget/Linea.Bridge',
    },
    Swap: {
      tab: 'Swap',
      path: 'bluebiu.near/widget/Linea.Swap.Dex',
    },
    Liquidity: {
      tab: 'Liquidity',
      path: 'bluebiu.near/widget/Linea.Liquidity.GAMMA',
    },
    Lending: {
      tab: 'Lending',
      path: 'bluebiu.near/widget/Linea.Lending',
    },
  },
};
