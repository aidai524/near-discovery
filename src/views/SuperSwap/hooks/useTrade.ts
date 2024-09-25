import Big from 'big.js';
import { providers } from 'ethers';
import { useCallback, useEffect, useRef, useState } from 'react';

import chains from '@/config/chains';
import weth from '@/config/contract/weth';
import networks from '@/config/swap/networks';
import useAccount from '@/hooks/useAccount';
import useAddAction from '@/hooks/useAddAction';
import useToast from '@/hooks/useToast';
import { usePriceStore } from '@/stores/price';
import { useSettingsStore } from '@/stores/settings';
import type { Token } from '@/types';

import customTokens from '../config/tokens';
import getAggregatorTokens from '../utils/getAggregatorTokens';
import { getTxs, getWrapTx, LEN, updateDappTx } from '../utils/getTxs';
import { useUpdateBalanceStore } from './useUpdateBalanceStore';

export default function useTrade({ chainId }: any) {
  const slippage: any = useSettingsStore((store: any) => store.slippage);
  const [tokens, setTokens] = useState<Token[]>();
  const [tokensLoading, setTokensLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [markets, setMarkets] = useState<any>([]);
  const [trade, setTrade] = useState<any>();
  const [bestTrade, setBestTrade] = useState<any>();
  const { provider, account } = useAccount();
  const toast = useToast();
  const { addAction } = useAddAction('superswap');
  const lastestCachedKey = useRef('');
  const prices = usePriceStore((store) => store.price);
  const cachedMarkets = useRef<any[]>([]);
  const cachedCount = useRef<number>(0);
  const cachedChainId = useRef<number>();
  const [quoting, setQuoting] = useState(false);
  const { setUpdater } = useUpdateBalanceStore();
  const timerRef = useRef<any>(null);

  const getTokens = useCallback(async () => {
    try {
      setTokensLoading(true);
      const tokens = await getAggregatorTokens(chainId);
      if (tokens.length === 0) {
        const network = networks[chainId];
        const dexs = network?.dexs;
        Object.values(dexs).forEach((dex: any) => {
          dex.tokens.forEach((token: any) => {
            tokens.push({ ...token, usd: prices[token.symbol] || prices[token.priceKey] });
          });
        });
      }
      const _customTokens = (customTokens[chainId] || []).map((token: any) => ({
        ...token,
        usd: prices[token.symbol] || prices[token.priceKey]
      }));

      setTokens([...tokens, ..._customTokens]);
    } catch (err) {
      setTokens([]);
    } finally {
      setTokensLoading(false);
    }
  }, [chainId, prices]);

  const onQuoter = async ({ inputCurrency, outputCurrency, inputCurrencyAmount }: any) => {
    clearTimeout(timerRef.current);
    if (!inputCurrency) return;
    const wethAddress = weth[inputCurrency.chainId];
    const wrapType =
      inputCurrency.isNative && outputCurrency.address === wethAddress
        ? 1
        : inputCurrency.address === wethAddress && outputCurrency.isNative
          ? 2
          : 0;

    const amount = Big(inputCurrencyAmount)
      .mul(10 ** inputCurrency.decimals)
      .toString();
    lastestCachedKey.current = `${inputCurrency.address}-${outputCurrency.address}-${inputCurrencyAmount}`;

    try {
      setLoading(true);
      setQuoting(true);
      setMarkets([]);

      const rpcUrl = chains[chainId]?.rpcUrls[0];

      const _provider = rpcUrl ? new providers.JsonRpcProvider(rpcUrl) : provider;

      let rawBalance = 0;

      if (account) {
        rawBalance = await _provider.getBalance(account);
      }
      const gasPrice = await _provider.getGasPrice();

      if (wrapType) {
        const { txn, gas, isGasEnough } = await getWrapTx({
          wethAddress,
          wrapType,
          amount,
          rawBalance,
          gasPrice,
          inputCurrency,
          inputCurrencyAmount,
          outputCurrency
        });
        setTrade({
          inputCurrency,
          inputCurrencyAmount,
          outputCurrency,
          outputCurrencyAmount: inputCurrencyAmount,
          noPair: false,
          txn,
          routerAddress: wethAddress,
          gas,
          isGasEnough,
          wrapType
        });
        setLoading(false);
        setMarkets([]);
        return;
      }

      cachedMarkets.current = [];
      cachedCount.current = 0;

      const onQuoterCallback = (_markets: any) => {
        if (`${inputCurrency.address}-${outputCurrency.address}-${inputCurrencyAmount}` !== lastestCachedKey.current) {
          return;
        }
        if (cachedChainId.current !== inputCurrency.chainId) {
          return;
        }

        const marketsObj: any = {};

        [..._markets, ...cachedMarkets.current].forEach((market: any) => {
          const item = marketsObj[market.name];
          if (!item) {
            marketsObj[market.name] = market;
            return;
          }
          if (Big(item.outputCurrencyAmount).lt(market.outputCurrencyAmount)) {
            marketsObj[market.name] = market;
          }
        });

        const mergedMarkets = Object.values(marketsObj).sort(
          (a: any, b: any) => b.outputCurrencyAmount - a.outputCurrencyAmount
        );

        setLoading(false);
        setBestTrade(mergedMarkets?.[0] || null);
        setTrade(mergedMarkets?.[0] || null);
        setMarkets(mergedMarkets);
        cachedMarkets.current = mergedMarkets;
        cachedCount.current = cachedCount.current + 1;

        if (cachedCount.current === LEN) {
          setQuoting(false);
          timerRef.current = setTimeout(() => {
            onQuoter({ inputCurrency, outputCurrency, inputCurrencyAmount });
          }, 60000);
        }
      };

      const onQuoterError = () => {
        if (`${inputCurrency.address}-${outputCurrency.address}-${inputCurrencyAmount}` !== lastestCachedKey.current) {
          return;
        }
        if (cachedChainId.current !== inputCurrency.chainId) {
          return;
        }
        if (cachedCount.current === LEN) {
          setLoading(false);
          cachedCount.current = 0;
          cachedMarkets.current = [];
          setQuoting(false);
          timerRef.current = setTimeout(() => {
            onQuoter({ inputCurrency, outputCurrency, inputCurrencyAmount });
          }, 60000);
          return;
        }
        cachedCount.current = cachedCount.current + 1;
      };

      getTxs({
        inputCurrency,
        outputCurrency,
        inputCurrencyAmount,
        amount,
        slippage,
        account,
        rawBalance,
        gasPrice,
        prices,
        onCallBack: onQuoterCallback,
        onError: onQuoterError
      });
    } catch (err) {
      setTrade({
        inputCurrency,
        inputCurrencyAmount,
        outputCurrency,
        outputCurrencyAmount: '',
        noPair: true,
        txn: null,
        routerAddress: ''
      });
      setLoading(false);
      setQuoting(false);
      setMarkets([]);
    }
  };

  const onSwap = useCallback(async () => {
    const signer = provider.getSigner(account);
    const wethAddress = weth[trade.inputCurrency.chainId];

    setLoading(true);
    let toastId = toast.loading({ title: 'Confirming...' });
    try {
      const tx = await signer.sendTransaction(trade.txn);
      toast.dismiss(toastId);
      toastId = toast.loading({ title: 'Pending...', tx: tx.hash, chainId });
      const { status, transactionHash } = await tx.wait();
      setLoading(false);
      toast.dismiss(toastId);

      if (status === 1) {
        setUpdater(Date.now());
        toast.success({ title: `Swap successfully!`, tx: transactionHash, chainId });
      } else {
        toast.fail({ title: `Swap faily!` });
      }
      addAction({
        type: 'Swap',
        inputCurrencyAmount: trade.inputCurrencyAmount,
        inputCurrency: trade.inputCurrency,
        outputCurrencyAmount: trade.outputCurrencyAmount,
        outputCurrency: trade.outputCurrency,
        template: wethAddress === trade.routerAddress ? 'Wrap and Unwrap' : trade.name,
        status,
        transactionHash,
        add: 0,
        token_in_currency: trade.inputCurrency,
        token_out_currency: trade.outputCurrency
      });
      setLoading(false);
    } catch (err: any) {
      toast.dismiss(toastId);
      toast.fail({
        title: err?.message?.includes('user rejected transaction') ? 'User rejected transaction' : `Swap faily!`
      });
      console.log(err);
      setLoading(false);
    }
  }, [account, provider, trade]);

  const onUpdateTxn = async (_trade: any) => {
    const rawBalance = await provider.getBalance(account);
    const gasPrice = await provider.getGasPrice();
    setLoading(true);
    updateDappTx({
      trade: _trade,
      slippage,
      account,
      rawBalance,
      gasPrice,
      prices,
      onSuccess: (record: any) => {
        setTrade(record);
        setLoading(false);
      },
      onError: () => {
        setLoading(false);
      }
    });
  };

  const onSelectMarket = async (market: any) => {
    setTrade(market);
  };

  useEffect(() => {
    if (chainId) getTokens();
    setMarkets([]);
    setTrade(null);
    setLoading(false);
    setQuoting(false);
    cachedChainId.current = chainId;
  }, [chainId]);

  return {
    tokens,
    tokensLoading,
    loading,
    quoting,
    markets,
    trade,
    bestTrade,
    onQuoter,
    onSelectMarket,
    onSwap,
    setTrade,
    onUpdateTxn,
    setMarkets
  };
}
