import { useSetChain } from '@web3-onboard/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import BridgeAction from '@/views/SuperBridge/BridgeAction';
import Transaction from '@/views/SuperBridge/Transaction';
import Medal from '@/views/SuperBridge/Medal';

import chainCofig from '@/config/chains'

import { useDefaultLayout } from '@/hooks/useLayout';

import type { NextPageWithLayout } from '@/utils/types';
import type { Chain } from '@/types';

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-top: 80px;
`;

const RightContainer = styled.div`
  width: 414px;
`

const Sep = styled.div`
  margin-top: 20px;
`

const chainList = Object.values(chainCofig)

const Bridge: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <Container>
      <BridgeAction
        chainList={chainList}
      />
      <RightContainer>
        <Transaction />
        <Sep />
        <Medal />
      </RightContainer>
    </Container>
  )
};

Bridge.getInitialProps = async () => ({});

Bridge.getLayout = useDefaultLayout;

export default Bridge;
