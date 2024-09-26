import type { Token } from '@/types';

const CHAIN_ID = 56;
export const bsc: { [key: string]: Token } = {
  usdt: {
    chainId: CHAIN_ID,
    address: '0x55d398326f99059fF775485246999027B3197955',
    symbol: 'USDT',
    name: 'Tether USD',
    icon: 'https://assets.coingecko.com/coins/images/325/standard/Tether.png?1696501661',
    decimals: 18
  },
  usdd: {
    chainId: CHAIN_ID,
    address: '0xd17479997F34dd9156Deef8F95A52D81D265be9c',
    name: 'Decentralized USD',
    symbol: 'USDD',
    icon: 'https://assets.coingecko.com/coins/images/25380/standard/UUSD.jpg?1696524513',
    decimals: 18
  },
  mai: {
    chainId: CHAIN_ID,
    address: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
    name: 'Mai Stablecoin',
    symbol: 'MAI',
    icon: 'https://assets.coingecko.com/coins/images/15264/standard/mimatic-red.png?1696514916',
    decimals: 18
  },
  bnb: {
    chainId: CHAIN_ID,
    decimals: 18,
    symbol: 'BNB',
    name: 'BNB',
    icon: '/assets/images/bafkreiaeq6ca67je5ocago6vk2efwxiqurxgemputx7p2nt6n2p3zo65xq.svg',
    isNative: true,
    address: 'native'
  },
  eth: {
    chainId: CHAIN_ID,
    address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    decimals: 18,
    symbol: 'ETH',
    name: 'Binance-Peg Ethereum Token',
    icon: '/assets/images/bafkreibspnls7q67q25r2ifv2rrfmvzl744pzuh3s5ekigeqkmyycl2auq.png'
  },
  the: {
    chainId: CHAIN_ID,
    address: '0xF4C8E32EaDEC4BFe97E0F595AdD0f4450a863a11',
    decimals: 18,
    symbol: 'THE',
    name: 'THENA',
    icon: 'https://ipfs.near.social/ipfs/bafkreig4qvfooeyjhjhfobueyipuxxzxdxf5cqycsup35wll6qc3qijghi'
  },

  livethe: {
    chainId: CHAIN_ID,
    address: '0xCdC3A010A3473c0C4b2cB03D8489D6BA387B83CD',
    decimals: 18,
    symbol: 'liveTHE',
    name: 'liveThe',
    icon: 'https://ipfs.near.social/ipfs/bafkreicsajtjaej7icx44jaflxswdkdlpbb62ywtucfsgvd4drhwn5smqy'
  },

  ankrbnb: {
    chainId: CHAIN_ID,
    address: '0x52F24a5e03aee338Da5fd9Df68D2b6FAe1178827',
    decimals: 18,
    symbol: 'ankrBNB',
    name: 'Ankr Staked BNB',
    icon: 'https://ipfs.near.social/ipfs/bafkreiazxoiq645ur3vv2cyc2mhh47ke3bhlahg3hccka64q6s4ydnvit4'
  },

  frxeth: {
    chainId: CHAIN_ID,
    address: '0x64048A7eEcF3a2F1BA9e144aAc3D7dB6e58F555e',
    decimals: 18,
    symbol: 'frxETH',
    name: 'Frax Ether',
    icon: '/assets/tokens/frxeth.webp'
  },

  bnbx: {
    chainId: CHAIN_ID,
    address: '0x1bdd3Cf7F79cfB8EdbB955f20ad99211551BA275',
    decimals: 18,
    symbol: 'BNBx',
    name: 'Liquid Staking BNB',
    icon: 'https://ipfs.near.social/ipfs/bafkreiaw2yydqsipgor2jilgogehuitxhe7hodgw5fyi5j2q7zfhpau22y'
  },

  stkbnb: {
    chainId: CHAIN_ID,
    address: '0xc2E9d07F66A89c44062459A47a0D2Dc038E4fb16',
    decimals: 18,
    symbol: 'stkBNB',
    name: 'Staked BNB',
    icon: 'https://ipfs.near.social/ipfs/bafkreideov3wvuqwgwu5irionwnkka7jqeflqoedzqpf6m2ylqewmto4ei'
  },
  wbnb: {
    chainId: CHAIN_ID,
    address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    decimals: 18,
    symbol: 'WBNB',
    name: 'Wrapped BNB',
    icon: 'https://ipfs.near.social/ipfs/bafkreiaeq6ca67je5ocago6vk2efwxiqurxgemputx7p2nt6n2p3zo65xq'
  },
  btcb: {
    chainId: CHAIN_ID,
    address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    decimals: 18,
    symbol: 'BTCB',
    name: 'Binance-Peg BTCB Token',
    icon: '/assets/tokens/btcb.webp'
  },
  bscusd: {
    chainId: CHAIN_ID,
    address: '0x55d398326f99059fF775485246999027B3197955',
    decimals: 18,
    symbol: 'BSC-USD',
    name: 'Binance-Peg BSC-USD',
    icon: 'https://ipfs.near.social/ipfs/bafkreigefu6rjc52vz5nfa4zd7p43ry5x4gam4dhkjxihnoszhdg46csvq'
  },
  usdc: {
    chainId: CHAIN_ID,
    address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    decimals: 18,
    symbol: 'USDC',
    name: 'Binance-Peg USD Coin',
    icon: '/assets/tokens/usdc.png'
  },
  busd: {
    chainId: CHAIN_ID,
    address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    decimals: 18,
    symbol: 'BUSD',
    name: 'Binance-Peg BUSD Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreibp36dfkfjzgnnbb7u4jxh57gpjmfjerc6pefmyzhueulz5ovd5xy'
  },
  tusd: {
    chainId: CHAIN_ID,
    address: '0x40af3827F39D0EAcBF4A168f8D4ee67c121D11c9',
    decimals: 18,
    symbol: 'TUSD',
    name: 'TrueUSD',
    icon: 'https://ipfs.near.social/ipfs/bafkreibxsfa4pd4tpotiibvnv22dmj6mswqgdnljrrvdjbsatbapyxdsjq'
  },
  bsw: {
    chainId: CHAIN_ID,
    address: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    decimals: 18,
    symbol: 'BSW',
    name: 'Biswap',
    icon: 'https://ipfs.near.social/ipfs/bafkreihwjl6o3j42bbetjurgfpiemxipw7evqm6aumk4bgy2zmspejpiwm'
  },
  banana: {
    chainId: CHAIN_ID,
    address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    decimals: 18,
    symbol: 'BANANA',
    name: 'ApeSwapFinance Banana',
    icon: 'https://ipfs.near.social/ipfs/bafkreifglo7ltnhvlhns7vdroqdboaenya4zkldleandcwwwjffpmr3hjm'
  },
  chrp: {
    chainId: CHAIN_ID,
    address: '0xeD00Fc7D48B57B81FE65D1cE71c0985e4CF442CB',
    decimals: 18,
    symbol: 'CHRP',
    name: 'Chirpley Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreiey7bmhii4r7eywnehfsdlfsc2xbth64yavdwbn6aktadpijklrje'
  },
  ceek: {
    chainId: CHAIN_ID,
    address: '0xe0F94Ac5462997D2BC57287Ac3a3aE4C31345D66',
    decimals: 18,
    symbol: 'CEEK',
    name: 'CEEK',
    icon: 'https://ipfs.near.social/ipfs/bafkreiav2q7czoy3725mgxjrprbfvkepe3xn4yl4vszp7dxpjltqzo7coy'
  },
  jones: {
    chainId: CHAIN_ID,
    address: '0x10393c20975cF177a3513071bC110f7962CD67da',
    decimals: 18,
    symbol: 'JONES',
    name: 'Jones DAO',
    icon: 'https://arbiscan.io/token/images/jonesdaoarb_32.png'
  },
  orn: {
    chainId: CHAIN_ID,
    address: '0xe4CA1F75ECA6214393fCE1C1b316C237664EaA8e',
    decimals: 8,
    symbol: 'ORN',
    name: 'Orion Protocol',
    icon: 'https://ipfs.near.social/ipfs/bafkreif5d2cyavxamgmr6yhpl3de4wl3wxtakva52sbsl2fsondyqbdusm'
  },
  inj: {
    chainId: CHAIN_ID,
    address: '0xa2B726B1145A4773F68593CF171187d8EBe4d495',
    decimals: 18,
    symbol: 'INJ',
    name: 'Injective Protocol',
    icon: 'https://ipfs.near.social/ipfs/bafkreihd5xzcl7q3ad7nxutohajxob6cw5z254wczuy2fflxjnmz4v4vse'
  },
  wbeth: {
    chainId: CHAIN_ID,
    address: '0xa2E3356610840701BDf5611a53974510Ae27E2e1',
    decimals: 18,
    symbol: 'wBETH',
    name: 'Wrapped Binance Beacon ETH',
    icon: 'https://ipfs.near.social/ipfs/bafkreico5syki2u7yolajlmkjhjgkvudfz6cie56a3mgyyz7ee3wpiu2ka'
  },
  xrp: {
    chainId: CHAIN_ID,
    address: '0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE',
    decimals: 18,
    symbol: 'XRP',
    name: 'Binance-Peg XRP Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreie346iekzsrpu6o7k3puywujn5knwz2mhs5l24ahjccke5t3stiqu'
  },
  ltc: {
    chainId: CHAIN_ID,
    address: '0x4338665CBB7B2485A8855A139b75D5e34AB0DB94',
    decimals: 18,
    symbol: 'LTC',
    name: 'Binance-Peg Litecoin Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreidohcluexqrgvgynqbefyrlobivfrxcqfgfgi2szqyldammjdsffu'
  },
  link: {
    chainId: CHAIN_ID,
    address: '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD',
    decimals: 18,
    symbol: 'LINK',
    name: 'Binance-Peg ChainLink Token',
    icon: '/assets/tokens/link.svg'
  },
  ada: {
    chainId: CHAIN_ID,
    address: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
    decimals: 18,
    symbol: 'ADA',
    name: 'Binance-Peg Cardano Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreie5pjxsidvi3pb3frqo53hjlvaolb4aqagj5drku5ksmtcdyj7fiq'
  },
  cake: {
    chainId: CHAIN_ID,
    address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    decimals: 18,
    symbol: 'CAKE',
    name: 'PancakeSwap Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreigj4avciznhfu3j3pwqiqjq367x3tj2rmoduccyh3otk4c2sjt3hq'
  },
  rdnt: {
    chainId: CHAIN_ID,
    address: '0x3082CC23568eA640225c2467653dB90e9250AaA0',
    decimals: 18,
    symbol: 'RDNT',
    name: 'Radiant',
    icon: '/assets/tokens/rdnt.png'
  },
  dai: {
    chainId: CHAIN_ID,
    address: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    decimals: 18,
    symbol: 'DAI',
    name: 'Binance-Peg Dai Token',
    icon: '/assets/tokens/dai.png'
  },
  dot: {
    chainId: CHAIN_ID,
    address: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
    decimals: 18,
    symbol: 'DOT',
    name: 'Binance-Peg Polkadot Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreibcad5suduuffi32kl4f5b2d44yhax32ogquv3jbcswdq2sxng5wy'
  },
  atom: {
    chainId: CHAIN_ID,
    address: '0x0eb3a705fc54725037cc9e008bdede697f62f335',
    decimals: 18,
    symbol: 'ATOM',
    name: 'Binance-Peg Cosmos Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreibkqo2qpkrybcomebwt26krp3hojp5xlxgg633uh2uetdisevff5q'
  },
  usx: {
    chainId: CHAIN_ID,
    address: '0xB5102CeE1528Ce2C760893034A4603663495fD72',
    decimals: 18,
    symbol: 'USX',
    name: 'dForce USD',
    icon: 'https://ipfs.near.social/ipfs/bafkreidgvv2b5nhtzevkhbaap5orilu5cuxq72q73ffntbjaji3piwwq3q'
  },
  tatom: {
    chainId: CHAIN_ID,
    address: '0xa422885120A6e6beA36949737165D681759Bb5bb',
    decimals: 18,
    symbol: 'tATOM',
    name: 'tATOM',
    icon: 'https://ipfs.near.social/ipfs/bafkreih45rzlmuf44vtrabdp36kq3fco7z4bzbhzztv4krhswdrc5v7jea'
  },
  xtz: {
    chainId: CHAIN_ID,
    address: '0x16939ef78684453bfdfb47825f8a5f714f12623a',
    decimals: 18,
    symbol: 'XTZ',
    name: 'Binance-Peg Tezos Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreiccgnzhzhuvvklrmfndggxh75s73bu4hs7bazxjs5ocu564z2646m'
  },
  rbnb: {
    chainId: CHAIN_ID,
    address: '0xF027E525D491ef6ffCC478555FBb3CFabB3406a6',
    decimals: 18,
    symbol: 'rBNB',
    name: 'StaFi rBNB',
    icon: 'https://ipfs.near.social/ipfs/bafkreiengq54zz5v47fe2ebgtuwobc7n3zzctdtcagpmwlbyrjvrmbe43a'
  },
  ratom: {
    chainId: CHAIN_ID,
    address: '0x1e5f6d5355ae5f1c5c687d3041c55f0aeec57eab',
    decimals: 18,
    symbol: 'rATOM',
    name: 'StaFi rATOM',
    icon: 'https://ipfs.near.social/ipfs/bafkreidu5prvhasx4yno6y5oapwqatvrf4cb3pm4vl2uvg5qmxemkoc6ou'
  },
  xvs: {
    chainId: CHAIN_ID,
    address: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    decimals: 18,
    symbol: 'XVS',
    name: 'Venus',
    icon: '/images/tokens/xvs.svg'
  },
  valas: {
    chainId: CHAIN_ID,
    address: '0xB1EbdD56729940089Ecc3aD0BBEEB12b6842ea6F',
    decimals: 18,
    symbol: 'VALAS',
    name: 'Valas Finance Protocol Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreihlb7bnkmkjil6syoiznhslzyvt5xpyn3ih54ywwvlvvxti7ywbiu'
  },
  wsteth: {
    chainId: CHAIN_ID,
    address: '0x26c5e01524d2E6280A48F2c50fF6De7e52E9611C',
    decimals: 18,
    symbol: 'wstETH',
    name: 'Wrapped liquid staked Ether 2.0',
    icon: 'https://ipfs.near.social/ipfs/bafkreie5mwrdg7fgm3hhkx5kj5esozzklvaofwjkx6uf3rii54c3j5jrci'
  },
  ftm: {
    chainId: CHAIN_ID,
    address: '0xAD29AbB318791D579433D831ed122aFeAf29dcfe',
    decimals: 18,
    symbol: 'FTM',
    name: 'Fantom',
    icon: 'https://ipfs.near.social/ipfs/bafkreiafr3lzhqm2agwfze4manviwv2qitje72qisw2yyxauocoxejts5q'
  },
  weeth: {
    chainId: CHAIN_ID,
    address: '0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A',
    decimals: 18,
    symbol: 'weETH',
    name: 'Wrapped eETH',
    icon: 'https://ipfs.near.social/ipfs/bafkreibtkqtmrcwuqnnyimojsk3jekwomtxpvbarwh7fbaz4kvvhzhzh3q'
  },
  'ankr-eth': {
    chainId: CHAIN_ID,
    address: '0xe05A08226c49b636ACf99c40Da8DC6aF83CE5bB3',
    decimals: 18,
    symbol: 'ankrETH',
    name: 'Ankr Staked ETH',
    icon: 'https://ipfs.near.social/ipfs/bafkreigq26tdgnyrwg45swnx5v3oogy232z2q46cwbvd6jkirc4aqyz5nq'
  },
  matic: {
    chainId: CHAIN_ID,
    address: '0xCC42724C6683B7E57334c4E856f4c9965ED682bD',
    decimals: 18,
    symbol: 'MATIC',
    name: 'Matic Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreihhijqfwysk3ck524rx7ult2pmuxs6tsfz5mvq2nlsq2mginak7wm'
  },
  bfg: {
    chainId: CHAIN_ID,
    address: '0xBb46693eBbEa1aC2070E59B4D043b47e2e095f86',
    decimals: 18,
    symbol: 'BFG',
    name: 'BFG Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreigsnt2nifurcl7uplxshx7rl42siblggww5ekmznwgsqy5q7aopiq'
  },
  sfp: {
    chainId: CHAIN_ID,
    address: '0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb',
    decimals: 18,
    symbol: 'SFP',
    name: 'SafePal Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreig6ma2g2jiyab56dlz7jbe2wmttjkyvtgtdwgrapjhctrs6phqxxe'
  },
  floki: {
    chainId: CHAIN_ID,
    address: '0xfb5B838b6cfEEdC2873aB27866079AC55363D37E',
    decimals: 9,
    symbol: 'FLOKI',
    name: 'FLOKI',
    icon: 'https://ipfs.near.social/ipfs/bafkreibgtfs6snnxbxox5qlf2xaa3yp7mhsmzgux7w2zw4q4sblc3bitxe'
  },
  btc: {
    chainId: CHAIN_ID,
    address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    decimals: 18,
    symbol: 'BTC',
    name: 'Bitcoin',
    icon: 'https://ipfs.near.social/ipfs/bafkreih4pf5limotwzzfnp6lqn6dfpnofa7ujqnvj3h52bz3f7x4fxdnjm'
  },
  coti: {
    chainId: CHAIN_ID,
    address: '0xAdBAF88B39D37Dc68775eD1541F1bf83A5A45feB',
    decimals: 18,
    symbol: 'COTI',
    name: 'COTI',
    icon: 'https://ipfs.near.social/ipfs/bafkreibkmf65vcg35f6quxs6irpekycvx6nfb7to5szf4sm3q5xmggjyoe'
  },
  egld: {
    chainId: CHAIN_ID,
    address: '0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe',
    decimals: 18,
    symbol: 'EGLD',
    name: 'Elrond',
    icon: 'https://ipfs.near.social/ipfs/bafkreicp35o4s373anhoavryqvcm4zad7umjsby5alb767wgsdg4rbjegi'
  },
  abond: {
    address: '0x34294AfABCbaFfc616ac6614F6d2e17260b78BEd',
    chainId: CHAIN_ID,
    symbol: 'ABOND',
    decimals: 18,
    name: 'ApeBond',
    icon: '/images/tokens/abond.svg'
  },
  slisBNB: {
    address: '0xB0b84D294e0C75A6abe60171b70edEb2EFd14A1B',
    chainId: CHAIN_ID,
    symbol: 'slisBNB',
    decimals: 18,
    name: 'Staked Lista BNB',
    icon: '/images/tokens/slisBNB.png'
  }
};
