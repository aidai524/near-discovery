import styled from 'styled-components';

export const StyledBox = styled.div`
  border-radius: 0px 0px 16px 16px;
  background: var(--agg-secondary-color, #2e3142);
  height: 0px;
  animation: fadeOut 0.4s 0.1s ease both;

  &.expand {
    animation: fadeIn 0.4s 0.1s ease both;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
      height: 0px;
      border: none;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      height: 292px;
      border: 1px solid var(--agg-border-color, #373a53);
      border-top: none;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: translateY(0);
      height: 292px;
      border: 1px solid var(--agg-border-color, #373a53);
      border-top: none;
    }
    100% {
      opacity: 0;
      transform: translateY(-20px);
      height: 0px;
      border: none;
    }
  }
`;

export const StyledWrapper = styled.div`
  display: none;

  &.expand {
    display: block;
  }
`;

export const StyledHeader = styled.div`
  height: 50px;
  padding-left: 520px;
  border-bottom: 1px solid var(--agg-border-color, #373a53);
`;

export const StyledTabs = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTab = styled.div`
  width: 250px;
  height: 50px;
  border-bottom: 5px solid transparent;
  color: var(--agg-primary-color, #979abe);
  text-align: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 50px;
  cursor: pointer;
  position: relative;
  transition: 0.3s;
  /* &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 100%;
    background-color: #373a53;
    right: 0px;
    top: 0px;
  } */

  &.active {
    border-bottom-color: var(--agg-primary-color, #fff);
    color: var(--agg-primary-color, #fff);
  }
`;
export const StyledContent = styled.div`
  display: flex;
  padding-top: 16px;
`;

export const StyledDetailPanel = styled.div`
  width: 500px;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid var(--agg-border-color, #373a53);
  color: var(--agg-thirdry-color, #979abe);

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 12px;

  & .white {
    color: var(--agg-thirdry-color, #fff);
  }
`;
export const StyledDetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledBorrowLimit = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  margin-top: 12px;
  height: 46px;
`;
export const StyledGasBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #979abe;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: none;
`;
