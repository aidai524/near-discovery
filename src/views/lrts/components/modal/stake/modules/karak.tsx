import useKarak from '../hooks/useKarak';
import useApprove from '@/hooks/useApprove';
import BaseComponent from '../components/base-component';
import { memo } from 'react';

function Karak({ token0, token1, actionType, setShow }: any) {
  const {
    data,
    inAmount,
    outAmount,
    inToken,
    outToken,
    isInSufficient,
    isLoading,
    spender,
    handleAmountChange,
    handleStake,
  } = useKarak({
    token0,
    token1,
    actionType,
  });
  const { approve, approved, approving } = useApprove({
    amount: inAmount,
    token: inToken,
    spender: spender,
  });
  return (
    <BaseComponent
      componentProps={{
        data,
        inAmount,
        outAmount,
        isLoading: approving || isLoading,
        setShow,
        approved: actionType === 'unstake' ? true : approved,
        approving,
        leastAmount: 0,
        actionType,
        inToken,
        outToken,
        isInSufficient,
        handleApprove: approve,
        handleAmountChange,
        handleStake,
      }}
    />
  );
}

export default memo(Karak);
