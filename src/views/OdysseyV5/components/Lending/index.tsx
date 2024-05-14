import Loading from '@/components/Icons/Loading';
import { StyledLoadingWrapper } from '@/styled/styles';

import DappCard from '../DappCard';
import Title from '../Title';
import { StyledContainer, StyledContent } from './styles';

export default function Lending({ list, onRefreshDetail }: any) {
  return (
    <StyledContainer>
      <Title
        title="Lending & Liquidity & Staking"
        subtitle="Participate in lending, liquidity providing, and restaking to earn more rewards"
      />
      <StyledContent>
        {list?.length ? (
          list.map((item: any) => <DappCard key={item.id} {...item} onRefreshDetail={onRefreshDetail} />)
        ) : (
          <StyledLoadingWrapper $h="100px">
            <Loading size={30} />
          </StyledLoadingWrapper>
        )}
      </StyledContent>
    </StyledContainer>
  );
}
