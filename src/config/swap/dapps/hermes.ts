import { metis } from '@/config/tokens/metis';

const basic = {
  name: 'Hermes',
  logo: '/images/apps/hermes.png',
  amountOutFn: 'bluebiu.near/widget/Swap.Data.AmountOut',
};
const networks = {
  1088: {
    defaultCurrencies: {
      input: metis['eth'],
      output: metis['m.usdc'],
    },
    tokens: [metis['weth'], metis['metis'], metis['m.usdc'], metis['m.usdt'], metis['hermes'], metis['m.dai']],
  },
};

export { basic, networks };
