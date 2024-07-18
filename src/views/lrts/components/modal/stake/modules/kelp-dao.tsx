import BaseComponent from '../components/base-component';
import useKelpDao from '../hooks/useKelpDao';

const KelpDao = function ({ box, gem, dapp, setShow, actionType, handleChangeActionType, token0, token1, addAction, chainId }: any) {
  const {
    data,
    inAmount,
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
    handleAddMetaMask,
  } = useKelpDao({
    dapp,
    token0,
    token1,
    addAction,
    chainId,
    actionType
  })
  return (
    <BaseComponent
      componentProps={{
        box,
        gem,
        dapp,
        data,
        setShow,
        inAmount,
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