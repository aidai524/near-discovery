import { memo } from 'react';
import Loading from '@/components/Icons/Loading';
import { StyledLoadingWrapper } from '@/styled/styles';
import useMyActions from '../../hooks/useMyActions';
import Total from './Total';
import Empty from './Empty';
import Table from './Table';
import { StyledContainer } from './styles';

const MyActions = ({ chain, openModal }: any) => {
  const { loading, list, deleting, handleDelete } = useMyActions(chain?.chainId, 20);
  return (
    <StyledContainer>
      <Total chainId={chain.chainId} />
      {loading ? (
        <StyledLoadingWrapper $h="200px">
          <Loading size={32} />
        </StyledLoadingWrapper>
      ) : !list || list?.length === 0 ? (
        <Empty />
      ) : (
        <Table {...{ loading, list, deleting, handleDelete, openModal }} />
      )}
    </StyledContainer>
  );
};

export default memo(MyActions);
