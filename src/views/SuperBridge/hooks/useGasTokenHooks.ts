import { useEffect, useState, useRef } from "react";
import Big from 'big.js'
import { ethers, Contract, providers, utils } from "ethers";
import { approve, SuperBridgeStore } from 'super-bridge-sdk'

import type { Signer } from 'ethers'
import { balanceFormated, percentFormated, addressFormated, errorFormated } from '@/utils/balance'
import useToast from '@/hooks/useToast';
import { abi } from '../ChainTokenAmount/abi'

import type { Chain, Token } from "@/types";

let gloabalSbs: SuperBridgeStore
async function initDb() {
    const sbs = new SuperBridgeStore('dapdap-v2', 'gas')
    await sbs.init()
    gloabalSbs = sbs
    return sbs
}

async function getDb(): Promise<SuperBridgeStore> {
    if (!gloabalSbs) {
        return initDb()
    }

    return gloabalSbs
}

if (typeof window !== 'undefined') {
    initDb()
}

export async function saveTransaction(item: any) {
    const sbs = await getDb()
    await sbs.update(item)
}

export async function getTransaction() {
    const sbs = await getDb()
    const list: any = await sbs.readAll()

    if (!list) {
        return []
    }

    return list
}

const contracts: any = {
    // testnet
    11155111: '0xa8faD25d4352470dD03681aE697800069326f27b',
    421614: '0xa8faD25d4352470dD03681aE697800069326f27b',
    43113: '0x2D04a0885df6cdcAE24453eCCd07122a52534763',
    84532: '0x993F6B0F74D392ebE2388CC963c73e89Cf39c139',
    168587773: '0x5f2bDd7328f5C198ae6aD4210E731B2D0254AB04',
    97: '0x2D04a0885df6cdcAE24453eCCd07122a52534763',
    10200: '0x2D04a0885df6cdcAE24453eCCd07122a52534763',
    59141: '0xa8faD25d4352470dD03681aE697800069326f27b',
    3441006: '0x2D04a0885df6cdcAE24453eCCd07122a52534763',
    5003: '0x2D04a0885df6cdcAE24453eCCd07122a52534763',
    59902: '0x2D04a0885df6cdcAE24453eCCd07122a52534763',
    919: '0x2D04a0885df6cdcAE24453eCCd07122a52534763',
    11155420: '0x5f2bDd7328f5C198ae6aD4210E731B2D0254AB04',
    80002: '0x2D04a0885df6cdcAE24453eCCd07122a52534763',
    2442: '0x5f2bDd7328f5C198ae6aD4210E731B2D0254AB04',
    534351: '0x2D04a0885df6cdcAE24453eCCd07122a52534763',
    300: '0xF0b5701e97b2D01DB22AAeB4b36064d280bC5123',

    // mainnet
    1: '0x5375cc796e47b608b7788ae319208528c023e7ce',
    42161: '0x5375cC796E47B608b7788ae319208528c023E7CE',
    43114: '0xdb4d106632B315d75920F0f79f6e61a824F0ce25',
    8453: '0x5375cC796E47B608b7788ae319208528c023E7CE',
    81457: '0x3037F9744Af923Bd662Bb06A77688A23f96Bf608',

}

// const contractAddress = '0xa8faD25d4352470dD03681aE697800069326f27b'

interface GasTokenParams {
    fromChain: Chain | undefined;
    toChain: Chain | undefined;
    fromToken: Token | undefined;
}

const BASE_URL = 'https://refueler.dapdap.net/api/v1/refuel'

let supportedChains: any = null

async function getAllSupportedChains(fromChain: Chain, toChain: Chain | null) {
    if (!supportedChains) {
        const res = await fetch(`${BASE_URL}/supportedChains`).then(res => res.json())
        if (res && res.data) {
            supportedChains = res.data
        }
    }

    let hasFrom, hasTo
    if (fromChain) {
        hasFrom = supportedChains
            .supported_src_chains?.filter((item: any) => Number(item.chain_id) === fromChain.chainId)
    }

    if (toChain) {
        hasTo = supportedChains
            .supported_dst_chains?.filter((item: any) => Number(item.chain_id) === toChain.chainId)
    }

    return {
        hasFrom,
        hasTo
    }
}

async function getSupportedToken(fromChain: any, fromToken: Token) {
    if (fromToken.isNative) {
        return Promise.resolve(true)
    }
    const res = await fetch(`${BASE_URL}/${fromChain.chain_name}/${fromChain.chain_id}/supportedSourceTokens`).then(res => res.json())
    const tokens = res.data.tokens
    return tokens.some((item: any) => item.token_address === fromToken.address)
}

async function getTokenReceived(fromChain: any, toChain: any, fromToken: Token, amount: any) {
    const res = await fetch(`${BASE_URL}/estimateExpectedReceived`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            amount: parseInt(amount).toString(),
            amount_decimal: fromToken.decimals,
            dest_chain_id: toChain.chain_id,
            dest_chain_name: toChain.chain_name,
            src_chain_name: fromChain.chain_name,
            token_address: fromToken.address
        }),
    }).then(res => res.json())

    if (res.returnCode !== 20000) {
        return 0
    }

    return res.data.expected_received
}

export function useGasTokenHooks({
    fromChain,
    toChain,
    fromToken,
}: GasTokenParams) {
    const [isSupported, setIsSupported] = useState(false)
    const [supportedChainFrom, setSupportedChainFrom] = useState<any>()

    useEffect(() => {
        if (fromChain && toChain && fromToken) {
            getAllSupportedChains(fromChain, toChain).then(({ hasFrom, hasTo }: any) => {
                if (hasFrom?.length && hasTo?.length) {
                    getSupportedToken(hasFrom[0], fromToken)
                        .then(res => {
                            setIsSupported(res)
                            setSupportedChainFrom(hasFrom[0])
                        })
                } else {
                    setIsSupported(false)
                    setSupportedChainFrom(null)
                }
            })
        } else {
            setIsSupported(false)
            setSupportedChainFrom(null)
        }

    }, [fromChain, toChain, fromToken])

    const getStatus = async (chainFrom: any, hash: string) => {
        const res = fetch(`${BASE_URL}/${chainFrom.chain_name}/${chainFrom.chain_id}/${hash}/sendGasStatus`).then(res => res.json())
    }

    return {
        isSupported,
        supportedChainFrom,
        getStatus
    }
}

interface GasAmountParams {
    fromChain: Chain | undefined;
    fromToken: Token | undefined;
    toChain: Chain | undefined;
    value: string | number;
}

export function useGasAmount({
    fromChain,
    toChain,
    fromToken,
    value,
}: GasAmountParams) {
    const [receive, setReceive] = useState('0')
    const [isLoading, setIsLoading] = useState(false)
    const { fail, success } = useToast()

    const contractAddress = fromChain ? contracts[Number(fromChain?.chainId)] : ''

    async function deposit(tokenAddress: string, account: string, value: string, signer: Signer) {
        if (isLoading) {
            return
        }
        setIsLoading(true)

        try {
            let hash
            if (fromToken?.isNative) {
                const transaction = await depositEth(account, value, signer)
                hash = transaction.transactionHash
            } else {
                const transaction = await depositToken(tokenAddress, account, value, signer)
                hash = transaction.transactionHash
            }

            if (!hash) {
                fail({
                    title: 'Transaction failed',
                })
                setIsLoading(false)
                return
            }

            await saveTransaction({
                hash,
                status: 3,
                fromChainName: fromChain?.chainName,
                fromChainId: fromChain?.chainId,
                fromChainIcon: fromChain?.icon,
                fromAddress: account,
                toChainName: toChain?.chainName,
                toChainId: toChain?.chainId,
                toChainIcon: toChain?.icon,
                toAddress: account,
                fromTokenSymbol: fromToken?.symbol,
                fromTokenIcon: fromToken?.icon,
                amount: new Big(value).div(10 ** fromToken!.decimals).toString(),
                time: Date.now()
            })

            success({
                title: 'Transaction success',
                text: '',
            })

            setIsLoading(false)

            return hash
        } catch (err) {
            fail({
                title: 'Transaction failed',
                text: errorFormated(err),
            })

            setIsLoading(false)
        }
    }



    async function depositEth(account: string, value: string, signer: Signer) {
        const tokenContract = new Contract(
            contractAddress,
            abi,
            signer,
        )

        const v = await tokenContract.depositEth(toChain?.chainId, account, {
            value
        })

        return v.wait()
    }

    async function depositToken(tokenAddress: string, account: string, value: string, signer: Signer) {

        const _value = parseInt(value).toString()
        await approve(tokenAddress, new Big(_value), contractAddress, signer)

        const tokenContract = new Contract(
            contractAddress,
            abi,
            signer,
        )

        const v = await tokenContract.depositToken(
            tokenAddress,
            _value,
            account,
            toChain?.chainId,
        )

        return v.wait()
    }

    useEffect(() => {
        if (!fromChain || !toChain || !fromToken || isNaN(Number(value)) || Number(value) <= 0) {
            setReceive('0')
            return
        }

        getAllSupportedChains(fromChain, toChain).then(({ hasFrom, hasTo }: any) => {
            const _fromChain = hasFrom[0]
            const _toChain = hasTo[0]
            const _value = new Big(value).mul(10 ** fromToken.decimals)
            getTokenReceived(_fromChain, _toChain, fromToken, _value).then(res => {
                setReceive(new Big(res).div(10 ** toChain.nativeCurrency.decimals).toString())
            })
        })
    }, [fromChain, toChain, fromToken, value])

    return {
        receive,
        isLoading,
        deposit,
    }
}

export function useTransction() {
    const [transactionList, setTransactionList] = useState<any[]>([])

    useEffect(() => {
        refreshTransaction()
        const inter = setInterval(() => {
            refreshTransaction()
        }, 30000)

        return () => {
            clearInterval(inter)
        }
    }, [])

    async function refreshTransaction() {
        getTransaction().then(res => {
            if (res && Array.isArray(res)) {
                res.forEach(async item => {
                    if (item.status === 3) {
                        const isComplete = await getStatus({ chainId: item.fromChainId }, item.hash)
                        if (isComplete) {
                            item.status = 2
                            saveTransaction(item)
                        }
                    }
                })
            }
            setTransactionList(res || [])
        })
    }

    const getStatus = async (chainFrom: any, hash: string) => {
        const { hasFrom } = await getAllSupportedChains(chainFrom, null)
        if (hasFrom && hasFrom.length) {
            const res = await fetch(`${BASE_URL}/${hasFrom[0].chain_name}/${hasFrom[0].chain_id}/${hash}/sendGasStatus`).then(res => res.json())
            if (res.returnCode === 20000 && res.data.status !== 'processing') {
                return true
            }
        }
        return false
    }

    return {
        transactionList,
        refreshTransaction
    }
}