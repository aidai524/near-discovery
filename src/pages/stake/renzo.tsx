import { useRouter } from 'next/router';
import { Suspense } from 'react';
import styled from 'styled-components';

import DappBack from '@/components/PageBack';
import Renzo from '@/components/Stake/Renzo'
import useDappInfo from '@/hooks/useDappInfo';
import { useDefaultLayout } from '@/hooks/useLayout';
import useScrollMore from '@/hooks/useScrollMore';
import type { NextPageWithLayout } from '@/utils/types';
import DappDetail from '@/views/Dapp/components/DappDetail';
import DappDetailScroll from '@/views/Dapp/components/DappDetail/Scroll';
import DappFallback from '@/views/Dapp/components/Fallback';
import renzoImg from '@/views/StakeModal/renzo.svg'

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

const Bg = styled.div`
    width: 478px;
   border: 1px solid rgba(55, 58, 83, 1);
   border-radius: 16px;
   margin: 20px auto;
   padding: 20px 0 0px;
   position: relative;
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
  const { viewHeight } = useScrollMore({ gap: 138 });

  return <Container>
      <DappBack
        defaultPath="/alldapps"
        style={{
          maxWidth: 1260,
          minWidth: 1060,
          margin: '0 auto',
        }}
      />
      <TitleWapper>
        <img className="icon" src={renzoImg.src} />
      </TitleWapper>
      <Bg style={{ minHeight: viewHeight }}>
        <Renzo />
      </Bg>

      <DappDetailScroll />
      <Suspense fallback={<DappFallback />}>
        <DappDetail {...dapp}/>
      </Suspense>
    </Container>
};

Page.getLayout = useDefaultLayout;

export default Page;
