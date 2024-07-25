import type { Token } from '@/types';

const CHAIN_ID = 1;
export const ethereum: { [key: string]: Token } = {
  eth: {
    chainId: CHAIN_ID,
    name: 'ETH',
    symbol: 'ETH',
    icon: '/images/lrts/tokens/eth.svg',
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
    icon: '/images/lrts/tokens/ezETH.svg',
    desc: "ezETH is the liquid restaking token representing a user's restaked position at Renzo. Users can deposit native ETH or LSTs and receive $ezETH.",
  },
  rsETH: {
    address: '0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7',
    chainId: CHAIN_ID,
    symbol: 'rsETH',
    decimals: 18,
    name: 'rsETH',
    icon: '/images/lrts/tokens/rsETH.svg',
    desc: 'rsETH is a Liquid Restaked Token (LRT) issued by Kelp DAO designed to offer liquidity to illiquid assets deposited into restaking platforms, such as EigenLayer. It aims to address the risks and challenges posed by the current offering of restaking.',
  },
  stETH: {
    address: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
    chainId: CHAIN_ID,
    decimals: 18,
    name: 'Liquid staked Ether 2.0',
    symbol: 'stETH',
    icon: '/images/lrts/tokens/stETH.svg',
    desc: 'stETH is a transferable rebasing utility token representing a share of the total ETH staked through the protocol, which consists of user deposits and staking rewards. ',
  },
  mETH: {
    address: '0xd5f7838f5c461feff7fe49ea5ebaf7728bb0adfa',
    chainId: CHAIN_ID,
    decimals: 18,
    name: 'mETH',
    symbol: 'mETH',
    icon: '/images/lrts/tokens/mETH.svg',
    desc: 'Mantle Liquid Staking Protocol (LSP) is a permissionless, non-custodial ETH liquid staking protocol deployed on Ethereum L1 and governed by Mantle. Mantle Staked Ether (mETH) serves as the value-accumulating receipt token.',
  },
  rETH: {
    address: '0xae78736cd615f374d3085123a210448e74fc6393',
    chainId: CHAIN_ID,
    decimals: 18,
    name: 'Rocket Pool ETH',
    symbol: 'rETH',
    icon: '/images/lrts/tokens/krETH.svg',
    desc: "A token that represents a regular user's deposit into the staking pool. Users receive an equivalent value of rETH token for each ETH coin they deposit. As interest is earned by staking on the Ethereum network the value of the rETH token increases with respect to ETH.",
  },
  frxETH: {
    address: '0x5E8422345238F34275888049021821E8E08CAa1f',
    chainId: CHAIN_ID,
    decimals: 18,
    name: 'Staked Frax Ether',
    symbol: 'frxETH',
    icon: '/images/lrts/tokens/frxETH.svg',
  },
  sfrxETH: {
    address: '0xac3e018457b222d93114458476f3e3416abbe38f',
    chainId: CHAIN_ID,
    decimals: 18,
    name: 'Staked Frax Ether',
    symbol: 'sfrxETH',
    icon: '/images/lrts/tokens/sfrxETH.svg',
    desc: 'Staked FRAX (sFRAX) is an ERC4626 staking vault that distributes part of the Frax Protocol yield weekly to stakers denominated in FRAX stablecoins. The sFRAX token represents pro rata deposits within the vault and is always withdrawable for FRAX stablecoins at the pro rata rate at all times. ',
  },
  inmETH: {
    address: '0xecf3672a6d2147e2a77f07069fb48d8cf6f6fbf9',
    chainId: CHAIN_ID,
    decimals: 18,
    name: 'Inception Restaked mETH',
    symbol: 'inmETH',
    icon: '/images/lrts/tokens/inmETH.svg',
    desc: 'inmETH represents the Isolated Liquid Restaking Token (iLRT) for mETH. Users deposit mETH into specialized vaults to receive inmETH, increasing liquidity, earning staking rewards, and engaging in DeFi activities with tailored risk management.',
  },
  mmETH: {
    address: '0x8a053350ca5f9352a16ded26ab333e2d251dad7c',
    chainId: CHAIN_ID,
    decimals: 18,
    name: 'mmETH',
    symbol: 'mmETH',
    icon: '/images/lrts/tokens/mmETH.svg',
    desc: 'mmETH — An Isolated Liquid Restaked version of the mETH LST created by Eigenpie. mmETH can only be minted by restaking mETH from Mantle via Eigenpie and is not related to any other asset.',
  },
  kmETH: {
    address: '0x7c22725d1e0871f0043397c9761ad99a86ffd498',
    chainId: CHAIN_ID,
    decimals: 18,
    name: '',
    symbol: 'kmETH',
    icon: '/images/lrts/tokens/kmETH.svg',
    desc: "kmETH is a Liquid Staking Token (LRT) on the Karak platform. Users can restake their mETH from Mantle into Karak smart contracts. This allows them to continue earning rewards while leveraging Karak's features for additional returns.",
  },
  rmETH: {
    address: '0xcC9F8c2A6366556e1899e40782B7076Db87dcE27',
    chainId: CHAIN_ID,
    decimals: 18,
    name: '',
    symbol: 'rmETH',
    icon: '/images/lrts/tokens/rmETH.svg',
    desc: 'rmETH are decentralized, 1:1 LST-hard-pegged rebasing tokens. As yield-bearing tokens, they allow the liquid rehypothecation of yield for holders through EigenLayer. ',
  },
  instETH: {
    address: '0x7fa768e035f956c41d6aeaa3bd857e7e5141cad5',
    chainId: CHAIN_ID,
    decimals: 18,
    name: '',
    symbol: 'instETH',
    icon: '/images/lrts/tokens/instETH.svg',
    desc: 'instETH is an Isolated Liquid Restaking Token (iLRT) for stETH. By depositing stETH into dedicated vaults, users receive instETH, enhancing liquidity, earning rewards, and participating in DeFi activities with a targeted risk management approach.',
  },
  mstETH: {
    address: '0x49446A0874197839D15395B908328a74ccc96Bc0',
    chainId: CHAIN_ID,
    decimals: 18,
    name: '',
    symbol: 'mstETH',
    icon: '/images/lrts/tokens/mstETH.svg',
    desc: 'mstETH — An Isolated Liquid Restaked version of the stETH LST created by Eigenpie. mstETH can only be minted by restaking stETH from Lido via Eigenpie and is not related to any other asset.',
  },
  pufETH: {
    address: '0xd9a442856c234a39a81a089c06451ebaa4306a72',
    chainId: CHAIN_ID,
    decimals: 18,
    name: '',
    symbol: 'pufETH',
    icon: '/images/lrts/tokens/pufETH.svg',
    desc: "Stakers deposit ETH to the PufferVault contract to mint the pufETH nLRT. At the protocol's inception, pufETH's conversion rate is one-to-one, but is expected to increase over time. Assuming the protocol performs well, i.e., accrues more rewards than penalties, the amount of ETH reedamable for pufETH will increase.",
  },
  weETH: {
    address: '0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee',
    chainId: CHAIN_ID,
    decimals: 18,
    name: '',
    symbol: 'weETH',
    icon: '/images/lrts/tokens/weETH.svg',
  },
  rstETH: {
    address: '0xc3Ac43635d7Aa9Bf361094656C85de3311bE9a2c',
    chainId: CHAIN_ID,
    decimals: 18,
    name: '',
    symbol: 'rstETH',
    icon: '/images/lrts/tokens/rstETH.svg',
    desc: 'The rstETH token is a tokenised version of restaked Ethereum –becoming the first liquid restaking token (LRT). It is a rebasing, yield bearing token that allows holders to earn EigenLayer native rewards. By depositing LSTs into Restake Finance, users will receive an equivalent amount of rstETH.',
  },
  inrETH: {
    address: '0x80d69e79258fe9d056c822461c4eb0b4ca8802e2',
    chainId: CHAIN_ID,
    decimals: 18,
    name: '',
    symbol: 'inrETH',
    icon: '/images/lrts/tokens/inrETH.svg',
    desc: 'inrETH is the Isolated Liquid Restaking Token (iLRT) for rETH. By using rETH as collateral in dedicated vaults, users get inrETH, which boosts liquidity, provides staking rewards, and allows participation in DeFi activities with specific risk management.',
  },
  krETH: {
    address: '0x8e475a4f7820a4b6c0ff229f74fb4762f0813c47',
    chainId: CHAIN_ID,
    decimals: 18,
    name: '',
    symbol: 'krETH',
    icon: '/images/lrts/tokens/krETH.svg',
    desc: "krETH is a Liquid Staking Token (LRT) on the Karak platform. Users can restake their rETH from Rocket Pool into Karak smart contracts. This allows them to continue earning rewards while leveraging Karak's features for additional returns.",
  },
  mrETH: {
    address: '0xd05728038681bcc79b2d5aeb4d9b002e66c93a40',
    chainId: CHAIN_ID,
    decimals: 18,
    name: '',
    symbol: 'mrETH',
    icon: '/images/lrts/tokens/krETH.svg',
    desc: 'mrETH — An Isolated Liquid Restaked version of the rETH LST created by Eigenpie. mrETH can only be minted by restaking rETH from Rocket Pool via Eigenpie and is not related to any other asset.',
  },
  rosETH: {
    address: '0x3A2725556Dde7B21fBe3dD64A4913ff29faba6A1',
    chainId: CHAIN_ID,
    decimals: 18,
    name: '',
    symbol: 'rosETH',
    icon: '',
  },
  insfrxETH: {
    address: '0x668308d77be3533c909a692302cb4d135bf8041c',
    chainId: CHAIN_ID,
    decimals: 18,
    name: '',
    symbol: 'insfrxETH',
    icon: '/images/lrts/tokens/insfrxETH.svg',
    desc: 'insfrxETH is the Isolated Liquid Restaking Token (iLRT) for sfrxETH. By using sfrxETH as collateral in dedicated vaults, users get insfrxETH, which boosts liquidity, provides staking rewards, and allows participation in DeFi activities with specific risk management.',
  },
  rsfrxETH: {
    address: '0xdcF8905091a1c7b773DdB894d805178701b32b55',
    chainId: CHAIN_ID,
    decimals: 18,
    name: '',
    symbol: 'rsfrxETH',
    icon: '/images/lrts/tokens/rsfrxETH.svg',
    desc: 'rsfrxETH allow for liquid exposure to additive yield to be accrued through restaking in EigenLayer, on top of the tradititional Ethereum staking yield. Restaking enables LSTs to be used as cryptoeconomic security for protocols that require actively validated services.',
  },
  eETH: {
    address: '0x35fA164735182de50811E8e2E824cFb9B6118ac2',
    chainId: CHAIN_ID,
    decimals: 18,
    name: '',
    symbol: 'eETH',
    icon: '/images/lrts/tokens/weETH.svg',
    desc: 'eETH, brought to you by ether.fi, is a Liquid Restaking Token that allows users to stake their ETH to accrue staking rewards and automatically restake their ETH in EigenLayer. ',
  },
  msfrxETH: {
    address: '0x879054273cb2dad631980fa4efe6d25eefe08aa4',
    chainId: CHAIN_ID,
    decimals: 18,
    name: '',
    symbol: 'msfrxETH',
    icon: '/images/lrts/tokens/msfrxETH.svg',
    desc: 'msfrxETH — An Isolated Liquid Restaked version of the sfrxETH LST created by Eigenpie. msfrxETH can only be minted by restaking sfrxETH from Frax Finance via Eigenpie and is not related to any other asset.',
  },
  ksfrxETH: {
    address: '0x1751e1e4d2c9fa99479c0c5574136f0dbd8f3eb8',
    chainId: CHAIN_ID,
    decimals: 18,
    name: '',
    symbol: 'ksfrxETH',
    icon: '/images/lrts/tokens/ksfrxETH.svg',
    desc: "ksfrxETH is a Liquid Staking Token (LRT) on the Karak platform. Users can restake their sfrxETH from frax into Karak smart contracts. This allows them to continue earning rewards while leveraging Karak's features for additional returns.",
  },
};
