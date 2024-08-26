import { memo } from 'react';

import AddMetaMask from '../AddMetaMask';
import Actions from './Actions';
import {
  StyledChainLogo,
  StyledChainLogoWrapper,
  StyledChainName,
  StyledHeaderWrapper,
  StyledTitleWrapper,
} from './styles';

const Header = ({ logo, name, chainId, bgColor, path, id, deepdive }: any) => {
  return (
    <StyledHeaderWrapper>
      <StyledTitleWrapper>
        <StyledChainLogoWrapper style={{ backgroundColor: bgColor }}>
          <StyledChainLogo src={logo} />
        </StyledChainLogoWrapper>
        <div>
          <StyledChainName>{name}</StyledChainName>
          <AddMetaMask chainId={chainId} bp="100121-001" />
        </div>
      </StyledTitleWrapper>
      <Actions path={path} id={id} deepdive={deepdive} />
    </StyledHeaderWrapper>
  );
};

export default memo(Header);
