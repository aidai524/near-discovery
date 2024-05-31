import styled from 'styled-components';

const Theme = styled.div`
  --button-text-color: #000;
  --button-color: #56daff;
  --primary-color: #56daff;
  --border-color: #292c42;
  --supply-bg-color: rgba(86, 218, 255, 0.2);
  --borrow-bg-color: rgba(196, 71, 217, 0.2);
  --supply-color: #56daff;
  --borrow-color: #e88eff;
  --withdraw-bg-color: rgba(86, 218, 255, 0.2);
  --withdraw-bg-hover-color: #56daff;
  --withdraw-border-color: #56daff;
  --repay-bg-color: rgba(196, 71, 217, 0.2);
  --repay-bg-hover-color: #c447d9;
  --repay-border-color: #c447d9;
  --switch-color: #56daff;
  --switch-border-color: #3f577b;
  --secondary-border-color: #32496a;
  --yours-table-title: #ffffff;
  --claim-bg-hover-color: #56daff;
  --claim-bg-color: rgba(86, 218, 255, 0.2);
  --claim-border-color: #56daff;
  --withdraw-color: #fff;
  --replay-color: #fff;
  --claim-color: #fff;
`;
export default {
  title: 'Linea',
  path: 'linea',
  icon: 'https://assets.dapdap.net/images/bafkreiek2q3da5dpzt7jlvdp5y4b7xh2tsdb5syh75b3amfwhb7x6vi7oa.svg',
  bgColor: '#131313',
  bgIcon: '/images/chains/linea_white.svg',
  textColor: '#000',
  selectBgColor: '#00E2FF',
  chainId: 59144,
  rpcUrls: ['https://linea.blockpi.network/v1/rpc/public'],
  defaultTab: 'Bridge',
  menuConfig: {
    Bridge: {
      tab: 'Bridge',
      path: 'bluebiu.near/widget/Linea.Bridge',
      description: 'Bridge assets from other chains to Linea',
    },
    Swap: {
      tab: 'Trade',
      path: 'bluebiu.near/widget/Linea.Swap.Dex',
      description: 'Trade by best price on Linea',
    },
    Liquidity: {
      tab: 'Liquidity',
      path: 'bluebiu.near/widget/Linea.Liquidity.GAMMA',
      description: 'Trade by best price on Linea',
    },
    Lending: {
      tab: 'Lending',
      path: 'bluebiu.near/widget/Linea.Lending',
      description: 'Trade by best price on Linea',
      Theme,
    },
  },
};
