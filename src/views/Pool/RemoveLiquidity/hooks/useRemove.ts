import Big from 'big.js';
import { utils } from 'ethers';
import { useCallback, useState } from 'react';
import useAccount from '@/hooks/useAccount';
import useToast from '@/hooks/useToast';
import useDappConfig from '../../hooks/useDappConfig';
import positionAbi from '../../abi/position';

export default function useRemove({ detail, percent, onSuccess }: any) {
  const [loading, setLoading] = useState(false);
  const { contracts } = useDappConfig();
  const { account, chainId, provider } = useAccount();
  const toast = useToast();

  const onRemove = useCallback(async () => {
    if (!chainId) return;
    let toastId = toast.loading({ title: 'Confirming...' });
    try {
      setLoading(true);
      const liquidity = new Big(detail.liquidity).mul(percent / 100).toFixed(0);
      const hasNativeToken = detail.token0.isNative ? detail.token0 : detail.token1.isNative ? detail.token1 : '';
      const deadline = Math.ceil(Date.now() / 1000) + 180;
      const Interface = new utils.Interface(positionAbi);
      const calldatas: string[] = [];

      calldatas.push(
        Interface.encodeFunctionData('decreaseLiquidity', [
          {
            tokenId: detail.tokenId,
            liquidity,
            amount0Min: 0,
            amount1Min: 0,
            deadline,
          },
        ]),
      );

      const { PositionManager } = contracts[chainId];

      calldatas.push(
        Interface.encodeFunctionData('collect', [
          {
            tokenId: detail.tokenId,
            recipient: hasNativeToken ? PositionManager : account,
            amount0Max: '340282366920938463463374607431768211455',
            amount1Max: '340282366920938463463374607431768211455',
          },
        ]),
      );

      if (hasNativeToken) {
        calldatas.push(Interface.encodeFunctionData('unwrapWETH9', ['0', account]));
        calldatas.push(
          Interface.encodeFunctionData('sweepToken', [
            hasNativeToken.address === detail.token0.address ? detail.token1.address : detail.token0.address,
            '0',
            account,
          ]),
        );
      }

      const txn: any = {
        to: PositionManager,
        data: calldatas.length === 1 ? calldatas[0] : Interface.encodeFunctionData('multicall', [calldatas]),
      };

      const signer = provider.getSigner(account);

      let estimateGas = new Big(1000000);
      try {
        estimateGas = await signer.estimateGas(txn);
      } catch (err: any) {
        if (err?.code === 'UNPREDICTABLE_GAS_LIMIT') {
          estimateGas = new Big(6000000);
        }
      }
      const newTxn = {
        ...txn,
        gasLimit: estimateGas.mul(120).div(100).toString(),
      };

      const tx = await signer.sendTransaction(newTxn);

      toast.dismiss(toastId);
      toastId = toast.loading({ title: 'Pending...' });

      const { status, transactionHash } = await tx.wait();
      setLoading(false);
      toast.dismiss(toastId);
      if (status === 1) {
        toast.success({ title: 'Remove successfully!', tx: transactionHash, chainId });
        onSuccess();
      } else {
        toast.fail({ title: 'Remove faily!' });
      }
    } catch (err: any) {
      toast.dismiss(toastId);
      setLoading(false);
      toast.fail({
        title: err?.message?.includes('user rejected transaction') ? 'User rejected transaction' : `Remove faily!`,
      });
    }
  }, [detail, percent]);

  return { loading, onRemove };
}
