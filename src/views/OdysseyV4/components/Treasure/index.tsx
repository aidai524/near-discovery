import Image from 'next/image';
import { useRef, useState } from 'react';

import useAccount from '@/hooks/useAccount';
import useAuthCheck from '@/hooks/useAuthCheck';
import SkakeModel from '@/views/StakeModal/index';

import useParticleReport from '../../hooks/useParticleReport';
import Line from '../Line';
import Modal from '../Modal';
import Trapeziform from '../Trapeziform';
import TrapeziformBtn from '../TrapeziformBtn';
import AddLiquidityModal from '@/views/Pool/AddLiquidityModal';
import {
  Desc,
  IconGroup,
  ModalBody,
  ModalDesc,
  ModalIconGroup,
  ModalTitle,
  StyledContainer,
  StyledContent,
  Title,
  Treasure1,
  Treasure2,
  Treasure3,
  Treasure4,
  Treasure5,
} from './styles';

const ThrusterCoinListStep1 = [
  {
    key: 1,
    icon: ['/images/odyssey/v4/coin-juice.svg', '/images/odyssey/v4/coin-weth2.svg'],
    name: ['JUICE', 'WETH'],
  },
  {
    key: 2,
    icon: ['/images/odyssey/v4/coin-pac.svg', '/images/odyssey/v4/coin-weth2.svg'],
    name: ['PAC', 'WETH'],
  },
  {
    key: 3,
    icon: ['/images/odyssey/v4/coin-kap.svg', '/images/odyssey/v4/coin-weth2.svg'],
    name: ['KAP', 'WETH'],
  },
  {
    key: 4,
    icon: ['/images/odyssey/v4/coin-yield.svg', '/images/odyssey/v4/coin-weth2.svg'],
    name: ['YIELD', 'WETH'],
  },
  {
    key: 5,
    icon: ['/images/odyssey/v4/coin-glory.svg', '/images/odyssey/v4/coin-weth2.svg'],
    name: ['GLORY', 'WETH'],
  },
  {
    key: 6,
    icon: ['/images/odyssey/v4/coin-ole.svg', '/images/odyssey/v4/coin-weth2.svg'],
    name: ['OLE', 'WETH'],
  },
  {
    key: 7,
    icon: ['/images/odyssey/v4/coin-sss.svg', '/images/odyssey/v4/coin-weth2.svg'],
    name: ['SSS', 'WETH'],
  },
  {
    key: 8,
    icon: ['/images/odyssey/v4/coin-andy.svg', '/images/odyssey/v4/coin-weth2.svg'],
    name: ['ANDY', 'WETH'],
  },
  {
    key: 9,
    icon: ['/images/odyssey/v4/coin-early.svg', '/images/odyssey/v4/coin-weth2.svg'],
    name: ['EARLY', 'WETH'],
  },
  {
    key: 10,
    icon: ['/images/odyssey/v4/coin-mia.svg', '/images/odyssey/v4/coin-weth2.svg'],
    name: ['MIA', 'WETH'],
  },
  {
    key: 12,
    icon: ['/images/odyssey/v4/coin-orbit.svg', '/images/odyssey/v4/coin-weth2.svg'],
    name: ['ORBIT', 'WETH'],
  },
  {
    key: 14,
    icon: ['/images/odyssey/v4/coin-bag.svg', '/images/odyssey/v4/coin-weth2.svg'],
    name: ['BAG', 'WETH'],
  },
  {
    key: 15,
    icon: ['/images/odyssey/v4/coin-pump.svg', '/images/odyssey/v4/coin-weth2.svg'],
    name: ['PUMP', 'WETH'],
  },
];
const ThrusterCoinListStep2 = [
  {
    key: 1,
    icon: ['/images/odyssey/v4/coin-juice.svg', '/images/odyssey/v4/coin-weth1.svg'],
    name: ['JUICE', 'WETH'],
  },
  {
    key: 2,
    icon: ['/images/odyssey/v4/coin-pac.svg', '/images/odyssey/v4/coin-weth1.svg'],
    name: ['PAC', 'WETH'],
  },
  {
    key: 3,
    icon: ['/images/odyssey/v4/coin-kap.svg', '/images/odyssey/v4/coin-weth1.svg'],
    name: ['KAP', 'WETH'],
  },
  {
    key: 4,
    icon: ['/images/odyssey/v4/coin-yield.svg', '/images/odyssey/v4/coin-weth1.svg'],
    name: ['YIELD', 'WETH'],
  },
  {
    key: 5,
    icon: ['/images/odyssey/v4/coin-glory.svg', '/images/odyssey/v4/coin-weth1.svg'],
    name: ['GLORY', 'WETH'],
  },
];

export default function Treasure() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showRenzo, setShowRenzo] = useState(false);
  const [selectedPool, setSelectedPool] = useState('');
  const linkRef = useRef<any>();

  const TrapLayout = {
    borderColor: '#FFDD4D',
    corner: 34,
  };
  const { check } = useAuthCheck({ isNeedAk: true });
  const { account } = useAccount();
  const openLink = (_link: string) => {
    window.open(_link, '_blank');
  };

  const handleReportLink = (_link: string) => {
    linkRef.current = _link;
    if (!account) {
      check();
    } else {
      onStartReport();
    }
  };
  const reportCallback = () => {
    openLink(linkRef.current);
  };
  const { loading: reportLoading, onStartReport } = useParticleReport(reportCallback);

  return (
    <StyledContainer>
      {/* {showModal1 ? (
        <Modal type="type1" onClose={() => setShowModal1(false)}>
          <ModalTitle>How to earn extra 1% Blast Gold by Particle?</ModalTitle>
          <ModalDesc>
            This strategy benefits users with an additional Gold bonus reward. Trade on Particle with perps, you will
            get 1% extra Blast Gold.
          </ModalDesc>
          <ModalBody>
            <div className="modal-body-1">
              <Trapeziform {...TrapLayout} className="modal-sec-1">
                <div className="coin-group">
                  <Image src="/images/odyssey/v4/coin-btc.svg" alt="" width={46} height={46} />
                  <Image
                    src="/images/odyssey/v4/coin-usdb.svg"
                    alt=""
                    width={26}
                    height={26}
                    style={{ marginLeft: -10 }}
                  />
                </div>
                <div className="coin-title">BTC/USDB</div>
                <div className="tags">
                  <div className="prep">PERP</div>
                  <div className="points">200x O_O Points</div>
                </div>
                <TrapeziformBtn width="236px" height="42px">
                  Add Liquidity <Image src="/images/odyssey/v4/arrow.svg" alt="" width={23} height={16} />
                </TrapeziformBtn>
              </Trapeziform>
              <Trapeziform {...TrapLayout} className="modal-sec-1">
                <div className="coin-group">
                  <Image src="/images/odyssey/v4/coin-weth.svg" alt="" width={46} height={46} />
                  <Image
                    src="/images/odyssey/v4/coin-usdb.svg"
                    alt=""
                    width={26}
                    height={26}
                    style={{ marginLeft: -10 }}
                  />
                </div>
                <div className="coin-title">WETH/USDB</div>
                <div className="tags">
                  <div className="prep">PERP</div>
                  <div className="points">200x O_O Points</div>
                </div>
                <TrapeziformBtn width="236px" height="42px">
                  Add Liquidity <Image src="/images/odyssey/v4/arrow.svg" alt="" width={23} height={16} />
                </TrapeziformBtn>
              </Trapeziform>
            </div>
          </ModalBody>
        </Modal>
      ) : null} */}
      {showModal1 ? (
        <Modal type="type1" onClose={() => setShowModal1(false)} bgColor="#000">
          <ModalTitle>How to earn extra 1% Blast Gold by Particle?</ModalTitle>
          <ModalDesc>
            This strategy benefits users with an additional Gold bonus reward. <br />
            Trade on Particle with perps, you will get 1% extra Blast Gold.
          </ModalDesc>
          <ModalBody>
            <TrapeziformBtn
              width="236px"
              height="42px"
              loading={reportLoading}
              handleClick={(e: any) => handleReportLink('https://app.particle.trade/')}
              style={{
                margin: '73px auto 0',
              }}
            >
              Trade on Particle <Image src="/images/odyssey/v4/arrow.svg" alt="" width={23} height={16} />
            </TrapeziformBtn>
          </ModalBody>
        </Modal>
      ) : null}
      {showModal2 ? (
        <Modal type="type2" onClose={() => setShowModal2(false)}>
          <ModalTitle>
            How to earn <Image src="/images/odyssey/v4/td4.svg" alt="" width={79} height={22} /> by Renzo / Hyperlock /
            Particle?
          </ModalTitle>
          <ModalDesc>
            This strategy enables users to earn Renzo points & Eigenlayer Point & Blast points & Blast gold & Thruster
            points & Hyperlock points/Particle points + some APR
          </ModalDesc>
          <ModalBody>
            <div className="modal-body">
              <Trapeziform {...TrapLayout} className="modal-list">
                <div className="modal-list-head">
                  <div className="head-left">
                    <div className="head-title">Step 1. Get ezETH from </div>
                    <div className="tag-thr">
                      <Image src="/images/odyssey/v4/tag-renzo.svg" alt="" width={93} height={24} />
                    </div>
                  </div>
                  <div className="tag-points">
                    <Image
                      src="/images/odyssey/v4/icon-renzo.svg"
                      alt=""
                      width={16}
                      height={16}
                      style={{ marginRight: 5 }}
                    />
                    ezPoints
                  </div>
                </div>
                <div className="modal-list-body">
                  <div className="body-left" style={{ color: 'white' }}>
                    <Image src="/images/odyssey/v4/coin-eth.svg" alt="" width={26} height={26} />
                    ETH
                    <Image src="/images/odyssey/v4/arrow-white.svg" alt="" width={19} height={16} />
                    <Image src="/images/odyssey/v4/coin-ezeth.svg" alt="" width={26} height={26} />
                    ezETH
                  </div>
                  <div className="body-right">
                    <TrapeziformBtn
                      onClick={() => {
                        setShowRenzo(true);
                      }}
                      width="286px"
                      height="42px"
                    >
                      Restake
                      <Image src="/images/odyssey/v4/arrow.svg" alt="" width={23} height={16} />
                    </TrapeziformBtn>
                  </div>
                </div>
              </Trapeziform>
              <Trapeziform {...TrapLayout} className="modal-list">
                <div className="modal-list-head">
                  <div className="head-left">
                    <div className="head-title">Step 2. Add ezETH/WETH Liquidity on</div>
                    <div className="tag-thr">
                      <Image src="/images/odyssey/v4/tag-thr.svg" alt="" width={139} height={24} />
                    </div>
                  </div>
                  <div className="tag-points">
                    <Image
                      src="/images/odyssey/v4/icon-thruster.svg"
                      alt=""
                      width={16}
                      height={16}
                      style={{ marginRight: 5 }}
                    />
                    Thruster Credits
                  </div>
                </div>
                <div className="modal-list-body">
                  <div className="body-left">
                    <Image src="/images/odyssey/v4/coin-ezeth.svg" alt="" width={26} height={26} />
                    <Image src="/images/odyssey/v4/coin-weth2.svg" alt="" width={26} height={26} className="lp-img" />
                    <div className="body-left-content">
                      <div className="body-left-content-title">ezETH / WETH</div>
                    </div>
                  </div>
                  <div className="body-right">
                    <TrapeziformBtn
                      width="286px"
                      height="42px"
                      handleClick={(e: any) => openLink(`${location.origin}/dapp/thruster-liquidity`)}
                    >
                      Add Liquidity <Image src="/images/odyssey/v4/arrow.svg" alt="" width={23} height={16} />
                    </TrapeziformBtn>
                  </div>
                </div>
              </Trapeziform>
              <div className="modal-body-2">
                <Trapeziform {...TrapLayout} className="modal-sec-2">
                  <div className="step">Step 3-A.</div>
                  <div className="desc">
                    Provide LP on
                    <div className="tag-thr">
                      <Image src="/images/odyssey/v4/tag-hyp.svg" alt="" width={107} height={22} />
                    </div>
                  </div>

                  {/* <div className="tag-coins"> */}
                  <Image src="/images/odyssey/v4/hpgroups.svg" alt="" width={68} height={26} className="" />
                  {/* </div> */}
                  <div className="coin-pairs">
                    <div className="pairs">
                      <Image src="/images/odyssey/v4/coin-ezeth.svg" alt="" width={26} height={26} />
                      <Image
                        src="/images/odyssey/v4/coin-weth1.svg"
                        alt=""
                        width={26}
                        height={26}
                        style={{ marginLeft: -10 }}
                      />
                    </div>

                    <div className="txt">ezETH / WETH</div>
                  </div>
                  <TrapeziformBtn
                    width="236px"
                    height="42px"
                    handleClick={(e: any) => openLink(`${location.origin}/dapp/hyperlock`)}
                  >
                    Stake LP
                    <Image src="/images/odyssey/v4/arrow.svg" alt="" width={23} height={16} />
                  </TrapeziformBtn>
                </Trapeziform>
                <Trapeziform {...TrapLayout} className="modal-sec-2">
                  <div className="step">Step 3-B.</div>
                  <div className="desc">
                    Provide LP on
                    <div className="tag-thr">
                      <Image src="/images/odyssey/v4/tag-par.svg" alt="" width={107} height={22} />
                    </div>
                  </div>

                  <div className="tag-coins">
                    <Image src="/images/odyssey/v4/icon-particle.svg" alt="" width={22} height={22} className="" />
                    Particle Points
                  </div>
                  <div className="coin-pairs">
                    <div className="pairs">
                      <Image src="/images/odyssey/v4/coin-ezeth.svg" alt="" width={26} height={26} />
                      <Image
                        src="/images/odyssey/v4/coin-weth.svg"
                        alt=""
                        width={26}
                        height={26}
                        style={{ marginLeft: -10 }}
                      />
                    </div>

                    <div className="txt">ezETH / WETH</div>
                  </div>
                  <TrapeziformBtn
                    width="236px"
                    height="42px"
                    loading={reportLoading}
                    handleClick={(e: any) => handleReportLink('https://app.particle.trade/earn')}
                  >
                    Stake LP
                    <Image src="/images/odyssey/v4/arrow.svg" alt="" width={23} height={16} />
                  </TrapeziformBtn>
                </Trapeziform>
              </div>
            </div>
          </ModalBody>
        </Modal>
      ) : null}
      {showModal3 ? (
        <Modal type="type3" onClose={() => setShowModal3(false)}>
          <ModalTitle>How to win Ring & Pac incentive airdrops?</ModalTitle>
          <ModalDesc>
            This strategy allows users to enjoy both Ring and Pac airdrop incentives simultaneously; additionally, PAC
            rewards will have three times the effect on assets.
          </ModalDesc>
          <ModalBody>
            <Trapeziform {...TrapLayout} className="modal-list">
              <div className="modal-list-head">
                <div className="head-left">
                  <div className="head-title">Step 1. Swap fwWETH on</div>
                  <div className="tag-thr">
                    <Image src="/images/odyssey/v4/tag-ring.svg" alt="" width={72} height={27} />
                  </div>
                </div>
                <div className="tag-points">
                  <Image src="/images/odyssey/v4/icon-ring.svg" alt="" width={20} height={20} />
                  Ring
                </div>
              </div>
              <div className="modal-list-body">
                <div className="body-left">
                  <Image src="/images/odyssey/v4/coin-fwweth.svg" alt="" width={26} height={26} />

                  <div className="body-left-content">
                    <div className="body-left-content-title">fwWETH</div>
                    <div className="body-left-content-desc">Few wrapped wrapped ETH</div>
                  </div>
                </div>
                <div className="body-right">
                  <TrapeziformBtn
                    width="286px"
                    height="42px"
                    handleClick={(e: any) => openLink(`${location.origin}/dapp/ring-protocol`)}
                  >
                    Swap fwWETH <Image src="/images/odyssey/v4/arrow.svg" alt="" width={23} height={16} />
                  </TrapeziformBtn>
                </div>
              </div>
            </Trapeziform>
            <Trapeziform {...TrapLayout} className="modal-list">
              <div className="modal-list-head">
                <div className="head-left">
                  <div className="head-title">Step 2. Loop fwWETH on</div>
                  <div className="tag-thr">
                    <Image src="/images/odyssey/v4/tag-pac.svg" alt="" width={139} height={24} />
                  </div>
                </div>
                <div className="tag-points">
                  <Image src="/images/odyssey/v4/icon-mouth.svg" alt="" width={20} height={20} />
                  PAC
                </div>
              </div>
              <div className="modal-list-body">
                <div className="body-left">
                  <Image src="/images/odyssey/v4/coin-fwweth.svg" alt="" width={26} height={26} />

                  <div
                    className="body-left-content"
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                    }}
                  >
                    <div className="body-left-content-title">fwWETH</div>
                    <div
                      className="tag-points"
                      style={{
                        color: '#fff',
                        border: '1px solid #3D405A',
                        padding: '0 5px',
                        fontSize: 12,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <b style={{ color: '#B2E810' }}>3x</b> effect on assets
                    </div>
                  </div>
                </div>
                <div className="body-right">
                  <TrapeziformBtn
                    width="286px"
                    height="42px"
                    handleClick={(e: any) => openLink(`${location.origin}/dapp/pac-finance`)}
                  >
                    Loop fwWETH <Image src="/images/odyssey/v4/arrow.svg" alt="" width={23} height={16} />
                  </TrapeziformBtn>
                </div>
              </div>
            </Trapeziform>
          </ModalBody>
        </Modal>
      ) : null}

      {showModal4 ? (
        <Modal type="type4" onClose={() => setShowModal4(false)}>
          <ModalTitle>
            How to earn
            <ModalIconGroup className="td2">
              <Image src="/images/odyssey/v4/icon-thruster.svg" alt="" width={22} height={22} className="" />
              <Image src="/images/odyssey/v4/icon-particle.svg" alt="" width={22} height={22} className="" />
              <Image src="/images/odyssey/v4/icon-hyperlock.svg" alt="" width={22} height={22} className="" />
            </ModalIconGroup>
            by Thruster / Hyperlock / Particle?
          </ModalTitle>
          <ModalDesc>
            This strategy enables users to earn XP points & Blast points & Blast gold & Thruster Credits & Hyperlock
            points/Particle points + some APR.
          </ModalDesc>
          <ModalBody>
            <div className="modal-body">
              <Trapeziform {...TrapLayout} className="modal-list">
                <div className="modal-list-head">
                  <div className="head-left">
                    <div className="head-title">Step 1. Swap mwstETH-WPUNKS on</div>
                    <div className="tag-thr">
                      <Image src="/images/odyssey/v4/tag-thr.svg" alt="" width={139} height={24} />
                    </div>
                  </div>
                  <div className="tag-points">XP points</div>
                </div>
                <div className="modal-list-body">
                  <div className="body-left">
                    <Image src="/images/odyssey/v4/coin-mwesteth.svg" alt="" width={26} height={26} />
                    <div className="body-left-content">
                      <div className="body-left-content-title">mwstETH-WPUNKS</div>
                      <div className="body-left-content-desc">Metastreet V2 Deposit: WPUNKS-wstETH</div>
                    </div>
                  </div>
                  <div className="body-right">
                    <TrapeziformBtn
                      width="286px"
                      height="42px"
                      handleClick={(e: any) => openLink(`${location.origin}/dapp/thruster-finance`)}
                    >
                      Swap mwstETH-WPUNKS <Image src="/images/odyssey/v4/arrow.svg" alt="" width={23} height={16} />
                    </TrapeziformBtn>
                  </div>
                </div>
              </Trapeziform>
              <Trapeziform {...TrapLayout} className="modal-list">
                <div className="modal-list-head">
                  <div className="head-left">
                    <div className="head-title">Step 2. Add LP mwstETH-WPUNKS / WETH on</div>
                    <div className="tag-thr">
                      <Image src="/images/odyssey/v4/tag-thr.svg" alt="" width={139} height={24} />
                    </div>
                  </div>
                  <div className="tag-points">XP points</div>
                </div>
                <div className="modal-list-body">
                  <div className="body-left">
                    <Image src="/images/odyssey/v4/coin-mwesteth.svg" alt="" width={26} height={26} />
                    <Image src="/images/odyssey/v4/coin-weth2.svg" alt="" width={26} height={26} className="lp-img" />
                    <div className="body-left-content">
                      <div className="body-left-content-title">mwstETH-WPUNKS / WETH</div>
                    </div>
                  </div>
                  <div className="body-right">
                    <TrapeziformBtn
                      width="286px"
                      height="42px"
                      handleClick={(e: any) => openLink(`${location.origin}/dapp/thruster-liquidity`)}
                    >
                      Add Liquidity
                      <Image src="/images/odyssey/v4/arrow.svg" alt="" width={23} height={16} />
                    </TrapeziformBtn>
                  </div>
                </div>
              </Trapeziform>
              <div className="modal-body-2">
                <Trapeziform {...TrapLayout} className="modal-sec-2">
                  <div className="step">Step 2-A.</div>
                  <div className="desc">
                    Provide LP on
                    <div className="tag-thr">
                      <Image src="/images/odyssey/v4/tag-hyp.svg" alt="" width={107} height={22} />
                    </div>
                  </div>

                  <div className="tag-coins">
                    <Image src="/images/odyssey/v4/icon-thruster.svg" alt="" width={20} height={20} className="" />
                    <Image src="/images/odyssey/v4/icon-hyperlock.svg" alt="" width={20} height={20} className="" />
                  </div>
                  <div className="coin-pairs">
                    <div className="pairs">
                      <Image src="/images/odyssey/v4/coin-mwesteth.svg" alt="" width={26} height={26} />
                      <Image
                        src="/images/odyssey/v4/coin-weth1.svg"
                        alt=""
                        width={26}
                        height={26}
                        style={{ marginLeft: -10 }}
                      />
                    </div>

                    <div className="txt">
                      mwstETH-WPUNKS <br />/ WETH
                    </div>
                  </div>
                  <TrapeziformBtn
                    width="236px"
                    height="42px"
                    handleClick={(e: any) => openLink(`${location.origin}/dapp/hyperlock`)}
                  >
                    Stake LP <Image src="/images/odyssey/v4/arrow.svg" alt="" width={23} height={16} />
                  </TrapeziformBtn>
                </Trapeziform>
                <Trapeziform {...TrapLayout} className="modal-sec-2">
                  <div className="step">Step 2-B.</div>
                  <div className="desc">
                    Provide LP on
                    <div className="tag-thr">
                      <Image src="/images/odyssey/v4/tag-par.svg" alt="" width={107} height={22} />
                    </div>
                  </div>

                  <div className="tag-coins">
                    <Image src="/images/odyssey/v4/icon-particle.svg" alt="" width={22} height={22} className="" />
                    Particle Points
                  </div>
                  <div className="coin-pairs">
                    <div className="pairs">
                      <Image src="/images/odyssey/v4/coin-mwesteth.svg" alt="" width={26} height={26} />
                      <Image
                        src="/images/odyssey/v4/coin-weth.svg"
                        alt=""
                        width={26}
                        height={26}
                        style={{ marginLeft: -10 }}
                      />
                    </div>

                    <div className="txt">
                      mwstETH-WPUNKS <br />/ WETH
                    </div>
                  </div>
                  <TrapeziformBtn
                    width="236px"
                    height="42px"
                    loading={reportLoading}
                    handleClick={(e: any) => handleReportLink('https://app.particle.trade/earn')}
                  >
                    Stake LP <Image src="/images/odyssey/v4/arrow.svg" alt="" width={23} height={16} />
                  </TrapeziformBtn>
                </Trapeziform>
              </div>
            </div>
          </ModalBody>
        </Modal>
      ) : null}
      {showModal5 ? (
        <Modal type="type5" onClose={() => setShowModal5(false)}>
          <ModalTitle>
            How to earn <Image src="/images/odyssey/v4/td3.svg" alt="" width={79} height={22} /> on Juice?
          </ModalTitle>
          <ModalDesc>
            This strategy enables users to earn Etherfi points/ Eigen Layer points/ Hyperlock Points/ Thruster Credits/
            Juice Points/ Blast Gold + Blast points.
          </ModalDesc>
          <ModalBody>
            <Trapeziform {...TrapLayout} className="modal-list">
              <div className="modal-list-head">
                <div className="head-left">
                  <div className="head-title">Step 1. Create sub account and Deposit WETH on</div>
                </div>
              </div>
              <div className="modal-desc">* If you don’t have WETH, you can wrap ETH to WETH on this page</div>
              <div className="modal-list-body">
                <div className="body-left" style={{ gap: 5 }}>
                  <Image src="/images/odyssey/v4/coin-weth.svg" alt="" width={26} height={26} />

                  <div className="body-left-content">
                    <div className="body-left-content-title">WETH</div>
                  </div>
                </div>
                <div className="body-right">
                  <TrapeziformBtn
                    width="286px"
                    height="42px"
                    handleClick={(e: any) => openLink(`${location.origin}/dapp/juice`)}
                  >
                    Deposit WETH <Image src="/images/odyssey/v4/arrow.svg" alt="" width={23} height={16} />
                  </TrapeziformBtn>
                </div>
              </div>
            </Trapeziform>
            <Trapeziform {...TrapLayout} className="modal-list">
              <div className="modal-list-head">
                <div className="head-left">
                  <div className="head-title">Step 2.Borrow 3x WETH</div>
                </div>
              </div>
              <StyledFlex
                justifyContent="flex-start"
                alignItems="center"
                style={{
                  marginTop: 15,
                  flexWrap: 'wrap',
                }}
              >
                {ThrusterCoinListStep1.map((coin) => (
                  <CoinGroup
                    key={coin.key}
                    icon={coin.icon}
                    name={coin.name}
                    style={{
                      flexBasis: '25%',
                      marginBottom: 20,
                    }}
                    onClick={() => {
                      setSelectedPool(coin.name.join(','));
                    }}
                  />
                ))}
              </StyledFlex>
              <div className="modal-list-foot">
                <TrapeziformBtn
                  width="286px"
                  height="42px"
                  handleClick={(e: any) => openLink(`${location.origin}/dapp/thruster-liquidity`)}
                >
                  Add Liquidity <Image src="/images/odyssey/v4/arrow.svg" alt="" width={23} height={16} />
                </TrapeziformBtn>
              </div>
            </Trapeziform>
            <Trapeziform {...TrapLayout} className="modal-list">
              <div className="modal-list-head">
                <div className="head-left">
                  <div className="head-title">Step 3.Deposit borrowed WETH in EtherFi V3 LP Vault</div>
                </div>
              </div>
              <div className="modal-list-body">
                <div className="body-left" style={{ gap: 5 }}>
                  <Image src="/images/odyssey/v4/coin-weth.svg" alt="" width={26} height={26} />

                  <div className="body-left-content-title">WETH</div>

                  <Image src="/images/odyssey/v4/dash-arrow.svg" alt="" width={33} height={16} />
                  <Image src="/images/odyssey/v4/icon-hyperlock.svg" alt="" width={26} height={26} />

                  <div className="body-left-content-title">HYPLP</div>
                </div>
                <div className="body-right">
                  <TrapeziformBtn
                    width="286px"
                    height="42px"
                    handleClick={(e: any) => openLink(`${location.origin}/dapp/juice`)}
                  >
                    Stake LP
                    <Image src="/images/odyssey/v4/arrow.svg" alt="" width={23} height={16} />
                  </TrapeziformBtn>
                </div>
              </div>
            </Trapeziform>
          </ModalBody>
        </Modal>
      ) : null}

      <StyledContent>
        <Treasure1 onClick={() => setShowModal1(true)}>
          <Line />
          <Image
            src="/images/odyssey/v4/star-particle.svg"
            alt=""
            width={302}
            height={206}
            className="scale"
            style={{ marginTop: -23 }}
          />
          <Title className="title">1% Extra Gold</Title>
          <Image src="/images/odyssey/v4/icon-gold.svg" alt="" width={42} height={42} className="td1" />
        </Treasure1>
        <Treasure2 onClick={() => setShowModal4(true)}>
          <Line />
          {/* <Image src="/images/odyssey/v4/thruster.svg" alt="" width={208} height={208} className="scale" />
          <Image
            src="/images/odyssey/v4/thruster-track.svg"
            style={{ marginTop: -160 }}
            alt=""
            width={343}
            height={130}
          />
          <Image src="/images/odyssey/v4/particle.svg" alt="" width={47} height={47} className="scale star particle" />
          <Image
            src="/images/odyssey/v4/hyperlock.svg"
            alt=""
            width={60}
            height={60}
            className="scale star hyperlock"
          /> */}
          <Image src="/images/odyssey/v4/star3.svg" alt="" width={362} height={208} className="scale star3" />
          <Title className="title">Extra Points</Title>
          <IconGroup className="td2">
            <Image src="/images/odyssey/v4/icon-thruster.svg" alt="" width={22} height={22} className="" />
            <Image src="/images/odyssey/v4/icon-particle.svg" alt="" width={22} height={22} className="" />
            <Image src="/images/odyssey/v4/icon-hyperlock.svg" alt="" width={22} height={22} className="" />
          </IconGroup>
        </Treasure2>
        <Treasure3 onClick={() => setShowModal5(true)}>
          <Line />
          <Image src="/images/odyssey/v4/juice.svg" alt="" width={208} height={208} className="scale" />
          <Title className="title">Multiple Points</Title>
          <Image src="/images/odyssey/v4/td3.svg" alt="" width={79} height={22} className="td3" />
        </Treasure3>
      </StyledContent>
      <StyledContent
        style={{
          justifyContent: 'space-evenly',
        }}
      >
        <Treasure4 onClick={() => setShowModal2(true)}>
          <Line />
          {/* <Image src="/images/odyssey/v4/track1.svg" alt="" width={478} height={164} className="track1" />

          <Image src="/images/odyssey/v4/particle.svg" alt="" width={74} height={74} className="scale star particle" />
          <Image
            src="/images/odyssey/v4/thruster.svg"
            alt=""
            width={161}
            height={161}
            className="scale star thruster"
          />
          <Image
            src="/images/odyssey/v4/hyperlock.svg"
            alt=""
            width={76}
            height={76}
            className="scale star hyperlock"
          />
          <Image src="/images/odyssey/v4/renzo.svg" alt="" width={118} height={118} className="scale star renzo" /> */}
          <Image src="/images/odyssey/v4/star4.svg" alt="" width={504} height={249} className="scale star4" />
          <Title className="title">Extra Points</Title>
          <Image src="/images/odyssey/v4/td4.svg" alt="" width={79} height={22} className="td4" />
        </Treasure4>
        <Treasure5 onClick={() => setShowModal3(true)}>
          <Line />
          <Image src="/images/odyssey/v4/pac.svg" alt="" width={336} height={188} className="scale pac" />
          <Image src="/images/odyssey/v4/ring.svg" alt="" width={169} height={114} className="scale ring" />
          <Title className="title title1">Airdrop</Title>
          <IconGroup className="td5">
            <Image src="/images/odyssey/v4/icon-mouth.svg" alt="" width={22} height={22} className="" />
            <Image src="/images/odyssey/v4/icon-ring.svg" alt="" width={22} height={22} className="" />
          </IconGroup>
          <Title className="title title2">& 3x Assets</Title>
        </Treasure5>
      </StyledContent>
      {showRenzo && (
        <SkakeModel
          stakeType="renzo"
          onClose={() => {
            setShowRenzo(false);
          }}
        />
      )}
      <AddLiquidityModal
        open={!!selectedPool}
        dapp={{
          path: 'thruster-liquidity',
          name: 'Thruster Pool',
        }}
        chain={{
          chain_id: 81457,
          name: 'Blast',
        }}
        defaultTokens={selectedPool}
        onClose={() => {
          setSelectedPool('');
        }}
      />
    </StyledContainer>
  );
}
