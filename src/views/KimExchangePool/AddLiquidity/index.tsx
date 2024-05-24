import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import useDappConfig from '@/views/Pool/hooks/useDappConfig';
import useAddLiquidityData from '../hooks/useAddLiquidityData';
import useAdd from '../hooks/useAdd';
import Header from '@/views/Pool/AddLiquidity/components/Header';
import SelectPair from './SelectPair';
import PoolNoExsitHints from '@/views/Pool/AddLiquidity/components/PoolNoExsitHints';
import SelectPriceRange from './SelectPriceRange';
import OutRangeHints from '@/views/Pool/AddLiquidity/components/OutRangeHints';
import PoolHints from '@/views/Pool/AddLiquidity/components/PoolHints';
import StartingPrice from '@/views/Pool/AddLiquidity/components/StartingPrice';
import Chart from './Chart';
import Empty from '@/views/Pool/AddLiquidity/components/Empty';
import SelectTokens from './SelectTokens';
import PreviewModal from '@/views/Pool/AddLiquidity/components/PreviewModal';
import Setting from '@/views/Pool/components/Setting';
import DepositAmounts from './DepositAmounts';
import Loading from '@/components/Icons/Loading';
import AddButton from '@/views/Pool/IncreaseLiquidity/components/Button';
import { balanceFormated } from '@/utils/balance';
import {
  StyledContainer,
  StyledLoadingWrapper,
  StyledContent,
  StyledCurrentPrice,
  StyledLabels,
  StyledLabel,
} from './styles';

const AddLiquidity = () => {
  const { theme = {} } = useDappConfig();
  const [showSettings, setShowSettings] = useState(false);
  const [showSelectTokens, setShowSelectTokens] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [selectedToken, setSelectedToken] = useState<any>({});
  const inputType = useRef<0 | 1>(0);
  const router = useRouter();
  const [errorTips, setErrorTips] = useState('');

  const {
    token0,
    token1,
    value0,
    value1,
    noPair,
    loading,
    currentPrice,
    lowerPrice,
    upperPrice,
    reverse,
    rangeType,
    range,
    onSelectToken,
    onCleanAll,
    onExchangeTokens,
    onPriceChange,
    onPointChange,
    setValue0,
    setValue1,
    setCurrentPrice,
    setRange,
  } = useAddLiquidityData();

  const { loading: adding, onIncrease } = useAdd({
    token0,
    token1,
    value0,
    value1,
    noPair,
    currentPrice,
    lowerPrice,
    upperPrice,
    onSuccess: () => {
      setShowPreviewModal(false);
      router.push(`/dapp/${router.query.dappRoute}`);
    },
  });

  return (
    <StyledContainer style={{ ...theme, width: '1078px' }}>
      <Header setShowSettings={setShowSettings} onCleanAll={onCleanAll} isAlign={false} />
      <StyledContent>
        <div style={{ width: '50%' }}>
          <SelectPair
            token0={token0}
            token1={token1}
            onSelectToken={(type: 0 | 1) => {
              inputType.current = type;
              setShowSelectTokens(true);
            }}
          />
          <StyledCurrentPrice>
            <div>Current Price</div>
            <div>
              {balanceFormated(currentPrice, 5)} {token1.symbol} per {token0.symbol}
            </div>
          </StyledCurrentPrice>
          <DepositAmounts
            label="Deposit amounts"
            token0={token0}
            token1={token1}
            value0={value0}
            value1={value1}
            setValue0={setValue0}
            setValue1={setValue1}
            rangeType={rangeType}
            upperPrice={upperPrice}
            lowerPrice={lowerPrice}
            currentPrice={currentPrice}
            onError={(tips: string) => {
              setErrorTips(tips);
            }}
          />
        </div>
        <div style={{ width: '50%' }}>
          {loading ? (
            <StyledLoadingWrapper>
              <Loading size={40} />
            </StyledLoadingWrapper>
          ) : (
            <>
              {noPair && token0 && token1 && <PoolNoExsitHints />}{' '}
              {[1, 2].includes(rangeType) && !noPair && <OutRangeHints type={rangeType} />}
              {noPair && token0 && token1 && <PoolHints />}
              {noPair && (
                <StartingPrice
                  token0={token0}
                  token1={token1}
                  price={currentPrice}
                  setPrice={(_price: any) => {
                    setCurrentPrice(_price);
                    setValue0('');
                    setValue1('');
                  }}
                />
              )}
              {currentPrice && token0 && token1 ? (
                <Chart
                  currentPrice={currentPrice}
                  fee={3000}
                  lowerPrice={lowerPrice}
                  highPrice={upperPrice === '∞' ? 2 ** 96 : upperPrice}
                  token0={token0}
                  token1={token1}
                  reverse={reverse}
                  onPriceChange={onPriceChange}
                  onExchangeTokens={() => {
                    onExchangeTokens();
                  }}
                />
              ) : (
                <Empty />
              )}
              <StyledLabels>
                {['Narrow', 'Common', 'Wide', 'Full'].map((label) => (
                  <StyledLabel
                    key={label}
                    $active={range === label}
                    onClick={() => {
                      setRange(label);
                    }}
                  >
                    {label}
                  </StyledLabel>
                ))}
              </StyledLabels>
              <SelectPriceRange
                lowerPrice={lowerPrice}
                upperPrice={upperPrice}
                token0={token0}
                token1={token1}
                noPair={noPair}
                rangeType={rangeType}
                onPointChange={onPointChange}
                onPriceChange={onPriceChange}
              />
              <AddButton
                text="Add Liquidity"
                errorTips={errorTips}
                loading={loading}
                onClick={() => {
                  setShowPreviewModal(true);
                }}
                value0={value0}
                value1={value1}
                token0={token0}
                token1={token1}
              />
            </>
          )}{' '}
        </div>

        <Setting show={showSettings} setShow={setShowSettings} />
        <SelectTokens
          open={showSelectTokens}
          selectedToken={selectedToken}
          onClose={() => {
            setShowSelectTokens(false);
          }}
          onSelectToken={(token: any) => {
            setSelectedToken(token);
            onSelectToken(token, inputType.current);
            setShowSelectTokens(false);
          }}
          token={inputType.current === 0 ? token1 : token0}
        />
        <PreviewModal
          open={showPreviewModal}
          rangeType={rangeType}
          token0={token0}
          token1={token1}
          value0={value0}
          value1={value1}
          noPair={noPair}
          currentPrice={currentPrice}
          lowerPrice={lowerPrice}
          upperPrice={upperPrice}
          onClose={() => {
            setShowPreviewModal(false);
          }}
          loading={adding}
          onClick={onIncrease}
        />
      </StyledContent>
      <Setting show={showSettings} setShow={setShowSettings} />
    </StyledContainer>
  );
};

export default AddLiquidity;
