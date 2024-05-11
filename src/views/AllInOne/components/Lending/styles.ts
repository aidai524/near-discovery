import styled from 'styled-components';

export const Theme = styled.div`
  --button-text-color: #fff;
  --button-color: #33549c;
  --primary-color: #33549c;
  --border-color: #292c42;
  --supply-bg-color: rgba(80, 123, 217, 0.2);
  --borrow-bg-color: rgba(202, 85, 176, 0.2);
  --supply-color: #85abff;
  --borrow-color: #ff8ee6;
  --withdraw-bg-hover-color: #33549c;
  --withdraw-bg-color: rgba(51, 84, 156, 0.5);
  --withdraw-border-color: #33549c;
  --repay-bg-color: rgba(202, 85, 176, 0.2);
  --repay-bg-hover-color: #ca55b0;
  --repay-border-color: #ca55b0;
  --switch-color: #33549c;
  --switch-border-color: #32496a;
  --secondary-border-color: #3f577b;
  --yours-table-title: #ffffff;
  --claim-bg-hover-color: #33549c;
  --claim-bg-color: rgba(51, 84, 156, 0.5);
  --claim-border-color: #33549c;
  --withdraw-color: #fff;
  --replay-color: #fff;
  --claim-color: #fff;
`;

export const StyledLendingEntry = styled.div`
  min-width: 650px;
`;
export const StyledChain = styled.div<{ bg?: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  background: ${({ bg }) => bg || '#16181D'};
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 80%;
    height: 80%;
  }
`;
export const StyledSupplied = styled.div<{ sub?: boolean }>`
  font-size: 16px;
  color: #fff;
  ${({ sub }) => sub ? 'font-size: 12px;color: #6c6e87;' : ''}
`;
