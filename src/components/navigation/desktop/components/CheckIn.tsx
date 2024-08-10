import styled from 'styled-components';
import CheckInGrid from './CheckInGrid';
import { useState, useRef, useEffect, useMemo } from 'react';
import MedalCard from '@/views/Profile/components/MedalCard';
import { useDebounceFn } from 'ahooks';
import { get, post } from '@/utils/http';
import useAuthCheck from '@/hooks/useAuthCheck';
import useAccount from '@/hooks/useAccount';
import { ICheckInData } from './types';
import Loading from '@/components/Icons/Loading';
import Skeleton from 'react-loading-skeleton'

const StyleCheckIn = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  display: flex;
  align-items: center;
  height: 34px;

  &:hover {
    .text {
      cursor: pointer;
      color: rgba(255, 255, 255, 1);
    }
  }

  .text {
    font-size: 12px;
    line-height: 12px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const StyledImg = styled.img<{ isHovered: boolean }>`
  width: ${(props) => (props.isHovered ? '41px' : '18px')};
  height: ${(props) => (props.isHovered ? '36px' : '16px')};
  transition: width 0.3s, height 0.3s;
  margin-right: 6px;
`;

const StyleDropdown = styled.div`
  position: absolute;
  top: 34px;
  right: -10px;
  .dropdown-content {
    width: 472px;
    border: 1px solid #333648;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: #1f2229;
    border-radius: 12px;
    border-top-width: 0;
  }
  .dropdown-header {
    padding: 20px 20px 20px 36px;
    border: 1px solid #333648;
    border-right-width: 0;
    border-left-width: 0;
    border-radius: 12px;
    display: flex;
    align-items: center;
    .header-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: Montserrat;
      text-align: left;
      margin-right: 48px;
      gap: 4px;
      &:nth-last-child(2) {
        margin-right: 30px;
      }
      .value {
        font-size: 26px;
        font-weight: 700;
        line-height: 26px;
      }
      .label {
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
        text-align: left;
      }
    }
    .dap-check {
      padding: 16px 28px;
      font-family: Orbitron;
      font-size: 16px;
      font-weight: 700;
      line-height: 16px;
      text-align: left;
      color: rgba(0, 0, 0, 1);
      background: rgba(235, 244, 121, 1);

      border-radius: 12px;
      &:hover {
        cursor: pointer;
        background: rgba(235, 244, 121, 0.8);
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .dropdown-main {
    padding: 16px 20px 22px 20px;
    text-align: center;
    .dropdown-medals {
      margin-bottom: 16px;
    }
    .mystery-img {
      width: 220px;
      height: 20px;
      margin-bottom: 24px;
      display: inline-block;
    }
  }
`;

const StyledButton = styled.button`
  width: 154px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(180deg, #eef3bf 0%, #e9f456 100%);
  color: #1e2028;
  font-size: 16px;
  font-weight: 700;
  border: none;
  transition: 0.3s;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.8;
  }
  &:disabled {
    background: #7c7f96;
    opacity: 0.5;
  }
`;

const LoadingCard = () => (
  <>
    <Skeleton width={432} height={145} borderRadius={'12px'} />
    <Skeleton width={432} height={200} borderRadius={'12px'} style={{ marginTop: '20px'}} />
  </>
);

const CheckIn = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navHeaderRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<ICheckInData>();
  const [loading, setLoading] = useState<boolean>(false);
  const { check } = useAuthCheck({ isNeedAk: true, isQuiet: true });
  const { account } = useAccount();
  const [claimLoading, setClaimLoading] = useState(false);

  const [imgSrc, setImgSrc] = useState('/images/header/fist-dapdap.png');

  const handleMouseEnter = () => {
    setIsHovered(true);
    setImgSrc('/images/header/dapdap.gif');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setImgSrc('/images/header/fist-dapdap.png');
  };

  const handleClick = () => {
    setIsHovered(true);
    setImgSrc('/images/header/dapdap.gif');
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navHeaderRef.current && !navHeaderRef.current.contains(event.target as Node)) {
      setIsHovered(false);
      setImgSrc('/images/header/fist-dapdap.png');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const fetchSignsInfo = async () => {
    try {
      setLoading(true);
      const result = await get(`/api/check-in`);
      setData(result.data);
    } catch (err) {
      console.log(err, 'err');
    } finally {
      setLoading(false);
    }
  };

  const { run } = useDebounceFn(
    () => {
      check(() => fetchSignsInfo());
    },
    { wait: 300 },
  );

  useEffect(() => {
    run();
  }, [account]);

  const checkIn = async () => {
    try {
      setClaimLoading(true);
      await post(`/api/check-in`);
    } catch (err) {
      console.log(err, 'err');
    } finally {
      setClaimLoading(false);
    }
  };

  const { run: claim } = useDebounceFn(
    () => {
      check(() => checkIn());
    },
    { wait: 300 },
  );

  const isClaimed = useMemo(() => {
    if (!data) return false;
    return data?.data?.some((item) => item.status === 'claimed' && item?.status);
  }, [data]);

  return (
    <StyleCheckIn
      ref={navHeaderRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <StyledImg src={imgSrc} alt="fist" isHovered={isHovered} />
      <span className="text">DapMeUp!</span>
      {isHovered && (
        <StyleDropdown>
          <div className="dropdown-content">
            <div className="dropdown-header">
              <div className="header-item">
                <span className="value">{data?.total_days ?? '-'}</span>
                <span className="label">times in total</span>
              </div>
              <div className="header-item">
                <span className="value">{data?.consecutive_days ?? '-'}</span>
                <span className="label">days in a row</span>
              </div>
              <StyledButton
                disabled={isClaimed || claimLoading}
                onClick={() => {
                  claim();
                }}
              >
                {claimLoading && <Loading size={16} />}
                <span style={{ marginLeft: claimLoading ? '4px' : '' }}>Dap me up!</span>
              </StyledButton>
            </div>
            <div className="dropdown-main">
              {
                loading ? <LoadingCard /> : (
                  <>
                    {data?.medal && (
                      <div className="dropdown-medals">
                        <MedalCard medal={data.medal} style={{ width: '100%', height: '142px' }} />
                      </div>
                    )}
                    {data && data.data?.length > 0 && (
                      <div className="dropdown-mystery">
                        <img className="mystery-img" src="/images/header/dapdap-mystery-text.png" alt="mystery" />
                        <div className="dropdown-mystery-box">
                          <CheckInGrid dayStatus={data.data} />
                        </div>
                      </div>
                    )}
                  </>
                )
              }
            </div>
          </div>
        </StyleDropdown>
      )}
    </StyleCheckIn>
  );
};

export default CheckIn;
