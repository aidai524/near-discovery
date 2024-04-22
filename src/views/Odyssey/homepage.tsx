import odyssey from '@/config/odyssey';
import {
  StyledContainer,
  StyledFlex,
  StyledFont,
  StyledSvg
} from "@/styled/styles";
import useCompassList from '@/views/Home/components/Compass/hooks/useCompassList';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useClaim from './hooks/useClaim';
import useDetail from './hooks/useDetail';
import useAuthCheck from '@/hooks/useAuthCheck';
const StyledLogo = styled.img`
  width: 340px;
`
const StyledSwiperContainer = styled.div`
  position: relative;
  margin: 69px 0 29px;
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 500px;
    /* height: 454px; */
  }
`
const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 216px;
  height: 60px;
  border-radius: 10px;
  cursor: pointer;

  color: #02051E;
  font-family: Gantari;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
const StyledJoinButton = styled(StyledButton)`
  background-color: #EBF479;
`
const StyledClaimButton = styled(StyledButton)`
  color: #EBF479;
  border: 1px solid #EBF479;
`
const StyledQuestionList = styled.div`
  margin-top: 69px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
const StyledQuestion = styled.div`
  width: 898px;
  /* height: 98px; */
  border-radius: 16px;
  border: 1px solid #2D3035;
  background: linear-gradient(90deg, #1E2228 0%, #0D0F12 100%);
  padding: 20px;
`
const StyledCard = styled.div`
  padding: ;
  width: 500px;
  min-height: 454px;

  border-radius: 16px;
  border: 1px solid #464B56;
  background: #252831;
`
const StyledVol = styled.div`
  width: 62px;
  height: 24px;
  background: url("/images/odyssey/welcome/vol_bg.png") no-repeat center;

  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-family: Montserrat;
  font-size: 16px;
  font-style: italic;
  font-weight: 700;
  line-height: 100%;
`
const StyledChainsImg = styled.img``
const StyledCompassImage = styled.img`
  width: 100%;
`
const StyledCompassVideo = styled.video`
  width: 100%;
`
const StyledLiveContainer = styled.div`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    border-radius: 16px;
    background: rgba(87, 219, 100, 0.20);
    animation: firstAnimation 1.5s linear infinite;
  }
  @keyframes firstAnimation {
    0% {
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
    }
    100% {
      left: -5px;
      top: -5px;
      bottom: -5px;
      right: -5px;
    }
  }
`
const StyledLive = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 53px;
  height: 26px;
  border-radius: 16px;
  border: 1px solid #57DB64;
  background: rgba(32, 34, 47, 0.80);
`
const StyledExpired = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px 6px 8px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(32, 34, 47, 0.80);
`
const StyledSwiperButton = styled.div`
  position: absolute;
  left: 50px;
  top: 217px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  &.right {
    left: unset;
    right: 50px;
  }
`
const Index = function () {
  const router = useRouter()
  const { check } = useAuthCheck({ isNeedAk: true });
  const { loading, compassList } = useCompassList();
  const { detail, queryDetail } = useDetail()
  const { loading: claimLoading, onClaim } = useClaim()
  const [activeIndex, setActiveIndex] = useState(0)
  const [sortCompassList, setSortCompassList] = useState([])


  const swiperRef = useRef<any>(null);

  const currentCompass = useMemo(() => {
    return compassList[activeIndex]
  }, [compassList, activeIndex])


  const handleClickClaim = function () {
    if (claimLoading) return
    if (detail.unclaimed_reward > 0) {
      onClaim(currentCompass?.id, () => {
        queryDetail(currentCompass?.id)
      })
    }
  }
  const handleJump = function () {
    router.push(odyssey[currentCompass.id].path);
  }
  const handleClickSlideButton = function (event: any, type: string) {
    event.stopPropagation();
    if (type === 'prev') {
      swiperRef.current && swiperRef.current.slidePrev();
    } else {
      swiperRef.current && swiperRef.current.slideNext();
    }
  }
  useEffect(() => {
    queryDetail(currentCompass?.id)
  }, [currentCompass])
  useEffect(() => {
    if (compassList.length > 0) {
      const middleIndex = Math.floor(compassList.length / 2)
      const sortList = compassList.sort((prev: any, next: any) => next.id - prev.id)
      const temp = sortList[middleIndex]
      sortList[middleIndex] = sortList[0]
      sortList[0] = temp
      setSortCompassList(sortList)
      console.log("=middleIndex", middleIndex, "=swiperRef.current", swiperRef.current)
      setActiveIndex(middleIndex)
      swiperRef.current && swiperRef.current.slideTo(middleIndex, 0)
    }
  }, [compassList])
  return (
    <StyledContainer style={{
      paddingTop: 56
    }}>
      <StyledFlex flexDirection='column' gap='20px'>
        <StyledLogo src="/images/odyssey/welcome/logo.png" />
        <StyledFont color='#979ABE' fontSize='20px' lineHeight='150%'>Exclusive Seasonal Lootbox Experiences</StyledFont>
      </StyledFlex>
      <StyledSwiperContainer>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: true,
          }}
          // loop={true}
          modules={[EffectCoverflow]}
          initialSlide={activeIndex}
          onActiveIndexChange={(event) => {
            setActiveIndex(event.realIndex)
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {
            sortCompassList.map((compass: any, index: number) => {
              return (
                <SwiperSlide key={index} className='swiper-no-swiping'>
                  <StyledCard onClick={handleJump}>
                    <StyledContainer style={{
                      padding: "16px 20px 0 24px"
                    }}>
                      <StyledFlex
                        justifyContent="space-between"
                        style={{ marginBottom: 20 }}
                      >
                        <StyledFlex gap='13px'>
                          <StyledVol style={{ backgroundImage: "url(" + (compass.status === "ended" ? "/images/odyssey/welcome/ended_vol_bg.png" : "/images/odyssey/welcome/vol_bg.png") + ")" }}>Vol. {compass.id}</StyledVol>
                          {odyssey[compass.id]?.chainsImg && (
                            <StyledChainsImg src={odyssey[compass.id]?.chainsImg} style={{ height: 33 }} />
                          )}
                        </StyledFlex>
                        {
                          compass.status === "ended" ? (
                            <StyledExpired>
                              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                <ellipse cx="3.99988" cy="4" rx="4" ry="4" fill="#979ABE" />
                              </svg>
                              <StyledFont color='#FFF' fontSize='12px' fontWeight='500' fontFamily='Gantari'>Expired</StyledFont>
                            </StyledExpired>
                          ) : (
                            <StyledLiveContainer>
                              <StyledLive>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                  <circle cx="4" cy="4" r="4" fill="#57DB64" />
                                </svg>
                                <StyledFont color='#FFF' fontSize='12px' fontWeight='500' fontFamily='Gantari'>Live</StyledFont>
                              </StyledLive>
                            </StyledLiveContainer>
                          )
                        }
                      </StyledFlex>
                      <StyledFont
                        color={compass.status === "ended" ? '#979ABE' : '#FFF'}
                        fontSize='26px'
                        fontWeight='700'
                        style={{
                          maxHeight: 64
                        }}
                      >{compass.name}</StyledFont>
                    </StyledContainer>
                    <StyledContainer style={{
                      padding: "33px 16px 16px",
                      borderRadius: 16,
                      overflow: "hidden"
                    }}>
                      <StyledContainer style={{
                        position: "relative"
                      }}>
                        {
                          odyssey[compass.id].reward && (
                            <StyledContainer style={{
                              position: "absolute",
                              right: -13,
                              top: -11,
                              zIndex: 10
                            }}>
                              {
                                compass.status === "ended" ? (
                                  <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M43.5454 1.67862C44.6696 0.713137 46.3304 0.713135 47.4546 1.67862L53.6054 6.96105C54.3286 7.58216 55.304 7.82257 56.233 7.6087L64.1341 5.78976C65.5782 5.45731 67.0488 6.22909 67.5955 7.60643L70.5869 15.1422C70.9386 16.0283 71.6906 16.6944 72.6126 16.9368L80.454 18.998C81.8872 19.3748 82.8306 20.7415 82.6746 22.2152L81.8213 30.278C81.721 31.226 82.0772 32.1653 82.781 32.8084L88.7663 38.2776C89.8602 39.2772 90.0604 40.9258 89.2375 42.1582L84.735 48.9009C84.2056 49.6937 84.0845 50.691 84.4088 51.5874L87.1668 59.2117C87.6709 60.6052 87.082 62.158 85.7806 62.8668L78.6603 66.7448C77.8231 67.2007 77.2525 68.0275 77.123 68.972L76.022 77.0046C75.8207 78.4728 74.5776 79.5741 73.0959 79.5969L64.9891 79.7217C64.0359 79.7364 63.1464 80.2032 62.5928 80.9793L57.8849 87.5802C57.0244 88.7867 55.412 89.1842 54.0894 88.5158L46.8531 84.8588C46.0023 84.4288 44.9977 84.4288 44.1469 84.8588L36.9106 88.5158C35.588 89.1842 33.9756 88.7867 33.1151 87.5803L28.4072 80.9793C27.8536 80.2032 26.9641 79.7364 26.0109 79.7217L17.9041 79.5969C16.4224 79.5741 15.1793 78.4728 14.978 77.0046L13.877 68.972C13.7475 68.0275 13.1769 67.2007 12.3397 66.7448L5.2194 62.8668C3.91801 62.158 3.3291 60.6052 3.8332 59.2117L6.59125 51.5874C6.91554 50.691 6.79446 49.6937 6.26505 48.9009L1.76253 42.1582C0.939592 40.9259 1.13977 39.2772 2.23373 38.2776L8.21904 32.8084C8.92279 32.1653 9.27902 31.226 9.17869 30.278L8.32539 22.2152C8.16943 20.7415 9.11283 19.3748 10.546 18.998L18.3874 16.9368C19.3094 16.6944 20.0614 16.0283 20.4131 15.1422L23.4045 7.60643C23.9513 6.22909 25.4218 5.45731 26.8659 5.78976L34.767 7.6087C35.696 7.82257 36.6714 7.58216 37.3946 6.96105L43.5454 1.67862Z" fill="#979ABE" />
                                    <path d="M44.197 8.17602C44.9465 7.53236 46.0536 7.53236 46.8031 8.17602L51.7865 12.4559C52.7508 13.284 54.0513 13.6046 55.29 13.3194L61.6916 11.8457C62.6543 11.6241 63.6347 12.1386 63.9992 13.0568L66.4228 19.1624C66.8918 20.3438 67.8944 21.232 69.1237 21.5551L75.4769 23.2252C76.4323 23.4763 77.0613 24.3875 76.9573 25.37L76.266 31.9025C76.1322 33.1665 76.6071 34.4189 77.5455 35.2763L82.3948 39.7076C83.1241 40.374 83.2576 41.4731 82.709 42.2947L79.061 47.7577C78.3551 48.8147 78.1937 50.1444 78.6261 51.3397L80.8607 57.5169C81.1967 58.4459 80.8041 59.4812 79.9365 59.9537L74.1676 63.0956C73.0513 63.7036 72.2905 64.8059 72.1179 66.0652L71.2258 72.5734C71.0916 73.5522 70.2629 74.2863 69.2751 74.3015L62.7068 74.4026C61.4359 74.4222 60.2499 75.0447 59.5118 76.0795L55.6974 81.4276C55.1238 82.2319 54.0488 82.4969 53.1671 82.0513L47.3042 79.0884C46.1697 78.5151 44.8303 78.5151 43.6959 79.0884L37.833 82.0513C36.9513 82.4969 35.8763 82.2319 35.3026 81.4276L31.4882 76.0795C30.7502 75.0447 29.5642 74.4222 28.2932 74.4026L21.725 74.3015C20.7372 74.2863 19.9085 73.5521 19.7743 72.5734L18.8822 66.0652C18.7096 64.8059 17.9487 63.7036 16.8324 63.0956L16.3542 63.9738L16.8324 63.0956L11.0635 59.9537C10.1959 59.4812 9.80334 58.4459 10.1394 57.5169L12.374 51.3397C12.8064 50.1444 12.6449 48.8147 11.9391 47.7577L8.29109 42.2947C7.74246 41.4731 7.87592 40.374 8.60522 39.7076L13.4546 35.2763C14.3929 34.4189 14.8679 33.1665 14.7341 31.9025L14.0428 25.37C13.9388 24.3875 14.5677 23.4763 15.5232 23.2252L21.8764 21.5551C23.1057 21.232 24.1083 20.3438 24.5772 19.1624L27.0009 13.0568C27.3654 12.1386 28.3457 11.6241 29.3085 11.8457L35.7101 13.3194C36.9488 13.6046 38.2492 13.284 39.2135 12.4559L44.197 8.17602Z" stroke="black" stroke-width="2" />
                                    <path d="M27.3381 33.61C26.8036 33.7532 26.2885 33.8015 25.7929 33.7549C25.302 33.7 24.8469 33.5597 24.4274 33.3339C24.0145 33.1064 23.6577 32.8051 23.3571 32.4302C23.0629 32.0535 22.8476 31.6108 22.7113 31.102C22.575 30.5933 22.5401 30.1023 22.6065 29.629C22.6794 29.1539 22.8409 28.7138 23.0912 28.3085C23.3416 27.9033 23.6697 27.5565 24.0756 27.2683C24.4797 26.9737 24.9523 26.7539 25.4932 26.6089C26.0921 26.4485 26.6565 26.4042 27.1865 26.4761C27.723 26.5464 28.2063 26.7274 28.6365 27.0194L27.8804 28.2158C27.5667 28.0238 27.2486 27.9054 26.926 27.8607C26.6017 27.8096 26.2689 27.8298 25.9277 27.9212C25.5992 28.0092 25.3136 28.141 25.0708 28.3165C24.8279 28.492 24.6325 28.703 24.4847 28.9497C24.3433 29.1947 24.2532 29.4638 24.2145 29.7572C24.1822 30.0488 24.2092 30.3556 24.2954 30.6776C24.38 30.9931 24.5091 31.2691 24.6829 31.5055C24.8631 31.7402 25.0766 31.9315 25.3233 32.0793C25.5746 32.219 25.8462 32.305 26.1378 32.3373C26.4358 32.3679 26.7459 32.34 27.0678 32.2537C27.3769 32.1709 27.6634 32.0424 27.9273 31.8681C28.1959 31.6857 28.4368 31.4383 28.6498 31.1258L29.8413 32.0179C29.5484 32.3931 29.1772 32.7204 28.7274 32.9996C28.2842 33.2771 27.821 33.4806 27.3381 33.61ZM28.3574 32.1981L27.6767 29.6577L29.1063 29.2746L29.8413 32.0179L28.3574 32.1981ZM31.4942 32.3721L29.6824 25.6107L32.6092 24.8264C33.2145 24.6643 33.7628 24.6243 34.2542 24.7066C34.7439 24.7824 35.157 24.972 35.4936 25.2752C35.8302 25.5784 36.0667 25.9844 36.203 26.4931C36.3376 26.9954 36.3349 27.462 36.195 27.8928C36.0534 28.3173 35.7895 28.6848 35.4034 28.9953C35.0172 29.3058 34.5215 29.5422 33.9162 29.7044L31.8588 30.2557L32.3705 29.3835L33.059 31.9529L31.4942 32.3721ZM35.7925 31.2204L33.4448 29.2199L35.1158 28.7721L37.4829 30.7675L35.7925 31.2204ZM32.4171 29.5574L31.5249 29.0096L33.4954 28.4816C33.9784 28.3522 34.3114 28.1526 34.4944 27.8826C34.6757 27.6063 34.7172 27.2846 34.6189 26.9175C34.5188 26.5441 34.322 26.2862 34.0285 26.144C33.7351 26.0018 33.3469 25.9954 32.8639 26.1248L30.8934 26.6528L31.3896 25.7226L32.4171 29.5574ZM37.7085 30.707L38.9104 23.138L40.4559 22.7239L45.291 28.6753L43.6489 29.1153L39.5766 23.8084L40.1948 23.6428L39.3119 30.2774L37.7085 30.707ZM38.8271 28.8544L38.9241 27.555L42.4014 26.6233L43.1448 27.6975L38.8271 28.8544ZM45.9925 28.4873L44.1807 21.7259L45.4751 21.379L50.7688 25.1784L50.141 25.3466L48.8365 20.4783L50.382 20.0642L52.1937 26.8257L50.909 27.1699L45.6057 23.3732L46.2335 23.205L47.538 28.0732L45.9925 28.4873ZM53.7935 26.3971L51.9817 19.6356L55.0534 18.8125C55.7875 18.6158 56.4726 18.5841 57.1088 18.7173C57.7432 18.8441 58.2855 19.1164 58.7356 19.5341C59.1857 19.9518 59.5031 20.5052 59.6877 21.1942C59.8706 21.8768 59.8724 22.5148 59.6932 23.108C59.5123 23.6949 59.1796 24.205 58.6953 24.6384C58.2093 25.0655 57.5992 25.3773 56.8651 25.574L53.7935 26.3971ZM55.014 24.6931L56.4436 24.31C56.8944 24.1893 57.2615 24.0012 57.5451 23.7457C57.8333 23.4821 58.0254 23.1684 58.1211 22.8046C58.2233 22.439 58.2175 22.0437 58.1036 21.6187C57.988 21.1873 57.7954 20.842 57.5258 20.5829C57.261 20.3157 56.9387 20.1433 56.559 20.0656C56.184 19.9797 55.7711 19.9971 55.3203 20.1179L53.8908 20.501L55.014 24.6931ZM30.3894 43.0209L28.5776 36.2595L31.5044 35.4752C32.1097 35.313 32.6581 35.2731 33.1494 35.3554C33.6391 35.4312 34.0522 35.6208 34.3888 35.924C34.7254 36.2272 34.9619 36.6332 35.0982 37.1419C35.2328 37.6442 35.2301 38.1107 35.0902 38.5416C34.9503 38.9725 34.6882 39.3465 34.3038 39.6634C33.9176 39.9739 33.4219 40.2103 32.8166 40.3725L30.7592 40.9238L31.2657 40.0323L31.9542 42.6016L30.3894 43.0209ZM31.3123 40.2061L30.4176 39.6487L32.388 39.1207C32.871 38.9913 33.204 38.7917 33.3871 38.5218C33.5701 38.2519 33.6125 37.9334 33.5141 37.5663C33.414 37.1928 33.2172 36.935 32.9238 36.7928C32.6303 36.6505 32.2421 36.6441 31.7591 36.7735L29.7886 37.3015L30.2848 36.3714L31.3123 40.2061ZM37.3697 41.1506L35.558 34.3891L38.4847 33.6049C39.09 33.4427 39.6384 33.4027 40.1298 33.485C40.6194 33.5609 41.0325 33.7504 41.3692 34.0536C41.7058 34.3568 41.9422 34.7628 42.0785 35.2715C42.2131 35.7738 42.2105 36.2404 42.0706 36.6713C41.9289 37.0957 41.665 37.4632 41.2789 37.7737C40.8928 38.0842 40.3971 38.3206 39.7918 38.4828L37.7343 39.0341L38.246 38.1619L38.9345 40.7313L37.3697 41.1506ZM41.6681 39.9988L39.3203 37.9983L40.9914 37.5505L43.3584 39.5459L41.6681 39.9988ZM38.2926 38.3358L37.4005 37.788L39.371 37.26C39.8539 37.1306 40.1869 36.931 40.37 36.6611C40.5513 36.3847 40.5928 36.063 40.4944 35.696C40.3943 35.3225 40.1976 35.0646 39.9041 34.9224C39.6106 34.7802 39.2224 34.7738 38.7394 34.9032L36.7689 35.4312L37.2651 34.5011L38.2926 38.3358ZM44.4727 39.2473L42.6609 32.4858L44.2257 32.0666L46.0375 38.828L44.4727 39.2473ZM47.2074 38.5145L46.9357 37.5003L49.7671 31.3375L50.113 31.8556L45.8146 33.0074L45.473 31.7324L51.1623 30.2079L51.434 31.2221L48.6123 37.3824L48.2664 36.8642L52.7773 35.6556L53.1189 36.9306L47.2074 38.5145ZM54.4798 32.2385L57.735 31.3662L58.0611 32.5833L54.806 33.4555L54.4798 32.2385ZM55.3412 34.9893L59.0213 34.0032L59.3578 35.2589L54.1225 36.6617L52.3107 29.9002L57.4205 28.531L57.757 29.7867L54.2024 30.7392L55.3412 34.9893Z" fill="black" />
                                    <path d="M42.5739 72.318L40.0374 62.8519L44.1349 61.754C44.9823 61.5269 45.75 61.471 46.4379 61.5862C47.1234 61.6924 47.7018 61.9577 48.1731 62.3822C48.6443 62.8067 48.9754 63.3751 49.1662 64.0873C49.3546 64.7905 49.3509 65.4437 49.155 66.047C48.9592 66.6502 48.5922 67.1737 48.054 67.6174C47.5134 68.0522 46.8194 68.3831 45.972 68.6101L43.0916 69.3819L43.8007 68.1339L44.7646 71.731L42.5739 72.318ZM43.866 68.3773L42.6133 67.5969L45.372 66.8577C46.0481 66.6765 46.5143 66.397 46.7706 66.0192C47.0269 65.6413 47.0861 65.1954 46.9485 64.6815C46.8084 64.1587 46.5329 63.7977 46.122 63.5985C45.7111 63.3994 45.1676 63.3905 44.4915 63.5716L41.7328 64.3108L42.4274 63.0087L43.866 68.3773ZM54.043 69.2448L51.9849 61.5638L48.9557 62.3754L48.4774 60.5904L56.7265 58.3801L57.2047 60.1651L54.1756 60.9768L56.2337 68.6578L54.043 69.2448ZM63.5293 66.8769C62.772 67.0798 62.0197 67.1751 61.2724 67.1628C60.5227 67.1414 59.8925 67.0252 59.3818 66.8142L59.6835 64.9651C60.1665 65.1449 60.7083 65.2558 61.309 65.2978C61.9162 65.3283 62.5038 65.2675 63.0718 65.1153C63.5045 64.9993 63.8408 64.8658 64.0805 64.7146C64.3268 64.552 64.4925 64.3771 64.5776 64.19C64.6628 64.003 64.6788 63.8102 64.6256 63.6119C64.558 63.3595 64.4057 63.1877 64.1687 63.0966C63.9293 62.9965 63.6352 62.9448 63.2865 62.9417C62.9354 62.9294 62.5506 62.9359 62.1322 62.9611C61.7204 62.9748 61.2993 62.9717 60.8688 62.9518C60.4473 62.9294 60.0477 62.8626 59.67 62.7512C59.2923 62.6398 58.9563 62.4496 58.662 62.1806C58.3767 61.9092 58.1664 61.5211 58.0311 61.0162C57.8862 60.4753 57.8988 59.9453 58.0689 59.4263C58.2456 58.8958 58.592 58.4213 59.1079 58.0029C59.6304 57.573 60.338 57.2385 61.2305 56.9993C61.8255 56.8399 62.4308 56.755 63.0464 56.7446C63.6597 56.7253 64.2246 56.7961 64.7412 56.9572L64.5108 58.8017C64.0014 58.6677 63.5101 58.6012 63.0369 58.6024C62.5614 58.5945 62.1117 58.6474 61.688 58.7609C61.2643 58.8745 60.9305 59.017 60.6866 59.1887C60.4427 59.3603 60.2839 59.543 60.2102 59.7367C60.1341 59.9213 60.1238 60.1173 60.1793 60.3247C60.2446 60.5681 60.3969 60.7399 60.6363 60.84C60.8733 60.9311 61.1661 60.9782 61.5148 60.9814C61.8635 60.9846 62.2438 60.9793 62.6556 60.9656C63.0764 60.9495 63.4964 60.9481 63.9154 60.9614C64.3435 60.9723 64.7464 61.0335 65.1241 61.1448C65.5018 61.2562 65.8333 61.4476 66.1186 61.719C66.4129 61.988 66.6265 62.3704 66.7594 62.8663C66.9019 63.3982 66.8836 63.9248 66.7044 64.4463C66.5253 64.9678 66.1745 65.4435 65.6519 65.8733C65.1384 66.3008 64.4309 66.6353 63.5293 66.8769Z" fill="black" />
                                  </svg>
                                ) : (
                                  <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M43.5454 1.67862C44.6696 0.713137 46.3304 0.713135 47.4546 1.67862L53.6054 6.96105C54.3286 7.58216 55.304 7.82257 56.233 7.6087L64.1341 5.78976C65.5782 5.45731 67.0488 6.22909 67.5955 7.60643L70.5869 15.1422C70.9386 16.0283 71.6906 16.6944 72.6126 16.9368L80.454 18.998C81.8872 19.3748 82.8306 20.7415 82.6746 22.2152L81.8213 30.278C81.721 31.226 82.0772 32.1653 82.781 32.8084L88.7663 38.2776C89.8602 39.2772 90.0604 40.9258 89.2375 42.1582L84.735 48.9009C84.2056 49.6937 84.0845 50.691 84.4088 51.5874L87.1668 59.2117C87.6709 60.6052 87.082 62.158 85.7806 62.8668L78.6603 66.7448C77.8231 67.2007 77.2525 68.0275 77.123 68.972L76.022 77.0046C75.8207 78.4728 74.5776 79.5741 73.0959 79.5969L64.9891 79.7217C64.0359 79.7364 63.1464 80.2032 62.5928 80.9793L57.8849 87.5802C57.0244 88.7867 55.412 89.1842 54.0894 88.5158L46.8531 84.8588C46.0023 84.4288 44.9977 84.4288 44.1469 84.8588L36.9106 88.5158C35.588 89.1842 33.9756 88.7867 33.1151 87.5803L28.4072 80.9793C27.8536 80.2032 26.9641 79.7364 26.0109 79.7217L17.9041 79.5969C16.4224 79.5741 15.1793 78.4728 14.978 77.0046L13.877 68.972C13.7475 68.0275 13.1769 67.2007 12.3397 66.7448L5.2194 62.8668C3.91801 62.158 3.3291 60.6052 3.8332 59.2117L6.59125 51.5874C6.91554 50.691 6.79446 49.6937 6.26505 48.9009L1.76253 42.1582C0.939592 40.9259 1.13977 39.2772 2.23373 38.2776L8.21904 32.8084C8.92279 32.1653 9.27902 31.226 9.17869 30.278L8.32539 22.2152C8.16943 20.7415 9.11283 19.3748 10.546 18.998L18.3874 16.9368C19.3094 16.6944 20.0614 16.0283 20.4131 15.1422L23.4045 7.60643C23.9513 6.22909 25.4218 5.45731 26.8659 5.78976L34.767 7.6087C35.696 7.82257 36.6714 7.58216 37.3946 6.96105L43.5454 1.67862Z" fill="#BC9BFF" />
                                    <path d="M44.197 8.17602C44.9465 7.53236 46.0536 7.53236 46.8031 8.17602L51.7865 12.4559C52.7508 13.284 54.0513 13.6046 55.29 13.3194L61.6916 11.8457C62.6543 11.6241 63.6347 12.1386 63.9992 13.0568L66.4228 19.1624C66.8918 20.3438 67.8944 21.232 69.1237 21.5551L75.4769 23.2252C76.4323 23.4763 77.0613 24.3875 76.9573 25.37L76.266 31.9025C76.1322 33.1665 76.6071 34.4189 77.5455 35.2763L82.3948 39.7076C83.1241 40.374 83.2576 41.4731 82.709 42.2947L79.061 47.7577C78.3551 48.8147 78.1937 50.1444 78.6261 51.3397L80.8607 57.5169C81.1967 58.4459 80.8041 59.4812 79.9365 59.9537L74.1676 63.0956C73.0513 63.7036 72.2905 64.8059 72.1179 66.0652L71.2258 72.5734C71.0916 73.5522 70.2629 74.2863 69.2751 74.3015L62.7068 74.4026C61.4359 74.4222 60.2499 75.0447 59.5118 76.0795L55.6974 81.4276C55.1238 82.2319 54.0488 82.4969 53.1671 82.0513L47.3042 79.0884C46.1697 78.5151 44.8303 78.5151 43.6959 79.0884L37.833 82.0513C36.9513 82.4969 35.8763 82.2319 35.3026 81.4276L31.4882 76.0795C30.7502 75.0447 29.5642 74.4222 28.2932 74.4026L21.725 74.3015C20.7372 74.2863 19.9085 73.5521 19.7743 72.5734L18.8822 66.0652C18.7096 64.8059 17.9487 63.7036 16.8324 63.0956L16.3542 63.9738L16.8324 63.0956L11.0635 59.9537C10.1959 59.4812 9.80334 58.4459 10.1394 57.5169L12.374 51.3397C12.8064 50.1444 12.6449 48.8147 11.9391 47.7577L8.29109 42.2947C7.74246 41.4731 7.87592 40.374 8.60522 39.7076L13.4546 35.2763C14.3929 34.4189 14.8679 33.1665 14.7341 31.9025L14.0428 25.37C13.9388 24.3875 14.5677 23.4763 15.5232 23.2252L21.8764 21.5551C23.1057 21.232 24.1083 20.3438 24.5772 19.1624L27.0009 13.0568C27.3654 12.1386 28.3457 11.6241 29.3085 11.8457L35.7101 13.3194C36.9488 13.6046 38.2492 13.284 39.2135 12.4559L44.197 8.17602Z" stroke="black" stroke-width="2" />
                                    <path d="M27.3381 33.61C26.8036 33.7532 26.2885 33.8015 25.7929 33.7549C25.302 33.7 24.8469 33.5597 24.4274 33.3339C24.0145 33.1064 23.6577 32.8051 23.3571 32.4302C23.0629 32.0535 22.8476 31.6108 22.7113 31.102C22.575 30.5933 22.5401 30.1023 22.6065 29.629C22.6794 29.1539 22.8409 28.7138 23.0912 28.3085C23.3416 27.9033 23.6697 27.5565 24.0756 27.2683C24.4797 26.9737 24.9523 26.7539 25.4932 26.6089C26.0921 26.4485 26.6565 26.4042 27.1865 26.4761C27.723 26.5464 28.2063 26.7274 28.6365 27.0194L27.8804 28.2158C27.5667 28.0238 27.2486 27.9054 26.926 27.8607C26.6017 27.8096 26.2689 27.8298 25.9277 27.9212C25.5992 28.0092 25.3136 28.141 25.0708 28.3165C24.8279 28.492 24.6325 28.703 24.4847 28.9497C24.3433 29.1947 24.2532 29.4638 24.2145 29.7572C24.1822 30.0488 24.2092 30.3556 24.2954 30.6776C24.38 30.9931 24.5091 31.2691 24.6829 31.5055C24.8631 31.7402 25.0766 31.9315 25.3233 32.0793C25.5746 32.219 25.8462 32.305 26.1378 32.3373C26.4358 32.3679 26.7459 32.34 27.0678 32.2537C27.3769 32.1709 27.6634 32.0424 27.9273 31.8681C28.1959 31.6857 28.4368 31.4383 28.6498 31.1258L29.8413 32.0179C29.5484 32.3931 29.1772 32.7204 28.7274 32.9996C28.2842 33.2771 27.821 33.4806 27.3381 33.61ZM28.3574 32.1981L27.6767 29.6577L29.1063 29.2746L29.8413 32.0179L28.3574 32.1981ZM31.4942 32.3721L29.6824 25.6107L32.6092 24.8264C33.2145 24.6643 33.7628 24.6243 34.2542 24.7066C34.7439 24.7824 35.157 24.972 35.4936 25.2752C35.8302 25.5784 36.0667 25.9844 36.203 26.4931C36.3376 26.9954 36.3349 27.462 36.195 27.8928C36.0534 28.3173 35.7895 28.6848 35.4034 28.9953C35.0172 29.3058 34.5215 29.5422 33.9162 29.7044L31.8588 30.2557L32.3705 29.3835L33.059 31.9529L31.4942 32.3721ZM35.7925 31.2204L33.4448 29.2199L35.1158 28.7721L37.4829 30.7675L35.7925 31.2204ZM32.4171 29.5574L31.5249 29.0096L33.4954 28.4816C33.9784 28.3522 34.3114 28.1526 34.4944 27.8826C34.6757 27.6063 34.7172 27.2846 34.6189 26.9175C34.5188 26.5441 34.322 26.2862 34.0285 26.144C33.7351 26.0018 33.3469 25.9954 32.8639 26.1248L30.8934 26.6528L31.3896 25.7226L32.4171 29.5574ZM37.7085 30.707L38.9104 23.138L40.4559 22.7239L45.291 28.6753L43.6489 29.1153L39.5766 23.8084L40.1948 23.6428L39.3119 30.2774L37.7085 30.707ZM38.8271 28.8544L38.9241 27.555L42.4014 26.6233L43.1448 27.6975L38.8271 28.8544ZM45.9925 28.4873L44.1807 21.7259L45.4751 21.379L50.7688 25.1784L50.141 25.3466L48.8365 20.4783L50.382 20.0642L52.1937 26.8257L50.909 27.1699L45.6057 23.3732L46.2335 23.205L47.538 28.0732L45.9925 28.4873ZM53.7935 26.3971L51.9817 19.6356L55.0534 18.8125C55.7875 18.6158 56.4726 18.5841 57.1088 18.7173C57.7432 18.8441 58.2855 19.1164 58.7356 19.5341C59.1857 19.9518 59.5031 20.5052 59.6877 21.1942C59.8706 21.8768 59.8724 22.5148 59.6932 23.108C59.5123 23.6949 59.1796 24.205 58.6953 24.6384C58.2093 25.0655 57.5992 25.3773 56.8651 25.574L53.7935 26.3971ZM55.014 24.6931L56.4436 24.31C56.8944 24.1893 57.2615 24.0012 57.5451 23.7457C57.8333 23.4821 58.0254 23.1684 58.1211 22.8046C58.2233 22.439 58.2175 22.0437 58.1036 21.6187C57.988 21.1873 57.7954 20.842 57.5258 20.5829C57.261 20.3157 56.9387 20.1433 56.559 20.0656C56.184 19.9797 55.7711 19.9971 55.3203 20.1179L53.8908 20.501L55.014 24.6931ZM30.3894 43.0209L28.5776 36.2595L31.5044 35.4752C32.1097 35.313 32.6581 35.2731 33.1494 35.3554C33.6391 35.4312 34.0522 35.6208 34.3888 35.924C34.7254 36.2272 34.9619 36.6332 35.0982 37.1419C35.2328 37.6442 35.2301 38.1107 35.0902 38.5416C34.9503 38.9725 34.6882 39.3465 34.3038 39.6634C33.9176 39.9739 33.4219 40.2103 32.8166 40.3725L30.7592 40.9238L31.2657 40.0323L31.9542 42.6016L30.3894 43.0209ZM31.3123 40.2061L30.4176 39.6487L32.388 39.1207C32.871 38.9913 33.204 38.7917 33.3871 38.5218C33.5701 38.2519 33.6125 37.9334 33.5141 37.5663C33.414 37.1928 33.2172 36.935 32.9238 36.7928C32.6303 36.6505 32.2421 36.6441 31.7591 36.7735L29.7886 37.3015L30.2848 36.3714L31.3123 40.2061ZM37.3697 41.1506L35.558 34.3891L38.4847 33.6049C39.09 33.4427 39.6384 33.4027 40.1298 33.485C40.6194 33.5609 41.0325 33.7504 41.3692 34.0536C41.7058 34.3568 41.9422 34.7628 42.0785 35.2715C42.2131 35.7738 42.2105 36.2404 42.0706 36.6713C41.9289 37.0957 41.665 37.4632 41.2789 37.7737C40.8928 38.0842 40.3971 38.3206 39.7918 38.4828L37.7343 39.0341L38.246 38.1619L38.9345 40.7313L37.3697 41.1506ZM41.6681 39.9988L39.3203 37.9983L40.9914 37.5505L43.3584 39.5459L41.6681 39.9988ZM38.2926 38.3358L37.4005 37.788L39.371 37.26C39.8539 37.1306 40.1869 36.931 40.37 36.6611C40.5513 36.3847 40.5928 36.063 40.4944 35.696C40.3943 35.3225 40.1976 35.0646 39.9041 34.9224C39.6106 34.7802 39.2224 34.7738 38.7394 34.9032L36.7689 35.4312L37.2651 34.5011L38.2926 38.3358ZM44.4727 39.2473L42.6609 32.4858L44.2257 32.0666L46.0375 38.828L44.4727 39.2473ZM47.2074 38.5145L46.9357 37.5003L49.7671 31.3375L50.113 31.8556L45.8146 33.0074L45.473 31.7324L51.1623 30.2079L51.434 31.2221L48.6123 37.3824L48.2664 36.8642L52.7773 35.6556L53.1189 36.9306L47.2074 38.5145ZM54.4798 32.2385L57.735 31.3662L58.0611 32.5833L54.806 33.4555L54.4798 32.2385ZM55.3412 34.9893L59.0213 34.0032L59.3578 35.2589L54.1225 36.6617L52.3107 29.9002L57.4205 28.531L57.757 29.7867L54.2024 30.7392L55.3412 34.9893Z" fill="black" />
                                    <path d="M42.5739 72.318L40.0374 62.8519L44.1349 61.754C44.9823 61.5269 45.75 61.471 46.4379 61.5862C47.1234 61.6924 47.7018 61.9577 48.1731 62.3822C48.6443 62.8067 48.9754 63.3751 49.1662 64.0873C49.3546 64.7905 49.3509 65.4437 49.155 66.047C48.9592 66.6502 48.5922 67.1737 48.054 67.6174C47.5134 68.0522 46.8194 68.3831 45.972 68.6101L43.0916 69.3819L43.8007 68.1339L44.7646 71.731L42.5739 72.318ZM43.866 68.3773L42.6133 67.5969L45.372 66.8577C46.0481 66.6765 46.5143 66.397 46.7706 66.0192C47.0269 65.6413 47.0861 65.1954 46.9485 64.6815C46.8084 64.1587 46.5329 63.7977 46.122 63.5985C45.7111 63.3994 45.1676 63.3905 44.4915 63.5716L41.7328 64.3108L42.4274 63.0087L43.866 68.3773ZM54.043 69.2448L51.9849 61.5638L48.9557 62.3754L48.4774 60.5904L56.7265 58.3801L57.2047 60.1651L54.1756 60.9768L56.2337 68.6578L54.043 69.2448ZM63.5293 66.8769C62.772 67.0798 62.0197 67.1751 61.2724 67.1628C60.5227 67.1414 59.8925 67.0252 59.3818 66.8142L59.6835 64.9651C60.1665 65.1449 60.7083 65.2558 61.309 65.2978C61.9162 65.3283 62.5038 65.2675 63.0718 65.1153C63.5045 64.9993 63.8408 64.8658 64.0805 64.7146C64.3268 64.552 64.4925 64.3771 64.5776 64.19C64.6628 64.003 64.6788 63.8102 64.6256 63.6119C64.558 63.3595 64.4057 63.1877 64.1687 63.0966C63.9293 62.9965 63.6352 62.9448 63.2865 62.9417C62.9354 62.9294 62.5506 62.9359 62.1322 62.9611C61.7204 62.9748 61.2993 62.9717 60.8688 62.9518C60.4473 62.9294 60.0477 62.8626 59.67 62.7512C59.2923 62.6398 58.9563 62.4496 58.662 62.1806C58.3767 61.9092 58.1664 61.5211 58.0311 61.0162C57.8862 60.4753 57.8988 59.9453 58.0689 59.4263C58.2456 58.8958 58.592 58.4213 59.1079 58.0029C59.6304 57.573 60.338 57.2385 61.2305 56.9993C61.8255 56.8399 62.4308 56.755 63.0464 56.7446C63.6597 56.7253 64.2246 56.7961 64.7412 56.9572L64.5108 58.8017C64.0014 58.6677 63.5101 58.6012 63.0369 58.6024C62.5614 58.5945 62.1117 58.6474 61.688 58.7609C61.2643 58.8745 60.9305 59.017 60.6866 59.1887C60.4427 59.3603 60.2839 59.543 60.2102 59.7367C60.1341 59.9213 60.1238 60.1173 60.1793 60.3247C60.2446 60.5681 60.3969 60.7399 60.6363 60.84C60.8733 60.9311 61.1661 60.9782 61.5148 60.9814C61.8635 60.9846 62.2438 60.9793 62.6556 60.9656C63.0764 60.9495 63.4964 60.9481 63.9154 60.9614C64.3435 60.9723 64.7464 61.0335 65.1241 61.1448C65.5018 61.2562 65.8333 61.4476 66.1186 61.719C66.4129 61.988 66.6265 62.3704 66.7594 62.8663C66.9019 63.3982 66.8836 63.9248 66.7044 64.4463C66.5253 64.9678 66.1745 65.4435 65.6519 65.8733C65.1384 66.3008 64.4309 66.6353 63.5293 66.8769Z" fill="black" />
                                  </svg>
                                )
                              }
                              <StyledFont fontSize='18px' fontWeight='700' lineHeight='150%' style={{
                                position: "absolute",
                                left: 0,
                                right: 0,
                                top: 36,
                                textAlign: "center",
                                transform: "rotate(-15deg)"
                              }}>{odyssey[compass.id].reward}</StyledFont>
                            </StyledContainer>
                          )
                        }
                        <StyledContainer style={{
                          borderRadius: 16,
                          overflow: "hidden"
                        }}>
                          {
                            odyssey[compass.id].video ? (
                              <StyledCompassVideo autoPlay loop src={odyssey[compass.id].video} />
                            ) : (
                              <StyledCompassImage src={compass.banner} style={{ filter: compass.status === "ended" ? "grayscale(1)" : "grayscale(0)" }} />
                            )
                          }
                        </StyledContainer>
                      </StyledContainer>
                    </StyledContainer>
                  </StyledCard>
                </SwiperSlide>
              )
            })
          }

        </Swiper>
        <StyledSwiperButton onClick={() => handleClickSlideButton(event, 'prev')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
            <g filter="url(#filter0_b_9312_3673)">
              <rect width="60" height="60" rx="16" transform="matrix(-1 0 0 1 61 1)" fill="url(#paint0_linear_9312_3673)" fill-opacity="0.9" />
              <rect width="60" height="60" rx="16" transform="matrix(-1 0 0 1 61 1)" stroke="#979ABE" stroke-opacity="0.3" />
            </g>
            <path d="M44 29.5C44.8284 29.5 45.5 30.1716 45.5 31C45.5 31.8284 44.8284 32.5 44 32.5V29.5ZM17.9393 32.0607C17.3536 31.4749 17.3536 30.5251 17.9393 29.9393L27.4853 20.3934C28.0711 19.8076 29.0208 19.8076 29.6066 20.3934C30.1924 20.9792 30.1924 21.9289 29.6066 22.5147L21.1213 31L29.6066 39.4853C30.1924 40.0711 30.1924 41.0208 29.6066 41.6066C29.0208 42.1924 28.0711 42.1924 27.4853 41.6066L17.9393 32.0607ZM44 32.5H19V29.5H44V32.5Z" fill="#979ABE" />
            <defs>
              <filter id="filter0_b_9312_3673" x="-19.5" y="-19.5" width="101" height="101" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_9312_3673" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_9312_3673" result="shape" />
              </filter>
              <linearGradient id="paint0_linear_9312_3673" x1="30" y1="0" x2="30" y2="60" gradientUnits="userSpaceOnUse">
                <stop stop-color="#21232A" />
                <stop offset="1" stop-color="#21232A" stop-opacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </StyledSwiperButton>
        <StyledSwiperButton className='right' onClick={(event) => handleClickSlideButton(event, 'next')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
            <g filter="url(#filter0_b_9312_3670)">
              <rect x="1" y="1" width="60" height="60" rx="16" fill="url(#paint0_linear_9312_3670)" fill-opacity="0.9" />
              <rect x="1" y="1" width="60" height="60" rx="16" stroke="#979ABE" stroke-opacity="0.3" />
            </g>
            <path d="M19 29.5C18.1716 29.5 17.5 30.1716 17.5 31C17.5 31.8284 18.1716 32.5 19 32.5V29.5ZM45.0607 32.0607C45.6464 31.4749 45.6464 30.5251 45.0607 29.9393L35.5147 20.3934C34.9289 19.8076 33.9792 19.8076 33.3934 20.3934C32.8076 20.9792 32.8076 21.9289 33.3934 22.5147L41.8787 31L33.3934 39.4853C32.8076 40.0711 32.8076 41.0208 33.3934 41.6066C33.9792 42.1924 34.9289 42.1924 35.5147 41.6066L45.0607 32.0607ZM19 32.5H44V29.5H19V32.5Z" fill="#979ABE" />
            <defs>
              <filter id="filter0_b_9312_3670" x="-19.5" y="-19.5" width="101" height="101" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_9312_3670" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_9312_3670" result="shape" />
              </filter>
              <linearGradient id="paint0_linear_9312_3670" x1="31" y1="1" x2="31" y2="61" gradientUnits="userSpaceOnUse">
                <stop stop-color="#21232A" />
                <stop offset="1" stop-color="#21232A" stop-opacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </StyledSwiperButton>
      </StyledSwiperContainer>
      {
        currentCompass && (
          <StyledFlex flexDirection='column' gap='30px'>
            <StyledFont color='#FFF' fontSize='20px' lineHeight='150%'>{odyssey[currentCompass.id].tips}</StyledFont>
            <StyledFlex gap='18px'>
              <StyledJoinButton onClick={() => {
                check(handleJump)
              }}>Join Odyssey Vol.{currentCompass.id}</StyledJoinButton>
              <StyledClaimButton
                onClick={() => {
                  check(handleClickClaim)
                }}
              >Claim {detail?.unclaimed_reward ?? 0} PTS</StyledClaimButton>
            </StyledFlex>
          </StyledFlex>
        )
      }
      <StyledQuestionList>
        <StyledQuestion>
          <StyledFont color='#FFF' fontWeight='700' lineHeight='150%'>Q: How often do Odyssey volumes change?</StyledFont>
          <StyledFont color='#979ABE' lineHeight='150%'>A: It depends! We currently aim to keep them live for as long as possible.</StyledFont>
        </StyledQuestion>
        <StyledQuestion>
          <StyledFont color='#FFF' fontWeight='700' lineHeight='150%'>Q: Can I participate in Odyssey without DapDap Points (PTS)?</StyledFont>
          <StyledFont color='#979ABE' lineHeight='150%'>A: Yes! Odyssey does not require any PTS and is crafted in way to reward user attention and engagement, making each season&apos;s experience integrally rewarding — simply by participating.</StyledFont>
        </StyledQuestion>
        <StyledQuestion>
          <StyledFont color='#FFF' fontWeight='700' lineHeight='150%'>Q: Is there a fee to participate in Odyssey?</StyledFont>
          <StyledFont color='#979ABE' lineHeight='150%'>A: No, Odyssey is a complimentary feature for DapDap users, emphasizing our dedication to making DeFi exploration accessible and fun for everyone.</StyledFont>
        </StyledQuestion>
      </StyledQuestionList>
    </StyledContainer>
  )
}
export default Index