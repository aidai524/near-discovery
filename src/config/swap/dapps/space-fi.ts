import { zkSync } from '@/config/tokens/zkSync';
import { scroll } from '@/config/tokens/scroll';

const basic = {
  name: 'SpaceFi',
  logo: '/images/apps/space-fi.png',
  amountOutFn: 'bluebiu.near/widget/Swap.Data.AmountOut',
};
const networks = {
  324: {
    defaultCurrencies: {
      input: zkSync['eth'],
      output: zkSync['usdc'],
    },
    tokens: [
      zkSync['eth'],
      zkSync['usdc'],
      zkSync['wbtc'],
      zkSync['space'],
      zkSync['cebnb'],
      zkSync['usdt'],
      zkSync['cebusd'],
    ],
  },
  534352: {
    defaultCurrencies: {
      input: scroll['weth'],
      output: scroll['usdc'],
    },
    tokens: [
      scroll['weth'],
      scroll['usdc'],
      scroll['usdt'],
      scroll['lusd'],
      scroll['reth'],
      scroll['aave'],
      scroll['crv'],
      scroll['wbtc'],
    ],
  },
};

export { basic, networks };
