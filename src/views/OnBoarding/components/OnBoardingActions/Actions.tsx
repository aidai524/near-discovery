import { memo, useState } from 'react';

import useAccount from '@/hooks/useAccount';
import useConnectWallet from '@/hooks/useConnectWallet';

import useTradeSummary from '../../hooks/useTradeSummary';
import ActionColorBg from './ActionColorBg';
import {
  StyledAction,
  StyledActionBg,
  StyledActionButton,
  StyledActionColorBg,
  StyledActionContent,
  StyledActionDesc,
  StyledActions,
  StyledActionSubTitle,
  StyledActionTitle,
} from './styles';

const ACTIONS = [
  {
    label: 'Bridge',
    text: (
      <span>
        Bridge <span className="gray">0.01</span> ETH to{' '}
      </span>
    ),
    key: 'bridge',
  },
  {
    label: 'Swap',
    text: (
      <span>
        Swap <span className="gray">0.01</span> ETH to USDC
      </span>
    ),
    key: 'swap',
  },
  {
    label: 'Lend',
    text: (
      <span>
        Supply <span className="gray">10</span> USDC
      </span>
    ),
    key: 'lending',
  },
  {
    label: 'Liquidity',
    text: (
      <span>
        Deposit <span className="gray">0.01</span> WETH-USDC
      </span>
    ),
    key: 'liquidity',
  },
];

const Actions = ({ bgColor, openModal, chainName, chainId }: any) => {
  const [showBg, setShowBg] = useState('');
  const { info } = useTradeSummary(chainId);
  const { account } = useAccount();
  const { onConnect } = useConnectWallet();
  return (
    <StyledActions>
      {ACTIONS.map((action: any) => (
        <StyledAction
          key={action.label}
          onMouseEnter={() => {
            setShowBg(action.label);
          }}
          onMouseLeave={() => {
            setShowBg('');
          }}
        >
          <StyledActionBg />
          {showBg === action.label && (
            <StyledActionColorBg className="action_color_bg" style={{ color: bgColor }}>
              <ActionColorBg />
            </StyledActionColorBg>
          )}
          <StyledActionContent>
            <StyledActionTitle>{action.label}</StyledActionTitle>
            <StyledActionSubTitle>
              {action.text}
              {action.key === 'bridge' && chainName}
            </StyledActionSubTitle>
            <StyledActionDesc>Total Execution {info?.[action.label]?.total_execution}</StyledActionDesc>
            {account ? (
              <StyledActionButton
                onClick={() => {
                  openModal(action.key);
                }}
                data-bp="100131-001"
              >
                One-Click Execution
              </StyledActionButton>
            ) : (
              <StyledActionButton
                onClick={() => {
                  onConnect();
                }}
              >
                Connect Wallet
              </StyledActionButton>
            )}
          </StyledActionContent>
        </StyledAction>
      ))}
    </StyledActions>
  );
};

export default memo(Actions);
