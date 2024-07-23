import { CaretDownIcon } from '@radix-ui/react-icons';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { forwardRef, useState } from 'react';
import styled from 'styled-components';

import { recordMouseEnter } from '@/utils/analytics';

import { Wrapper } from '../styles/nav';
import IconArrowDown from '@public/images/header/arrow-down.svg';
import IconSwap from '@public/images/header/swap.svg';
import IconBridge from '@public/images/header/bridge.svg';
import IconOdyssey from '@public/images/header/odyssey-new.svg';
import IconArrowRight from '@public/images/header/arrow-right.svg'
import Status, { StatusType } from './components/Status';
import Chains from './components/Chains';


const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px 30px;
  &:hover {
    background: rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`

const StyleImage = styled.div`
  position: relative;
  img {
    width: 100px;
    height: 60px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    border: 1px solid #333648;
    border-radius: 8px;
  }
`

const StyleNew = styled(IconOdyssey)`
  position: absolute;
  top: -4px;
  right: -9px;
  color: #000;
  font-size: 12px;
`  

const StyleText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`

const StyleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .title {
    font-weight: 600;
    font-size: 14px;
    color: #fff;
  }
`

const StyleDesc = styled.div`
  font-size: 16px;
  color: #fff;
  line-height: 1;
`

const StyleView = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  padding: 0 30px;
  width: calc(100% - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  gap: 10px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid rgba(51, 54, 72, 1);
  background: rgba(31, 34, 41, 1);
  border-radius: 12px;
  span {
    text-decoration: underline;
  }
  &:hover {
    background: rgba(24, 25, 30, 1);
  }
  &.chain-all {
    margin-top: 0;
    margin-bottom: 30px;
  }
`


interface ListItemProps {
  imgSrc: string;
  isNew: boolean;
  title: string;
  status: StatusType;
  description: string;
}

const ListItem: React.FC<ListItemProps> = ({ imgSrc, isNew, title, status, description }) => (
  <Flex>
    <StyleImage>
      {isNew && <StyleNew />}
      <img src={imgSrc} alt="" />
    </StyleImage>
    <StyleText>
      <StyleHeader>
        <div className="title">{title}</div>
        <Status status={status} />
      </StyleHeader>
      <StyleDesc>{description}</StyleDesc>
    </StyleText>
  </Flex>
);

const items = [
  { iconSrc: 'https://s3.amazonaws.com/dapdap.prod/images/group 48098858.png', label: 'Arbitrum' },
  { iconSrc: 'https://s3.amazonaws.com/dapdap.prod/images/group 48098858.png', label: 'Avalanche' },
  { iconSrc: 'https://s3.amazonaws.com/dapdap.prod/images/group 48098858.png', label: 'Base' },
  { iconSrc: 'https://s3.amazonaws.com/dapdap.prod/images/group 48098858.png', label: 'Blast' },
  { iconSrc: 'https://s3.amazonaws.com/dapdap.prod/images/group 48098858.png', label: 'BNB' },
  { iconSrc: 'https://s3.amazonaws.com/dapdap.prod/images/group 48098858.png', label: 'Gnosis' },
  { iconSrc: 'https://s3.amazonaws.com/dapdap.prod/images/group 48098858.png', label: 'Linea' },
  { iconSrc: 'https://s3.amazonaws.com/dapdap.prod/images/group 48098858.png', label: 'Manta' },
  { iconSrc: 'https://s3.amazonaws.com/dapdap.prod/images/group 48098858.png', label: 'Mantle' },
  { iconSrc: 'https://s3.amazonaws.com/dapdap.prod/images/group 48098858.png', label: 'Metis' },
  { iconSrc: 'https://s3.amazonaws.com/dapdap.prod/images/group 48098858.png', label: 'Mode' },
  { iconSrc: 'https://s3.amazonaws.com/dapdap.prod/images/group 48098858.png', label: 'Optimism' },
  { iconSrc: 'https://s3.amazonaws.com/dapdap.prod/images/group 48098858.png', label: 'Polygon' },
  { iconSrc: 'https://s3.amazonaws.com/dapdap.prod/images/group 48098858.png', label: 'Polygon zkEVM' },
  { iconSrc: 'https://s3.amazonaws.com/dapdap.prod/images/group 48098858.png', label: 'Scroll' },
  { iconSrc: 'https://s3.amazonaws.com/dapdap.prod/images/group 48098858.png', label: 'zksync' },
];

export const NavMainV2 = ({ className }: { className?: string }) => {
  return (
    <Wrapper className={className}>
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuList">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              Odyssey
              <IconOdyssey />
              <IconArrowDown />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent bridge">
              <ul className="List">
              <ListItem
                imgSrc="https://s3.amazonaws.com/dapdap.prod/images/group 48098858.png"
                isNew={true}
                title="Odyssey Vol.5"
                status={StatusType.LIVE}
                description="DapDap x Mode: The Airdrop Ascendancy"
              />
                <StyleView><div>View all</div><IconArrowRight /></StyleView>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger" onClick={recordMouseEnter}>
              <IconBridge />
              Bridge
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger" onClick={recordMouseEnter}>
              <IconSwap />
              Swap
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger" onClick={recordMouseEnter}>
              Chains
              <IconArrowDown />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent chains">
              <ul className="List chain">
                <Chains items={items}></Chains>
              </ul>
              <StyleView className='chain-all'><div>View all</div><IconArrowRight /></StyleView>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger" onClick={recordMouseEnter}>
              DApps
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </Wrapper>
  );
};
