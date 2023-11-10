import { useCallback, useState } from 'react';

import type { Chain, Token } from '../types';

export default ({
  chains,
  tokens,
}: {
  chainId?: number;
  chains: { [key: number]: Chain };
  tokens: { [key: string]: Token };
}) => {
  const [inputToken, setInputToken] = useState<Token | undefined>(tokens['0x72E2F4830b9E45d52F80aC08CB2bEC0FeF72eD9c']);
  const [outputToken, setOutputToken] = useState<Token | undefined>(
    tokens['0x224d8fd7ab6ad4c6eb4611ce56ef35dec2277f03'],
  );
  const [inputChain, setInputChain] = useState<Chain | undefined>(chains[1]);
  const [outputChain, setOutputChain] = useState<Chain | undefined>(chains[59144]);

  const selectChain = useCallback(
    (type: 'in' | 'out', chain: Chain) => {
      type === 'in' ? setInputChain(chain) : setOutputChain(chain);
      if (type === 'out' && outputToken?.chainId !== chain.chainId) {
        Object.values(tokens).some((token) => {
          if (token.poolId === outputToken?.poolId && token.chainId === chain.chainId) {
            setOutputToken(token);
            return true;
          }
          return false;
        });
      }
      if (type === 'in' && inputToken?.chainId !== chain.chainId) {
        Object.values(tokens).some((token) => {
          if (token.poolId === inputToken?.poolId && token.chainId === chain.chainId) {
            setInputToken(token);
            return true;
          }
          return false;
        });
      }
    },
    [outputToken],
  );
  const selectToken = useCallback(
    (type: 'in' | 'out', token: Token) => {
      setInputToken(token);
      if (!outputChain) {
        setOutputToken(token);
      } else {
        let tempChainId: number | null = null;
        let tempToken: Token | null = null;
        const result = Object.values(tokens).some((_token) => {
          if (_token.poolId === token.poolId) {
            tempChainId = _token.chainId;
            tempToken = _token;
          }
          if (token.poolId === _token.poolId && _token.chainId === outputChain.chainId) {
            setOutputToken(token);
            return true;
          }
          return false;
        });
        if (!result && tempChainId && tempToken) {
          setOutputChain(chains[tempChainId]);
          setOutputToken(tempToken);
        }
        console.log('result', result);
      }

      if (token.chainId !== inputChain?.chainId) {
        setInputChain(chains[token.chainId]);
      }
      if (token.chainId === outputChain?.chainId) setOutputChain(undefined);
    },
    [inputChain],
  );

  const onExchange = useCallback(() => {
    const [_outputToken, _inputToken] = [inputToken, outputToken];
    const [_outputChain, _inputChain] = [inputChain, outputChain];
    setInputChain(_inputChain);
    setOutputChain(_outputChain);
    setInputToken(_inputToken);
    setOutputToken(_outputToken);
  }, [inputToken, outputToken, inputChain, outputChain]);

  return { inputToken, outputToken, inputChain, outputChain, selectChain, selectToken, onExchange };
};
