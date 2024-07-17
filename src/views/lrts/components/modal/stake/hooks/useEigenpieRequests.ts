import { ethereum } from '@/config/tokens/ethereum';
import { useCallback, useState } from 'react';
import useAccount from '@/hooks/useAccount';
import useToast from '@/hooks/useToast';
import useAddAction from '@/hooks/useAddAction';
import Big from 'big.js';
import { ethers } from 'ethers';
import abi from '../../../../config/abi/eigenpie';

type Record = {
  amount: number;
  token0: any;
  token1: any;
  txId?: string;
  startTime: string;
  status: 'In Progress' | 'Claimable';
  data: any;
};

const contracts: { [key: number]: any } = {
  1: {
    eigenStaking: '0x24db6717db1c75b9db6ea47164d8730b63875db7',
    withdrawManager: '0x98083e22d12497c1516d3c49e7cc6cd2cd9dcba4',
  },
};

const tokens: { [key: string]: any } = {
  [ethereum.stETH.address]: {
    from: ethereum.mstETH,
    to: ethereum.stETH,
  },
  [ethereum.mETH.address]: {
    from: ethereum.mmETH,
    to: ethereum.mETH,
  },
  [ethereum.sfrxETH.address]: {
    from: ethereum.msfrxETH,
    to: ethereum.sfrxETH,
  },
  [ethereum.rETH.address]: {
    from: ethereum.mrETH,
    to: ethereum.rETH,
  },
};

export default function useEigenpieRequests() {
  const { account, chainId, provider } = useAccount();
  const [requests, setRequests] = useState<Record[]>([]);
  const [loading, setLoading] = useState(false);
  const [claiming, setClaiming] = useState(false);
  const toast = useToast();
  const { addAction } = useAddAction('lrts');

  const queryRequests = useCallback(
    async (asset?: any) => {
      if (!chainId || !contracts[chainId]) return;
      setLoading(true);

      try {
        const Contract = new ethers.Contract(contracts[chainId].withdrawManager, abi, provider?.getSigner());
        const result = await Contract.getUserQueuedWithdraw(account, asset ? [asset] : Object.keys(tokens));
        if (!result) throw Error('');

        const _list: any = [];

        Object.values(tokens).forEach((token: any, i: number) => {
          const claimableAmount = result.claimableAmounts[i];
          const queuedAmount = result.queuedAmounts[i];
          if (claimableAmount && claimableAmount.gt(0)) {
            _list.push({
              amount: Big(claimableAmount).div(1e18).toFixed(3),
              token0: tokens[token].from,
              token1: tokens[token].to,
              status: 'Claimable',
              data: {
                asset: token,
              },
            });
          }
          if (queuedAmount && queuedAmount.gt(0)) {
            _list.push({
              amount: Big(queuedAmount).div(1e18).toFixed(3),
              token0: tokens[token].from,
              token1: tokens[token].to,
              status: 'In Progress',
              data: {
                asset: token,
              },
            });
          }
        });
        setRequests(_list);

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
    async (record: any) => {
      if (!chainId || !contracts[chainId]) return;
      setClaiming(true);
      let toastId = toast.loading({ title: 'Confirming...' });
      try {
        const Contract = new ethers.Contract(contracts[chainId].withdrawManager, abi, provider?.getSigner());

        const tx = await Contract.userWithdrawAsset([record.data.asset]);
        toast.dismiss(toastId);
        toastId = toast.loading({ title: 'Pending...', tx: tx.hash, chainId });

        const { status, transactionHash } = await tx.wait();
        setLoading(false);
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
          template: 'Eigenpie',
          status,
          transactionHash,
          add: 0,
          extra_data: JSON.stringify({
            action: 'Claim',
            token0: record.token0.symbol,
            token1: record.token1.symbol,
          }),
        });
        setClaiming(false);
      } catch (err: any) {
        console.log('err', err);
        toast.dismiss(toastId);
        toast.fail({
          title: err?.message?.includes('user rejected transaction') ? 'User rejected transaction' : `Claim faily!`,
        });
        setClaiming(false);
      }
    },
    [account],
  );

  return {
    requests,
    loading,
    claiming,
    queryRequests,
    claim,
  };
}
