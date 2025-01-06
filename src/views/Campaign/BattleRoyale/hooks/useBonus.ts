import { useConnectWallet } from '@web3-onboard/react';
import { ethers } from 'ethers';
import { use, useEffect, useState } from 'react';

import { onboard } from '@/data/web3';
import useAccount from '@/hooks/useAccount';
import useAuthCheck from '@/hooks/useAuthCheck';
import useToast from '@/hooks/useToast';
import { get, post } from '@/utils/http';

const LINEA_CHAIN_ID = 59144;

export const useBonus = () => {
  const [bonus, setBonus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [openBalanceModal, setCheckBalanceModal] = useState(false);
  const [croakModal, setCroakModal] = useState(false);
  const [isBitgetConnected, setIsBitgetConnected] = useState(false);
  const [isBonused, setIsBonused] = useState(false);
  const { account, provider, chainId } = useAccount();
  const { check } = useAuthCheck({ isNeedAk: true, isQuiet: false });
  const [{ wallet }] = useConnectWallet();
  const toast = useToast();

  const isLinea = chainId === LINEA_CHAIN_ID;

  const fetchBitgetStatus = async () => {
    try {
      const res = await get('/api/campaign/bonus', { category: 'battle-royale' });
      if (res.code !== 0) throw new Error(res.msg);
      setIsBitgetConnected(res.data.bonus);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchData = async () => {
    try {
      const res = await get('/api/campaign/bonus/token', { category: 'battle-royale' });
      if (res.code !== 0) throw new Error(res.msg);
      setBonus(res.data.bonus);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (account && provider) {
      check(() => {
        fetchBitgetStatus();
        fetchData();
      });
    }
  }, [account, provider]);

  useEffect(() => {
    const checkBitgetWallet = async () => {
      try {
        const isBitgetWallet = wallet?.label?.toLowerCase().includes('bitget');
        setIsBitgetConnected(isBitgetWallet || false);
      } catch (error) {
        console.error('Failed to check wallet type:', error);
        setIsBitgetConnected(false);
      }
    };

    checkBitgetWallet();
  }, [wallet]);

  const checkBalance = async (provider: any, contractAddress: string) => {
    const abi = ['function balanceOf(address owner) view returns (uint256)'];
    const contract = new ethers.Contract(contractAddress, abi, provider);
    try {
      const balance = await contract.balanceOf(account);
      return Number(ethers.utils.formatEther(balance));
    } catch (error) {
      console.error('check error:', error);
      return 0;
    }
  };

  const handleBonus = async () => {
    if (!account) return check();

    try {
      const contractAddress = '0x54d2252757e1672eead234d27b1270728ff90581';
      const balance1 = await checkBalance(provider, contractAddress);

      if (balance1 === 0) {
        toast.fail('$BGB Insufficient balance');
        return;
      }

      setLoading(true);
      const res = await post('/api/campaign/bonus/token?category=battle-royale', { category: 'battle-royale' });
      if (res.code !== 0) throw new Error(res.msg);
      setBonus(true);
      setCroakModal(true);
      setIsBonused(true);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const switchToBitget = async () => {
    try {
      setVerifyLoading(true);
      await fetchBitgetStatus();

      if (!isBitgetConnected) {
        toast.fail('Please connect Bitget wallet');
        return;
      }
    } catch (error) {
      console.error('Failed to verify Bitget wallet:', error);
      toast.fail('Failed to verify Bitget wallet');
    } finally {
      setVerifyLoading(false);
    }
  };

  const connectWallet = async () => {
    try {
      setLoading(true);
      await onboard.connectWallet();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      toast.fail('Failed to connect wallet');
    } finally {
      setLoading(false);
    }
  };

  const connectBitgetWallet = async () => {
    try {
      setVerifyLoading(true);
      await onboard.connectWallet();

      const currentWallet = onboard.state.get().wallets[0];
      const isBitgetWallet = currentWallet?.label?.toLowerCase().includes('bitget');

      if (isBitgetWallet) {
        await check(async () => {
          const res = await post('/api/campaign/bonus?category=battle-royale&wallet=bitget');
          if (res.code !== 0) throw new Error(res.msg);
          setIsBitgetConnected(true);
          toast.success('Successfully connected Bitget wallet');
        });
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      toast.fail('Failed to connect wallet');
    } finally {
      setVerifyLoading(false);
    }
  };

  const handleBitgetVerify = async () => {
    if (getWalletStatus() === 'DISCONNECTED') {
      await connectBitgetWallet();
      return;
    }
    await switchToBitget();
  };

  const getWalletStatus = () => {
    if (!wallet) {
      return 'DISCONNECTED';
    }
    if (isBitgetConnected) {
      return 'BITGET_CONNECTED';
    }
    return 'CONNECTED';
  };

  return {
    status: bonus,
    setCheckBalanceModal,
    openBalanceModal,
    croakModal,
    setCroakModal,
    loading,
    handleBonus,
    switchToBitget,
    walletStatus: getWalletStatus(),
    isBitgetConnected,
    isBonused,
    verifyLoading,
    handleBitgetVerify,
    connectWallet
  };
};
