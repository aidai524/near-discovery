import styled from 'styled-components';
import type { QuoteRequest, QuoteResponse, ExecuteRequest } from 'super-bridge-sdk'

import { useDebounce } from 'ahooks';
import useAccount from '@/hooks/useAccount';
import { usePriceStore } from '@/stores/price';
import { balanceFormated, percentFormated, addressFormated } from '@/utils/balance';
import Loading from '@/components/Icons/Loading';
import { useGasAmount } from '../hooks/useGasTokenHooks';
import SubmitBtn from '../SubmitBtn';

import Modal from "../Modal";
import type { Chain, Token } from '@/types';
import { useCallback, useEffect, useState } from 'react';
import Big from 'big.js';


const Tip = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 19.2px;
    color: rgba(255, 255, 255, 1);
    margin-top: 20px;
`

const RefuelAmount = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    .refuel-title {

    }
    .transter-detail {
        display: flex;
        align-items: center;
        gap: 20px;
    }
`

const Range = styled.input<{ max: any, value: any }>`
    width: 100%;
    -webkit-appearance: none; /* 去掉底部的 track 默认样式，就是整个灰条 */
    background: transparent; 
    &::-webkit-slider-thumb {
        /* -webkit-appearance: none; */
    }
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: 2px solid #000000;
        height: 16px;
        width: 16px;
        border-radius: 16px;
        background: rgba(235, 244, 121, 1);
        cursor: pointer;
        margin-top: -4px; 
    }
    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        box-shadow: none;
        background: #3071a9;
        border-radius: 8px;
        border: none;
        background: linear-gradient(to right, 
            rgba(235, 244, 121, 1) 0%, 
            rgba(235, 244, 121, 1) ${({ max, value }) => (value / max * 100) + '%'},
            #eee ${({ max, value }) => (value / max * 100) + '%'}, #eee); 
    }
    
`

const Container = styled.div<{ disabled?: boolean }>`
    height: 60px;
    line-height: 60px;
    background-color: rgba(235, 244, 121, 1);
    border-radius: 10px;
    text-align: center;
    color: rgba(55, 58, 83, 1);
    cursor: pointer;
    font-weight: 600;
    font-size: 18px;
    margin-top: 10px;
    &.disbaled {
        opacity: .3;
        cursor: default;
    }
`

const Sep = styled.div`
    height: 20px;
`

const Input = styled.input`
    width: 100px;
    height: 35px;
    background-color: rgba(27, 30, 39, 1);
    border: 1px solid rgba(55, 58, 83, 1);
    border-radius: 8px;
    color: #fff;
    padding: 0 10px;
`

interface Props {
    fromChain: Chain | undefined;
    fromToken: Token | undefined;
    toChain: Chain | undefined;
    toAddress: string;
    maxBalance: string | undefined;
    onClick: () => void;
    onClose: () => void;
}

const max$ = 500 * 3497

export default function GasModal({
    onClick, onClose, fromChain, fromToken, toAddress, toChain, maxBalance
} : Props) {
    const { account, chainId, provider } = useAccount();
    const prices = usePriceStore((store) => store.price);
    const [rangeVal, setRangeVal] = useState<string>('0')
    const [min, setMin] = useState(0)
    const [step, setStep] = useState(1)
    const [max, setMax] = useState(200)
    const [disabled, setDisabled] = useState(false)

    const inputValue = useDebounce(rangeVal, { wait: 100 });

    const { receive, deposit, isLoading } = useGasAmount({
        fromChain,
        toChain,
        fromToken,
        value: inputValue
    })

    const senGas = useCallback(async () => {
        if (fromToken) {
            const _value = new Big(inputValue).mul(10 ** fromToken?.decimals).toString()
            await deposit(fromToken.address, account as string, _value, provider?.getSigner())
            onClose()
        }
    }, [fromToken, fromChain, inputValue])

    useEffect(() => {
        if (prices && fromToken && prices[fromToken.symbol]) {
            const max = max$ / Number(prices[fromToken.symbol])
            const step = max / 200
            const min = step
            setMax(max)
            setMin(min)
            setStep(step)
        }
    }, [prices, fromToken])

    useEffect(() => {
        if (receive === '0') {
            setDisabled(true)
            return
        }

        if (!maxBalance || Number(inputValue) >= Number(maxBalance)) {
            setDisabled(true)
            return
        }

        setDisabled(false)
    }, [receive, maxBalance, inputValue])

    return <Modal title="Refuel Gas Token" onClose={() => {
        !isLoading && onClose()
    }}>
        <Tip>Transfer {fromToken?.symbol} for {toChain?.nativeCurrency.symbol} to cover gas fee on Base.</Tip>
        <RefuelAmount>
            <div>Refuel Amount:</div>
            <div className="transter-detail">
                <Input value={rangeVal} onChange={(e) => {
                    if (Number(e.target.value)> Number(max)) {
                        setRangeVal(max.toString())
                    } else {
                        setRangeVal(e.target.value)
                    }
                    
                }} />{fromToken?.symbol}
                {/* <div>{balanceFormated(rangeVal)} {fromToken?.symbol}</div> */}
                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 4.13397C8.16667 4.51887 8.16667 5.48113 7.5 5.86603L1.5 9.33013C0.833334 9.71503 -4.47338e-07 9.2339 -4.13689e-07 8.4641L-1.10848e-07 1.5359C-7.71986e-08 0.766098 0.833333 0.284973 1.5 0.669873L7.5 4.13397Z" fill="#979ABE"/>
                    </svg>
                <div>{balanceFormated(receive)} {toChain?.nativeCurrency.symbol}</div>
            </div>
        </RefuelAmount>

        <Sep />
        
        <Range
            type='range'
            onChange={(e: any) => {
                setRangeVal(e.target.value)
            }}
            min={min}
            max={max}
            step={step}
            value={rangeVal}
            className='custom-slider'
        />

        <Sep />

        <SubmitBtn
            isLoading={isLoading}
            disabled={disabled}
            text="Confirm"
            fromChain={fromChain as Chain}
            onClick={senGas}
            defaultText="Confirm"
        />
        
    </Modal>
}