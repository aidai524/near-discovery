import { mantle } from '@/config/tokens/mantle';

const basic = {
  name: 'Merchant Moe',
  logo: '/images/apps/merchant-moe.png',
  amountOutFn: 'bluebiu.near/widget/Swap.Data.AmountOut',
};
const networks = {
  5000: {
    defaultCurrencies: {
      input: mantle['weth'],
      output: mantle['usdc'],
    },
    tokens: [
      mantle['usdt'],
      mantle['mnt'],
      mantle['wmnt'],
      mantle['weth'],
      mantle['wbtc'],
      mantle['usdc'],
      mantle['lend'],
      mantle['moe'],
    ],
  },
};

export { basic, networks };
