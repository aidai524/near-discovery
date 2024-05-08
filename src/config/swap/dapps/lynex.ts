import { linea } from '@/config/tokens/linea';

const basic = {
  name: 'Lynex',
  logo: '/images/apps/lynex.png',
  amountOutFn: 'bluebiu.near/widget/Swap.Data.AmountOut',
};
const networks = {
  59144: {
    defaultCurrencies: {
      input: linea['eth'],
      output: linea['usdt'],
    },
    tokens: [linea['usdc'], linea['eth'], linea['weth'], linea['usdt']],
  },
};

export { basic, networks };
