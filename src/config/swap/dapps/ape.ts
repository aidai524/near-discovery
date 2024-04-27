import { arbitrum } from '@/config/tokens/arbitrum';
import { bsc } from '@/config/tokens/bsc';
import { polygon } from '@/config/tokens/polygon';

const basic = {
  name: 'Apeswap',
  logo: '/images/apps/ape-swap.png',
  amountOutFn: 'bluebiu.near/widget/Swap.Data.AmountOut',
};
const networks = {
  42161: {
    defaultCurrencies: {
      input: arbitrum['eth'],
      output: arbitrum['usdt'],
    },
    tokens: [arbitrum['eth'], arbitrum['weth'], arbitrum['usdc.e'], arbitrum['usdt']],
  },
  56: {
    defaultCurrencies: {
      input: bsc['eth'],
      output: bsc['usdc'],
    },
    tokens: [bsc['eth'], bsc['usdc'], bsc['btcb'], bsc['banana'], bsc['wbnb'], bsc['bscusd'], bsc['chrp'], bsc['ceek']],
  },
  137: {
    defaultCurrencies: {
      input: polygon['eth'],
      output: polygon['usdc'],
    },
    tokens: [polygon['eth'], polygon['matic'], polygon['wmatic'], polygon['dai'], polygon['usdt'], polygon['usdc']],
  },
};

export { basic, networks };
