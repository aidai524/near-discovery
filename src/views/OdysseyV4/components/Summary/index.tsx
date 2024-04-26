import { formatThousandsSeparator } from '@/utils/format-number';

import { Item, StyledContainer, Title, Value } from './styles';

export default function Summary({ data }: any) {
  const { total_transactions, total_users, trading_volume } = data;

  return (
    <StyledContainer>
      <span className="left yLine"></span>
      <span className="right yLine"></span>
      <span className="top xLine"></span>
      <span className="bottom xLine"></span>
      <Item>
        <Title>Trading Volume</Title>
        <Value>${formatThousandsSeparator(Number(Number(trading_volume).toFixed(2)))}</Value>
      </Item>
      <Item>
        <Title>Total Transactions</Title>
        <Value>${formatThousandsSeparator(total_transactions)}</Value>
      </Item>
      <Item>
        <Title>Total Users</Title>
        <Value>{formatThousandsSeparator(total_users)}</Value>
      </Item>
      <Item>
        <Title>accumulated Gold</Title>
        <Value>{formatThousandsSeparator(30000)}</Value>
      </Item>
    </StyledContainer>
  );
}
