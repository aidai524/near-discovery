import { useEffect } from 'react';
import BaseComponent from '../components/base-component';
import useKelpDao from '../hooks/useKelpDao';
import useKelpDaoRequests from '../hooks/useKelpDaoRequests';

const KelpDao = function ({ box, gem, dapp, setShow, actionType, handleAddMetaMask, handleChangeActionType, token0, token1, addAction, chainId, onSuccess }: any) {
  const {
    data,
    inAmount,
    setInAmount,
    outAmount,
    isLoading,
    approved,
    approving,
    leastAmount,
    inToken,
    outToken,
    isInSufficient,
    handleApprove,
    handleAmountChange,
    handleMax,
    handleStake,
  } = useKelpDao({
    gem,
    dapp,
    token0,
    token1,
    addAction,
    chainId,
    actionType,
    onSuccess
  })
  const { requests, loading: requestsLoading, queryRequests, claim } = useKelpDaoRequests();

  useEffect(() => {
    actionType === 'unstake' && queryRequests("");
  }, [actionType]);

  return (
    <BaseComponent
      componentProps={{
        box,
        gem,
        dapp,
        data,
        setShow,
        inAmount,
        setInAmount,
        outAmount,
        isLoading,
        approved,
        approving,
        leastAmount,
        actionType,
        inToken,
        outToken,
        handleMax,
        isInSufficient,
        requests,
        requestsLoading,
        queryRequests,
        claim,
        handleApprove,
        handleAmountChange,
        handleStake,
        handleAddMetaMask,
        handleChangeActionType,
      }}
    />
  )
}
export default KelpDao