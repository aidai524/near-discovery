import FollowImg from '@public/images/others/odyssey/v1/components/Social/follow.svg?url';
import ShareImg from '@public/images/others/odyssey/v1/components/Social/share.svg?url';
import styled from 'styled-components';

import useQuestStatus from '../../hooks/useQuestStatus';
import Complete from '../Complate';
import Fresh from '../Fresh';
import Spin from '../Spin';

const Panel = styled.div`
  flex: 1;
  padding: 30px 70px;
`;

const LogoWapper = styled.div`
  position: relative;
`;

const Logo = styled.div`
  margin: 0 auto;
  width: 105px;
  height: 84px;
`;

const DescImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 34%;
`;

const MidText = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  margin-top: 50px;
`;

const ActionBtnWapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

const BtnPrimary = styled.div`
  width: 284px;
  height: 69px;
  border-radius: 12px;
  background: rgba(235, 244, 121, 1);
  color: rgba(0, 0, 0, 1);
  text-align: center;
  line-height: 69px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

const FreshWapper = styled.div`
  display: flex;
  align-items: center;
  height: 69px;
  justify-content: center;
  margin-left: 18px;
`;

const SpinWapper = styled.div`
  width: 120px;
  border-radius: 12px;
  border: 2px;
  height: 69px;
  overflow: hidden;
  margin-right: 10px;
`;

const SpinText = styled.div`
  font-size: 16px;
  font-weight: 400;
  height: 69px;
  line-height: 69px;
  text-align: center;
  color: #00ffd1;
`;

interface Props {
  icon: string;
  mark: string;
  mainText: string;
  btnText: string;
  spin: number;
  totalSpin: number;
  id: number;
  source: string;
  value: any;
  onAction?: (source?: string) => void;
  getQuestGroupList: () => void;
  getSumaryDetail: () => void;
}

export default function SocialPanel({
  icon,
  mark,
  mainText,
  btnText,
  spin,
  totalSpin,
  id,
  source,
  onAction,
  getQuestGroupList,
  getSumaryDetail,
  value,
}: Props) {
  const { isQuestSuccess, checkQuestStatus } = useQuestStatus(id);
  const showComplete = value.times === 1 && value.spins === value.total_spins;

  return (
    <Panel>
      <LogoWapper>
        <Logo>
          <img src={icon} />
          <DescImg src={mark} />
        </Logo>
      </LogoWapper>

      <MidText>{mainText}</MidText>

      <ActionBtnWapper>
        <BtnPrimary
          onClick={() => {
            onAction && onAction(source);
          }}
        >
          {btnText}
        </BtnPrimary>
        <FreshWapper>
          <SpinWapper>
            <Spin
              renderChildren={() => (
                <SpinText>
                  + {totalSpin}/{spin} SPIN
                </SpinText>
              )}
            />
          </SpinWapper>
          {showComplete ? (
            <Complete />
          ) : (
            <Fresh
              onCheck={async () => {
                await checkQuestStatus();
                getQuestGroupList();
                getSumaryDetail();
              }}
              isLoading={isQuestSuccess}
            />
          )}
        </FreshWapper>
      </ActionBtnWapper>
    </Panel>
  );
}
