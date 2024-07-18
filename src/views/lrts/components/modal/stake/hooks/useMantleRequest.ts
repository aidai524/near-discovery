import useAccount from '@/hooks/useAccount';
import useAddAction from '@/hooks/useAddAction';
import useToast from '@/hooks/useToast';
import abi from '@/views/lrts/config/abi/lido';
import { ethers } from 'ethers';
import { useCallback, useState } from 'react';
import { contracts } from './useInception';
import { ethereum } from '@/config/tokens/ethereum';

type Record = {
  amount: number;
  token0: any;
  token1: any;
  txId?: string;
  startTime: string;
  status: 'In Progress' | 'Claimable';
  data: any;
};

const {
  WITHDRAWAL_QUEUE_ABI
} = abi
const WITHDRAWAL_QUEUE = '0x889edC2eDab5f40e902b864aD4d7AdE8E412F9B1';

export default function useInceptionRequests() {
  const { account, chainId, provider } = useAccount();
  const [requests, setRequests] = useState<Record[]>([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { addAction } = useAddAction('lrts');

  const token0 = ethereum['eth']
  const token1 = ethereum['mETH']


  const queryRequests = useCallback(
    async () => {
      if (!chainId) return;
      setLoading(true);
      try {
        const response = await fetch('https://lsd-indexer.mantle.xyz', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: "\n  query unclaimedRequests($address: String!) {\n    unstakeRequests(where: { requester: $address, isClaimed: false }) {\n      id\n      requestedAt\n      ethAmountWei\n      mEthLockedWei\n    }\n  }\n",
            variables: {
              address: account?.toLocaleLowerCase()
            }
          })
        })
        const result = await response.json()
        console.log('===response', response, '===result', result)
        setRequests([]);
        setLoading(false);
      } catch (err) {
        console.log('err', err);
        setLoading(false);
        setRequests([]);
      }
    },
    [account, chainId],
  );

  const claim = useCallback(
    async (record: any, onLoading: any) => {
      if (!chainId) return;
      const contract = new ethers.Contract(WITHDRAWAL_QUEUE, WITHDRAWAL_QUEUE_ABI, provider?.getSigner())
      onLoading(true);
      let toastId = toast.loading({ title: 'Confirming...' });
      try {
        const _requestIds = [record?.data?.requestId]
        const _lastIndex = await contract.getLastCheckpointIndex()
        console.log('=_lastIndex', _lastIndex)
        const _hints = await contract.findCheckpointHints(_requestIds, 1, _lastIndex)
        const tx = await contract.claimWithdrawals(_requestIds, _hints);
        toast.dismiss(toastId);
        toastId = toast.loading({ title: 'Pending...', tx: tx.hash, chainId });
        const { status, transactionHash } = await tx.wait();
        toast.dismiss(toastId);
        if (status === 1) {
          toast.success({ title: `Claim successfully!`, tx: transactionHash, chainId });
        } else {
          toast.fail({ title: `Claim faily!` });
        }
        addAction({
          type: 'Staking',
          action: 'Claim',
          amount: record.amount,
          template: 'Lido',
          status,
          transactionHash,
          add: 0,
          extra_data: JSON.stringify({
            action: 'Claim',
            token0: record.token0.symbol,
            token1: record.token1.symbol,
          }),
        });
        onLoading(false);
      } catch (err: any) {
        console.log('err', err);
        toast.dismiss(toastId);
        toast.fail({
          title: err?.message?.includes('user rejected transaction') ? 'User rejected transaction' : `Claim faily!`,
        });
        onLoading(false);
      }
    },
    [account],
  );

  return {
    requests,
    loading,
    queryRequests,
    claim,
  };
}
