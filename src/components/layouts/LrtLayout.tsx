import type { ReactNode } from 'react';
import styled from 'styled-components';

import useAccount from '@/hooks/useAccount';
import { useUserStore } from '@/stores/user';
import { ellipsAccount } from '@/utils/account';
import { LrtMenu } from '@/views/lrts/components';

interface Props {
  children: ReactNode;
}

const StyledWrap = styled.div`
  margin: 0 auto;
`;

const StyledHead = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 26px 20px;
`;
const StyledLogo = styled.img`
  width: 118px;
`;

const StyledAccount = styled.div`
  color: white;
`;
const LogoImage = styled.img<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
`;
const Logo = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  background-image: conic-gradient(from 180deg at 50% 50%, #00d1ff 0deg, #ff008a 360deg);
`;
const StyledUser = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export function LrtLayout({ children }: Props) {
  const { account } = useAccount();
  const userInfo = useUserStore((store: any) => store.user);
  console.log('userInfo', userInfo);

  return (
    <StyledWrap>
      <StyledHead>
        {/* <StyledLogo src="/images/marketing/dap-logo.svg" alt="" /> */}
        <LrtMenu />
        {account ? (
          <StyledUser>
            {userInfo?.avatar ? <LogoImage src={userInfo.avatar} size={28} /> : <Logo size={28} />}
            <StyledAccount>{ellipsAccount(account)}</StyledAccount>
          </StyledUser>
        ) : null}
      </StyledHead>
      {children}
    </StyledWrap>
  );
}
