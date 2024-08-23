import { arbitrum } from '@/config/tokens/arbitrum';

const basic = {
  name: 'Ramses V2',
  logo: '/images/apps/ramses.png',
  amountOutFn: 'bluebiu.near/widget/Swap.Data.AmountOut',
};
const networks = {
  42161: {
    defaultCurrencies: {
      input: arbitrum['eth'],
      output: arbitrum['usdt'],
    },
    tokens: [
      arbitrum['eth'],
      arbitrum['ram'],
      arbitrum['weth'],
      arbitrum['rseth'],
      arbitrum['ethx'],
      arbitrum['usdc'],
      arbitrum['usdc.e'],
      arbitrum['usdt'],
      arbitrum['zro'],
      arbitrum['ram'],
      arbitrum['ezeth'],
      arbitrum['wst-eth'],
      arbitrum['wbtc'],
    ],
  },
};

export { basic, networks };
