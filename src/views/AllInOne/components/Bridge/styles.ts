import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
`;

export const StyledBody = styled.div`
  position: relative;
`;

export const StyledFoot = styled.div`
  margin-top: 20px;
`;

export const StyledDownIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 38px;
  height: 38px;
  border-radius: 8px;
  border: 4px solid #262836;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2E3142;
  cursor: pointer;
  transition: all .3s ease;
  z-index: 1;

  &:hover {
    background: #1f212d;
  }
`;

export const StyledCard = styled.div`
  position: relative;
  border: 1px solid #373A53;
  border-radius: 16px;
  background: #262836;
`;
export const StyledCardHead = styled.div`
  padding: 12px 20px;
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
`;
export const StyledCardBody = styled.div`
  border-top: 1px solid #373A53;
  padding: 12px 20px;
  border-radius: 0 0 16px 16px;
  
  &.editable {
    background: #20212D;
  }
`;
export const StyledCardHeadLeft = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  .title {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: #FFFFFF;
  }
`;
export const StyledCardHeadRight = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: right;
  color: #979ABE;
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const StyledCardHeadEdit = styled.button`
  display: block;
  width: 26px;
  height: 26px;
  border: 1px solid #373A53;
  border-radius: 8px;
  background: #2E3142;
`;
export const StyledCardContent = styled.div`
  .content-row {}
  .body {}
  .foot {
    margin-top: 12px;
  }
  .foot-right {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 8px;
  }
`;
export const StyledCardContentInput = styled.input`
  border: 0;
  background: none;
  height: 36px;
  line-height: 36px;
  color: #979ABE;
  font-size: 26px;
  font-weight: 500;
  outline: none;
  flex: 1;
  width: 0;
`;
export const StyledGasToken = styled.button`
  border: 1px solid #EBF479;
  height: 26px;
  line-height: 24px;
  border-radius: 13px;
  background: #2E3142;
  color: #EBF479;
  font-size: 14px;
  text-align: center;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 8px;
  white-space: nowrap;
  padding: 0 10px;
`;

export const StyledSelectorContainer = styled.div`
  position: relative;
`;
export const StyledSelector = styled.div`
  height: 36px;
  border-radius: 8px;
  border: 1px solid #373A53;
  background: #2E3142;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  cursor: pointer;
  gap: 8px;
  padding: 7px 10px 7px;

  .name {
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
    line-height: 19px;
  }
  .arrow {
    transition: all 0.15s ease-in-out;
    margin-left: auto;
  }
`;
export const StyledSelectorIcon = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 8px;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledSelectorPopup = styled.div`
  padding: 0;
  margin: 0;
  border: 1px solid #373a53;
  border-radius: 12px;
  background-color: #303142;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 36px;
  overflow-y: auto;

  .popup-item {
    margin: 0;
    padding: 0 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    transition: all .3s ease;
    gap: 10px;
    cursor: pointer;
    color: #fff;
    line-height: 38px;

    &:hover,
    &.selected {
      background: #2a2a3a;
    }

    .name {
      font-size: 14px;
      font-weight: 400;
    }

    .selected-check {
      margin-left: auto;
    }
  }
`;
