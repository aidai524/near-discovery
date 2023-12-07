import { memo, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import chains from '@/config/chains';
import useAccount from '@/hooks/useAccount';
import useSwitchChain from '@/hooks/useSwitchChain';

const StyledContainer = styled.div<{ mt?: number; showName?: boolean }>`
  height: 38px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  padding: 0px 10px 0px 4px;
  margin-top: ${({ mt }) => mt + 'px'};
  @media (max-width: 768px) {
    border: none;
    background-color: transparent;
    justify-content: center;
  }
`;
const StyledChain = styled.div`
  display: flex;
  gap: 10px;
  color: #fff;
  align-items: center;
  line-height: 38px;
`;
const ChainLogo = styled.img`
  width: 26px;
  height: 26px;
  border-radius: 8px;
`;
const ChainName = styled.div`
  font-size: 16px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-weight: 700;
  }
`;
const ChainList = styled.div<{ display?: boolean }>`
  width: 204px;
  border: 1px solid #373a53;
  border-radius: 8px;
  background-color: rgba(55, 58, 83);
  position: absolute;
  top: 38px;
  left: 0px;
  box-sizing: border-box;
  display: ${({ display }) => (display ? 'block' : 'none')};
  z-index: 200;
`;
const ChainItem = styled(StyledChain)<{ active?: boolean }>`
  padding: 0px 10px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  ${({ active }) => active && 'background-color: #ebf479; pointer-events: none;color: #000'}
`;

const Chain = ({
  mt,
  showName = true,
  showChains,
  setShowChains,
}: {
  mt?: number;
  showName?: boolean;
  showChains?: boolean;
  setShowChains?: (show: boolean) => void;
}) => {
  const { chainId } = useAccount();
  const currentChain = useMemo(() => (chainId ? chains[chainId] : null), [chainId]);
  const { switching, switchNetwork } = useSwitchChain();
  const [showList, setShowList] = useState(false);
  useEffect(() => {
    const hideList = () => {
      showName ? setShowChains?.(false) : setShowList(false);
    };
    document.addEventListener('click', hideList);
    return () => {
      document.removeEventListener('click', hideList);
    };
  }, []);

  return (
    <StyledContainer mt={mt} showName={showName}>
      <StyledChain>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <rect
            x="29"
            y="29"
            width="28"
            height="28"
            rx="9"
            transform="rotate(180 29 29)"
            fill="white"
            stroke="#2D2D2D"
            stroke-width="2"
          />
          <path
            d="M23.1757 18.6469V7.65935C23.1611 6.73998 22.4461 6 21.5487 6H10.3559C7.94084 6.03737 6 8.06297 6 10.5445C6 11.3817 6.21889 12.0992 6.55453 12.7271C6.83908 13.2503 7.28417 13.7436 7.72195 14.1099C7.84599 14.2145 7.78762 14.1697 8.16703 14.4089C8.69237 14.7377 9.29067 14.9022 9.29067 14.9022L9.28338 21.4723C9.29797 21.7862 9.32716 22.0852 9.40742 22.3618C9.6555 23.2886 10.283 23.9987 11.1367 24.3425C11.4942 24.4845 11.8955 24.5817 12.326 24.5892L21.2641 24.619C23.0444 24.619 24.4891 23.1391 24.4891 21.3078C24.4963 20.224 23.9711 19.2524 23.1757 18.6469Z"
            fill="#FFEEDA"
          />
          <path
            d="M23.3944 21.39C23.3579 22.5635 22.4167 23.5052 21.2639 23.5052L15.113 23.4828C15.6018 22.8998 15.901 22.1449 15.901 21.3227C15.901 20.0296 15.1495 19.1401 15.1495 19.1401H21.2712C22.4459 19.1401 23.4017 20.1193 23.4017 21.3227L23.3944 21.39Z"
            fill="#EBC28E"
          />
          <path
            d="M8.30566 13.183C7.59791 12.4953 7.10176 11.6059 7.10176 10.552V10.4398C7.16013 8.63848 8.60481 7.18842 10.3632 7.1361H21.5559C21.8478 7.15105 22.0813 7.36034 22.0813 7.66679V17.3687C22.3366 17.4136 22.4606 17.451 22.7088 17.5407C22.9058 17.6154 23.1757 17.7724 23.1757 17.7724V7.66679C23.1611 6.74742 22.4461 6.00745 21.5487 6.00745H10.3559C7.94084 6.04482 6 8.07041 6 10.552C6 11.9945 6.64208 13.2278 7.69276 14.0949C7.76573 14.1547 7.83139 14.2295 8.02111 14.2295C8.34944 14.2295 8.58293 13.9603 8.56833 13.6688C8.56103 13.4222 8.45889 13.3325 8.30566 13.183Z"
            fill="#101010"
          />
          <path
            d="M21.2641 18.0041H12.4866C11.8956 18.0115 11.4213 18.4974 11.4213 19.1028V20.3959C11.4359 20.9939 11.932 21.5022 12.523 21.5022H13.1724V20.3959H12.523V19.1328C12.523 19.1328 12.6836 19.1328 12.8806 19.1328C13.9896 19.1328 14.8068 20.1866 14.8068 21.3153C14.8068 22.3169 13.9166 23.595 12.4282 23.4904C11.1075 23.4007 10.3925 22.1973 10.3925 21.3153V10.3576C10.3925 9.86432 9.99849 9.46069 9.51693 9.46069H8.64136V10.5819H9.29074V21.3228C9.25426 23.5054 10.8084 24.6041 12.4282 24.6041L21.2715 24.634C23.0518 24.634 24.4965 23.1541 24.4965 21.3228C24.4965 19.4915 23.0445 18.0041 21.2641 18.0041ZM23.3946 21.3901C23.3582 22.5636 22.4169 23.5054 21.2641 23.5054L15.1133 23.4829C15.6022 22.8999 15.9013 22.1449 15.9013 21.3228C15.9013 20.0297 15.1497 19.1402 15.1497 19.1402H21.2715C22.4461 19.1402 23.402 20.1194 23.402 21.3228L23.3946 21.3901Z"
            fill="#101010"
          />
          <path
            d="M18.8998 10.7838H12.282V9.6626H18.8998C19.1989 9.6626 19.4471 9.90925 19.4471 10.2232C19.4471 10.5296 19.2063 10.7838 18.8998 10.7838Z"
            fill="#101010"
          />
          <path
            d="M18.8998 16.0607H12.282V14.9395H18.8998C19.1989 14.9395 19.4471 15.1862 19.4471 15.5001C19.4471 15.8065 19.2063 16.0607 18.8998 16.0607Z"
            fill="#101010"
          />
          <path
            d="M20.0673 13.4223H12.282V12.3011H20.0599C20.3591 12.3011 20.6072 12.5478 20.6072 12.8617C20.6145 13.1682 20.3664 13.4223 20.0673 13.4223Z"
            fill="#101010"
          />
        </svg>
        {showName && (
          <ChainName>{switching ? 'Request' : currentChain ? currentChain.chainName : 'Select Network'}</ChainName>
        )}
      </StyledChain>
      <ChainList display={showName ? showChains : showList}>
        {Object.values(chains).map((chain) => (
          <ChainItem
            key={chain.chainId}
            onClick={() => {
              switchNetwork(chain);
            }}
            active={chain.chainId === currentChain?.chainId}
          >
            <ChainLogo src={chain.icon} />
            <ChainName>{chain.chainName}</ChainName>
          </ChainItem>
        ))}
      </ChainList>
    </StyledContainer>
  );
};

export default memo(Chain);
