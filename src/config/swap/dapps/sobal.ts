import { base } from '@/config/tokens/base';

const basic = {
  name: 'Sobal',
  logo: '/images/apps/sobal.png',
  amountOutFn: 'bluebiu.near/widget/Swap.Data.AmountOut',
};
const networks = {
  8453: {
    defaultCurrencies: {
      input: base['eth'],
      output: base['axlusdc'],
    },
    tokens: [
      base['weth'],
      base['eth'],
      base['usdc'],
      base['axlusdc'],
      base['usdbc'],
      base['dai'],
      base['cbeth'],
      base['bald'],
    ],
  },
};

export { basic, networks };
