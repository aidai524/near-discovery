import { memo } from 'react';
import styled from 'styled-components';

import { excludeChain } from '@/components/Bridge/config/chain';
import useTokenBalance from '@/components/Bridge/hooks/useTokenBalance';
import Loading from '@/components/Icons/Loading';
import useChain from '@/hooks/useChain';
import useBakTokenBalance from '@/hooks/useCurrencyBalance';
import { usePriceStore } from '@/stores/price';
import type { Token } from '@/types';
import { balanceFormated, valueFormated } from '@/utils/balance';

import useTokens from '../hooks/useTokens';

const StyledWrapper = styled.div<{ mt?: number }>`
  text-align: center;
  color: #fff;
  margin-top: ${({ mt }) => mt + 'px'};
`;
const StyledAmount = styled.div`
  font-size: 32px;
  font-weight: 700;
`;
const StyledValue = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const Amount = ({ mt }: { mt?: number }) => {
  const currentChain = useChain();
  const tokens = useTokens();
  const currentToken = tokens?.filter((token) => token.isNative)[0] as Token;

  const { balance, loading } = useTokenBalance({ tokensByChain: currentToken });
  const { balance: balanceBak } = useBakTokenBalance({ isNative: true });
  const price = usePriceStore((store) => store.price);
  let _balance = balance;
  if (currentChain && excludeChain(currentChain.chainId)) {
    _balance = balanceBak as string;
  }

  return (
    <StyledWrapper mt={mt}>
      <StyledAmount>
        {loading ? (
          <Loading />
        ) : currentChain && currentToken ? (
          `${balanceFormated(_balance, 4)} ${currentToken.symbol || currentChain.nativeCurrency.symbol}`
        ) : (
          '--'
        )}
      </StyledAmount>
      <StyledValue>
        ${valueFormated(_balance, currentChain && currentToken ? price[currentToken.symbol] : '')} USD
      </StyledValue>
    </StyledWrapper>
  );
};

export default memo(Amount);
