import type { Token } from '@/types';

const CHAIN_ID = 1088;
export const metis: { [key: string]: Token } = {
  usdt: {
    chainId: CHAIN_ID,
    name: 'USDT Token',
    symbol: 'USDT',
    icon: 'https://assets.coingecko.com/coins/images/325/standard/Tether.png?1696501661',
    decimals: 6,
    address: '0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC'
  },
  eth: {
    chainId: CHAIN_ID,
    name: 'ETH',
    symbol: 'ETH',
    icon: 'https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628',
    decimals: 18,
    address: '0x420000000000000000000000000000000000000A'
  },
  metis: {
    chainId: CHAIN_ID,
    address: '0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000',
    decimals: 18,
    symbol: 'METIS',
    name: 'Metis Token',
    icon: 'https://assets.coingecko.com/coins/images/15595/small/metis.jpeg?1660285312',
    isNative: true
  },
  weth: {
    chainId: CHAIN_ID,
    address: '0x420000000000000000000000000000000000000A',
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
    icon: 'https://assets.coingecko.com/coins/images/2518/small/weth.png?1628852295'
  },

  'm.usdt': {
    chainId: CHAIN_ID,
    address: '0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC',
    decimals: 6,
    symbol: 'm.USDT',
    name: 'USDT Token',
    icon: 'https://assets.coingecko.com/coins/images/325/small/Tether.png?1668148663'
  },
  'm.usdc': {
    chainId: CHAIN_ID,
    address: '0xEA32A96608495e54156Ae48931A7c20f0dcc1a21',
    decimals: 6,
    symbol: 'm.USDC',
    name: 'USDC Token',
    icon: 'https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389'
  },
  maia: {
    chainId: CHAIN_ID,
    address: '0x72c232D56542Ba082592DEE7C77b1C6CFA758BCD',
    decimals: 9,
    symbol: 'MAIA',
    name: 'Maia',
    icon: 'https://assets.coingecko.com/coins/images/22502/small/whiteicon.4a79cf8b.png?1641953707'
  },
  hera: {
    chainId: CHAIN_ID,
    address: '0x6f05709bc91bad933346f9e159f0d3fdbc2c9dce',
    decimals: 18,
    symbol: 'HERA',
    name: 'Hera Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreiezixu7e3kc2vv6di6dnqzept5rhstmoofl3ky5cvokqe3t2cbc3u'
  },
  nett: {
    chainId: CHAIN_ID,
    address: '0x90fE084F877C65e1b577c7b2eA64B8D8dd1AB278',
    decimals: 18,
    symbol: 'NETT',
    name: 'Netswap Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreiejwiiaoamvnjfu5fxvkm6x4sweu3hpk5zpf2eaas7cx4qslghxlq'
  },
  peak: {
    chainId: CHAIN_ID,
    address: '0x1f5550a0f5f659e07506088a7919a88dff37218f',
    decimals: 18,
    symbol: 'PEAK',
    name: 'PEAK',
    icon: 'https://ipfs.near.social/ipfs/bafkreibpv24wawd4uedvnypxphowyvcw6dbayvvwzxgjrditilvihoq2s4'
  },
  byte: {
    chainId: CHAIN_ID,
    address: '0x721532bc0da5ffaeb0a6a45fb24271e8098629a7',
    decimals: 18,
    symbol: 'BYTE',
    name: 'BinaryDAO Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreidaoktium64c2ozdf3knal5pfmrisngngs5em36hvflgmqsqb3z64'
  },
  'm.dai': {
    chainId: CHAIN_ID,
    address: '0x4c078361FC9BbB78DF910800A991C7c3DD2F6ce0',
    decimals: 18,
    symbol: 'm.DAI',
    name: 'DAI Token',
    icon: '/assets/tokens/dai.png'
  },
  'm.wbtc': {
    chainId: CHAIN_ID,
    address: '0x433E43047B95cB83517abd7c9978Bdf7005E9938',
    decimals: 18,
    symbol: 'm.WBTC',
    name: 'WBTC Token',
    icon: '/assets/tokens/wbtc.png'
  },
  hermes: {
    chainId: CHAIN_ID,
    address: '0xb27BbeaACA2C00d6258C3118BAB6b5B6975161c8',
    decimals: 18,
    symbol: 'HERMES',
    name: 'Hermes',
    icon: 'https://ipfs.near.social/ipfs/bafybeiamt2iuucwebbklhvmq5dz3hir63u3ovkvusbuz3k2wpsiwhulnzy'
  },
  sfrxETH: {
    chainId: CHAIN_ID,
    address: '0x1f55a02A049033E3419a8E2975cF3F572F4e6E9A',
    decimals: 18,
    symbol: 'sfrxETH',
    name: 'Staked rax Ether',
    icon: 'https://ipfs.near.social/ipfs/bafkreiayh7m5knlt7olpwrnnltbd4ykszyzbca5gdpnj4mkqbrvknihcvi'
  },
  eMetis: {
    chainId: CHAIN_ID,
    address: '0x97a2de3A09F4A4229369ee82c7F76be1a5564661',
    decimals: 18,
    symbol: 'eMetis',
    name: 'Enki Metis',
    icon: '/images/tokens/eMetis.png'
  },
  enki: {
    chainId: CHAIN_ID,
    address: '0x096A84536ab84E68ee210561FFD3A038E79736F1',
    decimals: 18,
    symbol: 'ENKI',
    name: 'ENKI Protocol',
    icon: '/images/tokens/enki.png'
  },
  titans: {
    chainId: CHAIN_ID,
    address: '0xa11DD414Ad9b68cc1fe4d0a256f0F4413169Dd5E',
    decimals: 18,
    symbol: 'TITANS',
    name: 'TitanBorn',
    icon: '/images/tokens/titans.png'
  }
};
