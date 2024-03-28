import styled, { keyframes } from 'styled-components';
import type { StyledFlexType, StyledButtonType } from './types';
// login
export const StyledLogin = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 82px;
`;
export const StyledLoginConnectWalletButton = styled.button`
  /* margin: 17px 0 20px; */
  outline: none;
  border: none;
  width: 300px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #ebf479;
  color: #000;
  text-align: center;
  font-family: Gantari;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const StyledInvitedUsers = styled.div`
  color: #ebf479;
  font-family: Gantari;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const StyledInvitedAward = styled.div`
  margin-bottom: 24px;
  width: 306px;
  color: #979abe;
  font-family: Gantari;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
// guide

export const StyledVideo = styled.div`
  width: 700px;
  height: 388px;
`;
export const StyledGuidStep = styled.div`
  /* width: 529px; */
  width: 100%;
  height: 95px;
  flex-shrink: 0;
  padding: 12px 16px;
  border-radius: 16px;
  border: 1px solid #373a53;
  background: rgba(55, 58, 83, 0.5);
  &.active {
    border-color: #ebf479;
  }
`;
export const StyledGuideStepLine = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.15);
  &.active {
    background: #ebf479;
  }
`;
export const StyledGuideContinueButton = styled.button`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 48px;
  border-radius: 10px;
  text-align: center;
  border-radius: 12px;
  background: rgba(124, 127, 150, 0.5);
  color: #000;
  font-family: Gantari;
  font-weight: 500;
  &.complete {
    font-weight: 700;
    border-radius: 10px;
    background: #ebf479;
  }
`;
export const StyledGuideSkipButton = styled.button`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 153px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #979abe;
  color: #979abe;
  text-align: center;
  font-family: Gantari;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
// invite
export const StyledCodeInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  &:before,
  &:after {
    content: '';
    position: absolute;
  }
  &:before {
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    background: linear-gradient(180deg, #e2e2e2 0%, #5b5b5b 100%);
  }
  &:after {
    left: 4px;
    top: 4px;
    right: 4px;
    bottom: 4px;
    border-radius: 10px;
    background: linear-gradient(180deg, #9a9a9a 0%, #f4f4f4 100%);
  }
`;
export const StyledCodeInput = styled.input`
  position: relative;
  z-index: 50;
  outline: none;
  border: none;
  background: transparent;
  width: 22px;
  border-bottom: 2px solid #000;
  text-align: center;
  color: #000;
  text-align: center;
  font-family: Gantari;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const StyledErrorTips = styled.div`
  margin-top: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  width: 422px;
  height: 54px;
  border-radius: 16px;
  border: 1px solid #ff83c6;
  background: rgba(55, 58, 83, 0.5);
  color: #ff83c6;
  font-family: Gantari;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
// campaign
export const StyledAchieved = styled.div`
  position: absolute;
  right: -23px;
  bottom: -20px;
`;
export const StyledUserName = styled.div`
  font-family: Gantari;
  font-size: 52px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  background: linear-gradient(180deg, #fff 0%, #afafaf 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
// common
export const RotateKeyframes = keyframes`
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
`;
export const StyledDialog = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;
export const StyledWrapper = styled.div`
  --onboarding-color: #787dff;
  --social-color: #aad6ff;
  --engage-color: #f4ca79;
  .swiper {
    overflow: hidden;
  }
`;

export const StyledWidthFull = styled.div`
  width: 100%;
`;

export const StyledContainer = styled.div`
  width: 1244px;
  max-width: 100%;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 100px;
  --onboarding-color: #787dff;
  --social-color: #aad6ff;
  --engage-color: #f4ca79;
`;

export const StyledLoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 222px;
`;

export const StyledImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledSvg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s linear;

  &.proceed {
    transform: translate(2px, 2px);
  }
`;
export const StyledLoginVideo = styled.video``;
export const StyledFlex = styled.div.attrs<StyledFlexType>((props) => ({
  $direction: props.$direction || 'row',
  $wrap: props.$wrap || 'wrap',
  $align: props.$align || 'center',
  $justify: props.$justify || 'center',
  $gap: props.$gap || '0px',
}))`
  display: flex;
  flex-wrap: ${(props) => props.$wrap};
  flex-direction: ${(props) => props.$direction};
  align-items: ${(props) => props.$align};
  justify-content: ${(props) => props.$justify};
  gap: ${(props) => props.$gap};
`;
export const StyledButton = styled.button.attrs<StyledButtonType>((props) => ({
  $width: props.$width || '100%',
  $height: props.$height || '50px',
  $background: props.$background || '#373A53',
  $borderRadius: props.$borderRadius || '10px',
  $borderWidth: props.$borderWidth || '1px',
  $borderStyle: props.$borderStyle || 'solid',
  $borderColor: props.$borderColor || '#373A53',
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background: ${(props) => props.$background};
  border-radius: ${(props) => props.$borderRadius};
  border-width: ${(props) => props.$borderWidth};
  border-style: ${(props) => props.$borderStyle};
  border-color: ${(props) => props.$borderColor};
  cursor: pointer;
  &[disabled] {
    cursor: no-drop;
    opacity: 0.5;
  }
`;

export const StyledText = styled.div<{
  $color?: string;
  $size?: string;
  $weight?: string;
  $line?: string;
  $justify?: string;
  $textAlign?: string;
  $lineClamp?: number;
}>`
  color: ${(props) => props.$color || '#FFF'};
  font-family: Gantari;
  font-size: ${(props) => props.$size || '36px'};
  font-style: normal;
  font-weight: ${(props) => props.$weight || '400'};
  line-height: ${(props) => props.$line || 'normal'};
  text-align: ${(props) => props.$textAlign || 'left'};
  box-sizing: border-box;

  &.ellipsis {
    display: -webkit-box;
    -webkit-line-clamp: ${(props) => props.$lineClamp || 1};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &.center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
