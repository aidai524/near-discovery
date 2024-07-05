import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';

import { useLayoutStore } from '@/stores/layout';
import { useUserStore } from '@/stores/user';
// import InviteFirendsModal from '@/views/QuestProfile/components/InviteFirendsModal';
import useInviteList from '@/hooks/useInviteList';

import Footer from './components/Footer';
import Header from './components/Header';
import InviteLink from './components/InviteLink';
// import Transactions from './components/Transactions';

const StyledContainer = styled.div<{ display: number }>`
  width: 352px;
  height: calc(100vh - 40px);
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 50;
  transition: 0.5s;
  transform: translate(${({ display }) => (display ? 0 : 400)}px);
`;

const StyledLayer = styled.div<{ display: number }>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: ${({ display }) => (display ? 'block' : 'none')};
`;

const StyledPanel = styled.div`
  border-radius: 32px;
  border: 1px solid #343838;
  box-sizing: border-box;
  padding: 20px 0px 0px;
  background: #262836;
  position: relative;
  z-index: 52;
  height: 100%;
  --padding-x: 15px;
`;
const Content = styled.div`
  position: relative;
  z-index: 60;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  padding: 5px;
  left: -40px;
  top: 20px;
  cursor: pointer;
  border-radius: 23px 0px 0px 23px;
  background: rgba(55, 58, 83, 0.5);
  width: 50px;
  height: 32px;
  padding-left: 15px;
  padding-top: 3px;
  z-index: 51;
  @media (max-width: 768px) {
    display: none;
  }
`;
const AccountSider = () => {
  const layoutStore = useLayoutStore();
  const userInfo = useUserStore((store: any) => store.user);
  const [showChains, setShowChains] = useState(false);
  const [showCodes, setShowCodes] = useState(false);
  const [showInviteLink, setShowInviteLink] = useState(false);
  const { inviteInfo, queryInviteList } = useInviteList();

  useEffect(() => {
    if (showChains) setShowCodes(false);
  }, [showChains]);

  useEffect(() => {
    if (showCodes) setShowChains(false);
  }, [showCodes]);

  useEffect(() => {
    if (showInviteLink && userInfo.address) queryInviteList();
  }, [showInviteLink, userInfo]);

  
  return (
    <>
      <StyledLayer
        display={layoutStore.showAccountSider ? 1 : 0}
        onClick={() => {
          layoutStore.set({
            showAccountSider: false,
          });
        }}
      />
      <StyledContainer display={layoutStore.showAccountSider ? 1 : 0}>
        <StyledPanel>
          <Content>
            <Header showInviteLink={showInviteLink} setShowInviteLink={setShowInviteLink} />
            {showInviteLink && <InviteLink showCodes={showCodes} setShowCodes={setShowCodes} />}
            <Footer />
            <Main>
            {/*  {
                layoutStore.showAccountSider && <Transactions />
              }*/}
            </Main>
          </Content>
        </StyledPanel>
        {layoutStore.showAccountSider && (
          <CloseIcon
            onClick={() => {
              layoutStore.set({
                showAccountSider: false,
              });
            }}
          >
            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 12L6 6.5L1 1" stroke="#979ABE" strokeWidth="2" strokeLinecap="round" />
              <path d="M9 12L14 6.5L9 1" stroke="#979ABE" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </CloseIcon>
        )}
      </StyledContainer>
      {/*<InviteFirendsModal
        open={showCodes}
        list={inviteInfo?.data || []}
        totalRewards={inviteInfo?.reward}
        reward={inviteInfo?.invite_reward}
        onClose={() => {
          setShowCodes(false);
        }}
      />*/}
    </>
  );
};

export default memo(AccountSider);
