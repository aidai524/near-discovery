import type { Token } from '@/types';

const CHAIN_ID = 100;
export const gnosis: { [key: string]: Token } = {
  xdai: {
    chainId: CHAIN_ID,
    name: 'XDAI',
    symbol: 'XDAI',
    icon: 'https://ipfs.near.social/ipfs/bafkreieu6n7cav63nwjj5klcsxrk26eo5pqkc4u7xzfle2bjgi5ijm7ipe',
    decimals: 18,
    isNative: true,
    address: 'native'
  },
  gno: {
    chainId: CHAIN_ID,
    address: '0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb',
    decimals: 18,
    symbol: 'GNO',
    name: 'Gnosis Token on xDai',
    icon: 'https://ipfs.near.social/ipfs/bafkreicldmi7glc46rvi5qhfvcvdwgr5ove3jwrrs7pfjluhgynbt74d3q'
  },
  wxdai: {
    chainId: CHAIN_ID,
    address: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
    decimals: 18,
    symbol: 'WXDAI',
    name: 'Wrapped XDAI',
    icon: 'https://ipfs.near.social/ipfs/bafkreieu6n7cav63nwjj5klcsxrk26eo5pqkc4u7xzfle2bjgi5ijm7ipe'
  },
  donut: {
    chainId: CHAIN_ID,
    address: '0x524b969793a64a602342d89bc2789d43a016b13a',
    decimals: 18,
    symbol: 'DONUT',
    name: 'Donut on xDai',
    icon: 'https://ipfs.near.social/ipfs/bafkreie7eokwmmskbml6sh35iiu7byl5zb4pttytqvczkiu2t2wzop74oq'
  },
  hny: {
    chainId: CHAIN_ID,
    address: '0x71850b7e9ee3f13ab46d67167341e4bdc905eef9',
    decimals: 18,
    symbol: 'HNY',
    name: 'Honey',
    icon: 'https://ipfs.near.social/ipfs/bafkreibs2v3zz24hntb4fg4znjvftoke3ybtlan3a6myhruzm6i453wily'
  },
  weth: {
    chainId: CHAIN_ID,
    address: '0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1',
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether on xDai',
    icon: 'https://ipfs.near.social/ipfs/bafkreihyzmiuawyekwiyofkzm25xzrrfenhvadi6lb42juvq7tah2u7ha4'
  },
  wbtc: {
    chainId: CHAIN_ID,
    address: '0x8e5bbbb09ed1ebde8674cda39a0c169401db4252',
    decimals: 8,
    symbol: 'WBTC',
    name: 'Wrapped BTC on xDai',
    icon: 'https://ipfs.near.social/ipfs/bafkreigdklwcldjo4w7viyrym54hdb43wgpv23mbicetszygzapttbgo7q'
  },
  usdc: {
    chainId: CHAIN_ID,
    address: '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
    decimals: 6,
    symbol: 'USDC',
    name: 'USDC',
    icon: 'https://ipfs.near.social/ipfs/bafkreie4jihoa76mgyzxhw2yrapihzu2qhkjz6m7u4opoxjebzg6zc2lla'
  },
  usdt: {
    chainId: CHAIN_ID,
    address: '0x4ECaBa5870353805a9F068101A40E0f32ed605C6',
    decimals: 6,
    symbol: 'USDT',
    name: 'Tether USD on xDai',
    icon: 'https://ipfs.near.social/ipfs/bafkreih45jy7ggj45ck34rf736kb67smsoa52wd7e46c2grh6etd3bhe5i'
  },
  eure: {
    chainId: CHAIN_ID,
    address: '0xcB444e90D8198415266c6a2724b7900fb12FC56E',
    decimals: 18,
    symbol: 'EURe',
    name: 'EURe',
    icon: 'https://ipfs.near.social/ipfs/bafkreifdn5sk46celyzbg2eylvowg7i2ts2wasf6niylmyyvo5sd5lmsp4'
  },
  wsteth: {
    chainId: CHAIN_ID,
    address: '0x6C76971f98945AE98dD7d4DFcA8711ebea946eA6',
    decimals: 18,
    symbol: 'wstETH',
    name: 'wstETH',
    icon: 'https://ipfs.near.social/ipfs/bafkreibukwahpp2ei74ax5acm6p7uwcnbsfvdzkizsdzqu26yfbxndpvra'
  },
  swpr: {
    chainId: CHAIN_ID,
    address: '0x532801ED6f82FFfD2DAB70A19fC2d7B2772C4f4b',
    decimals: 18,
    symbol: 'Swapr on xDai',
    name: 'SWPR',
    icon: 'https://ipfs.near.social/ipfs/bafkreih6d6orfzzitmxv7dfme6fg346gf5avj7ujzoffoqbb653fcj5h4u'
  },
  elk: {
    chainId: CHAIN_ID,
    address: '0xeEeEEb57642040bE42185f49C52F7E9B38f8eeeE',
    decimals: 18,
    symbol: 'Elk',
    name: 'ELK',
    icon: 'https://ipfs.near.social/ipfs/bafkreifua7ed6ubnfei33y6hjehrqfacmqzd55io22bqhw4pf5tydegz5e'
  },
  sushi: {
    chainId: CHAIN_ID,
    address: '0x2995D1317DcD4f0aB89f4AE60F3f020A4F17C7CE',
    decimals: 18,
    symbol: 'SUSHI',
    name: 'SushiToken',
    icon: 'https://ipfs.near.social/ipfs/bafkreif5a3jne5ol2d57r2terziofqhosgl5txptv7q7bit42qt5jzoaqa'
  },
  agve: {
    chainId: CHAIN_ID,
    address: '0x3a97704a1b25F08aa230ae53B352e2e72ef52843',
    decimals: 18,
    symbol: 'AGVE',
    name: 'Agave Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreigznoaswprxw2rvbxx4udmkkkv7k3hh2l67mj7qfwq5il6cukh55m'
  },
  symm: {
    chainId: CHAIN_ID,
    address: '0xC45b3C1c24d5F54E7a2cF288ac668c74Dd507a84',
    decimals: 18,
    symbol: 'SYMM',
    name: 'Symmetric on xDai',
    icon: 'https://ipfs.near.social/ipfs/bafkreiec4rsaybdji3rksfb27kzgy4epiijy25pncrbf43fadzv4obrnlu'
  },
  dai: {
    chainId: CHAIN_ID,
    address: '0x44fA8E6f47987339850636F88629646662444217',
    decimals: 18,
    symbol: 'DAI',
    name: 'Dai Stablecoin',
    icon: 'https://ipfs.near.social/ipfs/bafkreieuxntkdzi2mzkzdcbk6kahwxqpftxnipxcwc4oe4p4jm2rhj2xhu'
  },
  aura: {
    chainId: CHAIN_ID,
    address: '0x1509706a6c66CA549ff0cB464de88231DDBe213B',
    name: 'AURA',
    decimals: 18,
    symbol: 'AURA',
    icon: 'https://ipfs.near.social/ipfs/bafkreibwfcm5emsmg7ilhyiq7ugy2bxpjyfdkdi37cvnftkktqoal7soyq'
  },
  crvUSD: {
    chainId: CHAIN_ID,
    address: '0xaBEf652195F98A91E490f047A5006B71c85f058d',
    name: 'crvUSD',
    decimals: 18,
    symbol: 'crvUSD',
    icon: 'https://ipfs.near.social/ipfs/bafkreifb2bmovpnn67k452fvttp5swwh6ywbq4p63yj6quqo7xqauaet3e'
  },
  sDAI: {
    chainId: CHAIN_ID,
    address: '0xaf204776c7245bF4147c2612BF6e5972Ee483701',
    name: 'sDAI',
    symbol: 'sDAI',
    decimals: 18,
    icon: 'https://ipfs.near.social/ipfs/bafkreihrdr5uv6sspqzht5xnw6qpdryvmk3sjee4oj6fqijqedqsi4v6qa'
  },
  staBAL3: {
    chainId: CHAIN_ID,
    address: '0x2086f52651837600180dE173B09470F54EF74910',
    name: 'staBAL3',
    decimals: 18,
    symbol: 'staBAL3',
    icon: 'https://ipfs.near.social/ipfs/bafkreielvtvl7nocvq2xtm5glne6ki4fgosalbx6ctk4b7xbsjs6vgy2my'
  },
  BAL: {
    chainId: CHAIN_ID,
    address: '0x7eF541E2a22058048904fE5744f9c7E4C57AF717',
    name: 'BAL',
    decimals: 18,
    symbol: 'BAL',
    icon: 'https://ipfs.near.social/ipfs/bafkreidjsonabgbstdurztzkv5n2ja3t54ooynwibiaes7eb2tmtrblaim'
  },
  COW: {
    chainId: CHAIN_ID,
    address: '0x177127622c4A00F3d409B75571e12cB3c8973d3c',
    name: 'COW',
    decimals: 18,
    symbol: 'COW',
    icon: 'https://ipfs.near.social/ipfs/bafkreifkv3zylhokdps36z56wvnxrlvcxhd4c5hqus5b2d253uxmpurmzi'
  },
  stEUR: {
    chainId: CHAIN_ID,
    address: '0x004626A008B1aCdC4c74ab51644093b155e59A23',
    name: 'stEUR',
    symbol: 'stEUR',
    decimals: 18,
    icon: 'https://ipfs.near.social/ipfs/bafkreifyb5gn2wd3yxun73277zdhzqdshvy63iexqcucgcnze3elroyczy'
  },
  rETH: {
    chainId: CHAIN_ID,
    address: '0xc791240d1f2def5938e2031364ff4ed887133c3d',
    name: 'Rocket Pool ETH from Mainnet',
    symbol: 'rETH',
    decimals: 18,
    icon: 'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xc791240d1f2def5938e2031364ff4ed887133c3d.png'
  },
  osGNO: {
    chainId: CHAIN_ID,
    address: '0xf490c80aae5f2616d3e3bda2483e30c4cb21d1a0',
    name: 'Staked GNO',
    symbol: 'osGNO',
    decimals: 18,
    icon: 'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf490c80aae5f2616d3e3bda2483e30c4cb21d1a0.png'
  },
  OLAS: {
    chainId: CHAIN_ID,
    address: '0xce11e14225575945b8e6dc0d4f2dd4c570f79d9f',
    name: 'Autonolas from Mainnet',
    symbol: 'OLAS',
    decimals: 18,
    icon: 'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xce11e14225575945b8e6dc0d4f2dd4c570f79d9f.png'
  },
  mps: {
    address: '0xfa57AA7beED63D03Aaf85fFd1753f5f6242588fb',
    chainId: CHAIN_ID,
    symbol: 'MPS',
    decimals: 18,
    name: 'MtPelerin Shares',
    icon: '/images/tokens/mps.webp'
  },
  fcl: {
    address: '0xe68856eb29B2FB39699286CcA7F10f90Ce8AE9De',
    chainId: CHAIN_ID,
    symbol: 'FCL',
    decimals: 18,
    name: 'Fractal Protocol Token',
    icon: '/images/tokens/fcl.webp'
  },
  link: {
    chainId: CHAIN_ID,
    address: '0xE2e73A1c69ecF83F464EFCE6A5be353a37cA09b2',
    decimals: 18,
    symbol: 'LINK',
    name: 'ChainLink Token on xDai',
    icon: 'https://ipfs.near.social/ipfs/bafkreidrq7qk3d6epwaxobq4gk7yowljr5tnslxwrsbd7vnw3srkt7ok3u'
  },
  'usdc.e': {
    chainId: CHAIN_ID,
    address: '0x2a22f9c3b484c3629090feed35f17ff8f88f76f0',
    name: 'USDC.e',
    symbol: 'USDC.e',
    decimals: 6,
    icon: 'https://ipfs.near.social/ipfs/bafkreie4jihoa76mgyzxhw2yrapihzu2qhkjz6m7u4opoxjebzg6zc2lla'
  }
};
