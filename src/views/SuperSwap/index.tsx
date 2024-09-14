import { useDebounceFn } from 'ahooks';
import Big from 'big.js';
import { useCallback, useEffect, useState } from 'react';

import networks from '@/config/swap/networks';
import useAccount from '@/hooks/useAccount';
import useSwitchChain from '@/hooks/useSwitchChain';
import type { Token } from '@/types';

import Arrow2Down from './components/Arrow2Down';
import Button from './components/Button';
import Header from './components/Header';
import InputCard from './components/InputCard';
import MarketsModal from './components/MarketsModal';
// import KLineChart from './components/KLineChart';
import PriceBoard from './components/PriceBoard';
import Result from './components/Result';
import SelectTokensModal from './components/SelectTokensModal';
import useTrade from './hooks/useTrade';
import {
  StyledAmount,
  StyledContainer,
  StyledContent,
  StyledInputs,
  StyledTradeFooter,
  StyledTradeIcon,
  StyleProviderHeader
} from './styles';

export default function SuperSwap() {
  const { chainId } = useAccount();
  const [updater, setUpdater] = useState(1);
  const [inputCurrencyAmount, setInputCurrencyAmount] = useState<string>('');
  const [inputCurrency, setInputCurrency] = useState<Token>();
  const [outputCurrency, setOutputCurrency] = useState<Token>();
  const [selectType, setSelectType] = useState<'in' | 'out'>('in');
  const [showTokensSelector, setShowTokensSelector] = useState<boolean>(false);
  const [showMarkets, setShowMarkets] = useState<boolean>(false);
  const [errorTips, setErrorTips] = useState('');
  const [inputBlance, setInputBalance] = useState('0');
  // const [showChart, setShowChart] = useState(false);
  const { switchChain } = useSwitchChain();
  const { tokens, loading, markets, trade, bestTrade, onQuoter, onSelectMarket, onSwap, setTrade } = useTrade({
    chainId,
    onSuccess() {
      setUpdater(Date.now());
    }
  });

  const { run: runQuoter } = useDebounceFn(
    () => {
      onQuoter({ inputCurrency, outputCurrency, inputCurrencyAmount });
    },
    {
      wait: 500
    }
  );

  const onSelectToken = useCallback(
    (token: any) => {
      let _inputCurrency: any = inputCurrency;
      let _outputCurrency: any = outputCurrency;

      if (selectType === 'in') {
        _inputCurrency = token;
        if (token.address === outputCurrency?.address) _outputCurrency = null;
      }
      if (selectType === 'out') {
        _outputCurrency = token;
        if (token.address === inputCurrency?.address) _inputCurrency = null;
      }

      setInputCurrency(_inputCurrency);
      setOutputCurrency(_outputCurrency);
      setShowTokensSelector(false);
    },
    [selectType, inputCurrency, outputCurrency, inputCurrencyAmount]
  );

  useEffect(() => {
    if (!inputCurrency || !outputCurrency) {
      setErrorTips('Select a token');
      return;
    }
    if (Number(inputCurrencyAmount || 0) === 0) {
      setErrorTips('Enter an amount');
      return;
    }
    if (Big(inputCurrencyAmount).gt(inputBlance)) {
      setErrorTips(`Insufficient ${inputCurrency?.symbol} Balance`);
    } else {
      setErrorTips('');
    }

    onSelectMarket(null);
    runQuoter();
  }, [inputCurrency, outputCurrency, inputCurrencyAmount, inputBlance]);

  useEffect(() => {
    if (!chainId) return;
    setInputCurrencyAmount('');
    setTrade(null as any);
    setInputCurrency(networks[chainId].defalutInputCurrency);
    setOutputCurrency(null as any);
  }, [chainId]);

  const swapToken = useCallback(() => {
    const tempInputCurrency = inputCurrency;
    const tempOutputCurrency = outputCurrency;

    setInputCurrency(tempOutputCurrency);
    setOutputCurrency(tempInputCurrency);

    setSelectType('in');

    if (trade) {
      setInputCurrencyAmount(trade.outputCurrencyAmount);
      setTimeout(() => {
        runQuoter();
      }, 0);
    }
  }, [inputCurrency, outputCurrency, trade, runQuoter]);

  const onSelectChain = useCallback((chainId: number) => {
    switchChain({ chainId });
  }, []);

  return (
    <StyledContainer>
      <StyledContent>
        <Header />
        <StyledInputs>
          <InputCard
            title="You pay"
            isFrom={true}
            amount={inputCurrencyAmount}
            currency={inputCurrency}
            onAmountChange={(amount: any) => {
              setInputCurrencyAmount(amount);
            }}
            key={`in-${updater}`}
            onTokenSelect={() => {
              setSelectType('in');
              setShowTokensSelector(true);
            }}
            onLoad={(balance: string) => {
              setInputBalance(balance);
            }}
            loading={loading}
            onRefresh={() => {
              if (loading) return;
              onQuoter({ inputCurrency, outputCurrency, inputCurrencyAmount });
            }}
          />
          <StyledTradeIcon disabled={false} onClick={swapToken}>
            <Arrow2Down />
          </StyledTradeIcon>
          <InputCard
            title="Receive"
            amount={trade?.outputCurrencyAmount}
            currency={outputCurrency}
            disabled
            key={`out-${updater}`}
            onTokenSelect={() => {
              setSelectType('out');
              setShowTokensSelector(true);
            }}
            style={{ marginTop: 6 }}
          />
        </StyledInputs>
        <StyledTradeFooter>
          {/* {trade && <Result markets={markets} trade={trade} bestTrade={bestTrade} showChart={showChart} onShowChart={() => setShowChart(!showChart)} />} */}
          {trade && <Result markets={markets} trade={trade} bestTrade={bestTrade}></Result>}
        </StyledTradeFooter>

        <Button
          amount={inputCurrencyAmount}
          errorTips={errorTips}
          trade={trade}
          token={inputCurrency}
          loading={loading}
          onClick={onSwap}
          disabled={!trade?.txn}
        />

        {trade && (
          <StyleProviderHeader>
            <StyledAmount
              onClick={() => {
                if (!markets?.length) return;
                setShowMarkets(true);
              }}
            >
              {markets?.length || 0} Providers
            </StyledAmount>
          </StyleProviderHeader>
        )}

        {/* { trade && showChart && <KLineChart trade={trade} /> } */}
      </StyledContent>
      <PriceBoard onSelectChain={onSelectChain} />
      <SelectTokensModal
        tokens={tokens || []}
        display={showTokensSelector}
        onClose={() => setShowTokensSelector(false)}
        currency={selectType === 'in' ? inputCurrency : outputCurrency}
        onSelect={onSelectToken}
      />
      {showMarkets && outputCurrency && (
        <MarketsModal
          display={showMarkets}
          onClose={() => {
            setShowMarkets(false);
          }}
          markets={markets}
          trade={trade}
          bestTrade={bestTrade}
          outputCurrency={outputCurrency}
          onSelectMarket={onSelectMarket}
        />
      )}
    </StyledContainer>
  );
}
