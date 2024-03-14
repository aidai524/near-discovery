import { metis } from '@/config/tokens/metis';

const basic = {
  name: 'Maia V3',
  logo: '/images/apps/maia.png',
  amountOutFn: 'bluebiu.near/widget/Swap.Data.ApertureSwapAmountOut',
};
const networks = {
  1088: {
    factoryAddress: '0xf5fd18Cd5325904cC7141cB9Daca1F2F964B9927',
    routerAddress: '0x07Da720AD5E434971dbe77C7fC85b7b44d5aC704',
    quoterAddress: '0x2db8b665CE6928F9D1a7f83F4C6aCEA64Af6a6f6',
    fees: [100, 500, 3000, 10000],
    defaultCurrencies: {
      input: metis['eth'],
      output: metis['m.usdc'],
    },
    tokens: [metis['eth'], metis['m.usdc'], metis['metis'], metis['m.usdt'], metis['maia']],
  },
};

export { basic, networks };
