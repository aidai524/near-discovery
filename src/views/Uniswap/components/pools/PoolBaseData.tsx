import { memo, useMemo, useState } from 'react';
import styled from 'styled-components';
import { usePriceStore } from '@/stores/price';
import Big from 'big.js';
import { balanceFormated, valueFormated } from '@/utils/balance';
import TokenIcon from '../TokenIcon';
import { getTotalValues } from '../../utils/getValues';
import NFT from '../Nft';
import ClaimFeesModal from './ClaimFeesModal';

const StyledWrap = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-top: 14px;
  width: 100%;
  gap: 16px;
  .vchb {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .hvc {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .w-full {
    width: 100%;
  }
`;
const PoolBaseData = ({
  detail,
  isReverse,
  collectData,
  onSuccess,
}: {
  detail: any;
  isReverse: boolean;
  collectData: any;
  onSuccess: () => void;
}) => {
  return (
    <StyledWrap>
      <StyledNFTWrap className="hvc">
        <NFT image={detail.tokenURI.image} height={537} />
      </StyledNFTWrap>
      <StyledLFWrap>
        <Liquidity detail={detail} isReverse={isReverse} />
        <UnclaimedFees detail={detail} isReverse={isReverse} collectData={collectData} onSuccess={onSuccess} />
      </StyledLFWrap>
    </StyledWrap>
  );
};

const StyledNFTWrap = styled.div`
  flex-shrink: 0;
  @media (max-width: 768px) {
    display: none !important;
  }
`;

const StyledLFWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  flex-grow: 1;
`;

const StyledBase = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #3d363d;
  border-radius: 24px;
  padding: 20px;
  background-color: #131313;
  width: 100%;
  gap: 16px;
  .title {
    font-size: 16px;
    color: #ffffff;
    font-weight: bold;
  }
  .value {
    font-size: 36px;
    color: #ffffff;
    font-weight: bold;
  }
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 16px;
    background-color: #1b1b1b;
    padding: 18px;
    gap: 20px;
    img {
      width: 22px;
      height: 22px;
      border-radius: 100px;
      margin-right: 7px;
    }
    .symbol {
      font-size: 16px;
      font-weight: 500;
      color: #ffffff;
    }
    .balance {
      font-size: 16px;
      font-weight: 500;
      color: #ffffff;
      display: flex;
      gap: 6px;
    }
    .percent {
      color: #8e8e8e;
    }
    &.reverse {
      flex-direction: column-reverse;
    }
  }
`;
const StyledLiquidity = styled(StyledBase)``;

const Liquidity = ({ detail, isReverse }: { detail: any; isReverse: boolean }) => {
  const priceStore = usePriceStore();
  const { total } = getTotalValues({
    token0: detail.token0,
    token1: detail.token1,
    amount0: detail.liquidityToken0,
    amount1: detail.liquidityToken1,
    prices: priceStore.price,
  });

  const [percentage0, percentage1] = useMemo(() => {
    const _liquidityToken0 = new Big(detail.liquidityToken0);
    const _liquidityToken1 = new Big(detail.liquidityToken1);
    const totalAmount = _liquidityToken0.plus(_liquidityToken1);
    const _percentage0 = !totalAmount.eq(0) ? _liquidityToken0.div(totalAmount).mul(100).toFixed(2) : 0;
    const _percentage1 = !totalAmount.eq(0) ? _liquidityToken1.div(totalAmount).mul(100).toFixed(2) : 0;
    return [_percentage0, _percentage1];
  }, [detail.liquidityToken0, detail.liquidityToken1]);

  return (
    <StyledLiquidity>
      <span className="title">Liquidity</span>
      <span className="value">${valueFormated(total, '1', 4)}</span>
      <div className={`box ${!isReverse && 'reverse'}`}>
        <div className="vchb w-full">
          <div className="hvc">
            <TokenIcon token={detail.token0} />
            <span className="symbol">{detail.token0.symbol}</span>
          </div>
          <span className="balance">
            <span>{balanceFormated(detail.liquidityToken0, 4)}</span>
            <span className="percent">{percentage0}%</span>
          </span>
        </div>
        <div className="vchb w-full">
          <div className="hvc">
            <TokenIcon token={detail.token1} />
            <span className="symbol">{detail.token1.symbol}</span>
          </div>
          <span className="balance">
            <span>{balanceFormated(detail.liquidityToken1, 4)}</span>
            <span className="percent">{percentage1}%</span>
          </span>
        </div>
      </div>
    </StyledLiquidity>
  );
};
const StyledUnclaimedFees = styled(StyledBase)``;
const UnclaimedFees = ({
  detail,
  isReverse,
  collectData,
  onSuccess,
}: {
  detail: any;
  isReverse: boolean;
  collectData: any;
  onSuccess: () => void;
}) => {
  const [open, setOpen] = useState(false);
  function closeModal() {
    setOpen(false);
  }
  function openModal() {
    setOpen(true);
  }
  const priceStore = usePriceStore();
  const { total } = getTotalValues({
    token0: detail.token0,
    token1: detail.token1,
    amount0: collectData.collectToken0,
    amount1: collectData.collectToken1,
    prices: priceStore.price,
  });
  return (
    <StyledUnclaimedFees>
      <div className="vchb">
        <span className="title">Unclaimed fees</span>
        <StyledSolidWrap className="hvc" onClick={openModal}>
          Collect fees
        </StyledSolidWrap>
      </div>
      <span className="value">${balanceFormated(total, 4)}</span>
      <div className={`box ${!isReverse && 'reverse'}`}>
        <div className="vchb w-full">
          <div className="hvc">
            <TokenIcon token={detail.token0} />
            <span className="symbol">{detail.token0.symbol}</span>
          </div>
          <span className="balance">{balanceFormated(collectData.collectToken0, 4)}</span>
        </div>
        <div className="vchb w-full">
          <div className="hvc">
            <TokenIcon token={detail.token1} />
            <span className="symbol">{detail.token1.symbol}</span>
          </div>
          <span className="balance">{balanceFormated(collectData.collectToken1, 4)}</span>
        </div>
      </div>
      <ClaimFeesModal
        isOpen={open}
        onRequestClose={closeModal}
        detail={detail}
        collectData={collectData}
        onSuccess={onSuccess}
      />
    </StyledUnclaimedFees>
  );
};

const StyledSolidWrap = styled.div`
  height: 35px;
  background-color: #5ee0ff;
  border-radius: 12px;
  padding: 0 12px;
  cursor: pointer;
  color: #131313;
`;

export default memo(PoolBaseData);
