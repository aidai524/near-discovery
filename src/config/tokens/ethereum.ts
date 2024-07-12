import type { Token } from '@/types';

const CHAIN_ID = 1;
export const ethereum: { [key: string]: Token } = {
  eth: {
    chainId: CHAIN_ID,
    name: 'ETH',
    symbol: 'ETH',
    icon: 'https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628',
    decimals: 18,
    isNative: true,
    address: 'native',
  },
  usdc: {
    chainId: CHAIN_ID,
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    name: 'USDC',
    symbol: 'USDC',
    icon: 'https://assets.coingecko.com/coins/images/6319/standard/usdc.png?1696506694',
    decimals: 6,
  },
  usdt: {
    chainId: CHAIN_ID,
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    name: 'Tether USD',
    symbol: 'USDT',
    icon: 'https://assets.coingecko.com/coins/images/325/standard/Tether.png?1696501661',
    decimals: 6,
  },
  usdd: {
    address: '0x0C10bF8FcB7Bf5412187A595ab97a3609160b5c6',
    chainId: CHAIN_ID,
    name: 'Decentralized USD',
    symbol: 'USDD',
    icon: 'https://assets.coingecko.com/coins/images/25380/standard/UUSD.jpg?1696524513',
    decimals: 18,
  },
  dai: {
    address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    chainId: CHAIN_ID,
    name: 'Dai Stablecoin',
    symbol: 'DAI',
    icon: 'https://assets.coingecko.com/coins/images/9956/standard/Badge_Dai.png?1696509996',
    decimals: 18,
  },
  frax: {
    address: '0x853d955aCEf822Db058eb8505911ED77F175b99e',
    chainId: CHAIN_ID,
    name: 'Frax',
    symbol: 'FRAX',
    icon: 'https://assets.coingecko.com/coins/images/13422/standard/FRAX_icon.png?1696513182',
    decimals: 18,
  },
  susd: {
    address: '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51',
    chainId: CHAIN_ID,
    name: 'Synth sUSD',
    symbol: 'sUSD',
    icon: 'https://assets.coingecko.com/coins/images/5013/standard/sUSD.png?1696505546',
    decimals: 18,
  },
  lusd: {
    address: '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0',
    chainId: CHAIN_ID,
    name: 'LUSD Stablecoin',
    symbol: 'LUSD',
    icon: 'https://ipfs.near.social/ipfs/bafkreihne6zw3myw5dwh72giml63vjjksmixrf435hf7cnsg5f3ubgdnde',
    decimals: 6,
  },
  mai: {
    address: '0x8D6CeBD76f18E1558D4DB88138e2DeFB3909fAD6',
    chainId: CHAIN_ID,
    name: 'Mai Stablecoin',
    symbol: 'MAI',
    icon: 'https://assets.coingecko.com/coins/images/15264/standard/mimatic-red.png?1696514916',
    decimals: 18,
  },
  ezETH: {
    address: '0xbf5495Efe5DB9ce00f80364C8B423567e58d2110',
    chainId: CHAIN_ID,
    symbol: 'ezETH',
    decimals: 18,
    name: 'ezETH',
    icon: 'https://static.debank.com/image/eth_token/logo_url/0xbf5495efe5db9ce00f80364c8b423567e58d2110/446998664e866e2fadceb5a96fe9f688.png',
  },
  rsETH: {
    address: '0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7',
    chainId: CHAIN_ID,
    symbol: 'rsETH',
    decimals: 18,
    name: 'rsETH',
    icon: 'https://etherscan.io/token/images/kelprseth_32.png',
  },
  stETH: {
    address: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
    chainId: CHAIN_ID,
    decimals: 18,
    name: 'Liquid staked Ether 2.0',
    symbol: 'rsETH',
    icon: '',
  },
  mETH: {
    address: '0xd5f7838f5c461feff7fe49ea5ebaf7728bb0adfa',
    chainId: CHAIN_ID,
    decimals: 18,
    name: 'mETH',
    symbol: 'mETH',
    icon: '',
  },
  rETH: {
    address: '0xae78736cd615f374d3085123a210448e74fc6393',
    chainId: CHAIN_ID,
    decimals: 18,
    name: 'Rocket Pool ETH',
    symbol: 'rETH',
    icon: '',
  },
  sfrxETH: {
    address: '0xac3e018457b222d93114458476f3e3416abbe38f',
    chainId: CHAIN_ID,
    decimals: 18,
    name: 'Staked Frax Ether',
    symbol: 'sfrxETH',
    icon: '',
  },
  rmeth: {
    address: '',
    chainId: CHAIN_ID,
    decimals: 18,
    name: '',
    symbol: 'rmETH',
    icon: '',
  },
  inmeth: {
    address: '',
    chainId: CHAIN_ID,
    decimals: 18,
    name: '',
    symbol: 'inmeth',
    icon: '',
  },
};
