import { useState } from 'react';

import Loading from '@/components/Icons/Loading';
import Tabs from '@/components/launchpad-modal/tabs';
import Timer from '@/components/launchpad-modal/timer';

import SocialButton from '../components/SocialButton';
import ProjectDetail from './project';
import SaleDetail from './sale';
import {
  Banner,
  BannerBody,
  Content,
  Desc,
  Intro,
  Logo,
  Main,
  Sider,
  SocialGroup,
  Status,
  TabBody,
  TimerTitle,
  TimerWrap,
  Title,
} from './style.detail';
import TradesDetail from './trades';

export default function LaunchpadYoursPage() {
  const [currentTab, setCurrentTab] = useState('ProjectDetails');
  const tabData = [
    {
      name: 'Project Details',
      key: 'ProjectDetails',
    },
    {
      name: 'Sale Details',
      key: 'SaleDetails',
    },

    {
      name: 'Trades',
      key: 'Trades',
    },
  ];

  const onTabsChange = (key: string) => {
    setCurrentTab(key);
  };
  return (
    <div>
      <Banner>
        <BannerBody>
          <Intro>
            <Logo src="https://ipfs.near.social/ipfs/bafkreid3x32vup7bsck5fmaevioli2zum5xd2bro5oa3pyyb4do3mo6uxa" />
            <div>
              <Title>
                Contango
                <Status>
                  <b className="dot"></b>Live Now
                </Status>
              </Title>
              <Desc>
                Contango is becoming the new layer for all-things looping, from Pendle’s PTs to popular LRTs assets.
              </Desc>
            </div>
          </Intro>
          <SocialGroup>
            <SocialButton
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M7.1428 5.08177L11.6108 0H10.5524L6.6712 4.41152L3.5736 0H0L4.6852 6.67164L0 12H1.0584L5.1544 7.34028L8.4264 12H12M1.4404 0.780949H3.0664L10.5516 11.2574H8.9252"
                    fill="#fff"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_4989_162"
                      x1="6"
                      y1="0"
                      x2="6"
                      y2="13.2381"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#979ABE" />
                      <stop offset="1" stopColor="#979ABE" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                </svg>
              }
              alt="Twitter"
              url="https://twitter.com/DapDapMeUp"
            />
            <SocialButton
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 10" fill="none">
                  <path
                    d="M8 0.491013C4.81493 0.491013 2.58063 1.69243 2.58063 1.69243C3.80475 0.731297 5.94397 0.177601 5.94397 0.177601L5.74193 0C3.73344 0.0313412 1.9151 1.25365 1.9151 1.25365C-0.129049 5.00415 0.00168121 8.24275 0.00168121 8.24275C1.66552 10.1337 4.13751 9.99786 4.13751 9.99786L4.98132 9.05762C3.49575 8.77555 2.55686 7.61592 2.55686 7.61592C2.55686 7.61592 4.79116 8.95315 8 8.95315C11.2088 8.95315 13.4431 7.61592 13.4431 7.61592C13.4431 7.61592 12.5043 8.77555 11.0187 9.05762L11.8625 9.99786C11.8625 9.99786 14.3345 10.1337 15.9983 8.24275C15.9983 8.24275 16.129 5.00415 14.0849 1.25365C14.0849 1.25365 12.2666 0.0313412 10.2581 0L10.056 0.177601C10.056 0.177601 12.1953 0.731297 13.4194 1.69243C13.4194 1.69243 11.1851 0.491013 8 0.491013ZM5.53989 4.45046C6.31239 4.45046 6.94227 5.04594 6.93039 5.77724C6.93039 6.49809 6.31239 7.10402 5.53989 7.10402C4.77928 7.10402 4.16128 6.49809 4.16128 5.77724C4.16128 5.04594 4.76739 4.45046 5.53989 4.45046ZM10.4958 4.45046C11.2683 4.45046 11.8863 5.04594 11.8863 5.77724C11.8863 6.49809 11.2683 7.10402 10.4958 7.10402C9.73515 7.10402 9.11715 6.49809 9.11715 5.77724C9.11715 5.04594 9.72326 4.45046 10.4958 4.45046Z"
                    fill="#fff"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_4989_163"
                      x1="8"
                      y1="0"
                      x2="8"
                      y2="11.0317"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#979ABE" />
                      <stop offset="1" stopColor="#979ABE" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                </svg>
              }
              alt="Discord"
              url="https://discord.gg/x5USArxKVH"
            />
            <SocialButton
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 12" fill="none">
                  <path
                    d="M5.643 11.274L5.87603 7.91777L12.2677 2.42717C12.5506 2.1812 12.2094 2.06219 11.8349 2.27642L3.94523 7.02912L0.533028 5.99764C-0.199346 5.79929 -0.207669 5.31529 0.699476 4.96617L13.9904 0.0785899C14.5979 -0.183245 15.1805 0.221409 14.9475 1.11006L12.6838 11.274C12.5257 11.996 12.0679 12.1706 11.4354 11.8374L7.98993 9.40943L6.33376 10.9408C6.14235 11.1233 5.98422 11.274 5.643 11.274Z"
                    fill="#fff"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_4989_164"
                      x1="7.5"
                      y1="0"
                      x2="7.5"
                      y2="13.2381"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#979ABE" />
                      <stop offset="1" stopColor="#979ABE" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                </svg>
              }
              alt="Tg"
              url="https://t.me/DapDapDiscussion"
            />
          </SocialGroup>
        </BannerBody>
      </Banner>
      <Content>
        <Main>
          <TimerTitle>End in</TimerTitle>
          <TimerWrap>
            <Timer color="white" endTime={Number(1719836235)} />
          </TimerWrap>
          <Tabs
            tabData={tabData}
            current={currentTab}
            onTabsChange={onTabsChange}
            style={{ marginTop: 4, borderBottom: '1px solid #262836', padding: 0 }}
          ></Tabs>
          {currentTab === 'ProjectDetails' && (
            <TabBody>
              <ProjectDetail />
            </TabBody>
          )}
          {currentTab === 'SaleDetails' && (
            <TabBody>
              <SaleDetail />
            </TabBody>
          )}
          {currentTab === 'Trades' && (
            <TabBody>
              <TradesDetail />
            </TabBody>
          )}
        </Main>
        <Sider></Sider>
      </Content>
    </div>
  );
}
