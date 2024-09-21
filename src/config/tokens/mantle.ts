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
    address: 'native'
  },
  weth: {
    address: '0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111',
    chainId: CHAIN_ID,
    symbol: 'WETH',
    decimals: 18,
    name: 'Wrapped Ether',
    icon: 'https://ipfs.near.social/ipfs/bafkreihyzmiuawyekwiyofkzm25xzrrfenhvadi6lb42juvq7tah2u7ha4'
  },
  usdc: {
    address: '0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9',
    chainId: CHAIN_ID,
    symbol: 'USDC',
    decimals: 6,
    name: 'USD Coin',
    icon: 'https://ipfs.near.social/ipfs/bafkreie4jihoa76mgyzxhw2yrapihzu2qhkjz6m7u4opoxjebzg6zc2lla'
  },

  usdt: {
    address: '0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE',
    chainId: CHAIN_ID,
    symbol: 'USDT',
    decimals: 6,
    name: 'Tether USD',
    icon: 'https://ipfs.near.social/ipfs/bafkreih45jy7ggj45ck34rf736kb67smsoa52wd7e46c2grh6etd3bhe5i'
  },

  wbtc: {
    address: '0xCAbAE6f6Ea1ecaB08Ad02fE02ce9A44F09aebfA2',
    chainId: CHAIN_ID,
    symbol: 'WBTC',
    decimals: 8,
    name: 'Wrapped BTC',
    icon: 'https://ipfs.near.social/ipfs/bafkreigdklwcldjo4w7viyrym54hdb43wgpv23mbicetszygzapttbgo7q'
  },

  dai: {
    address: '0xAfAF32C57659BC9992b43bc6840A9d997632a0F5',
    chainId: CHAIN_ID,
    symbol: 'DAI',
    decimals: 18,
    name: 'Dai Stablecoin',
    icon: 'https://ipfs.near.social/ipfs/bafkreieuxntkdzi2mzkzdcbk6kahwxqpftxnipxcwc4oe4p4jm2rhj2xhu'
  },
  wmnt: {
    address: '0x78c1b0c915c4faa5fffa6cabf0219da63d7f4cb8',
    chainId: CHAIN_ID,
    decimals: 18,
    symbol: 'WMNT',
    name: 'Wrapped Mantle',
    icon: 'https://ipfs.near.social/ipfs/bafkreibmrdi5ww5rk657jqglnaek5nptc6ze3kljferdsdewcirx4jijhe'
  },
  lend: {
    chainId: CHAIN_ID,
    address: '0x25356aeca4210ef7553140edb9b8026089e49396',
    decimals: 18,
    symbol: 'LEND',
    name: 'Lendle Protocol Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreig36gyyl6bv2s6f5c2kq22x4omgaclfzyf5ifvjmsxl55svptlq3e'
  },
  moe: {
    chainId: CHAIN_ID,
    address: '0x4515A45337F461A11Ff0FE8aBF3c606AE5dC00c9',
    decimals: 18,
    symbol: 'MOE',
    name: 'Moe Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreihj5lvetwoz42vcgr6nwc4ibyslzuwxguv4cdpy4qcf5o3bu4uai4'
  },
  lusd: {
    chainId: CHAIN_ID,
    address: '0xf93a85d53e4af0d62bdf3a83ccfc1ecf3eaf9f32',
    name: 'LUSD Stablecoin',
    symbol: 'LUSD',
    icon: 'https://ipfs.near.social/ipfs/bafkreihne6zw3myw5dwh72giml63vjjksmixrf435hf7cnsg5f3ubgdnde',
    decimals: 18
  },
  cleo: {
    chainId: CHAIN_ID,
    address: '0xC1E0C8C30F251A07a894609616580ad2CEb547F2',
    name: 'Cleopatra',
    symbol: 'CLEO',
    icon: 'https://ipfs.near.social/ipfs/bafkreibncghvd7ajh5fdqxzittwyl2bukx32i4fjpr4xzd4aznjs5y2wly',
    decimals: 18
  },
  mvm: {
    chainId: CHAIN_ID,
    address: '0x861A6Fc736Cbb12ad57477B535B829239c8347d7',
    name: 'VelociMantle',
    symbol: 'MVM',
    icon: 'https://ipfs.near.social/ipfs/bafkreif5v6cfcqxlusijhonbjuiiywbynlftafwo4a3bztde3cvlye4qhe',
    decimals: 18
  },
  axlETH: {
    chainId: CHAIN_ID,
    address: '0xb829b68f57CC546dA7E5806A929e53bE32a4625D',
    name: 'Axelar Wrapped ETH',
    symbol: 'axlETH',
    icon: 'https://ipfs.near.social/ipfs/bafkreihoxyuytc4lpxs4tzd5vk2hifjl5aev4ovufv3ixbfqqxc2ck4vyy',
    decimals: 18
  },
  meth: {
    chainId: CHAIN_ID,
    address: '0xcDA86A272531e8640cD7F1a92c01839911B90bb0',
    name: 'mETH',
    symbol: 'mETH',
    icon: 'https://ipfs.near.social/ipfs/bafkreiepx3us5l6th7b4rachjsl4kictnc2qtmzaeqa3mho5x7wlwupc6e',
    decimals: 18
  },
  fbtc: {
    chainId: CHAIN_ID,
    address: '0xC96dE26018A54D51c097160568752c4E3BD6C364',
    name: 'Fire Bitcoin',
    symbol: 'FBTC',
    icon: 'https://ipfs.near.social/ipfs/bafkreiaq2jz526isky7iipkzz4j43esghbu3r3tj746picv66nhmsookj4',
    decimals: 18
  },
  usdy: {
    chainId: CHAIN_ID,
    address: '0x5bE26527e817998A7206475496fDE1E68957c5A6',
    name: 'Ondo U.S. Dollar Yield',
    symbol: 'USDY',
    icon: 'https://ipfs.near.social/ipfs/bafkreiaahg3aulwqaclg55k2ntikfbwztholbjz6vuewpph67ou6uyw2ty',
    decimals: 18
  },
  ausd: {
    chainId: CHAIN_ID,
    address: '0xd2b4c9b0d70e3da1fbdd98f469bd02e77e12fc79',
    name: 'Aurelius USD',
    symbol: 'aUSD',
    icon: 'https://ipfs.near.social/ipfs/bafkreibsxpywcpyv7d3wtx6zikotsgyuchvxj6jaqn22rcefxqsemk75wy',
    decimals: 18
  },
  minty: {
    chainId: CHAIN_ID,
    address: '0x5eCDB76feda945DC71F7D9ce62dFe7EaFEfFFAb4',
    name: 'Minterest',
    symbol: 'MINTY',
    icon: '/images/apps/minterest.png',
    decimals: 18
  }
};
