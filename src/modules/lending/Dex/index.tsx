import {  useState } from 'react';

import LendingCardTabs from '@/modules/lending/CardTabs';
import LendingChains from '@/modules/lending/Chains';
import { StyledContainer, StyledHeader } from '@/modules/lending/Dex/styles';
import type { DexProps, Tab } from '@/modules/lending/models';
import { TabKey } from '@/modules/lending/models';
import { DexType } from '@/modules/lending/models';

const TabsArray: Tab[] = [
  { key: TabKey.Market, label: "Market" },
  { key: TabKey.Yours, label: "Yours" },
];

const LendingDex = (props: DexProps) => {
  const {
    CHAIN_LIST,
    curChain,
    dexConfig,
    wethAddress,
    multicallAddress,
    multicall,
    prices,
    onSwitchChain,
    switchingChain,
    addAction,
    toast,
    chainId,
    nativeCurrency,
    isChainSupported,
    account,
    from,
  } = props;
  const { type } = dexConfig;

  const [tab, setTab] = useState<TabKey>(TabsArray[0].key);

  const handleTabChange = (tab: Tab) => {
    setTab(tab.key);
  };

  return (
    <StyledContainer style={dexConfig.theme}>
      <StyledHeader>
        {type === DexType.CompoundV3 ? (
          // <svg width="175" height="39" viewBox="0 0 175 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          //   <path fill-rule="evenodd" clip-rule="evenodd" d="M1.53813 30.3952C0.583723 29.8011 0 28.7433 0 27.6072V21.2641C0 21.0213 0.0639114 20.7873 0.183212 20.5791C0.553898 19.9287 1.37622 19.7077 2.01534 20.0892L16.0844 28.4353C16.9067 28.9253 17.4138 29.8185 17.4138 30.7896V37.3626C17.4138 37.6617 17.3327 37.9609 17.1794 38.2167C16.7149 38.9885 15.7264 39.2313 14.968 38.7586L1.53813 30.3952ZM22.5095 18.3505C23.3319 18.8405 23.8389 19.7337 23.8389 20.7048V34.0414C23.8389 34.436 23.6301 34.8001 23.2935 34.991L20.213 36.7556C20.1746 36.7773 20.1321 36.7946 20.0895 36.8076V29.4023C20.0895 28.444 19.5952 27.5552 18.7857 27.061L6.42948 19.5386V11.1794C6.42948 10.9365 6.4934 10.7024 6.61269 10.4943C6.98337 9.84395 7.80571 9.62283 8.44481 10.0044L22.5095 18.3505ZM28.6664 8.49989C29.493 8.98549 30 9.88731 30 10.8585V30.3388C30 30.7376 29.7827 31.1061 29.4376 31.2969L26.5189 32.9011V19.3391C26.5189 18.381 26.0247 17.4964 25.2195 17.0021L12.5905 9.29333V1.36334C12.5905 1.12055 12.6544 0.886419 12.7695 0.678305C13.1402 0.0279524 13.9625 -0.193167 14.6016 0.184038L28.6664 8.49989Z" fill="#00D395" />
          //   <path d="M51.8 27.2C50.36 27.2 49.1067 26.9067 48.04 26.32C46.9867 25.72 46.1733 24.9067 45.6 23.88C45.0267 22.84 44.74 21.6533 44.74 20.32C44.74 18.9867 45.0267 17.8067 45.6 16.78C46.1867 15.74 47.0067 14.9267 48.06 14.34C49.1267 13.74 50.3733 13.44 51.8 13.44C52.68 13.44 53.5 13.56 54.26 13.8C55.0333 14.0267 55.7867 14.3933 56.52 14.9L55.5 17.12C54.86 16.7333 54.24 16.4467 53.64 16.26C53.0533 16.0733 52.44 15.98 51.8 15.98C50.9867 15.98 50.2667 16.16 49.64 16.52C49.0267 16.88 48.5467 17.3867 48.2 18.04C47.8667 18.6933 47.7 19.4533 47.7 20.32C47.7 21.1733 47.8667 21.9267 48.2 22.58C48.5467 23.2333 49.0267 23.7467 49.64 24.12C50.2667 24.48 50.9867 24.66 51.8 24.66C52.44 24.66 53.0533 24.5667 53.64 24.38C54.24 24.1933 54.86 23.9067 55.5 23.52L56.52 25.74C55.7867 26.2467 55.0333 26.62 54.26 26.86C53.5 27.0867 52.68 27.2 51.8 27.2ZM63.0641 27.2C62.0641 27.2 61.1707 27 60.3841 26.6C59.6107 26.1867 59.0041 25.6133 58.5641 24.88C58.1241 24.1333 57.9041 23.2733 57.9041 22.3C57.9041 21.3133 58.1241 20.4533 58.5641 19.72C59.0041 18.9867 59.6107 18.42 60.3841 18.02C61.1574 17.6067 62.0507 17.4 63.0641 17.4C64.0774 17.4 64.9707 17.6067 65.7441 18.02C66.5174 18.42 67.1241 18.9867 67.5641 19.72C68.0041 20.4533 68.2241 21.3133 68.2241 22.3C68.2241 23.2733 68.0041 24.1333 67.5641 24.88C67.1241 25.6133 66.5174 26.1867 65.7441 26.6C64.9707 27 64.0774 27.2 63.0641 27.2ZM63.0641 24.8C63.5307 24.8 63.9374 24.7 64.2841 24.5C64.6441 24.3 64.9174 24.0133 65.1041 23.64C65.3041 23.2533 65.4041 22.8067 65.4041 22.3C65.4041 21.78 65.3041 21.3333 65.1041 20.96C64.9174 20.5867 64.6441 20.3 64.2841 20.1C63.9374 19.9 63.5307 19.8 63.0641 19.8C62.5974 19.8 62.1841 19.9 61.8241 20.1C61.4774 20.3 61.2041 20.5867 61.0041 20.96C60.8174 21.3333 60.7241 21.78 60.7241 22.3C60.7241 22.8067 60.8174 23.2533 61.0041 23.64C61.2041 24.0133 61.4774 24.3 61.8241 24.5C62.1841 24.7 62.5974 24.8 63.0641 24.8ZM70.1609 27V17.6H72.7809V18.64C73.0743 18.2533 73.4409 17.9533 73.8809 17.74C74.3343 17.5133 74.8809 17.4 75.5209 17.4C76.1209 17.4 76.6476 17.52 77.1009 17.76C77.5676 18 77.9343 18.34 78.2009 18.78C78.4943 18.3267 78.8943 17.9867 79.4009 17.76C79.9209 17.52 80.5276 17.4 81.2209 17.4C82.3543 17.4 83.2209 17.7067 83.8209 18.32C84.4209 18.92 84.7209 19.8533 84.7209 21.12V27H81.9609V21.54C81.9609 20.9533 81.8409 20.52 81.6009 20.24C81.3743 19.9467 81.0276 19.8 80.5609 19.8C80.0009 19.8 79.5676 20 79.2609 20.4C78.9676 20.7867 78.8209 21.3533 78.8209 22.1V27H76.0409V21.54C76.0409 20.9533 75.9276 20.52 75.7009 20.24C75.4876 19.9467 75.1476 19.8 74.6809 19.8C74.1076 19.8 73.6676 20 73.3609 20.4C73.0676 20.7867 72.9209 21.3533 72.9209 22.1V27H70.1609ZM87.1141 30.64V17.6H89.7341V18.8C90.0274 18.3733 90.4274 18.0333 90.9341 17.78C91.4407 17.5267 92.0407 17.4 92.7341 17.4C93.5874 17.4 94.3474 17.6 95.0141 18C95.6941 18.3867 96.2341 18.9467 96.6341 19.68C97.0341 20.4133 97.2341 21.2867 97.2341 22.3C97.2341 23.3133 97.0341 24.1867 96.6341 24.92C96.2341 25.6533 95.6941 26.22 95.0141 26.62C94.3474 27.0067 93.5874 27.2 92.7341 27.2C92.0807 27.2 91.5141 27.0933 91.0341 26.88C90.5541 26.6533 90.1674 26.3533 89.8741 25.98V30.64H87.1141ZM92.0941 24.8C92.5474 24.8 92.9474 24.7 93.2941 24.5C93.6541 24.3 93.9274 24.0133 94.1141 23.64C94.3141 23.2533 94.4141 22.8067 94.4141 22.3C94.4141 21.78 94.3141 21.3333 94.1141 20.96C93.9274 20.5867 93.6541 20.3 93.2941 20.1C92.9474 19.9 92.5474 19.8 92.0941 19.8C91.6407 19.8 91.2341 19.9 90.8741 20.1C90.5141 20.3 90.2407 20.5867 90.0541 20.96C89.8674 21.3333 89.7741 21.78 89.7741 22.3C89.7741 22.8067 89.8674 23.2533 90.0541 23.64C90.2407 24.0133 90.5074 24.3 90.8541 24.5C91.2141 24.7 91.6274 24.8 92.0941 24.8ZM103.845 27.2C102.845 27.2 101.952 27 101.165 26.6C100.392 26.1867 99.7853 25.6133 99.3453 24.88C98.9053 24.1333 98.6853 23.2733 98.6853 22.3C98.6853 21.3133 98.9053 20.4533 99.3453 19.72C99.7853 18.9867 100.392 18.42 101.165 18.02C101.939 17.6067 102.832 17.4 103.845 17.4C104.859 17.4 105.752 17.6067 106.525 18.02C107.299 18.42 107.905 18.9867 108.345 19.72C108.785 20.4533 109.005 21.3133 109.005 22.3C109.005 23.2733 108.785 24.1333 108.345 24.88C107.905 25.6133 107.299 26.1867 106.525 26.6C105.752 27 104.859 27.2 103.845 27.2ZM103.845 24.8C104.312 24.8 104.719 24.7 105.065 24.5C105.425 24.3 105.699 24.0133 105.885 23.64C106.085 23.2533 106.185 22.8067 106.185 22.3C106.185 21.78 106.085 21.3333 105.885 20.96C105.699 20.5867 105.425 20.3 105.065 20.1C104.719 19.9 104.312 19.8 103.845 19.8C103.379 19.8 102.965 19.9 102.605 20.1C102.259 20.3 101.985 20.5867 101.785 20.96C101.599 21.3333 101.505 21.78 101.505 22.3C101.505 22.8067 101.599 23.2533 101.785 23.64C101.985 24.0133 102.259 24.3 102.605 24.5C102.965 24.7 103.379 24.8 103.845 24.8ZM114.362 27.2C113.309 27.2 112.476 26.9 111.862 26.3C111.249 25.6867 110.942 24.7467 110.942 23.48V17.6H113.702V23.06C113.702 23.6467 113.829 24.0867 114.082 24.38C114.336 24.66 114.716 24.8 115.222 24.8C115.822 24.8 116.296 24.6067 116.642 24.22C117.002 23.82 117.182 23.2467 117.182 22.5V17.6H119.942V27H117.322V25.86C117.029 26.2733 116.636 26.6 116.142 26.84C115.662 27.08 115.069 27.2 114.362 27.2ZM122.348 27V17.6H124.968V18.74C125.262 18.3267 125.648 18 126.128 17.76C126.608 17.52 127.208 17.4 127.928 17.4C128.982 17.4 129.815 17.7067 130.428 18.32C131.042 18.92 131.348 19.8533 131.348 21.12V27H128.588V21.54C128.588 20.9533 128.462 20.52 128.208 20.24C127.968 19.9467 127.588 19.8 127.068 19.8C126.468 19.8 125.988 20 125.628 20.4C125.282 20.7867 125.108 21.3533 125.108 22.1V27H122.348ZM137.795 27.2C136.955 27.2 136.195 27.0067 135.515 26.62C134.835 26.22 134.295 25.6533 133.895 24.92C133.495 24.1733 133.295 23.3 133.295 22.3C133.295 21.2867 133.495 20.4133 133.895 19.68C134.295 18.9467 134.835 18.3867 135.515 18C136.195 17.6 136.955 17.4 137.795 17.4C138.435 17.4 138.995 17.5133 139.475 17.74C139.955 17.9533 140.341 18.2467 140.635 18.62V13.64H143.415V27H140.795V25.8C140.501 26.2267 140.095 26.5667 139.575 26.82C139.068 27.0733 138.475 27.2 137.795 27.2ZM138.435 24.8C138.901 24.8 139.308 24.7 139.655 24.5C140.001 24.3 140.275 24.0133 140.475 23.64C140.675 23.2533 140.775 22.8067 140.775 22.3C140.775 21.78 140.675 21.3333 140.475 20.96C140.275 20.5867 140.001 20.3 139.655 20.1C139.308 19.9 138.901 19.8 138.435 19.8C137.981 19.8 137.575 19.9 137.215 20.1C136.868 20.3 136.595 20.5867 136.395 20.96C136.208 21.3333 136.115 21.78 136.115 22.3C136.115 22.8067 136.208 23.2533 136.395 23.64C136.595 24.0133 136.868 24.3 137.215 24.5C137.575 24.7 137.981 24.8 138.435 24.8ZM154.635 27L149.455 13.64H152.695L156.275 23.66L159.795 13.64H163.055L157.855 27H154.635ZM168.876 27.2C167.996 27.2 167.15 27.0533 166.336 26.76C165.536 26.4667 164.776 26.04 164.056 25.48L165.036 23.4C165.756 23.8933 166.436 24.2533 167.076 24.48C167.73 24.6933 168.33 24.8 168.876 24.8C169.53 24.8 170.063 24.6467 170.476 24.34C170.89 24.0333 171.096 23.5933 171.096 23.02C171.096 22.46 170.89 22.0267 170.476 21.72C170.063 21.4 169.53 21.24 168.876 21.24H166.996V19H168.876C169.45 19 169.93 18.8667 170.316 18.6C170.703 18.3333 170.896 17.94 170.896 17.42C170.896 16.8867 170.703 16.4933 170.316 16.24C169.93 15.9733 169.45 15.84 168.876 15.84C168.396 15.84 167.85 15.9533 167.236 16.18C166.623 16.3933 165.956 16.7467 165.236 17.24L164.256 15.16C164.99 14.5867 165.736 14.16 166.496 13.88C167.27 13.5867 168.063 13.44 168.876 13.44C169.876 13.44 170.743 13.6 171.476 13.92C172.223 14.2267 172.803 14.66 173.216 15.22C173.643 15.78 173.856 16.4333 173.856 17.18C173.856 17.8867 173.656 18.4867 173.256 18.98C172.856 19.4733 172.303 19.8533 171.596 20.12C172.383 20.4 172.99 20.8133 173.416 21.36C173.843 21.8933 174.056 22.5267 174.056 23.26C174.056 24.02 173.843 24.7 173.416 25.3C172.99 25.8867 172.39 26.3533 171.616 26.7C170.843 27.0333 169.93 27.2 168.876 27.2Z" fill="white" />
          // </svg>
          <></>
        ) : (
          <LendingCardTabs
            tabs={TabsArray}
            active={tab}
            onChange={handleTabChange}
          />
        )}

        <LendingChains
          chains={CHAIN_LIST}
          curChain={curChain}
          onSwitchChain={onSwitchChain}
          from={from}
        />
      </StyledHeader>
      {type === DexType.CompoundV3 ? (
        <Widget
          src="bluebiu.near/widget/Lending.CompoundV3.index"
          props={{
            dexConfig,
            wethAddress,
            multicallAddress,
            multicall,
            prices,
            chainIdNotSupport: !isChainSupported,
            account,
            addAction,
            toast,
            chainId,
            curChain,
            nativeCurrency,
            tab: state.tab,
          }}
        />
      ) : (
        <Widget
          src="bluebiu.near/widget/Lending.Content"
          props={{
            dexConfig,
            wethAddress,
            multicallAddress,
            multicall,
            prices,
            chainIdNotSupport: !isChainSupported,
            account,
            addAction,
            toast,
            chainId,
            nativeCurrency,
            tab: state.tab,
          }}
        />
      )}
    </StyledContainer>
  );
};

export default LendingDex;
