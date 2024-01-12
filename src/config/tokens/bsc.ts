import type { Token } from '@/types';

const CHAIN_ID = 56;
export const bsc: { [key: string]: Token } = {
  usdt: {
    chainId: CHAIN_ID,
    address: '0x55d398326f99059fF775485246999027B3197955',
    symbol: 'BSC-USD',
    name: 'Binance-Peg BSC-USD',
    icon: 'https://assets.coingecko.com/coins/images/325/standard/Tether.png?1696501661',
    decimals: 18,
  },
  usdd: {
    chainId: CHAIN_ID,
    address: '0xd17479997F34dd9156Deef8F95A52D81D265be9c',
    name: 'Decentralized USD',
    symbol: 'USDD',
    icon: 'https://assets.coingecko.com/coins/images/25380/standard/UUSD.jpg?1696524513',
    decimals: 18,
  },
  mai: {
    chainId: CHAIN_ID,
    address: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
    name: 'Mai Stablecoin',
    symbol: 'MAI',
    icon: 'https://assets.coingecko.com/coins/images/15264/standard/mimatic-red.png?1696514916',
    decimals: 18,
  },
  bnb: {
    chainId: CHAIN_ID,
    decimals: 18,
    symbol: 'BNB',
    name: 'BNB',
    icon: 'https://assets.dapdap.net/images/bafkreiaeq6ca67je5ocago6vk2efwxiqurxgemputx7p2nt6n2p3zo65xq.svg',
    isNative: true,
    address: 'native',
  },
  eth: {
    chainId: CHAIN_ID,
    address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    decimals: 18,
    symbol: 'ETH',
    name: 'Binance-Peg Ethereum Token',
    icon: 'https://assets.dapdap.net/images/bafkreibspnls7q67q25r2ifv2rrfmvzl744pzuh3s5ekigeqkmyycl2auq.png',
  },
  the: {
    chainId: CHAIN_ID,
    address: '0xF4C8E32EaDEC4BFe97E0F595AdD0f4450a863a11',
    decimals: 18,
    symbol: 'THE',
    name: 'THENA',
    icon: 'https://ipfs.near.social/ipfs/bafkreig4qvfooeyjhjhfobueyipuxxzxdxf5cqycsup35wll6qc3qijghi',
  },

  livethe: {
    chainId: CHAIN_ID,
    address: '0xCdC3A010A3473c0C4b2cB03D8489D6BA387B83CD',
    decimals: 18,
    symbol: 'liveTHE',
    name: 'liveThe',
    icon: 'https://ipfs.near.social/ipfs/bafkreicsajtjaej7icx44jaflxswdkdlpbb62ywtucfsgvd4drhwn5smqy',
  },

  ankrbnb: {
    chainId: CHAIN_ID,
    address: '0x52F24a5e03aee338Da5fd9Df68D2b6FAe1178827',
    decimals: 18,
    symbol: 'ankrBNB',
    name: 'Ankr Staked BNB',
    icon: 'https://ipfs.near.social/ipfs/bafkreiazxoiq645ur3vv2cyc2mhh47ke3bhlahg3hccka64q6s4ydnvit4',
  },

  frxeth: {
    chainId: CHAIN_ID,
    address: '0x64048A7eEcF3a2F1BA9e144aAc3D7dB6e58F555e',
    decimals: 18,
    symbol: 'frxETH',
    name: 'Frax Ether',
    icon: 'https://ipfs.near.social/ipfs/bafkreig2u6c72b4gy5nu3d57xlqzjb6ycf2luqnofdzq6btqzav3tqrqnq',
  },

  bnbx: {
    chainId: CHAIN_ID,
    address: '0x1bdd3Cf7F79cfB8EdbB955f20ad99211551BA275',
    decimals: 18,
    symbol: 'BNBx',
    name: 'Liquid Staking BNB',
    icon: 'https://ipfs.near.social/ipfs/bafkreiaw2yydqsipgor2jilgogehuitxhe7hodgw5fyi5j2q7zfhpau22y',
  },

  stkbnb: {
    chainId: CHAIN_ID,
    address: '0xc2E9d07F66A89c44062459A47a0D2Dc038E4fb16',
    decimals: 18,
    symbol: 'stkBNB',
    name: 'Staked BNB',
    icon: 'https://ipfs.near.social/ipfs/bafkreideov3wvuqwgwu5irionwnkka7jqeflqoedzqpf6m2ylqewmto4ei',
  },

  wbnb: {
    chainId: CHAIN_ID,
    address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    decimals: 18,
    symbol: 'WBNB',
    name: 'Wrapped BNB',
    icon: 'https://ipfs.near.social/ipfs/bafkreiaeq6ca67je5ocago6vk2efwxiqurxgemputx7p2nt6n2p3zo65xq',
  },
  btcb: {
    chainId: CHAIN_ID,
    address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    decimals: 18,
    symbol: 'BTCB',
    name: 'Binance-Peg BTCB Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreig2h2vpf7u7ukbgomgurcvvfyujl66qdrbsp6u2bcga3wdyxladii',
  },
  bscusd: {
    chainId: CHAIN_ID,
    address: '0x55d398326f99059fF775485246999027B3197955',
    decimals: 18,
    symbol: 'BSC-USD',
    name: 'Binance-Peg BSC-USD',
    icon: 'https://ipfs.near.social/ipfs/bafkreigefu6rjc52vz5nfa4zd7p43ry5x4gam4dhkjxihnoszhdg46csvq',
  },
  usdc: {
    chainId: CHAIN_ID,
    address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    decimals: 18,
    symbol: 'USDC',
    name: 'Binance-Peg USD Coin',
    icon: 'https://ipfs.near.social/ipfs/bafkreie4jihoa76mgyzxhw2yrapihzu2qhkjz6m7u4opoxjebzg6zc2lla',
  },
  busd: {
    chainId: CHAIN_ID,
    address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    decimals: 18,
    symbol: 'BUSD',
    name: 'Binance-Peg BUSD Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreibp36dfkfjzgnnbb7u4jxh57gpjmfjerc6pefmyzhueulz5ovd5xy',
  },
  bsw: {
    chainId: CHAIN_ID,
    address: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
    decimals: 18,
    symbol: 'BSW',
    name: 'Biswap',
    icon: 'https://ipfs.near.social/ipfs/bafkreihwjl6o3j42bbetjurgfpiemxipw7evqm6aumk4bgy2zmspejpiwm',
  },
  banana: {
    chainId: CHAIN_ID,
    address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    decimals: 18,
    symbol: 'BANANA',
    name: 'ApeSwapFinance Banana',
    icon: 'https://ipfs.near.social/ipfs/bafkreifglo7ltnhvlhns7vdroqdboaenya4zkldleandcwwwjffpmr3hjm',
  },
  chrp: {
    chainId: CHAIN_ID,
    address: '0xeD00Fc7D48B57B81FE65D1cE71c0985e4CF442CB',
    decimals: 18,
    symbol: 'CHRP',
    name: 'Chirpley Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreiey7bmhii4r7eywnehfsdlfsc2xbth64yavdwbn6aktadpijklrje',
  },
  ceek: {
    chainId: CHAIN_ID,
    address: '0xe0F94Ac5462997D2BC57287Ac3a3aE4C31345D66',
    decimals: 18,
    symbol: 'CEEK',
    name: 'CEEK',
    icon: 'https://ipfs.near.social/ipfs/bafkreiav2q7czoy3725mgxjrprbfvkepe3xn4yl4vszp7dxpjltqzo7coy',
  },
  jones: {
    chainId: CHAIN_ID,
    address: '0x10393c20975cF177a3513071bC110f7962CD67da',
    decimals: 18,
    symbol: 'JONES',
    name: 'Jones DAO',
    icon: 'https://arbiscan.io/token/images/jonesdaoarb_32.png',
  },
  orn: {
    chainId: CHAIN_ID,
    address: '0xe4CA1F75ECA6214393fCE1C1b316C237664EaA8e',
    decimals: 8,
    symbol: 'ORN',
    name: 'Orion Protocol',
    icon: 'https://ipfs.near.social/ipfs/bafkreibx6e6tsab3xxd6s7alev2tgvbjs4welhfndrrunsedvgopv2hmj4',
  },
  inj: {
    chainId: CHAIN_ID,
    address: '0xa2B726B1145A4773F68593CF171187d8EBe4d495',
    decimals: 18,
    symbol: 'INJ',
    name: 'Injective Protocol',
    icon: 'https://ipfs.near.social/ipfs/bafkreihd5xzcl7q3ad7nxutohajxob6cw5z254wczuy2fflxjnmz4v4vse',
  },
  wbeth: {
    chainId: CHAIN_ID,
    address: '0xa2E3356610840701BDf5611a53974510Ae27E2e1',
    decimals: 18,
    symbol: 'wBETH',
    name: 'Wrapped Binance Beacon ETH',
    icon: 'https://ipfs.near.social/ipfs/bafkreico5syki2u7yolajlmkjhjgkvudfz6cie56a3mgyyz7ee3wpiu2ka',
  },
  xrp: {
    chainId: CHAIN_ID,
    address: '0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE',
    decimals: 18,
    symbol: 'XRP',
    name: 'Binance-Peg XRP Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreie346iekzsrpu6o7k3puywujn5knwz2mhs5l24ahjccke5t3stiqu',
  },
  ltc: {
    chainId: CHAIN_ID,
    address: '0x4338665CBB7B2485A8855A139b75D5e34AB0DB94',
    decimals: 18,
    symbol: 'LTC',
    name: 'Binance-Peg Litecoin Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreidohcluexqrgvgynqbefyrlobivfrxcqfgfgi2szqyldammjdsffu',
  },
  link: {
    chainId: CHAIN_ID,
    address: '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD',
    decimals: 18,
    symbol: 'LINK',
    name: 'Binance-Peg ChainLink Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreidrq7qk3d6epwaxobq4gk7yowljr5tnslxwrsbd7vnw3srkt7ok3u',
  },
  ada: {
    chainId: CHAIN_ID,
    address: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
    decimals: 18,
    symbol: 'ADA',
    name: 'Binance-Peg Cardano Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreie5pjxsidvi3pb3frqo53hjlvaolb4aqagj5drku5ksmtcdyj7fiq',
  },
  cake: {
    chainId: CHAIN_ID,
    address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    decimals: 18,
    symbol: 'CAKE',
    name: 'PancakeSwap Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreigj4avciznhfu3j3pwqiqjq367x3tj2rmoduccyh3otk4c2sjt3hq',
  },
  rdnt: {
    chainId: CHAIN_ID,
    address: '0x3082CC23568eA640225c2467653dB90e9250AaA0',
    decimals: 18,
    symbol: 'RDNT',
    name: 'Radiant',
    icon: 'https://ipfs.near.social/ipfs/bafkreiboaplfrmdlyxumajlxnipkk4viu6pxqow7ue2ixlimgkenre2gru',
  },
  dai: {
    chainId: CHAIN_ID,
    address: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    decimals: 18,
    symbol: 'DAI',
    name: 'Binance-Peg Dai Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreieuxntkdzi2mzkzdcbk6kahwxqpftxnipxcwc4oe4p4jm2rhj2xhu',
  },
};
