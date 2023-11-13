import Big from 'big.js';
import { utils } from 'ethers';
import { debounce } from 'lodash';
import { memo, useCallback, useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import useAccount from '@/hooks/useAccount';
import useTokenBalance from '@/hooks/useCurrencyBalance';
import Button from './components/Button';
import Destination from './components/Destination';
import DialogChains from './components/DialogChains';
import DialogTokens from './components/DialogTokens';
import Input from './components/Input';
import Routes from './components/Routes';
import Select from './components/Select';
import ExchangeIcon from '../Icons/ExchangeIcon';
import useBestRoute from './hooks/useBestRoute';
import useBridge from './hooks/useBridge';
import useDestination from './hooks/useDestination';
import useTokensAndChains from './hooks/useTokensAndChains';
import type { Chain, Token } from './types';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: transparent;
  color: red;
`;
const Empty = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #979abe;
  text-align: center;
`;
const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #979abe;
  margin-top: 10px;
`;
const StyledExchangeIcon = styled.div`
  color: #979abe;
  width: 30px;
  height: 30px;
  margin: 20px auto 0px;
`;

const Bridge = ({ onSuccess }: { onSuccess: () => void }) => {
  const [showTokenDialog, setShowTokenDialog] = useState<boolean>(false);
  const [showChainDialog, setShowChainDialog] = useState<boolean>(false);
  const [selectedTokenAddress, setSelectedTokenAddress] = useState<string>('');
  const [selectedChainId, setSelectedChainId] = useState<number>();
  const [selectableChains, setSelectableChains] = useState<Chain[]>([]);
  const [errorTips, setErrorTips] = useState<string>('');
  const [clickType, setClickType] = useState<'in' | 'out'>();
  const [, setUpdater] = useState<number>(0);
  const [amount, setAmount] = useState<string>();
  const { account, chainId } = useAccount();
  const { tokens, chains } = useTokensAndChains();
  const { inputToken, outputToken, inputChain, outputChain, selectToken, selectChain, onExchange } = useBridge({
    chains,
    tokens,
  });
  const { balance, loading } = useTokenBalance({ currency: inputToken, updater: 0 });
  const { balance: nativeTokenBalance } = useTokenBalance({
    isPure: true,
    currency: { chainId: inputChain?.chainId || 1, symbol: '', icon: '', decimals: 18, isNative: true },
    updater: 0,
  });
  const { checked, setChecked, destination, setDestination } = useDestination();
  const { getBestRoute, gasCost, trade, checking, swap, swaping } = useBestRoute();
  const selectableTokens = useMemo<Token[]>(() => {
    return Object.values(tokens)
      .filter((token) => (inputChain?.chainId || 1) === token.chainId)
      .sort((a, b) => {
        return a.chainId === inputChain?.chainId ? -1 : 1;
      });
  }, [inputChain]);

  const handleBestRoute = useCallback(() => {
    if (!inputChain || !outputChain || !outputToken || inputChain.chainId === outputChain.chainId) return;
    getBestRoute({ chain: inputChain, targetToken: outputToken, targetChain: outputChain, amount });
  }, [inputChain, outputChain, outputToken, amount]);

  const debouncedBestRoute = debounce(handleBestRoute, 500);

  useEffect(() => {
    if (!amount || new Big(amount).eq(0)) {
      setErrorTips('Enter An Amount');
      return;
    }
    if (inputChain?.chainId === outputChain?.chainId) {
      setErrorTips('Select different network');
      return;
    }
    if (!inputChain || !outputChain) {
      setErrorTips('Select a network');
      return;
    }
    if (!inputToken || !outputToken) {
      setErrorTips('Select a token');
      return;
    }
    if (destination && !utils.isAddress(destination)) {
      setErrorTips('Change destination address');
      return;
    }
    if (amount) {
      if (new Big(amount).gt(balance || 0)) {
        setErrorTips('Insufficient balance');
        return;
      }
    }
    if (gasCost && new Big(gasCost).gt(nativeTokenBalance || 0)) {
      setErrorTips('Not enough gas');
      return;
    }
    if (!trade && !checking) {
      setErrorTips('Relayer: gas too low');
      return;
    }
    setErrorTips('');
  }, [inputChain, outputChain, amount, balance, destination, chainId, gasCost, nativeTokenBalance, trade]);

  useEffect(() => {
    debouncedBestRoute();
  }, [inputChain, outputChain, amount, outputToken]);

  return (
    <Container>
      {!account && <Empty>Please connect wallet.</Empty>}
      {chainId && !chains[chainId] && (
        <Container>
          <Empty>Comming soon.</Empty>
        </Container>
      )}
      {account && chainId && chains[chainId] && (
        <>
          <>
            <Label>From</Label>
            <Select token={inputToken} chain={inputChain} />
          </>
          <StyledExchangeIcon onClick={onExchange}>
            <ExchangeIcon />
          </StyledExchangeIcon>
          <>
            <Label>To</Label>
            <Select token={outputToken} chain={outputChain} tokenDisabled />
          </>
          <Input
            balance={balance}
            loading={loading}
            amount={amount}
            onChange={(value: string) => {
              setAmount(value);
            }}
          />
          <Destination
            checked={checked}
            setChecked={setChecked}
            destination={destination}
            setDestination={setDestination}
          />
          <Routes trade={trade} />
          <Button
            errorTips={errorTips}
            inputToken={inputToken}
            outputToken={outputToken}
            amount={amount}
            inputChain={inputChain}
            outputChain={outputChain}
            destination={destination}
            chainId={chainId}
            checking={checking}
            swap={swap}
            swaping={swaping}
            onSuccess={(hash) => {
              setUpdater(Date.now());
              onSuccess();
            }}
          />
        </>
      )}
      <DialogChains
        display={showChainDialog}
        chains={selectableChains}
        currentChainId={selectedChainId}
        onClose={() => {
          setShowChainDialog(false);
        }}
        onSelect={(chain: Chain) => {
          clickType && selectChain(clickType, chain);
          setShowChainDialog(false);
        }}
      />
      <DialogTokens
        display={showTokenDialog}
        chains={chains}
        tokens={selectableTokens}
        currentToken={selectedTokenAddress}
        currentChainId={selectedChainId}
        onClose={() => {
          setShowTokenDialog(false);
        }}
        onSelect={(token: Token) => {
          clickType && selectToken(clickType, token);
          setShowTokenDialog(false);
        }}
      />
    </Container>
  );
};

export default memo(Bridge);
