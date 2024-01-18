import iconCoin from '@/assets/images/icon_coin.svg';
import iconHand from '@/assets/images/icon_hand.svg';
import { ComponentWrapperPage } from '@/components/near-org/ComponentWrapperPage';
import { LANDING_CHAINS } from '@/config/bridge/chains';
import { useChainsStore } from '@/stores/chains';
import Image from 'next/image';
import { memo, useMemo } from 'react';

import {
  StyledFlex,
  StyledGuidStep,
  StyledGuideContinueButton,
  StyledGuideSkipButton,
  StyledGuideStepLine,
  StyledSvg,
  StyledText,
  StyledWrapper
} from './styles';

import DapXBNS from '@/assets/images/DapXBNS.svg';
const iconChecked = (
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
    <circle cx="11.5" cy="11.5" r="11" fill="#EBF479" stroke="#EBF479" />
    <path d="M8 11.5L10.6667 14L16 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

)
const GuideView = () => {
  const chains = useChainsStore((store: any) => store.chains);
  const stepList = [{
    name: 'Step 1. Bridge',
    desc: 'Using the shortcut on the right, Transfer any token available from X chain to Base.'
  }, {
    name: 'Step 2. Explore the DapDap X BNS',
    desc: 'Learn to register and use BNS account on DapDap, enjoy exclusive discounts.'
  }, {
    name: 'Step 3. Explore Base',
    desc: 'Experience how to use Base seamlessly in DapDap.'
  }]
  const stepIndex = 0
  const supportChains = useMemo(() => {
    return Object.keys(LANDING_CHAINS).map((_chainId) =>
      chains.find((_chain: any) => _chain.chain_id === Number(_chainId)),
    );
  }, [chains]);
  const currentChain = useMemo(() => {
    const _chainId = 8453;
    return chains.find((chain: any) => chain.chain_id === _chainId);
  }, [chains]);

  return (
    <StyledFlex $gap='125px' $align='flex-start'>
      <StyledWrapper style={{ width: 529 }}>
        <StyledFlex $justify='flex-start' $gap='11px'>
          <StyledSvg><Image src={iconHand} alt='iconHand' /></StyledSvg>
          <StyledText $size='32px' $line='normal' $weight='700'>Hi, reffer.base!</StyledText>
        </StyledFlex>
        <StyledText $size='32px' $line='normal' $weight='700' style={{ width: 578 }}>
          3 Steps to experience Base in DapDap and earn Dapdap<Image src={iconCoin} alt='iconCoin' style={{ marginLeft: 4, marginRight: 4 }} /><span style={{ color: '#EBF479' }}>200 PTS</span>
        </StyledText>
        <StyledText $size='16px' $line='120%' style={{ marginTop: 27, marginBottom: 29 }}>
          Welcome BNS Users to DapDap! Unlock DapDap without codes!Unlock the power of DapDap with just a few simple steps and earn PTS. Dive into the world of DapDap seamlessly.
        </StyledText>
        <StyledFlex $direction='column' $gap='10px'>
          {
            stepList.map((step, index) => (
              <StyledGuidStep key={index} className={stepIndex === index ? 'active' : ''}>
                <StyledFlex $justify='space-between' style={{ marginBottom: 8 }}>
                  <StyledText $size='20px'>{step.name}</StyledText>
                  {stepIndex === index && iconChecked}
                </StyledFlex>
                <StyledText $size='16px' $color='#979ABE'>{step.desc}</StyledText>
              </StyledGuidStep>
            ))
          }
        </StyledFlex>
        <StyledFlex $gap='10px' style={{ marginTop: 47, marginBottom: 20 }}>
          {stepList.map((step, index) => <StyledGuideStepLine key={index} className={index === stepIndex ? 'active' : ''}></StyledGuideStepLine>)}
        </StyledFlex>
        <StyledFlex $gap='20px'>
          <StyledGuideContinueButton>Continue</StyledGuideContinueButton>
          <StyledGuideSkipButton>Skip</StyledGuideSkipButton>
        </StyledFlex>
      </StyledWrapper >

      <StyledWrapper>
        <StyledSvg>
          <Image src={DapXBNS} alt='DapXBNS' />
        </StyledSvg>

        <StyledWrapper>
          <ComponentWrapperPage
            componentProps={{
              chains: supportChains,
              currentChain: { ...currentChain, src: LANDING_CHAINS[8453] },
              addAction: (data: any) => {
                // addAction(data);
                // onSuccess();
              },
              from: 'landing',
            }}
            src={'dapdapbos.near/widget/BridgeEntry'}
          />
        </StyledWrapper>
      </StyledWrapper>
    </StyledFlex >
  );
};

export default memo(GuideView);
