import Big from 'big.js';
import { ethers, utils } from 'ethers';
import { useEffect, useMemo, useState } from 'react';

import Modal from '@/components/Modal';
import Tooltip from '@/components/Tooltip';
import useAccount from '@/hooks/useAccount';
import useAddAction from '@/hooks/useAddAction';
import useSwitchChain from '@/hooks/useSwitchChain';
import useToast from '@/hooks/useToast';
import useTokenBalance from '@/hooks/useTokenBalance';
import Button from '@/modules/staking/Teahouse/EasyEarn/Button';
import Chains from '@/modules/staking/Teahouse/EasyEarn/Chains';
import Input from '@/modules/staking/Teahouse/EasyEarn/Input';
import { formateValueWithThousandSeparatorAndFont } from '@/utils/formate';

const WithdrawModal = (props: Props) => {
  const { visible, data, onClose } = props;
  const { account, chainId, provider } = useAccount();
  const { switching, switchChain } = useSwitchChain();
  const toast = useToast();
  const { addAction } = useAddAction('dapp');

  const { chainList, icon, symbol } = data;

  const [currentChain, setCurrentChain] = useState<any>();
  const [amount, setAmount] = useState('');
  const [approved, setApproved] = useState(false);
  const [approving, setApproving] = useState(false);
  const [pending, setPending] = useState(false);
  const [funds, setFunds] = useState('');

  const currentToken = useMemo(() => {
    return currentChain?.pool?.token;
  }, [currentChain]);

  const {
    tokenBalance,
    isLoading: tokenBalanceLoading,
    update: updateTokenBalance
  } = useTokenBalance(currentToken?.isNative ? 'native' : currentToken?.address, currentToken?.decimals, chainId);

  const invalidChain = useMemo(() => {
    if (!chainList || !chainId) return void 0;
    const existed = chainList.find((it: any) => it.chainId === chainId);
    if (!existed) return void 0;
    if (currentChain && currentChain.chainId !== chainId) return void 0;
    return existed;
  }, [chainId, chainList, currentChain]);

  const invalidAmount = useMemo(() => {
    if (!amount || !tokenBalance) return false;
    if (Big(amount).lte(0)) return false;
    if (Big(tokenBalance).lte(0)) return false;
    if (Big(amount).gt(tokenBalance)) return false;
    return true;
  }, [amount, tokenBalance]);

  const handleChainSwitch = (chain: any) => {
    switchChain({
      chainId: `0x${Number(chain.chainId).toString(16)}`
    });
  };

  const handleCurrentChain = (chain: any) => {
    if (switching) return;
    setCurrentChain(chain);
    handleChainSwitch(chain);
  };

  const handleAmountChange = (value: string) => {
    setAmount(value);
  };

  const getAllowance = () => {
    if (currentToken?.isNative) {
      setApproved(true);
      return;
    }
    const TokenContract = new ethers.Contract(currentToken?.address, ERC20_ABI, provider.getSigner());
    TokenContract.allowance(account, currentChain.pool.address)
      .then((allowanceRaw: any) => {
        setApproved(!Big(ethers.utils.formatUnits(allowanceRaw._hex, currentToken?.decimals)).lt(amount || '0'));
      })
      .catch((err: any) => {
        console.log('getAllowance failure: %o', err);
      });
  };

  const handleApprove = () => {
    const toastId = toast.loading({
      title: `Approve ${symbol}`
    });
    setApproving(true);
    const TokenContract = new ethers.Contract(currentToken?.address, ERC20_ABI, provider.getSigner());
    TokenContract.approve(currentChain.pool.address, ethers.utils.parseUnits(amount, currentToken?.decimals))
      .then((tx: any) => {
        const handleSucceed = (res: any) => {
          const { status, transactionHash } = res;
          toast?.dismiss(toastId);
          if (status !== 1) throw new Error('');
          setApproved(true);
          setApproving(false);
          toast?.success({
            title: 'Approve Successfully!',
            // text: `Approve ${Big(amount).toFixed(2)} ${tokenSymbol}`,
            tx: transactionHash,
            chainId
          });
        };
        tx.wait()
          .then((res: any) => {
            handleSucceed(res);
          })
          .catch((err: any) => {
            console.log('approve tx.wait failure: %o', err);
            const timer = setTimeout(async () => {
              clearTimeout(timer);
              // try again
              try {
                const res: any = await tx.wait();
                handleSucceed(res);
              } catch (_err: any) {
                setApproved(true);
                setApproving(false);
                toast?.dismiss(toastId);
                toast?.success({
                  title: 'Approve Successfully!',
                  chainId
                });
              }
            }, 10000);
          });
      })
      .catch((err: any) => {
        console.log('approve contract approve failure: %o', err);
        setApproving(false);
        setApproved(false);
        toast?.dismiss(toastId);
        toast?.fail({
          title: 'Approve Failed!',
          text: err?.message?.includes('user rejected transaction') ? 'User rejected transaction' : null
        });
      });
  };

  const handleWithdraw = () => {
    const toastId = toast.loading({
      title: `Deposit ${symbol}`
    });
    setPending(true);

    const isNative = currentToken.isNative;
    const TokenContract = new ethers.Contract(currentChain.pool.address, POOL_ABI, provider.getSigner());
    const assets = ethers.utils.parseUnits(amount, currentToken?.decimals);

    const method = 'claimAndRequestDeposit';

    const onTx = (gas?: any) => {
      const options: any = {
        gasLimit: gas || 4000000
      };
      if (isNative) {
        options.value = assets;
      }
      TokenContract[method](assets, account)
        .then((tx: any) => {
          const handleSucceed = (res: any) => {
            const { status, transactionHash } = res;
            toast?.dismiss(toastId);
            if (status !== 1) throw new Error('');
            setApproved(true);
            setPending(false);
            toast?.success({
              title: 'Deposit Successfully!',
              tx: transactionHash,
              chainId
            });
            addAction({
              type: 'Staking',
              action: 'Deposit',
              token: {
                symbol: symbol
              },
              amount: amount,
              template: props.name,
              add: false,
              status,
              transactionHash
            });
            updateTokenBalance();
            setAmount('');
          };
          tx.wait()
            .then((res: any) => {
              handleSucceed(res);
            })
            .catch((err: any) => {
              console.log('Deposit tx.wait failure: %o', err);
              const timer = setTimeout(async () => {
                clearTimeout(timer);
                // try again
                try {
                  const res: any = await tx.wait();
                  handleSucceed(res);
                } catch (_err: any) {
                  setApproved(true);
                  setPending(false);
                  toast?.dismiss(toastId);
                  toast?.success({
                    title: 'Deposit Successfully!',
                    chainId
                  });
                }
              }, 10000);
            });
        })
        .catch((err: any) => {
          console.log('Deposit contract claimAndRequestDeposit failure: %o', err);
          setPending(false);
          setApproved(false);
          toast?.dismiss(toastId);
          toast?.fail({
            title: 'Deposit Failed!',
            text: err?.message?.includes('user rejected transaction') ? 'User rejected transaction' : null
          });
        });
    };

    TokenContract.estimateGas[method](assets, account)
      .then((gas: any) => {
        onTx(gas);
      })
      .catch((err: any) => {
        onTx();
        console.log('claimAndRequestDeposit estimateGas failed: %o', err);
      });
  };

  const getFunds = () => {
    const TokenContract = new ethers.Contract(currentChain.pool.address, POOL_ABI, provider.getSigner());
    TokenContract.requestedFunds(account)
      .then((fundsRaw: any) => {
        if (!fundsRaw || !fundsRaw.assets) return;
        setFunds(utils.formatUnits(fundsRaw.assets.toString(), currentToken?.decimals));
      })
      .catch((err: any) => {
        console.log('getFunds failure: %o', err);
      });
  };

  useEffect(() => {
    if (!visible) {
      setAmount('');
      return;
    }
    if (!invalidChain) {
      setCurrentChain(void 0);
      return;
    }
    setCurrentChain(invalidChain);
  }, [visible, invalidChain]);

  useEffect(() => {
    if (!account || !amount || !currentChain) return;
    getAllowance();
  }, [amount, currentChain, account]);

  useEffect(() => {
    if (!account || !currentChain) return;
    getFunds();
  }, [currentChain, account]);

  if (!visible) return null;

  return (
    <Modal
      display={visible}
      title={`Withdraw ${symbol}`}
      width={500}
      onClose={onClose}
      portal={true}
      headerStyle={{
        paddingLeft: 20,
        paddingRight: 20,
        background: '#262836',
        border: '1px solid #373a53',
        borderBottom: 0,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
      }}
      style={{
        background: 'unset',
        border: 0,
        borderRadius: 0
      }}
      content={
        <div>
          <div className="py-[20px] border border-[#373a53!important] border-top-0 bg-[#262836] rounded-[16px] rounded-top-0">
            <div className="px-[20px]">
              <div className="text-[16px] text-white font-[500]">Select chain</div>
              <Chains selected={currentChain} onSelect={handleCurrentChain} list={chainList} />
              <div className="text-[16px] text-white font-[500] mt-[30px] mb-[12px]">Withdraw</div>
              <Input
                amount={amount}
                balance={tokenBalance}
                balanceLoading={tokenBalanceLoading}
                data={data}
                onAmountChange={handleAmountChange}
              />
              <div className="flex flex-col items-stretch gap-[12px] mt-[20px]">
                {!invalidChain ? (
                  <Button
                    loading={switching}
                    disabled={switching}
                    onClick={() => handleChainSwitch(currentChain || chainList[0])}
                  >
                    Switch to {currentChain ? currentChain.chainName : chainList[0].chainName}
                  </Button>
                ) : (
                  <Button
                    loading={approving}
                    disabled={approving || approved || !invalidAmount}
                    onClick={handleApprove}
                  >
                    Request Withdrawal
                  </Button>
                )}
              </div>
            </div>
            <div className="relative w-full h-[1px] bg-[#373A53] mt-[34px]">
              <svg
                className="absolute top-[-21px] left-[50%] translate-x-[-50%]"
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
              >
                <rect x="2" y="2" width="38" height="38" rx="10" fill="#2E3142" stroke="#262836" strokeWidth="4" />
                <path
                  d="M21.4999 15.5V26M21.4999 26L16 20.5M21.4999 26L27 20.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="px-[20px] mt-[21px] flex justify-between items-center">
              <Tooltip
                tooltip="Withdrawals will be processed and ready for withdrawal within 48 hrs."
                style={{ zIndex: 2000 }}
              >
                <div className="text-[#FFF] text-[16px] font-[500] underline decoration-dashed leading-[20px] cursor-default">
                  Pending
                </div>
              </Tooltip>
              <div className="flex justify-end items-center gap-[6px]">
                <img src={icon} alt="" className="w-[20px] h-[20px] rounded-full" />
                <span className="text-white text-[14px] font-[400]">
                  {formateValueWithThousandSeparatorAndFont(funds || 0, 4, true, { isZeroPrecision: true })}
                </span>
              </div>
            </div>
          </div>
          <div className="py-[20px] border border-[#373a53!important] bg-[#262836] rounded-[16px] mt-[12px]">
            <div className="px-[20px] flex justify-between items-center">
              <Tooltip tooltip="Amount ready to be claimed and moved to your wallet." style={{ zIndex: 2000 }}>
                <div className="underline decoration-dashed text-white text-[16px] font-[500]">Ready to withdraw</div>
              </Tooltip>
              <div className="flex justify-end items-center gap-[6px]">
                <img src={icon} alt="" className="w-[20px] h-[20px] rounded-full" />
                <span className="text-white text-[14px] font-[400]">
                  {formateValueWithThousandSeparatorAndFont(funds || 0, 4, true, { isZeroPrecision: true })}
                </span>
              </div>
            </div>
            <div className="px-[20px] mt-[13px]">
              <Button
                disabled={!invalidChain || !approved || !invalidAmount || pending}
                loading={pending}
                onClick={handleWithdraw}
              >
                Withdrawal
              </Button>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default WithdrawModal;

interface Props {
  visible: boolean;
  data: any;
  name: any;

  onClose(): void;
}

const ERC20_ABI = [
  {
    constant: true,
    inputs: [
      {
        name: '_owner',
        type: 'address'
      },
      {
        name: '_spender',
        type: 'address'
      }
    ],
    name: 'allowance',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_spender',
        type: 'address'
      },
      {
        name: '_value',
        type: 'uint256'
      }
    ],
    name: 'approve',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  }
];

const POOL_ABI = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_assets',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: '_receiver',
        type: 'address'
      }
    ],
    name: 'claimAndRequestDeposit',
    outputs: [
      {
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address'
      }
    ],
    name: 'requestedFunds',
    outputs: [
      {
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
];
