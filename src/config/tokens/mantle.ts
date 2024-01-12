import type { Token } from '@/types';

const CHAIN_ID = 5000;
export const mantle: { [key: string]: Token } = {
  mnt: {
    chainId: CHAIN_ID,
    name: 'MNT',
    symbol: 'MNT',
    icon: 'https://ipfs.near.social/ipfs/bafkreibmrdi5ww5rk657jqglnaek5nptc6ze3kljferdsdewcirx4jijhe',
    decimals: 18,
    isNative: true,
    address: 'native',
  },
  weth: {
    address: '0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111',
    chainId: CHAIN_ID,
    symbol: 'WETH',
    decimals: 18,
    name: 'Wrapped Ether',
    icon: 'https://ipfs.near.social/ipfs/bafkreihyzmiuawyekwiyofkzm25xzrrfenhvadi6lb42juvq7tah2u7ha4',
  },
  usdc: {
    address: '0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9',
    chainId: CHAIN_ID,
    symbol: 'USDC',
    decimals: 6,
    name: 'USD Coin',
    icon: 'https://ipfs.near.social/ipfs/bafkreie4jihoa76mgyzxhw2yrapihzu2qhkjz6m7u4opoxjebzg6zc2lla',
  },

  usdt: {
    address: '0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE',
    chainId: CHAIN_ID,
    symbol: 'USDT',
    decimals: 6,
    name: 'Tether USD',
    icon: 'https://ipfs.near.social/ipfs/bafkreih45jy7ggj45ck34rf736kb67smsoa52wd7e46c2grh6etd3bhe5i',
  },

  wbtc: {
    address: '0xCAbAE6f6Ea1ecaB08Ad02fE02ce9A44F09aebfA2',
    chainId: CHAIN_ID,
    symbol: 'WBTC',
    decimals: 8,
    name: 'Wrapped BTC',
    icon: 'https://ipfs.near.social/ipfs/bafkreigdklwcldjo4w7viyrym54hdb43wgpv23mbicetszygzapttbgo7q',
  },

  dai: {
    address: '0xAfAF32C57659BC9992b43bc6840A9d997632a0F5',
    chainId: CHAIN_ID,
    symbol: 'DAI',
    decimals: 18,
    name: 'Dai Stablecoin',
    icon: 'https://ipfs.near.social/ipfs/bafkreieuxntkdzi2mzkzdcbk6kahwxqpftxnipxcwc4oe4p4jm2rhj2xhu',
  },
  wmnt: {
    address: '0x78c1b0c915c4faa5fffa6cabf0219da63d7f4cb8',
    chainId: CHAIN_ID,
    decimals: 18,
    symbol: 'WMNT',
    name: 'Wrapped Mantle',
    icon: 'https://ipfs.near.social/ipfs/bafkreibmrdi5ww5rk657jqglnaek5nptc6ze3kljferdsdewcirx4jijhe',
  },
  lend: {
    chainId: CHAIN_ID,
    address: '0x25356aeca4210ef7553140edb9b8026089e49396',
    decimals: 18,
    symbol: 'LEND',
    name: 'Lendle Protocol Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreig36gyyl6bv2s6f5c2kq22x4omgaclfzyf5ifvjmsxl55svptlq3e',
  },
};
