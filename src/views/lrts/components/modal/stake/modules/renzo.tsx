import useRenzo from '../hooks/useRenzo';
import useApprove from '@/hooks/useApprove';
import BaseComponent from '../components/base-component';
import { memo } from 'react';

function Renzo({ token0, token1, actionType, setShow }: any) {
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
  } = useRenzo({
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
        approved,
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

export default memo(Renzo);
