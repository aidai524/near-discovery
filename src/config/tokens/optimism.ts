import type { Token } from '@/types';

const CHAIN_ID = 10;
export const optimism: { [key: string]: Token } = {
  eth: {
    chainId: CHAIN_ID,
    name: 'ETH',
    symbol: 'ETH',
    icon: 'https://ipfs.near.social/ipfs/bafkreibspnls7q67q25r2ifv2rrfmvzl744pzuh3s5ekigeqkmyycl2auq',
    decimals: 18,
    isNative: true,
    address: 'native',
  },
  dai: {
    chainId: CHAIN_ID,
    address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    name: 'Dai Stablecoin',
    symbol: 'DAI',
    icon: 'https://ipfs.near.social/ipfs/bafkreieuxntkdzi2mzkzdcbk6kahwxqpftxnipxcwc4oe4p4jm2rhj2xhu',
    decimals: 18,
  },
  frax: {
    chainId: CHAIN_ID,
    address: '0x2E3D870790dC77A83DD1d18184Acc7439A53f475',
    name: 'Frax',
    symbol: 'FRAX',
    icon: 'https://ipfs.near.social/ipfs/bafkreihmgwok5dhlb64c3dib5irnc2vacmljcyfeten6dhzfqpolsvjy74',
    decimals: 18,
  },
  lusd: {
    chainId: CHAIN_ID,
    address: '0xc40F949F8a4e094D1b49a23ea9241D289B7b2819',
    name: 'LUSD Stablecoin',
    symbol: 'LUSD',
    icon: 'https://ipfs.near.social/ipfs/bafkreihne6zw3myw5dwh72giml63vjjksmixrf435hf7cnsg5f3ubgdnde',
    decimals: 18,
  },
  native: {
    chainId: CHAIN_ID,
    address: '',
    decimals: 18,
    symbol: 'ETH',
    name: 'Ether',
    icon: 'https://ipfs.near.social/ipfs/bafkreibspnls7q67q25r2ifv2rrfmvzl744pzuh3s5ekigeqkmyycl2auq',
  },
  'usdc.e': {
    chainId: CHAIN_ID,
    address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
    decimals: 6,
    symbol: 'USDC.e',
    name: 'Bridged USDC',
    icon: 'https://ipfs.near.social/ipfs/bafkreie4jihoa76mgyzxhw2yrapihzu2qhkjz6m7u4opoxjebzg6zc2lla',
  },
  usdc: {
    chainId: CHAIN_ID,
    address: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
    decimals: 6,
    symbol: 'USDC',
    name: 'USD Coin',
    icon: 'https://ipfs.near.social/ipfs/bafkreie4jihoa76mgyzxhw2yrapihzu2qhkjz6m7u4opoxjebzg6zc2lla',
  },
  op: {
    chainId: CHAIN_ID,
    address: '0x4200000000000000000000000000000000000042',
    decimals: 18,
    symbol: 'OP',
    name: 'Optimism',
    icon: 'https://ipfs.near.social/ipfs/bafkreiemkl7qtrrqnk5mexf7r4cr3mkznna6qvxrzhovlmt4djbkx366ae',
  },

  weth: {
    chainId: CHAIN_ID,
    address: '0x4200000000000000000000000000000000000006',
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
    icon: 'https://ipfs.near.social/ipfs/bafkreihyzmiuawyekwiyofkzm25xzrrfenhvadi6lb42juvq7tah2u7ha4',
  },
  wstETH: {
    chainId: CHAIN_ID,
    address: '0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb',
    decimals: 18,
    symbol: 'wstETH',
    name: 'Wrapped liquid staked Ether 2.0',
    icon: 'https://ipfs.near.social/ipfs/bafkreibukwahpp2ei74ax5acm6p7uwcnbsfvdzkizsdzqu26yfbxndpvra',
  },

  mseth: {
    chainId: CHAIN_ID,
    address: '0x1610e3c85dd44Af31eD7f33a63642012Dca0C5A5',
    decimals: 18,
    symbol: 'msETH',
    name: 'Metronome Synth ETH',
    icon: 'https://ipfs.near.social/ipfs/bafkreie4tthvfs7g4ktzbmxeitfpeikbb3iu52d2gnvcv6jmjqtpl7wfbm',
  },
  stg: {
    chainId: CHAIN_ID,
    address: '0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97',
    decimals: 18,
    symbol: 'STG',
    name: 'StargateToken',
    icon: 'https://ipfs.near.social/ipfs/bafkreifqtmyhszs3sa33f2uockcdmkxbuur7pvlgwx6vs53xlgaz7m2pfq',
  },
  mai: {
    chainId: CHAIN_ID,
    address: '0xdFA46478F9e5EA86d57387849598dbFB2e964b02',
    decimals: 18,
    symbol: 'MAI',
    name: 'Mai Stablecoin',
    icon: 'https://ipfs.near.social/ipfs/bafkreig3xz7vylch6y7ubyjco4kdzw724lnlgzohlizmgti6s6fc4ybsai',
  },
  susd: {
    chainId: CHAIN_ID,
    address: '0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9',
    decimals: 18,
    symbol: 'sUSD',
    name: 'Synth sUSD',
    icon: 'https://ipfs.near.social/ipfs/bafkreiaum6qcvs7gqjwfmbfoh5dde244fqd6bji4id5wlyn6q5e3vvsorm',
  },
  snx: {
    chainId: CHAIN_ID,
    address: '0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4',
    decimals: 18,
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreiblu4utwynt7ajvretbjzqtm2v7e7p2hkyyp7jamb742zkwpdzmu4',
  },
  wbtc: {
    chainId: CHAIN_ID,
    address: '0x68f180fcCe6836688e9084f035309E29Bf0A2095',
    decimals: 8,
    symbol: 'WBTC',
    name: 'Wrapped BTC',
    icon: 'https://ipfs.near.social/ipfs/bafkreigdklwcldjo4w7viyrym54hdb43wgpv23mbicetszygzapttbgo7q',
  },
  usdt: {
    chainId: CHAIN_ID,
    address: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
    decimals: 6,
    symbol: 'USDT',
    name: 'Tether USD',
    icon: 'https://ipfs.near.social/ipfs/bafkreih45jy7ggj45ck34rf736kb67smsoa52wd7e46c2grh6etd3bhe5i',
  },
  beets: {
    chainId: CHAIN_ID,
    address: '0xb4Bc46bc6cB217B59ea8F4530BaE26Bf69F677f0',
    decimals: 18,
    symbol: 'BEETS',
    name: 'BeethovenxToken',
    icon: 'https://ipfs.near.social/ipfs/bafkreidjavlt5eoxajtoeny5ilfso2elx2hchgcpkdczibo2ar3v2juurq',
  },
  fxs: {
    chainId: CHAIN_ID,
    address: '0x67CCEA5bb16181E7b4109c9c2143c24a1c2205Be',
    decimals: 18,
    symbol: 'FXS',
    name: 'Frax Share',
    icon: 'https://ipfs.near.social/ipfs/bafkreigk6tgcodvis2vsjga3ecfs3fh3i3h7jvi4llftts5s2oo7byxm6e',
  },
  velo: {
    chainId: CHAIN_ID,
    address: '0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db',
    decimals: 18,
    symbol: 'VELO',
    name: 'VelodromeV2',
    icon: 'https://ipfs.near.social/ipfs/bafkreifvigcwmpoucqlef3ee7c7sx6ivwbks5qxzmdsp23rgheqllaxx54',
  },
  link: {
    chainId: CHAIN_ID,
    address: '0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6',
    decimals: 18,
    symbol: 'LINK',
    name: 'ChainLink Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreidrq7qk3d6epwaxobq4gk7yowljr5tnslxwrsbd7vnw3srkt7ok3u',
  },
};
