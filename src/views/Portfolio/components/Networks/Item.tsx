import Big from 'big.js';
import { memo, useMemo } from 'react';

import { formateValueWithThousandSeparator } from '@/utils/formate';

import {
  StyledItemContent,
  StyledItemIcon,
  StyledItemName,
  StyledItemNum,
  StyledItemUSD,
  StyledTabItem,
} from './styles';
import Image from 'next/image';
import { NetworkItem } from '@/views/Portfolio/hooks/useTokens';
import { SupportedChains } from '@/views/Portfolio/config';

const Item = (props: { chain: NetworkItem, totalBalance?: Big.Big, network: number, setNetwork: any }) => {
  const { chain, totalBalance, network, setNetwork } = props;

  const isSupported = SupportedChains.some((it) => it.chainId === chain.id);

  const percentage = useMemo(() => {
    if (!totalBalance || !chain.usd || Big(totalBalance).eq(0)) return '0';
    return new Big(chain.usd).div(totalBalance).mul(100).toFixed(2);
  }, [totalBalance, chain.usd]);

  const disabled = Big(chain.usd).lte(0);

  return (
    <StyledTabItem
      className={`${network === chain.id ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
      onClick={() => {
        if (disabled) return;
        setNetwork(chain.id);
      }}
    >
      <StyledItemIcon className="item-icon">
        <Image src={chain.icon} alt="" width={36} height={36} />
      </StyledItemIcon>
      <StyledItemContent>
        <StyledItemName title={chain.name}>{chain.name}</StyledItemName>
        <StyledItemNum $blur={!isSupported}>
          <StyledItemUSD>${formateValueWithThousandSeparator(chain.usd, 2)}</StyledItemUSD>
          {percentage && isSupported && <StyledItemName>{percentage}%</StyledItemName>}
        </StyledItemNum>
      </StyledItemContent>
    </StyledTabItem>
  );
};

export default memo(Item);
