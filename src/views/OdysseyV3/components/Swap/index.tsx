import Title from '../Title';
import DappCard from '../DappCard';
import { StyledLoadingWrapper } from '@/styled/styles';
import Loading from '@/components/Icons/Loading';
import { StyledContainer, StyledContent } from './styles';

export default function Swap({ list, onRefreshDetail }: any) {
  return (
    <StyledContainer>
      <Title title="Swap" subtitle="Execute a flawless swap in Scroll" />
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
