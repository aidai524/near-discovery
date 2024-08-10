import { useDefaultLayout } from '@/hooks/useLayout';
import styled from 'styled-components';

import type { NextPageWithLayout } from '@/utils/types';
import EtherFi from '@/components/Stake/EtherFi'
import DappBack from '@/components/PageBack';
import useDappInfo from '@/hooks/useDappInfo';
import { useRouter } from 'next/router';
import DappDetailScroll from '@/views/Dapp/components/DappDetail/Scroll';
import { Suspense } from 'react';
import DappFallback from '@/views/Dapp/components/Fallback';
import DappDetail from '@/views/Dapp/components/DappDetail';

const Container = styled.div`
  margin: 0 8%;
  color: #ffffff;
  padding-top: 50px;
`

const TitleWapper = styled.div`
text-align: center;
  .icon {
    height: 48px;
  }
`

const arrow = (
  <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L4 4L1 7" stroke="#979ABE" strokeLinecap="round" />
  </svg>
);

export const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const dappPathname = router.query.dappRoute as string;
  const { dapp } = useDappInfo(dappPathname ? `dapp/${dappPathname}` : '');

  return <Container>
      <DappBack defaultPath="/alldapps" />
      <TitleWapper>
        <img className="icon" src="/images/apps/etherfi.png" />
      </TitleWapper>
      <EtherFi chainIndex={4}/>

      <DappDetailScroll />
      <Suspense fallback={<DappFallback />}>
        <DappDetail {...dapp}/>
      </Suspense>
    </Container>
};

Page.getLayout = useDefaultLayout;

export default Page;
