import Image from 'next/image';
import { useEffect, useState } from 'react';
import Trapeziform from '../Trapeziform';
import { openLink, openXShareLink } from '@/utils/links';
import useReport from '../../hooks/useReport';
import {
  Body,
  QuestGoldHints,
  Head,
  HeadLeft,
  HeadRight,
  QuestGold,
  QuestBg,
  Spins,
  Desc,
  Gold,
  GoldWapper,
  QuestTitle,
  SpinLine,
} from './styles';

export default function Quest({ data, bgClass, userInfo, authConfig }: any) {
  const { id, name, step } = data;
  const { handleReport } = useReport(true);

  const onItemClick = (item: any, i: number) => {
    if (item.link) {
      openLink(item.link, true);
      handleReport(id, i + 1);
      return;
    }
    if (!userInfo.twitter?.is_bind) {
      const path = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${authConfig.twitter_client_id}&redirect_uri=${window.location.href}&scope=tweet.read%20users.read%20follows.read%20like.read&state=state&code_challenge=challenge&code_challenge_method=plain`;
      sessionStorage.setItem('_auth_type', 'twitter');
      window.open(path, '_blank');
      return;
    }
    openXShareLink(`Join Odyssey Vol.4+ and conquer the quest to earn spins for a chance at big prizes! 🎉 
    Don't miss out on your shot at exciting rewards! @DapDapMeUp @${item.twitter}
    #DapDap #Blast`);
    handleReport(id, i + 1);
  };

  return (
    <Trapeziform borderColor="#3C3D00" corner={34} className="quest-item">
      <QuestBg $color={data.bgColor} />
      <Head className={bgClass}>
        <HeadLeft>
          <Image src={data.icon} alt="" width={46} height={46} />
          <span className="name">{name}</span>
        </HeadLeft>
        {data.extraGold && (
          <HeadRight>
            {data.extraGold.value}
            <div className="tip">
              Top traders based of Volume on {name} will share {data.extraGold.value} Extra Gold
            </div>
          </HeadRight>
        )}
      </Head>
      {!!data.rewards.length && <Desc>Prize Contributed</Desc>}

      <GoldWapper>
        {data.rewards &&
          data.rewards.map((reward: any) => {
            return (
              <Gold key={reward.label}>
                <img src={reward.icon} />
                <span>{reward.label}</span>
              </Gold>
            );
          })}
      </GoldWapper>

      <QuestTitle>Quest</QuestTitle>

      {data.quests.map((item: any, i: number) => {
        return (
          <SpinLine
            onClick={() => {
              onItemClick(item, i);
            }}
            key={item.label}
          >
            <span className="spin-count">{item.spin} SPIN</span>
            <span className="spin-title">{item.label}</span>
            <span className="spin-status">
              {step.includes(i + 1) && (
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 8.5C16 12.6421 12.6421 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1"
                    stroke="#00FFD1"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4.99609 7.5L7.99609 10.5L15.4961 3"
                    stroke="#00FFD1"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              )}
            </span>
          </SpinLine>
        );
      })}
    </Trapeziform>
  );
}
