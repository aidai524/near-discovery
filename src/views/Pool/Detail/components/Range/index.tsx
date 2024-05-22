import styled from 'styled-components';
import PriceRange from '@/views/Pool/components/PriceRange';
import { memo, useMemo } from 'react';
import { tickToPrice } from '@/views/Pool/utils/tickMath';

const StyledContainer = styled.div``;

const Range = ({ token0, token1, tickLower, tickUpper, currentTick, from }: any) => {
  const lowerPrice = useMemo(
    () =>
      tickToPrice({
        tick: tickLower,
        token0,
        token1,
      }),
    [tickLower],
  );
  const upperPrice = useMemo(
    () =>
      tickToPrice({
        tick: tickUpper,
        token0,
        token1,
      }),
    [tickLower],
  );
  const currentPrice = useMemo(
    () =>
      tickToPrice({
        tick: currentTick,
        token0,
        token1,
      }),
    [tickLower],
  );
  return (
    <StyledContainer>
      <PriceRange
        from={from}
        token0={token0}
        token1={token1}
        lowerPrice={lowerPrice}
        upperPrice={upperPrice}
        currentPrice={currentPrice}
      />
    </StyledContainer>
  );
};

export default memo(Range);
