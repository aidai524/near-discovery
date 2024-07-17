import useRenzo from '../hooks/useRenzo';
import useApprove from '@/hooks/useApprove';
import BaseComponent from '../components/base-component';
import { memo } from 'react';

function Renzo({ box, gem, dapp, token0, token1, setShow, actionType, handleChangeActionType }: any) {
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
    dapp: gem,
  });
  const { approve, approved, approving } = useApprove({
    amount: inAmount,
    token: inToken,
    spender: spender,
  });
  return (
    <BaseComponent
      componentProps={{
        box,
        gem,
        dapp,
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
        dapp: gem,
        handleApprove: approve,
        handleAmountChange,
        handleStake,
        handleChangeActionType,
      }}
    />
  );
}

export default memo(Renzo);
