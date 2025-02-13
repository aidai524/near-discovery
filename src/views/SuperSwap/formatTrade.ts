import Big from 'big.js';

import chains from '@/config/chains';

import checkGas from './checkGas';

const formatTrade = ({
  rawBalance,
  gasPrice,
  market,
  prices,
  inputCurrency,
  outputCurrency,
  inputCurrencyAmount
}: any) => {
  const _gas = !market.txn?.gasLimit
    ? market.gas
    : market.txn?.gasLimit.type === 'BigNumber'
      ? Number(market.txn.gasLimit.hex)
      : Number(market.txn?.gasLimit);

  const { isGasEnough, gas } = checkGas({
    rawBalance,
    gasPrice,
    gasLimit: _gas || 0
  });

  const inputCurrencyPrice = prices[inputCurrency.priceKey || inputCurrency.symbol];
  const outputCurrencyPrice = prices[outputCurrency.priceKey || outputCurrency.symbol];
  let priceImpact = null;
  let priceImpactType = 0;

  // console.log('====inputCurrencyPrice', inputCurrencyPrice)
  // console.log('====outputCurrencyPrice', outputCurrencyPrice)
  if (inputCurrencyPrice && outputCurrencyPrice) {
    if (market.from === 'Unizen') {
      priceImpact = Big(market.priceImpact).toFixed(2);
    } else {
      const poolPrice = Big(inputCurrencyPrice).div(outputCurrencyPrice);
      const amountoutPrice = Big(market.outputCurrencyAmount).div(inputCurrencyAmount);
      priceImpact = poolPrice.minus(amountoutPrice).div(poolPrice).mul(100).abs().toFixed(2);
    }
    if (Big(priceImpact).gt(100)) priceImpact = 100;
    if (
      Big(priceImpact || 0)
        .abs()
        .gt(0)
    ) {
      priceImpactType = 0;
    }

    if (
      Big(priceImpact || 0)
        .abs()
        .gt(1)
    ) {
      priceImpactType = 1;
    }
    if (
      Big(priceImpact || 0)
        .abs()
        .gt(2)
    ) {
      priceImpactType = 2;
    }
  }

  const nativeToken = chains[inputCurrency.chainId].nativeCurrency;

  const nativeTokenPrice = prices[nativeToken.symbol];

  let routerStr = '';

  if (market.routes?.length) {
    market.routes[0].routes.forEach((route: any, i: number) => {
      if (i === 0) {
        routerStr += route.token0.symbol + ' > ' + route.token1.symbol;
      } else {
        routerStr += ' > ' + route.token1.symbol;
      }
    });
  } else {
    routerStr = inputCurrency.symbol + ' > ' + outputCurrency.symbol;
  }

  console.log('====nativeTokenPrice=====', nativeTokenPrice);
  console.log('====gas=====', gas);
  console.log('====nativeToken=====', nativeToken);
  return {
    inputCurrency,
    outputCurrency,
    inputCurrencyAmount,
    name: market.template,
    logo: market.logo,
    txn: market.txn,
    routerAddress: market.routerAddress,
    noPair: market.noPair,
    outputCurrencyAmount: market.outputCurrencyAmount,
    routerStr,
    isGasEnough,
    priceImpact,
    priceImpactType,
    gasUsd: Big(nativeTokenPrice || 0)
      .mul(gas)
      .div(10 ** nativeToken.decimals)
      .toString()
  };
};

export default formatTrade;
