import React, { memo, useMemo, useRef, useState } from 'react';
import {
  StyledOdysseyBanner,
  StyledOdysseyBody,
  StyledOdysseyContainer,
  StyledOdysseyHead,
  StyledOdysseyIcon,
  StyledOdysseyIconTitle,
  StyledOdysseyInfo,
  StyledOdysseyTitle,
  StyledOdysseyTop,
  StyledTagChain,
  StyledTagChains,
  StyledTagIcon,
  StyledTagItem,
  StyledTagItemInner,
  StyledTagLabel,
  StyledTagList,
  StyledVideo,
  StyledVideoIcon,
} from '@/views/Dapp/components/DappDetail/RelativeOdyssey/styles';
import Tag, { StatusType } from '@/views/Odyssey/components/Tag';
import OdysseyVideo from './Video';
import { formatIntegerThousandsSeparator } from '@/utils/format-number';
import Image from 'next/image';
import { StyledFlex } from '@/styled/styles';
import RewardIcons from '@/views/OdysseyV8/RewardIcons';
import odysseyConfig from '@/config/odyssey';
import { useRouter } from 'next/router';
import odyssey from '@/config/odyssey';
import SimpleTooltip from '@/views/AllDapps/components/Badges/Tooltip';
import useToast from '@/hooks/useToast';
const isDevelopment = process.env.NODE_ENV === 'development';
const OdysseyCardComponent = (props: Props) => {
  const {
    banner,
    status,
    name,
    id,
    rewards,
    volume,
    users,
    medals,
    className,
  } = props;

  const tagListRef = useRef<any>();

  const onRewardHover = () => {
    if (!tagListRef.current) return;
    tagListRef.current.scrollTo({
      left: tagListRef.current.scrollWidth,
      behavior: 'smooth',
    });
  };
  const onRewardLeave = () => {
    if (!tagListRef.current) return;
    tagListRef.current.scrollTo({
      left: 0,
      behavior: 'smooth',
    });
  };

  const router = useRouter();

  const [show, setShow] = useState<boolean>(false);
  const [videoUrl, setVideoUrl] = useState<string>('');
  const toast = useToast()
  const onCardClick = () => {
    if(isDevelopment) {
      toast.fail('This Odyssey ID is not available in the current FE version')
    }
    if (odyssey[id]) {
      router.push(odyssey[id].path);
    }
  };

  const onBadgeClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, badge: any) => {
    e.stopPropagation();
    console.log('badge: %o', badge);
  };

  const activity = {
    id,
    name,
    status,
    banner,
  };

  const Config = odysseyConfig[id] || {};

  const showVideo = (_video: string) => {
    if (!_video) {
      return;
    }
    setVideoUrl(_video);
    setShow(true);
  };

  const summaryList = useMemo(() => ([
    {
      key: 'volume',
      icon: 'icon-swap.png',
      value: `$${formatIntegerThousandsSeparator(volume, 1)}`,
      tooltip: 'Trading Volume',
    },
    {
      key: 'users',
      icon: 'icon-hot.svg',
      value: formatIntegerThousandsSeparator(users, 1),
      tooltip: 'User Amount',
    },
  ]), []);

  const badges = useMemo(() => {
    if (!rewards) return [];
    const _badges: any = [];
    let rewardsList: any;
    try {
      rewardsList = JSON.parse(rewards);
    } catch (err) {
      console.log(err);
    }
    rewardsList.forEach((reward: any) => {
      const currIdx = _badges.findIndex((it: any) => it.name === reward.name);
      if (currIdx < 0) {
        _badges.push({
          name: reward.name,
          icon: RewardIcons[reward.logo_key]?.icon ?? '',
          iconSize: 20,
          value: reward.value,
          odyssey: [{
            ...activity,
            badgeValue: reward.value,
          }],
        });
      } else {
        if (!_badges[currIdx].odyssey.some((ody: any) => ody.id === id)) {
          _badges[currIdx].odyssey.push({
            ...activity,
            badgeValue: reward.value,
          });
        }
      }
    });
    return _badges;
  }, [rewards, activity]);

  const isLive = odysseyIsLive(status);

  return (
    <>
      <StyledOdysseyContainer className={className} onClick={onCardClick}>
        <StyledOdysseyTop>
          <StyledOdysseyBanner
            url={banner}
            className={!isLive ? 'gray' : ''}
          />
          <StyledOdysseyHead>
            <StyledOdysseyInfo>
              <StyledOdysseyIcon />
              <StyledOdysseyIconTitle>
                Vol.{renderVolNo({ name, id })}
              </StyledOdysseyIconTitle>
            </StyledOdysseyInfo>
            <Tag status={status} />
          </StyledOdysseyHead>
          {
            Config.video && (
              <StyledVideo
                url={banner}
                onClick={(e) => {
                  e.stopPropagation();
                  showVideo(Config.video);
                }}
              >
                <StyledVideoIcon src="/images/alldapps/icon-play.svg" />
              </StyledVideo>
            )
          }
        </StyledOdysseyTop>
        <StyledOdysseyBody>
          <StyledOdysseyTitle>
            {name?.split(': ')?.[0] ?? ''}：<br />{name?.split(': ')?.[1] ?? ''}
          </StyledOdysseyTitle>
          <StyledTagList ref={tagListRef}>
            {
              summaryList.map((item: any, index: number) => (
                <SimpleTooltip
                  tooltip={item.tooltip}
                  key={item.key}
                >
                  <StyledTagItem onClick={(e) => onBadgeClick(e, item)}>
                    {item.icon && (
                      <StyledTagIcon src={`/images/alldapps/${item.icon}`} />
                    )}
                    <StyledTagLabel>
                      {item.type === 'medal' ? `${item.value} Medal` : item.value}
                    </StyledTagLabel>
                  </StyledTagItem>
                </SimpleTooltip>
              ))
            }
            {
              medals && medals?.length > 0 && (
                <StyledTagItem key="medal">
                  <StyledTagLabel>
                    <StyledFlex justifyContent="center" alignItems="center" gap="5px">
                      {
                        medals.length === 1 && (
                          <Image src={medals[0].icon} alt="" width={18} height={24} />
                        )
                      }
                      {medals.length} Medal{medals.length > 1 ? 's' : ''}
                    </StyledFlex>
                  </StyledTagLabel>
                </StyledTagItem>
              )
            }
            {
              badges && badges?.length > 0 && (
                <StyledTagItem
                  key="reward"
                  className="reward"
                  onHoverStart={onRewardHover}
                  onHoverEnd={onRewardLeave}
                >
                  <StyledTagItemInner className={`reward ${isLive ? 'tag-active' : 'tag-default'}`}>
                    <div
                      className="reward-text"
                      style={{
                        opacity: isLive ? 1 : 0.5,
                      }}
                    >
                      {badges[0].value} {badges[0].name.toUpperCase()}
                    </div>
                    <StyledTagChains>
                      {
                        badges.map((badge: any, idx: number) => (
                          <StyledTagChain
                            key={badge.name}
                            initial={{
                              zIndex: 1,
                            }}
                            whileHover={{
                              scale: 1.2,
                              zIndex: 2,
                            }}
                            onClick={(e) => onBadgeClick(e, badge)}
                          >
                            <SimpleTooltip tooltip={badge.name}>
                              <Image
                                src={badge.icon}
                                alt=""
                                width={badge.iconSize}
                                height={badge.iconSize}
                                style={{
                                  opacity: isLive ? 1 : 0.5,
                                }}
                              />
                            </SimpleTooltip>
                          </StyledTagChain>

                        ))
                      }
                    </StyledTagChains>
                  </StyledTagItemInner>
                </StyledTagItem>
              )
            }
          </StyledTagList>
        </StyledOdysseyBody>
      </StyledOdysseyContainer>
      <OdysseyVideo
        src={videoUrl}
        visible={show}
        close={() => {
          setShow(false);
        }}
      />
    </>
  );
};

export default memo(OdysseyCardComponent);

export interface Props {
  banner: string;
  name: string;
  id: number;
  // enum of StatusType
  status: StatusType;
  // JSON string, such as: "[{\"name\":\"Gold\",\"value\":\"7500\",\"logo_key\":\"blast_gold\"}]"
  rewards?: string;
  // trading_volume
  // please directly prop a numeric string; the component will handle formatting internally
  volume?: string;
  // total_users
  users?: string;
  // if there are badges
  // please prop them as an array
  medals?: { icon: string; id: number; }[];
  // custom className
  className?: string;
}

const odysseyIsLive = (status: StatusType) => {
  return status === StatusType.ongoing;
};

const renderVolNo = (options: { name: string; id: number; }) => {
  const {
    name,
    id,
  } = options;
  if (!name) return null;
  if (name.indexOf('Vol.4+:') > -1) {
    return '4+';
  }
  // ⚠️ Special: mode-odyssey id is 7, but show number is 5
  if (id === 7) {
    return 5;
  }
  return id;
};
