import styled from 'styled-components';

const Theme = styled.div`
  --button-text-color: #fff;
  --button-color: #33549c;
  --primary-color: #33549c;
  --border-color: #292c42;
  --supply-bg-color: rgba(80, 123, 217, 0.2);
  --borrow-bg-color: rgba(202, 85, 176, 0.2);
  --supply-color: #85abff;
  --borrow-color: #ff8ee6;
  --withdraw-bg-hover-color: #33549c;
  --withdraw-bg-color: rgba(51, 84, 156, 0.5);
  --withdraw-border-color: #33549c;
  --repay-bg-color: rgba(202, 85, 176, 0.2);
  --repay-bg-hover-color: #ca55b0;
  --repay-border-color: #ca55b0;
  --switch-color: #33549c;
  --switch-border-color: #32496a;
  --secondary-border-color: #3f577b;
  --yours-table-title: #ffffff;
  --claim-bg-hover-color: #33549c;
  --claim-bg-color: rgba(51, 84, 156, 0.5);
  --claim-border-color: #33549c;
  --withdraw-color: #fff;
  --replay-color: #fff;
  --claim-color: #fff;
`;

export default {
  title: 'Arbitrum',
  path: 'arbitrum',
  icon: 'https://assets.dapdap.net/images/bafkreicxdjysr5urjg2hfpfts2b7ptb6q3fge7ncuhzw4puqybi4dwlbdu.svg',
  bgColor: '#3564AB',
  bgIcon: '/images/chains/arbitrum_white.svg',
  selectBgColor: '#3564AB',
  textColor: '#fff',
  chainId: 42161,
  rpcUrls: ['https://arb1.arbitrum.io/rpc'],
  defaultTab: 'Bridge',
  menuConfig: {
    Bridge: {
      tab: 'Bridge',
      path: 'bluebiu.near/widget/Arbitrum.Bridge',
      description: 'Trade by best price on Arbitrum',
    },
    Swap: {
      tab: 'Trade',
      path: 'bluebiu.near/widget/Arbitrum.Swap.Dex',
      description: 'Trade by best price on Arbitrum',
    },
    Lending: {
      tab: 'Lending',
      path: 'bluebiu.near/widget/Arbitrum.Lending',
      description: 'Trade by best price on Arbitrum',
      Theme,
    },
  },
};
