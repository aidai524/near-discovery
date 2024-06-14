import styled from 'styled-components';
import { Score } from './SubTitle';
import RewardIcons from '../../RewardIcons';

const Wrapper = styled.div`
  color: #00ffd1;
  font-family: '5squared pixel';
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  text-transform: capitalize;
  display: flex;
  align-items: center;
`;

const Texts = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
`;
const Box = styled.div`
  position: relative;
  z-index: 1;
  &.animation {
    display: flex;
    gap: 20px;
  }
  &.left {
    animation: 10s linear 0s infinite running home-bg-slidout;
  }

  @keyframes home-bg-slidout {
    0% {
      transform: translateX(0%);
    }

    100% {
      transform: translateX(-50%);
    }
  }
`;

export default function Rewards({ rewards = {} }: any) {
  return (
    <Score>
      <Wrapper>
        <div
          style={{
            flexShrink: 0,
            paddingLeft: 20,
            paddingRight: 6,
            background: '#000',
            position: 'relative',
            zIndex: 2,
          }}
        >
          you win:
        </div>
        {!!Object.entries(rewards).length ? (
          <Box className="animation left">
            {[1, 2].map((item) => (
              <Texts key={item}>
                {Object.entries(rewards).map(([key, value]) => (
                  <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                    <img src={RewardIcons[key]?.icon} style={{ width: 26, height: 26, marginTop: '3px' }} />
                    <div>
                      {value} {RewardIcons[key]?.label}
                    </div>
                  </div>
                ))}
              </Texts>
            ))}
          </Box>
        ) : (
          <div style={{ paddingLeft: 20 }}>Participate now to win big prizes!</div>
        )}
      </Wrapper>
    </Score>
  );
}
