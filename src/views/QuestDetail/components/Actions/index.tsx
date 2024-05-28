import { memo, useMemo, useState } from 'react';

import Loading from '@/components/Icons/Loading';
import useRewardsClaim from '@/hooks/useRewardsClaim';
import ProcessBar from '@/views/Quest/components/ProcessBar';
import Timer from '@/views/Quest/components/Timer';
import useAuthConfig from '@/views/QuestProfile/hooks/useAuthConfig';

import ActionItem from './Item';
import {
  StyledButton,
  StyledCoin,
  StyledContainer,
  StyledHeader,
  StyledLabel,
  StyledProcessBars,
  StyledTimerBox,
  StyledAward,
} from './styles';

const Actions = ({
  actions,
  endTime,
  startTime,
  rewards,
  completed,
  id,
  userInfo,
  isLive,
  isBitGetUser,
  isCoin98User,
  claimed,
  onSuccess,
  onClaimed,
  onBindSuccess,
}: {
  actions: any;
  startTime: number;
  endTime: number;
  rewards: number;
  completed: number;
  id: string;
  userInfo: any;
  isLive: boolean;
  isBitGetUser: boolean;
  isCoin98User: boolean;
  claimed: boolean;
  onSuccess: VoidFunction;
  onClaimed: VoidFunction;
  onBindSuccess: VoidFunction;
}) => {
  const [claimedSuccess, setClaimedSuccess] = useState(false);
  const { loading, handleClaim } = useRewardsClaim(() => {
    setClaimedSuccess(true);
    onClaimed();
  });
  const [cbCompleted, setCbCompleted] = useState(0);
  const completedCount = useMemo(() => completed + cbCompleted, [completed, cbCompleted]);
  const config = useAuthConfig();
  // const isBitGetUser = useMemo(() => (userInfo.source === 'bitget' || userInfo.source === 'bitget_wallet'), [userInfo])
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledLabel>Actions</StyledLabel>
        <StyledTimerBox>
          {startTime > Date.now() && <div>Upcoming</div>}
          {startTime > Date.now() ? <Timer endTime={Number(startTime)} /> : <Timer endTime={Number(endTime)} />}{' '}
        </StyledTimerBox>
      </StyledHeader>
      {actions.map((action: any, i: number) => (
        <ActionItem
          key={action.id}
          action={action}
          completed={action.status === 'completed'}
          userInfo={userInfo}
          onSuccess={(type) => {
            if (type !== 1) setCbCompleted((prev) => prev + 1);
            if (type === 1) {
              onBindSuccess();
            } else {
              onSuccess();
            }
          }}
          config={config}
          isLive={isLive}
          id={id}
          bp="1001511-001"
        />
      ))}
      <StyledLabel style={{ marginTop: '30px' }}>Your process</StyledLabel>
      <StyledProcessBars>
        {actions.map((action: any, i: number) => (
          <ProcessBar size={4} value={i < completedCount ? 100 : 0} noBorder={true} key={action.id} />
        ))}
      </StyledProcessBars>
      <StyledButton
        disabled={completedCount < actions.length || loading || claimed || claimedSuccess}
        onClick={() => {
          handleClaim(id);
        }}
        data-bp="1001511-002"
      >
        {loading && <Loading mr="5px" />}
        {claimed ? (
          <>
            {' '}
            <span>You&apos;ve got</span>
            <StyledCoin $size={20} />
            <span>{rewards + (isBitGetUser || isCoin98User ? Number(rewards * 0.1) : 0)} PTS</span>
          </>
        ) : (
          <>
            <span>Claim</span>
            <StyledCoin $size={20} />
            <span>{rewards + (completedCount === actions.length && (isBitGetUser || isCoin98User) ? Number(rewards * 0.1) : 0)} PTS</span>
          </>
        )}
      </StyledButton>
      {isBitGetUser && (
        <StyledAward>
          💡 You will get an extra 10% - <span>{Number(rewards * 0.1).toFixed(0)} PTS</span> as a Bitget user.
        </StyledAward>
      )}
      {isCoin98User && (
        <StyledAward>
          💡 You will get an extra 10% - <span>{Number(rewards * 0.1).toFixed(0)} PTS</span> as a Coin98 user.
        </StyledAward>
      )}
    </StyledContainer>
  );
};

export default memo(Actions);
