import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ethereum } from '@/config/tokens/ethereum';
import useAccount from '@/hooks/useAccount';
import { useLrtDataStore } from '@/stores/lrts';
import { usePriceStore } from '@/stores/price';

import { Gems, NpcDialog, TabCard } from './components';
import StakeModal from './components/modal/stake';
import SwapModal from './components/modal/swap';
import { ActionType } from './components/tab-card';
import useAllTokensBalance from './hooks/useAllTokensBalance';
import useLrtsList from './hooks/useLrtsList';
import { Banner, Container, Desc, Title } from './styles/index.style';

// enum CardType {
//   LST = 'LST',
//   LRT = 'LRT',
// }

const Home = () => {
  const { chainId, account } = useAccount();
  const initialSlide = 1;
  const [isShowNpc, setIsShowNpc] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialSlide);
  // const prices = usePriceStore((store) => store.price);
  const { lstList } = useLrtsList();
  const { loading, balances } = useAllTokensBalance();

  const [curLrt, setCurLrt] = useState<any>(null);
  const [actionType, setActionType] = useState<ActionType>();

  const [curLst, setCurLst] = useState();

  const [isShowStakeModal, setIsShowStakeModal] = useState(false);

  const lrtsData = useLrtDataStore((store: any) => store.data);
  console.log(lrtsData);

  const [showSwapModal, setShowSwapModal] = useState(false);

  const handleSlideChange = ({ activeIndex }: any) => {
    // setIsShowNpc(true);
    setCurrentIndex(activeIndex);
    setCurLst(lrtsData[activeIndex]);
  };

  const handleClickGem = (lrt: any) => {
    setCurLrt(lrt);
  };

  const handleShowModal = (_actionType: any) => {
    setActionType(_actionType);
    if (_actionType === 'swap') {
      setShowSwapModal(true);
    } else {
      setIsShowStakeModal(true);
    }
  };

  return (
    <Container>
      <Banner>
        <Title>LRTS</Title>
        <Desc>
          The DapDap LRTs Aggregator brings the <span className="bold">LSTs</span> and{' '}
          <span className="bold">LRTs</span> on the market together. <br />
          It is convenient for users to check the path and APR, and follow the convenient operation.
        </Desc>
        <Swiper
          // spaceBetween={0}
          centeredSlides={true}
          initialSlide={initialSlide}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          slidesPerView={4}
          className="mySwiper"
          slideToClickedSlide={true}
          onSlideChange={handleSlideChange}
        >
          {lrtsData.map((item: any) => (
            <SwiperSlide key={item.key}>
              {() => {
                return (
                  <div className="lst-content">
                    <span className="lst-title">{item.token.symbol}</span>
                    <span className="dapp-info">
                      <img src={item.dapp.logo} alt="dapp" />
                      {item.dapp.name}
                    </span>
                    <span className="lst-range">APR RANGE</span>
                    <span className="min-apr">{Number(item?.minApr).toFixed(2)}% -</span>
                    <span className="max-apr">{Number(item?.maxApr).toFixed(2)}%</span>
                    <img className="lst-img" src={item.lstIcon} alt="lst" />
                  </div>
                );
              }}
            </SwiperSlide>
          ))}
        </Swiper>
      </Banner>

      <Gems data={lrtsData[currentIndex].lrtTokens} onClick={handleClickGem} />

      <TabCard curLst={curLst} curLrt={curLrt} handleStake={handleShowModal} />

      {isShowNpc ? <NpcDialog onClose={() => setIsShowNpc(false)} /> : null}

      {isShowStakeModal ? (
        <StakeModal
          dapp={{
            name: lrtsData[currentIndex].dapp.name,
            logo: lrtsData[currentIndex].dapp.logo,
          }}
          actionType={actionType}
          token0={actionType === ActionType.STAKE ? ethereum['eth'] : lrtsData[currentIndex].token}
          token1={actionType === ActionType.STAKE ? lrtsData[currentIndex].token : curLrt}
          chainId={chainId as number}
          setShow={setIsShowStakeModal}
        />
      ) : null}
      <SwapModal show={showSwapModal} setShow={setShowSwapModal} token0={lrtsData[currentIndex].token} />
    </Container>
  );
};

export default Home;
