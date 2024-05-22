import { metis } from '@/config/tokens/metis';

const basic = {
  name: 'Hummus',
  logo: '/images/apps/hummus.png',
  amountOutFn: 'bluebiu.near/widget/Swap.Data.AmountOut',
};
const networks = {
  1088: {
    defaultCurrencies: {
      input: metis['weth'],
      output: metis['m.usdc'],
    },
    tokens: [metis['weth'], metis['m.usdc'], metis['m.usdt'], metis['m.dai'], metis['m.wbtc'], metis['metis']],
  },
};

export { basic, networks };
