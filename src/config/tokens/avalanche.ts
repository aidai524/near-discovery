import type { Token } from '@/types';

const CHAIN_ID = 43114;
export const avalanche: { [key: string]: Token } = {
  usdc: {
    chainId: CHAIN_ID,
    address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
    name: 'USDC',
    symbol: 'USDC',
    icon: 'https://assets.coingecko.com/coins/images/6319/standard/usdc.png?1696506694',
    decimals: 6,
  },
  'usdc.e': {
    chainId: CHAIN_ID,
    address: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
    decimals: 6,
    symbol: 'USDC.e',
    name: 'Bridged USDC',
    icon: 'https://ipfs.near.social/ipfs/bafkreie4jihoa76mgyzxhw2yrapihzu2qhkjz6m7u4opoxjebzg6zc2lla',
  },
  'dai.e': {
    chainId: CHAIN_ID,
    address: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
    decimals: 18,
    symbol: 'DAI.e',
    name: 'Dai Stablecoin',
    icon: 'https://ipfs.near.social/ipfs/bafkreieuxntkdzi2mzkzdcbk6kahwxqpftxnipxcwc4oe4p4jm2rhj2xhu',
  },
  'usdt.e': {
    chainId: CHAIN_ID,
    address: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
    decimals: 6,
    symbol: 'USDT.e',
    name: 'Tether USD',
    icon: 'https://ipfs.near.social/ipfs/bafkreih45jy7ggj45ck34rf736kb67smsoa52wd7e46c2grh6etd3bhe5i',
  },
  usdt: {
    chainId: CHAIN_ID,
    address: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
    name: 'USDT',
    symbol: 'USDT',
    icon: 'https://assets.coingecko.com/coins/images/325/standard/Tether.png?1696501661',
    decimals: 6,
  },
  frax: {
    chainId: CHAIN_ID,
    address: '0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64',
    name: 'Frax',
    symbol: 'FRAX',
    icon: 'https://assets.coingecko.com/coins/images/13422/standard/FRAX_icon.png?1696513182',
    decimals: 18,
  },
  mai: {
    chainId: CHAIN_ID,
    address: '0x5c49b268c9841AFF1Cc3B0a418ff5c3442eE3F3b',
    name: 'Mai Stablecoin',
    symbol: 'MAI',
    icon: 'https://assets.coingecko.com/coins/images/15264/standard/mimatic-red.png?1696514916',
    decimals: 18,
  },
  avax: {
    chainId: CHAIN_ID,
    name: 'AVAX',
    symbol: 'AVAX',
    icon: 'https://assets.dapdap.tech/images/bafkreiaxodsgromeeaihu44fazsxdopkrqvinqzhyfxvx5mrbcmduqdfpq.svg',
    decimals: 18,
    address: 'native',
    isNative: true,
  },
  eth: {
    chainId: CHAIN_ID,
    address: '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB',
    name: 'Wrapped Ether',
    symbol: 'WETH.e',
    icon: 'https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628',
    decimals: 18,
  },
  wavax: {
    chainId: CHAIN_ID,
    address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    decimals: 18,
    symbol: 'WAVAX',
    name: 'Wrapped AVAX',
    icon: 'https://ipfs.near.social/ipfs/bafkreidhh4bxo55sq6bf2t2kkdbotbxcaj4s2v2wcwmq2e4bb6ilepmpve',
  },
  'wbtc.e': {
    chainId: CHAIN_ID,
    address: '0x50b7545627a5162F82A992c33b87aDc75187B218',
    decimals: 8,
    symbol: 'WBTC.e',
    name: 'Wrapped BTC',
    icon: 'https://ipfs.near.social/ipfs/bafkreigdklwcldjo4w7viyrym54hdb43wgpv23mbicetszygzapttbgo7q',
  },
  'link.e': {
    chainId: CHAIN_ID,
    address: '0x5947BB275c521040051D82396192181b413227A3',
    decimals: 18,
    symbol: 'LINK.e',
    name: 'Chainlink Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreidrq7qk3d6epwaxobq4gk7yowljr5tnslxwrsbd7vnw3srkt7ok3u',
  },
  savax: {
    chainId: CHAIN_ID,
    address: '0x2b2C81e08f1Af8835a78Bb2A90AE924ACE0eA4bE',
    decimals: 18,
    symbol: 'sAVAX',
    name: 'Staked AVAX',
    icon: 'https://ipfs.near.social/ipfs/bafkreia2hefekktykcred4hdkfduh62aeygtdn3r3qzj3ox53val6laosy',
  },
  'btc.b': {
    chainId: CHAIN_ID,
    address: '0x152b9d0FdC40C096757F570A51E494bd4b943E50',
    decimals: 8,
    symbol: 'BTC.b',
    name: 'Bitcoin',
    icon: 'https://ipfs.near.social/ipfs/bafkreig2h2vpf7u7ukbgomgurcvvfyujl66qdrbsp6u2bcga3wdyxladii',
  },
  xava: {
    chainId: CHAIN_ID,
    address: '0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4',
    decimals: 18,
    symbol: 'XAVA',
    name: 'Avalaunch',
    icon: 'https://ipfs.near.social/ipfs/bafkreiaxodsgromeeaihu44fazsxdopkrqvinqzhyfxvx5mrbcmduqdfpq',
  },
  phar: {
    chainId: CHAIN_ID,
    address: '0xaaab9d12a30504559b0c5a9a5977fee4a6081c6b',
    decimals: 18,
    symbol: 'PHAR',
    name: 'PHARAOH',
    icon: 'https://ipfs.near.social/ipfs/bafkreibmhma6xbsypqfytcuvfsntksowzw4omkrthtu5wbpvohvyw4rqlq',
  },
  mim: {
    chainId: CHAIN_ID,
    address: '0x130966628846bfd36ff31a822705796e8cb8c18d',
    decimals: 18,
    symbol: 'MIM',
    name: 'Magic Internet Money',
    icon: 'https://ipfs.near.social/ipfs/bafkreib435margnveti57fw3puzvlw5jr6kmzgbmxn5gju37up2h4e6as4',
  },
};
