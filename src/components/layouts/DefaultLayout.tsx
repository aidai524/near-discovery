import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import AccountSider from '../AccountSider';
import Footer from '../Footer';
import { DesktopNavigationLeft } from '../navigation/desktop/DesktopNavigationLeft';
import { DesktopNavigationTop } from '../navigation/desktop/DesktopNavigationTop';
import { LoginBox } from '../navigation/desktop/LoginBox';

interface Props {
  children: ReactNode;
}

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  .content {
    padding: 0px 0px 100px;
    flex-grow: 1;
    position: relative;
    overflow-x: hidden;
    box-sizing: border-box;
  }
`;

export function DefaultLayout({ children }: Props) {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <Layout
      style={{
        background: router.pathname === '/odyssey/[version]' ? '#000' : '#16181d',
      }}
    >
      {pathName !== '/uniswap' && <DesktopNavigationTop />}

      <div className="content">
        {/* <div style={{ display: 'none' }}>
          <LoginBox />
        </div> */}
        {children}
      </div>
      {pathName !== '/uniswap' && <Footer />}
      <AccountSider />
    </Layout>
  );
}
