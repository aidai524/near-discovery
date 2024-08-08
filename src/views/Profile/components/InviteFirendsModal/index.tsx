import { memo, useEffect, useMemo, useState } from 'react';

import Modal from '@/components/Modal';
import useCopy from '@/hooks/useCopy';
import { ellipsAccount } from '@/utils/account';

import useUserReward from '@/hooks/useUserReward';
import { useUserStore } from '@/stores/user';
import { StyledContainer, StyledFlex, StyledFont, StyledSvg } from '@/styled/styles';
import useRewardsClaim from '../../hooks/useRewardsClaim';
import type { Column } from '../../types';
import MedalCard from '../MedalCard';
import UserAvatar from '../UserAvatar';
import PendingHints from './PendingHints';
import {
  StyledAvatar,
  StyledBody,
  StyledCell,
  StyledLink,
  StyledMedalContainer,
  StyledPendingCell,
  StyledRow,
  StyledTableHeader,
  StyledTips,
  StyledUserAddress,
  StyledUserName
} from './styles';

export const COLUMNS: Column[] = [
  {
    label: 'Invite friends',
    width: 60,
    key: 'friend',
    gap: 26,
    align: 'left',
  },
  {
    label: 'Status',
    width: 20,
    key: 'status',
    align: 'center',
  },
];

const Friend = ({ username, address, avatar }: { username: string; address: string; avatar: string }) => {
  return (
    <>
      <StyledAvatar src={avatar} />
      <div>
        <StyledUserName>{username}</StyledUserName>
        <StyledUserAddress>{ellipsAccount(address)}</StyledUserAddress>
      </div>
    </>
  );
};

const InviteFirendsModal = ({
  open,
  list,
  totalRewards,
  reward,
  onClose,
}: {
  list: any;
  totalRewards: number;
  reward: number;
  open: boolean;
  onClose: VoidFunction;
}) => {
  const userInfo = useUserStore((store: any) => store.user);
  const { queryUserReward } = useUserReward();
  const { copy } = useCopy();
  const [claimableRewards, setClaimableRewards] = useState(totalRewards);
  const { loading: claiming, handleClaim } = useRewardsClaim(() => {
    queryUserReward();
    setClaimableRewards(0);
  });
  const link = useMemo(
    () => location.origin + (userInfo?.is_kol ? `/invite/${userInfo?.kol_name}` : `/referral/${userInfo?.invite_code}`),
    [userInfo],
  );
  useEffect(() => {
    setClaimableRewards(totalRewards);
  }, [totalRewards]);
  return (
    <Modal
      display={open}
      showHeader={false}
      width={558}
      hidden={true}
      onClose={onClose}
      content={
        <>
          {/* <StyledBackground>
            <Image src={linkModalBg} alt="linkModalBg" />
          </StyledBackground> */}
          <StyledContainer style={{ position: 'relative', zIndex: 10 }}>
            <StyledFlex
              justifyContent="space-between"
              alignItems="flex-end"
              style={{ paddingRight: 39, paddingLeft: 31, height: 110 }}
            >
              <UserAvatar userInfo={userInfo} />
              <StyledLink>
                <StyledSvg>
                  <svg width="371" height="58" viewBox="0 0 371 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 0H249.615C249.767 1.51433 251.046 2.69653 252.6 2.69653C254.155 2.69653 255.433 1.51433 255.585 0H363C367.418 0 371 3.58172 371 8V50C371 54.4183 367.418 58 363 58H255.555C255.308 56.5911 254.079 55.5203 252.6 55.5203C251.12 55.5203 249.891 56.5911 249.645 58H8C3.58173 58 0 54.4183 0 50V8C0 3.58172 3.58172 0 8 0Z"
                      fill="url(#paint0_linear_7090_12399)"
                    />
                    <line
                      x1="252.5"
                      y1="4.5"
                      x2="252.5"
                      y2="54.5"
                      stroke="black"
                      strokeLinecap="round"
                      strokeDasharray="1 3"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_7090_12399"
                        x1="5.30885e-06"
                        y1="31.8316"
                        x2="154.956"
                        y2="-117.828"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#62FFF6" />
                        <stop offset="0.520833" stopColor="#B479FF" />
                        <stop offset="1" stopColor="#FFC289" />
                      </linearGradient>
                    </defs>
                  </svg>
                </StyledSvg>
                <StyledFlex
                  justifyContent="space-between"
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    paddingTop: 12,
                    paddingRight: 12,
                    paddingBottom: 12,
                    paddingLeft: 10,
                  }}
                >
                  <StyledFont fontSize="14px" fontWeight="500" style={{ width: 232, wordBreak: 'break-all' }}>
                    {link}
                  </StyledFont>
                  <StyledFlex style={{ cursor: 'pointer' }} gap="5px" onClick={() => copy(link)}>
                    <StyledSvg>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_7090_12407)">
                          <path
                            d="M11.413 7.60601C11.5 8.25001 11.5 9.04201 11.5 9.90501V11.395C11.5 11.593 11.5 11.691 11.564 11.751C11.628 11.81 11.724 11.803 11.916 11.789C12.0744 11.7778 12.2325 11.7618 12.39 11.741C13.03 11.655 13.561 11.482 14.009 11.114C14.1693 10.9827 14.3163 10.836 14.448 10.676C14.836 10.203 15.006 9.63701 15.088 8.95001C15.167 8.28001 15.167 7.43401 15.167 6.36601V6.30101C15.167 5.23301 15.167 4.38601 15.087 3.71701C15.007 3.02901 14.836 2.46401 14.447 1.99101C14.317 1.83101 14.169 1.68401 14.009 1.55201C13.536 1.16401 12.97 0.994008 12.283 0.912008C11.613 0.833008 10.767 0.833008 9.69999 0.833008H9.63499C8.56699 0.833008 7.72099 0.833008 7.05099 0.913008C6.36399 0.993008 5.79799 1.16401 5.32499 1.55301C5.16499 1.68301 5.01799 1.83101 4.88699 1.99101C4.51899 2.43901 4.34699 2.97101 4.25999 3.61101C4.23999 3.75901 4.22399 3.91701 4.21199 4.08401C4.19799 4.27601 4.19099 4.37201 4.24999 4.43601C4.30999 4.50001 4.40799 4.50001 4.60599 4.50001H6.09599C6.95899 4.50001 7.74999 4.50001 8.39599 4.58701C9.10599 4.68201 9.85799 4.90701 10.476 5.52501C11.094 6.14301 11.319 6.89501 11.414 7.60501L11.413 7.60601Z"
                            fill="black"
                          />
                          <path
                            d="M5.297 5.5H6.037C6.948 5.5 7.683 5.5 8.261 5.578C8.861 5.658 9.366 5.831 9.768 6.232C10.169 6.634 10.342 7.139 10.422 7.739C10.5 8.317 10.5 9.052 10.5 9.963V10.703C10.5 11.615 10.5 12.35 10.422 12.928C10.342 13.528 10.169 14.033 9.768 14.434C9.366 14.836 8.861 15.008 8.261 15.089C7.683 15.167 6.948 15.167 6.037 15.167H5.297C4.385 15.167 3.65 15.167 3.072 15.089C2.472 15.009 1.967 14.836 1.566 14.434C1.164 14.034 0.992001 13.528 0.911 12.928C0.833 12.35 0.833 11.615 0.833 10.703V9.963C0.833 9.052 0.833 8.317 0.911 7.739C0.991 7.139 1.164 6.634 1.566 6.232C1.966 5.831 2.472 5.658 3.072 5.578C3.65 5.5 4.385 5.5 5.297 5.5Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_7090_12407">
                            <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 1 16 0)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </StyledSvg>
                    <StyledFont fontWeight="500">Copy Link</StyledFont>
                  </StyledFlex>
                </StyledFlex>
                {userInfo?.is_kol && (
                  <StyledTips>
                    <StyledFont
                      color="transparent"
                      fontSize="12px"
                      fontWeight="700"
                      style={{ background: 'linear-gradient(90deg, #FFF 0%, #999 100%)', backgroundClip: 'text' }}
                    >
                      KOL SPECIAL LINK
                    </StyledFont>
                  </StyledTips>
                )}
              </StyledLink>
            </StyledFlex>
            <StyledMedalContainer>
              {/* <MedalCard style={{ width: 508, height: 133 }} barWidth='403px' /> */}
            </StyledMedalContainer>
            <StyledTableHeader>
              <StyledFont color='#979ABE'><span style={{ fontWeight: 600 }}>34</span> Invited</StyledFont>
              <StyledFont color='#979ABE'><span style={{ color: '#EBF479', fontWeight: 600 }}>12</span> Active Referrals</StyledFont>
            </StyledTableHeader>
            <StyledBody>
              {list.length > 0 ? (
                list.map((row: any, i: number) => (
                  <StyledRow key={row.invited_user?.address || i}>
                    <StyledCell>
                      <Friend {...row.invited_user} />
                    </StyledCell>
                    <StyledCell>
                      {(row.status === 'Pending' ? (
                        <StyledPendingCell>
                          <span> {row.status + '...'}</span> <PendingHints />
                        </StyledPendingCell>
                      ) : (
                        row.status
                      ))}
                    </StyledCell>
                  </StyledRow>
                ))
              ) : (
                <StyledFlex flexDirection="column" gap="15px" style={{ marginTop: 41, marginBottom: 49 }}>
                  <StyledSvg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="53" viewBox="0 0 42 53" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.3092 14.8751L7.31124 19.1618C4.7059 19.8599 3.15978 22.5378 3.85788 25.1432L8.14453 41.1412C8.84263 43.7465 11.5206 45.2926 14.1259 44.5945L30.1239 40.3079C32.7293 39.6098 34.2754 36.9318 33.5773 34.3265L29.2906 18.3285C28.5925 15.7231 25.9146 14.177 23.3092 14.8751ZM35.0928 37.4785C33.9607 43.0157 32.9308 46.1706 29.6789 47.0419L12.0024 52.1367C8.62939 53.0405 5.16233 51.0388 4.25852 47.6657L0.0961804 32.1317C-0.429292 29.8382 1.32944 24.8141 2.20097 22.5415C2.69062 20.2174 4.43865 18.2461 6.8899 17.5893L22.8879 13.3027C23.3015 13.1918 23.7164 13.1234 24.1281 13.0948C24.5809 13.0633 25.0298 13.0798 25.4686 13.1409C27.982 13.4909 30.165 15.3018 30.8631 17.9071L35.1497 33.9051C35.4763 35.1237 35.4346 36.3542 35.0928 37.4785Z"
                        fill="#4E5271"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.0672 23.7765C20.3895 23.2213 19.2336 22.8972 17.8525 23.2898C16.7738 23.5964 16.2957 24.1182 16.0654 24.5401C16.0317 24.6017 16.0022 24.6634 15.9764 24.7246C15.7618 25.2334 15.387 25.7759 14.8423 25.8672L13.8561 26.0324C13.3114 26.1237 12.7892 25.7522 12.8241 25.201C12.8652 24.5519 13.042 23.8174 13.4321 23.1028C14.0696 21.9348 15.224 20.918 17.0323 20.4041C19.26 19.7709 21.455 20.216 22.9684 21.4559C24.5138 22.7219 25.2619 24.7717 24.5356 26.9392C24.0181 28.4836 23.1462 29.4271 22.6318 29.9836C22.5194 30.1052 22.4241 30.2083 22.3533 30.2952C22.1607 30.5315 22.0997 30.666 22.072 30.8275C22.0568 30.9157 22.0473 31.0425 22.0608 31.224C22.1016 31.7747 21.8257 32.3267 21.2949 32.4792L20.3338 32.7552C19.8029 32.9077 19.2391 32.6021 19.1455 32.0578C19.0382 31.4342 19.0224 30.8604 19.1152 30.32C19.2608 29.4717 19.6456 28.869 20.0278 28.4C20.2251 28.1578 20.4057 27.9589 20.5718 27.7759C21.0408 27.2592 21.3953 26.8687 21.691 25.9861C21.9958 25.0764 21.7129 24.3055 21.0672 23.7765Z"
                        fill="#4E5271"
                      />
                      <path
                        d="M30.5753 2.79601C30.9447 2.06811 31.8342 1.77746 32.5621 2.14684C33.29 2.51621 33.5807 3.40572 33.2113 4.13362L30.5361 9.40554C30.1667 10.1334 29.2772 10.4241 28.5493 10.0547C27.8214 9.68534 27.5307 8.79583 27.9001 8.06793L30.5753 2.79601Z"
                        fill="#4E5271"
                      />
                      <path
                        d="M20.0218 1.47753C20.0416 0.661514 20.7191 0.016035 21.5351 0.0358152C22.3512 0.0555954 22.9966 0.733143 22.9769 1.54916L22.8336 7.45927C22.8138 8.27529 22.1363 8.92077 21.3203 8.90099C20.5042 8.88121 19.8588 8.20366 19.8785 7.38765L20.0218 1.47753Z"
                        fill="#4E5271"
                      />
                      <path
                        d="M38.4484 9.63607C39.1284 9.1846 40.0457 9.36988 40.4972 10.0499C40.9486 10.7299 40.7633 11.6472 40.0833 12.0987L35.1581 15.3686C34.478 15.82 33.5608 15.6347 33.1093 14.9547C32.6578 14.2747 32.8431 13.3574 33.5231 12.9059L38.4484 9.63607Z"
                        fill="#4E5271"
                      />
                      <path
                        d="M19.9683 35.2096C19.8364 34.6733 20.1643 34.1316 20.7006 33.9998L21.8327 33.7214C22.369 33.5895 22.9106 33.9174 23.0425 34.4537L23.3208 35.5858C23.4527 36.1221 23.1248 36.6638 22.5885 36.7956L21.4565 37.074C20.9201 37.2059 20.3785 36.878 20.2466 36.3417L19.9683 35.2096Z"
                        fill="#4E5271"
                      />
                    </svg>
                  </StyledSvg>
                  <StyledFont fontFamily="Gantari" color="#4E5271">
                    No invite history
                  </StyledFont>
                </StyledFlex>
              )}
            </StyledBody>
          </StyledContainer>
        </>
      }
    />
  );
};

export default memo(InviteFirendsModal);
