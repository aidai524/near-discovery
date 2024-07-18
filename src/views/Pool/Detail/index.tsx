import { memo } from 'react';
import useDappConfig from '../hooks/useDappConfig';
import DetailV2 from './DetailV2';
import DetailV3 from './DetailV3';
import { StyledContainer } from './styles';

const Detail = () => {
  const { theme = {}, id, fee, chainId } = useDappConfig();

  if (!id) return <div />;
  return (
    <StyledContainer style={{ ...theme }}>
      {id.startsWith('0x') ? <DetailV2 id={id} fee={fee} chainId={chainId} /> : <DetailV3 tokenId={id} />}
    </StyledContainer>
  );
};

export default memo(Detail);
