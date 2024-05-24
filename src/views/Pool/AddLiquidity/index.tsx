import { memo, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Loading from '@/components/Icons/Loading';
import Header from './components/Header';
import SelectPair from './components/SelectPair';
import SelectFee from './components/SelectFee';
import PoolNoExsitHints from './components/PoolNoExsitHints';
import SelectPriceRange from './components/SelectPriceRange';
import Chart from './components/Chart';
import DepositAmounts from '../components/DepositAmounts';
import AddButton from '@/views/Pool/IncreaseLiquidity/components/Button';
import Setting from '../components/Setting';
import OutRangeHints from './components/OutRangeHints';
import PoolHints from './components/PoolHints';
import StartingPrice from './components/StartingPrice';
import Empty from './components/Empty';
import SelectTokens from './components/SelectTokens';
import PreviewModal from './components/PreviewModal';
import useData from './hooks/useData';
import useDappConfig from '../hooks/useDappConfig';
import useIncrease from '@/views/Pool/IncreaseLiquidity/hooks/useIncrease';
import { StyledContainer, StyledContent, LoadingWrapper } from './styles';

const Add = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [showSelectTokens, setShowSelectTokens] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [selectedToken, setSelectedToken] = useState<any>({});
  const [errorTips, setErrorTips] = useState('');
  const { theme = {} } = useDappConfig();
  const router = useRouter();
  const inputType = useRef<0 | 1>(0);

  const {
    token0,
    token1,
    value0,
    value1,
    noPair,
    fee,
    loading,
    currentPrice,
    lowerPrice,
    upperPrice,
    reverse,
    rangeType,
    onSelectToken,
    onCleanAll,
    onSelectFee,
    onExchangeTokens,
    onPriceChange,
    onPointChange,
    setValue0,
    setValue1,
    setCurrentPrice,
  } = useData();

  const { loading: adding, onIncrease } = useIncrease({
    token0,
    token1,
    value0,
    value1,
    fee,
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
    <StyledContainer style={{ ...theme }}>
      <Header setShowSettings={setShowSettings} onCleanAll={onCleanAll} />
      <StyledContent>
        <SelectPair
          token0={token0}
          token1={token1}
          onSelectToken={(type: 0 | 1) => {
            inputType.current = type;
            setShowSelectTokens(true);
          }}
        />
        <SelectFee fee={fee} disabled={!token0 || !token1} onSelectFee={onSelectFee} />
        {loading ? (
          <LoadingWrapper>
            <Loading size={40} />
          </LoadingWrapper>
        ) : (
          <>
            {noPair && token0 && token1 && <PoolNoExsitHints />}
            <SelectPriceRange
              lowerPrice={lowerPrice}
              upperPrice={upperPrice}
              token0={token0}
              token1={token1}
              reverse={reverse}
              noPair={noPair}
              rangeType={rangeType}
              onExchangeTokens={() => {
                onExchangeTokens();
              }}
              onPointChange={onPointChange}
              onPriceChange={onPriceChange}
            />
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
            {currentPrice && token0 && token1 && fee ? (
              <Chart
                currentPrice={currentPrice}
                fee={fee}
                lowerPrice={lowerPrice}
                highPrice={upperPrice === '∞' ? 2 ** 96 : upperPrice}
                token0={token0}
                token1={token1}
                onPriceChange={onPriceChange}
              />
            ) : (
              <Empty />
            )}
          </>
        )}
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
        />
        <PreviewModal
          open={showPreviewModal}
          rangeType={rangeType}
          fee={fee}
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
    </StyledContainer>
  );
};

export default memo(Add);
