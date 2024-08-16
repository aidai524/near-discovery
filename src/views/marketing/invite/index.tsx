import { QUEST_PATH } from '@/config/quest';
import { getWithoutActive } from '@/utils/http';
import {
  StyledBg,
  StyledBgImage,
  StyledConnectButton,
  StyledContainer,
  StyledContent,
  StyledDesc,
  StyledHead,
  StyledInner,
  StyledLRect,
  StyledLeftMouseImage,
  StyledLogo,
  StyledLogoContainer,
  StyledLogoText,
  StyledMedal,
  StyledMedals,
  StyledName,
  StyledRRect,
  StyledRadialGradient,
  StyledRect,
  StyledRightMouseImage,
  StyledX,
  StyledXContainer
} from '@/views/marketing/invite/styles';
import { useConnectWallet } from '@web3-onboard/react';
import { memo, useEffect, useState } from 'react';
import { InviteModal, KolUserInfo } from '../components';
import { useRouter } from 'next/router';


const Invite = (props: Props) => {
  const {
    logo,
    name,
    platform,
    logoSize = {
      width: 60,
      height: 60,
    },
    medals = [],
    isMobile
  } = props;
  const router = useRouter()
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [address, setAddress] = useState('');
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalType, setModalType] = useState<'success' | 'fail'>('success');
  const [updater, setUpdater] = useState(0);
  async function checkAddress() {
    const res: any = await getWithoutActive(`${QUEST_PATH}/api/invite/check-address/${address}`, platform, {
      name: router?.query?.kolName
    });
    if ((res.code as number) !== 0) return;
    if (res.data.is_activated) {
      setModalType("fail")
    } else {
      setModalType("success")
    }
    setIsShowModal(true)
  }

  const onConnectWallet = () => {
    connect();
  }

  useEffect(() => {
    if (wallet) {
      setAddress((wallet as any)['accounts'][0]?.address);
    }
  }, [wallet]);

  useEffect(() => {
    if (address) {
      setUpdater(Date.now());
      checkAddress()
    }
  }, [address]);

  return (
    <StyledContainer className={isMobile ? 'mobile-invite' : 'invite'}>
      <StyledInner>
        <StyledHead>
          <StyledLogoContainer className='logo-container'>
            <StyledLogo className='logo' src='/images/marketing/dapdap-logo.png' alt="logo" width={70} height={74} />
            <StyledLogoText src='/images/marketing/dapdap.png' alt="logo text" />
          </StyledLogoContainer>
          <StyledXContainer>
            <StyledX>X</StyledX>
            <StyledContent>
              <StyledDesc>
                <p>You are visiting a invitation link from DadDap partener {name}. </p>
                <p>Connect your wallet to keep visiting.</p>
              </StyledDesc>
              {
                medals?.length > 0 && (
                  <StyledMedals>
                    {
                      medals.map((medal, index) => (<StyledMedal $url={medal} key={index} />))
                    }
                  </StyledMedals>
                )
              }
              {

                !wallet ? (
                  <StyledConnectButton onClick={onConnectWallet}>
                    Connect Your Wallet
                  </StyledConnectButton>
                ) : (
                  <StyledConnectButton style={{ cursor: 'not-allowed' }}>
                    {modalType === "success" ? "Successfully Connected" : "Not eligible to participate"}
                  </StyledConnectButton>
                )
              }
            </StyledContent>

            <StyledBg>
              <StyledBgImage src='/images/invite/invite_bg.png' />
              <StyledRect>
                <StyledLRect>
                  <StyledLeftMouseImage src='/images/invite/left_mouse.svg' />
                </StyledLRect>
                <StyledRRect>
                  <StyledRightMouseImage src='/images/invite/right_mouse.svg' />
                </StyledRRect>
              </StyledRect>
              <StyledRadialGradient />
            </StyledBg>
          </StyledXContainer>
          {
            name === "Kol" ? (
              <KolUserInfo />
            ) : (
              <StyledLogoContainer className='logo-container'>
                <StyledLogo src={logo} alt={name} width={logoSize.width} height={logoSize.height} />
                <StyledName className='dapp-name'>{name}</StyledName>
              </StyledLogoContainer>
            )
          }
        </StyledHead>
      </StyledInner>
      <InviteModal type={modalType} open={isShowModal} onClose={() => setIsShowModal(false)}></InviteModal>
    </StyledContainer>
  );
};

export default memo(Invite);

interface Props {
  logo: string;
  name: string;
  platform: "okx" | "coin68" | "bitget" | "namlongdao" | "kol";
  isMobile?: boolean;
  logoSize?: {
    width: number;
    height: number;
  },
  medals?: string[];
}
