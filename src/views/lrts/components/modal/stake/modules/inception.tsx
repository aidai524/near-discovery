import useInception from '../hooks/useInception';
import useApprove from '@/hooks/useApprove';
import BaseComponent from '../components/base-component';
import { memo, useState } from 'react';

function Inception({ token0, token1, actionType, handleChangeActionType, setShow }: any) {
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
  } = useInception({
    token0,
    token1,
    actionType,
    dapp,
  });
  const { approve, approved, approving } = useApprove({
    amount: inAmount,
    token: inToken.isNative ? null : inToken,
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
        approved: inToken.isNative || actionType === 'unstake' ? true : approved,
        approving,
        leastAmount: 0,
        actionType,
        inToken,
        outToken,
        isInSufficient,
        dapp,
        handleApprove: approve,
        handleAmountChange,
        handleStake,
        handleChangeActionType
      }}
    />
  );
}

export default memo(Inception);
