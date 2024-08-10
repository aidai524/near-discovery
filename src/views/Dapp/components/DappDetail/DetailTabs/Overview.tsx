import { useMemo, useState } from 'react';

import AddMetaMaskModal from './AddMetaMaskModal';
import InteractDAppsModal from './InteractDAppsModal';
import ArrowIcon from '@/components/Icons/ArrowIcon';

import {
  StyledAddText,
  StyledAirdrop,
  StyledAirdropActions,
  StyledAirdropActionsSub,
  StyledAirdropActionsText,
  StyledAirdropActionsTextPrimary,
  StyledAirdropArrow,
  StyledAirdropBody,
  StyledAirdropBodyItem,
  StyledAirdropHead,
  StyledAirdropIcon,
  StyledAirdropLabel,
  StyledAirdropMainTitle,
  StyledAirdropShadow,
  StyledAirdropTitle,
  StyledAirdropValue, StyledImageButton,
  StyledOverview,
  StyledOverviewContainer,
  StyledOverviewDesc,
  StyledOverviewShadow,
  StyledOverviewTitle,
  StyledSummaryAdd,
  StyledSummaryAddIcon,
  StyledTokenAddress,
  StyledTokenContainer,
  StyledTokenInfo,
  StyledTokenItem,
  StyledTokenLabel,
  StyledTokenLogo,
  StyledTokenPrice,
  StyledTokenValue,
} from './styles';
import NativeCurrency from '@/views/networks/detail/components/NativeCurrency';
import useAuthCheck from '@/hooks/useAuthCheck';
import hexToRgba from '@/utils/hexToRgba';
import { Category, Quest, QuestCategory, QuestDapp, useAirdrop } from '@/hooks/useAirdrop';
import Loading from '@/components/Icons/Loading';
import useToast from '@/hooks/useToast';
import { useRouter } from 'next/router';
import { StyledFlex } from '@/styled/styles';
import { usePathname } from 'next/navigation';
import { NativeTokenAddressMap } from '@/config/tokens';
import { usePriceStore } from '@/stores/price';
import chainCofig from '@/config/chains';
import useCopy from '@/hooks/useCopy';
import { formatThousandsSeparator } from '@/utils/format-number';

const Overview = (props: any) => {
  const prices = usePriceStore((store) => store.price);

  const {
    description,
    title,
    tbd_token,
    native_currency,
    overviewShadow,
    category,
    id,
    rpc,
    loading,
    chain_id,
  } = props;

  const router = useRouter();
  const pathname = usePathname();
  const { check } = useAuthCheck({ isNeedAk: false });
  const toast = useToast();
  const {
    data: airdropData,
    loading: airdropLoading,
    reportAdditionResult,
  } = useAirdrop({ category, id });
  const { copy } = useCopy();

  const [addMetaMaskShow, setAddMetaMaskShow] = useState<boolean>(false);
  const [dappListVisible, setDappListVisible] = useState<boolean>(false);
  const [dappList, setDappList] = useState<QuestDapp[]>([]);
  const [taskDescription, setTaskDescription] = useState<string>('');
  const [actionLoading, setActionLoading] = useState<boolean>(false);

  const nativeCurrency = useMemo(() => {
    if (!native_currency) return undefined;
    try {
      const json = JSON.parse(native_currency) || undefined;
      if (json && chain_id) {
        json.address = NativeTokenAddressMap[json.symbol.toUpperCase()];
        json.price = prices[json.symbol.toUpperCase()];
        json.price = formatThousandsSeparator(json.price, 2);
        return json;
      }
    } catch (err) {
      console.log('%cerror: %o', 'background:#f00;', err);
    }
    return undefined;
  }, [native_currency, chain_id, prices]);

  const defaultRpc = useMemo(() => {
    if (!rpc) return '';
    try {
      return JSON.parse(rpc)[0] || '';
    } catch (err) {
      console.log(err);
    }
    return '';
  }, [rpc]);

  const onAction = async (action: Quest) => {
    // cannot click after the task is completed
    if (action.completed || actionLoading) {
      return;
    }
    setActionLoading(true);
    // add metamask
    if (action.category === QuestCategory.metamask) {
      const toastId = toast.loading({ title: 'Adding to wallet...' });
      setAddMetaMaskShow(true);
      const succeed = await onAddMetaMask();
      if (succeed) {
        // report addition result
        const reportRes = await reportAdditionResult(action.id);
        toast.dismiss(toastId);
        if (reportRes.success) {
          toast.success({ title: reportRes.msg });
          setActionLoading(false);
          return;
        }
        toast.fail({ title: reportRes.msg || 'Add failed!' });
        setActionLoading(false);
        return;
      }
      toast.dismiss(toastId);
      toast.fail({ title: 'Add failed!' });
      setActionLoading(false);
      return;
    }
    // open dApp
    if (action.category === QuestCategory.dApp) {
      // open url
      if (action.url) {
        router.push(action.url);
        setActionLoading(false);
        return;
      }
      // open dapp
      if (action.dapps && action.dapps.length > 0) {
        // directly jump to a dApp
        if (action.dapps.length === 1) {
          const dappRoute = `/${action.dapps[0].route}`;
          if (pathname === dappRoute) {
            router.replace(dappRoute);
          } else {
            router.push(dappRoute);
          }
          setActionLoading(false);
          return;
        }
        // open DApp list popup
        setDappList(action.dapps);
        setTaskDescription(action.description);
        setDappListVisible(true);
      }
      // ⚠️ below are the unprocessed categories
      setActionLoading(false);
      return;
    }
    setActionLoading(false);
  };

  const handleAddWallet = async () => {
    if (!window.ethereum || window.ethereum === void 0 || typeof window.ethereum === 'undefined') return;
    await window.ethereum.request({ method: 'eth_requestAccounts', params: [] });
    try {
      await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: NativeTokenAddressMap[nativeCurrency?.symbol?.toUpperCase()],
            symbol: nativeCurrency?.symbol,
            decimals: nativeCurrency?.decimals,
            image: nativeCurrency?.logo,
          },
        },
      });
      toast.success({
        title: 'Add successfully!',
      });
    } catch (err: any) {
      let msg = '';
      if (err?.message?.includes('User denied')) {
        msg = 'User denied';
      }
      console.log(err);
      toast.fail({
        title: 'Add failure!',
        text: msg,
      });
    }
  };

  const onAddMetaMask = async () => {
    const currChain = chainCofig[chain_id];
    if (typeof window.ethereum === 'undefined' || !currChain) {
      return false;
    }

    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: `0x${chain_id.toString(16)}`,
          rpcUrls: currChain.rpcUrls,
          chainName: currChain.chainName,
          nativeCurrency: currChain.nativeCurrency,
          blockExplorerUrls: [currChain.blockExplorers],
        }],
      });
      return true;
    } catch (err) {
      console.log('add metamask failed: %o', err);
      toast.fail('Failed to add network!');
      return false;
    }
  };

  const onCopyCurrency = () => {
    copy(nativeCurrency?.address);
  };

  const onBrowser = () => {
    window.open(`https://etherscan.io/token/${nativeCurrency?.address}`);
  };

  return (
    <div>
      <StyledOverviewContainer>
        {
          overviewShadow?.icon && (
            <StyledOverviewShadow
              src={overviewShadow.icon ?? ''}
              style={
                overviewShadow?.color ?
                  { filter: `drop-shadow(${hexToRgba(overviewShadow?.color, 0.03)} 10000px 0)` } :
                  {}
              }
            />
          )
        }
        {
          loading ? (
            <StyledFlex justifyContent="center" alignItems="center" style={{ height: 150 }}>
              <Loading size={16} />
            </StyledFlex>
          ) : (
            <StyledOverview>
              <StyledOverviewTitle>{title}</StyledOverviewTitle>
              <StyledOverviewDesc>{description ?? ''}</StyledOverviewDesc>
              <StyledTokenContainer>
                <StyledTokenItem>
                  <StyledTokenLabel>Project Token</StyledTokenLabel>
                  <StyledTokenValue>
                    <NativeCurrency tbdToken={tbd_token} nativeCurrency={native_currency} />
                  </StyledTokenValue>
                </StyledTokenItem>
                {
                  tbd_token !== 'Y' && category === Category.network && (
                    <StyledTokenItem>
                      <StyledTokenLabel>Token Price</StyledTokenLabel>
                      <StyledTokenPrice>
                        ${nativeCurrency?.price}
                        {/*<StyledSummaryAdd>
                         <StyledSummaryAddIcon>
                         <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                         <path
                         d="M4.56699 0.75C4.75944 0.416667 5.24056 0.416667 5.43301 0.75L8.89711 6.75C9.08956 7.08333 8.849 7.5 8.4641 7.5H1.5359C1.151 7.5 0.910436 7.08333 1.10289 6.75L4.56699 0.75Z"
                         fill="currentColor" stroke="url(#paint0_linear_16163_4093)"
                         />
                         <defs>
                         <linearGradient
                         id="paint0_linear_16163_4093"
                         x1="10.9668"
                         y1="1.71698"
                         x2="-1"
                         y2="1.71698"
                         gradientUnits="userSpaceOnUse"
                         >
                         <stop stopColor="currentColor" />
                         <stop offset="1" stopColor="currentColor" stopOpacity="0.1" />
                         </linearGradient>
                         </defs>
                         </svg>
                         </StyledSummaryAddIcon>
                         <StyledAddText>1.7%</StyledAddText>
                         </StyledSummaryAdd>*/}
                      </StyledTokenPrice>
                    </StyledTokenItem>
                  )
                }
              </StyledTokenContainer>
              {
                tbd_token !== 'Y' && category === Category.network && (
                  <StyledTokenContainer>
                    <StyledTokenItem>
                      <StyledTokenLabel>Token Address</StyledTokenLabel>
                      <StyledTokenInfo>
                        <StyledTokenLogo url={nativeCurrency?.logo} />
                        <StyledTokenAddress>
                          {nativeCurrency?.address ? nativeCurrency?.address.substring(0, 5) + '...' + nativeCurrency?.address.substring(nativeCurrency?.address.length - 6) : ''}
                        </StyledTokenAddress>
                        <StyledImageButton
                          src="/images/alldapps/icon-copy.svg"
                          width={14}
                          height={14}
                          alt="copy"
                          onClick={onCopyCurrency}
                        />
                        <StyledImageButton
                          src="/images/alldapps/icon-share.svg"
                          width={12}
                          height={12}
                          alt="share"
                          onClick={onBrowser}
                        />
                        <StyledImageButton
                          src="/images/alldapps/icon-metamask.svg"
                          width={17}
                          height={17}
                          alt="metamask"
                          onClick={() => {
                            check(() => {
                              handleAddWallet();
                            });
                          }}
                        />
                      </StyledTokenInfo>
                    </StyledTokenItem>
                  </StyledTokenContainer>
                )
              }
            </StyledOverview>
          )
        }
        {
          airdropLoading ? (
            <StyledFlex justifyContent="center" alignItems="center" style={{ height: 150 }}>
              <Loading size={16} />
            </StyledFlex>
          ) : (
            airdropData.id ? (
              <StyledAirdrop>
                <StyledAirdropMainTitle>Potential Airdrop 🪂</StyledAirdropMainTitle>
                <StyledAirdropHead>
                  {
                    airdropData.potential?.map((airdrop) => (
                      <div key={airdrop.key} className="airdrop-item">
                        <StyledAirdropLabel>{airdrop.label}</StyledAirdropLabel>
                        <StyledAirdropValue>
                          {
                            airdropLoading ? (
                              <Loading size={16} />
                            ) : airdrop.value
                          }
                        </StyledAirdropValue>
                      </div>
                    ))
                  }
                </StyledAirdropHead>
                {
                  airdropData.quests && airdropData.quests.length > 0 && (
                    <StyledAirdropBody>
                      <StyledAirdropActions>
                        Recommended Actions
                        {
                          !airdropLoading && (
                            <StyledAirdropActionsText>
                              <StyledAirdropActionsTextPrimary>
                                {airdropData.completedCount}
                              </StyledAirdropActionsTextPrimary>
                              <span>/</span>
                              <span>{airdropData.quests?.length}</span>
                            </StyledAirdropActionsText>
                          )
                        }
                      </StyledAirdropActions>
                      <StyledAirdropActionsSub>
                        <svg
                          style={{ transform: `translateY(-2px)` }}
                          width="14"
                          height="13"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.34133 1.36842L13.6338 8.89473C14.6744 10.7193 13.3736 13 11.2924 13H2.70757C0.626391 13 -0.674354 10.7193 0.366238 8.89474L4.65867 1.36842C5.69926 -0.456136 8.30074 -0.456144 9.34133 1.36842ZM8.56089 1.82456C7.86716 0.608186 6.13284 0.608189 5.43911 1.82456L1.14668 9.35088C0.452954 10.5673 1.32012 12.0877 2.70757 12.0877H11.2924C12.6799 12.0877 13.547 10.5672 12.8533 9.35087L8.56089 1.82456Z"
                            fill="#979ABE"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7 3C7.55228 3 8 3.33579 8 3.75V7.25C8 7.66421 7.55228 8 7 8C6.44772 8 6 7.66421 6 7.25V3.75C6 3.33579 6.44772 3 7 3ZM7 9C7.55228 9 8 9.33579 8 9.75V10.25C8 10.6642 7.55228 11 7 11C6.44772 11 6 10.6642 6 10.25V9.75C6 9.33579 6.44772 9 7 9Z"
                            fill="#979ABE"
                          />
                        </svg>
                        &nbsp;
                        The following actions are for reference only, and there is no guarantee that official airdrops can be obtained
                      </StyledAirdropActionsSub>
                      {
                        airdropData.quests?.map((item) => (
                          <StyledAirdropBodyItem
                            $finished={item.completed} onClick={() => {
                            check(() => {
                              onAction(item);
                            });
                          }}
                          >
                            <div>
                              <StyledAirdropShadow className={item.completed ? 'finished' : ''}>
                                <svg
                                  width="30"
                                  height="30"
                                  viewBox="0 0 30 30"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 12C0 5.37258 5.37258 0 12 0H30L0 30V12Z"
                                    fill={item.completed ? '#EBF479' : '#979ABE'}
                                    opacity={item.completed ? 1 : 0.2}
                                  />
                                </svg>
                                {
                                  item.completed && (
                                    <StyledAirdropIcon url="/images/alldapps/icon-checked.svg" />
                                  )
                                }
                              </StyledAirdropShadow>
                              <StyledAirdropTitle>{item.name}</StyledAirdropTitle>
                            </div>
                            <StyledAirdropArrow>
                              <ArrowIcon size={11} />
                            </StyledAirdropArrow>
                          </StyledAirdropBodyItem>
                        ))
                      }
                    </StyledAirdropBody>
                  )
                }
              </StyledAirdrop>
            ) : null
          )
        }
      </StyledOverviewContainer>
      <AddMetaMaskModal
        display={addMetaMaskShow}
        onClose={() => setAddMetaMaskShow(false)}
        rpc={defaultRpc}
        chainId={props.chain_id}
        chainName={props.name}
        symbol={nativeCurrency?.symbol}
        explorerUrl={props.block_explorer}
      />
      <InteractDAppsModal
        display={dappListVisible}
        onClose={() => setDappListVisible(false)}
        chainName={props.name}
        dapps={dappList}
        description={taskDescription}
      />
    </div>
  );
};

export default Overview;