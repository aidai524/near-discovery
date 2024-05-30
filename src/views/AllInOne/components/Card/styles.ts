import styled from 'styled-components';

import { hexToRgb } from '@/views/AllInOne/utils';
import { StyledLendingEntry } from '@/views/AllInOne/components/Lending/styles';

export const StyledCard = styled.div<{ bgColor?: string }>`
  display: block;
  position: relative;
  border: 1px solid #373a53;
  border-radius: 16px;
  padding: 28px 24px 28px 24px;
  transition: all 0.3s ease;
  min-width: 300px;
  min-height: 250px;
  background: #16181d;
  overflow: hidden;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(rgba(0, 0, 0, 0), 80%, rgba(22, 24, 29, 1));
  }

  .card-active-bg {
    position: absolute;
    z-index: 0;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: all 0.6s ease;
  }

  &:hover {
    transform: scale(1.04);

    .card-active-bg {
      opacity: 1;
    }

    .arrow-top-right {
      transform: scale(1.5);

      path {
        stroke: #ffffff;
      }
    }
  }

  &.nav {
    width: 225px;
    border-radius: 16px;
    padding: 16px;

    .arrow-top-right {
      opacity: 0;
      transition: all 0.3s ease;
    }

    &:hover {
      transform: translateY(-20px);
      border-color: ${({ bgColor }) => bgColor};
      box-shadow: ${({ bgColor }) => `0px 0px 10px 0px rgba(${hexToRgb(bgColor as string)}, 0.5)`};

      .card-active-bg {
        opacity: 0;
      }

      .arrow-top-right {
        opacity: 1;
        transform: scale(1.14);

        path {
          stroke: #ffffff;
        }
      }
    }
  }
`;

export const StyledTitle = styled.div`
  font-size: 26px;
  font-weight: 700;
  line-height: 31px;
  white-space: nowrap;
  cursor: default;
  display: flex;
  flex-direction: column;
  flex: 1;

  h3 {
    font-size: 1em;
    margin: 0;
  }

  .sub-title {
    font-size: 0.654em;
    color: #979abe;
    line-height: 17px;
    white-space: wrap;
  }

  .title-text-wrap {
    font-size: 1em;
  }

  &.nav {
    font-size: 18px;
    line-height: 22px;

    .sub-title {
      display: none;
    }
  }
`;

export const StyledContent = styled.div`
  margin-top: 20px;
  position: relative;

  &.nav {
    margin-top: 5px;

    > [class*='StyledBridgeContainer'] {
      width: 532px;
      transform: scale(0.5);
      flex-shrink: 0;
      transform-origin: left top;
    }
    > [class*='StyledTradeContainer'] {
      width: 532px;
      transform: scale(0.5);
      flex-shrink: 0;
      transform-origin: left top;
    }
    > [class*='StyledLiquidityEntry'] {
      transform: scale(0.22);
      transform-origin: left top;
    }
    > [class*='StyledLendingEntry'] {
      transform: scale(0.41);
      transform-origin: left top;
    }
  }
`;

export const StyledDetailCard = styled.div`
  position: relative;
  width: 680px;
`;

export const StyledPointer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 0;
`;

export const StyledIcons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

export const StyledIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: -5px;
  border-radius: 8px;
  border: 2px solid #16181d;
`;
