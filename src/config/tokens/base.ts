import type { Token } from '@/types';

const CHAIN_ID = 8453;
export const base: { [key: string]: Token } = {
  eth: {
    chainId: CHAIN_ID,
    address: 'native',
    name: 'ETH',
    symbol: 'ETH',
    icon: 'https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628',
    decimals: 18,
    isNative: true,
  },
  usdc: {
    chainId: CHAIN_ID,
    address: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
    name: 'USDC',
    symbol: 'USDC',
    icon: 'https://assets.coingecko.com/coins/images/6319/standard/usdc.png?1696506694',
    decimals: 6,
  },
  cbeth: {
    chainId: CHAIN_ID,
    address: '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22',
    decimals: 18,
    symbol: 'cbETH',
    name: 'Coinbase Wrapped Staked ETH',
    icon: 'https://ipfs.near.social/ipfs/bafkreif6fax6u2xtetbjv5c27ubxedwqjzrqsreytqbppflryagvm5ix7u',
  },
  weth: {
    chainId: CHAIN_ID,
    address: '0x4200000000000000000000000000000000000006',
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
    icon: 'https://ipfs.near.social/ipfs/bafkreihyzmiuawyekwiyofkzm25xzrrfenhvadi6lb42juvq7tah2u7ha4',
  },
  axlusdc: {
    chainId: CHAIN_ID,
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    decimals: 6,
    symbol: 'axlUSDC',
    name: 'Axelar Wrapped USDC',
    icon: 'https://ipfs.near.social/ipfs/bafkreie4jihoa76mgyzxhw2yrapihzu2qhkjz6m7u4opoxjebzg6zc2lla',
  },
  bswap: {
    chainId: CHAIN_ID,
    address: '0x78a087d713Be963Bf307b18F2Ff8122EF9A63ae9',
    decimals: 18,
    symbol: 'BSWAP',
    name: 'Baseswap Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreibchdnwitwvrkaudvkokxpg4lgtmtpakmpbtgaxfijlyzjjn5ij7u',
  },
  dai: {
    chainId: CHAIN_ID,
    address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
    decimals: 18,
    symbol: 'DAI',
    name: 'Dai Stablecoin',
    icon: 'https://ipfs.near.social/ipfs/bafkreieuxntkdzi2mzkzdcbk6kahwxqpftxnipxcwc4oe4p4jm2rhj2xhu',
  },
  usdbc: {
    chainId: CHAIN_ID,
    address: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
    decimals: 6,
    symbol: 'USDbC',
    name: 'USD Base Coin',
    icon: 'https://ipfs.near.social/ipfs/bafkreidvlzvrojji7ezvfrcxnjkmdfhxnau6qp7wngfctmxcvurqpeddb4',
  },
  rckt: {
    chainId: CHAIN_ID,
    address: '0x6653dD4B92a0e5Bf8ae570A98906d9D6fD2eEc09',
    decimals: 18,
    symbol: 'RCKT',
    name: 'RocketSwap',
    icon: 'https://ipfs.near.social/ipfs/bafkreid2h5b7or52vtn2micbmjmzssh6b26uvzfvzurd66lqvyarkekdpy',
  },
  bald: {
    chainId: CHAIN_ID,
    address: '0x27D2DECb4bFC9C76F0309b8E88dec3a601Fe25a8',
    decimals: 18,
    symbol: 'BALD',
    name: 'Bald',
    icon: 'https://ipfs.near.social/ipfs/bafkreibokl4gvnodznfnzvnwfhzsssqcpqp2th4qrumxvmsd5oi3drwxsu',
  },
  base: {
    chainId: CHAIN_ID,
    address: '0xd07379a755A8f11B57610154861D694b2A0f615a',
    decimals: 18,
    symbol: 'BASE',
    name: 'BASE Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreidhivnirorddkdudcd6oca6gvhps66audqn3lppsoehlyvorf6p4i',
  },
  synth: {
    chainId: CHAIN_ID,
    address: '0xbd2DBb8eceA9743CA5B16423b4eAa26bDcfE5eD2',
    decimals: 18,
    symbol: 'SYNTH',
    name: 'Synth Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreibgq3x3f5sxegvmwbgqfpkccbxhduj2rjgiex7oirco3wn5urww2m',
  },
  hzn: {
    chainId: CHAIN_ID,
    address: '0x081AD949deFe648774C3B8deBe0E4F28a80716dc',
    decimals: 18,
    symbol: 'HZN',
    name: 'Horizon',
    icon: 'https://ipfs.near.social/ipfs/bafkreiehzfpq27pwv4nsoqp45ehekfpfevfpt2l63wm7fmzgcjn5cmhvzm',
  },
};
