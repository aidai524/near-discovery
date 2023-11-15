export default {
  chainId: 59144,
  explor: 'https://lineascan.build',
  wethToken: {
    chainId: 59144,
    address: '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f',
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
    icon: 'https://ipfs.near.social/ipfs/bafkreihyzmiuawyekwiyofkzm25xzrrfenhvadi6lb42juvq7tah2u7ha4',
  },
  contracts: {
    routerAddress: '0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a',
    quoterAddress: '0x42bE4D6527829FeFA1493e1fb9F3676d2425C3C1',
    positionAddress: '0x4615C383F85D0a2BbED973d83ccecf5CB7121463',
    multiAddress: '0xcA11bde05977b3631167028862bE2a173976CA11',
    factoryAddress: '0x31FAfd4889FA1269F7a13A66eE0fB458f27D72A9',
    nftAddress: '0x4615C383F85D0a2BbED973d83ccecf5CB7121463',
    tickMathAddress: '0x485702c21eb1F96998Cae89A5D9cA99cbEebfF7D',
  },
  tokens: {
    native: {
      chainId: 59144,
      name: 'ETH',
      symbol: 'ETH',
      icon: 'https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628',
      decimals: 18,
      isNative: true,
      address: 'native',
    },
    '0xA219439258ca9da29E9Cc4cE5596924745e12B93': {
      chainId: 59144,
      address: '0xA219439258ca9da29E9Cc4cE5596924745e12B93',
      name: 'USDT',
      symbol: 'USDT',
      icon: 'https://assets.coingecko.com/coins/images/325/standard/Tether.png?1696501661',
      decimals: 6,
    },
    '0x176211869cA2b568f2A7D4EE941E073a821EE1ff': {
      chainId: 59144,
      address: '0x176211869cA2b568f2A7D4EE941E073a821EE1ff',
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
      icon: 'https://assets.coingecko.com/coins/images/6319/standard/usdc.png?1696506694',
    },
    '0x6bAA318CF7C51C76e17ae1EbE9Bbff96AE017aCB': {
      chainId: 59144,
      address: '0x6bAA318CF7C51C76e17ae1EbE9Bbff96AE017aCB',
      name: 'ApeCoin',
      symbol: 'APE',
      icon: `https://assets.dapdap.net/images/${'0x6bAA318CF7C51C76e17ae1EbE9Bbff96AE017aCB'.toLowerCase()}.png`,
      decimals: 18,
    },
    '0x4AF15ec2A0BD43Db75dd04E62FAA3B8EF36b00d5': {
      chainId: 59144,
      address: '0x4AF15ec2A0BD43Db75dd04E62FAA3B8EF36b00d5',
      decimals: 18,
      symbol: 'DAI',
      name: 'Dai Stablecoin',
      icon: `https://assets.dapdap.net/images/${'0x4AF15ec2A0BD43Db75dd04E62FAA3B8EF36b00d5'.toLowerCase()}.png`,
    },
    '0x0e5F2ee8C29e7eBc14e45dA7FF90566d8c407dB7': {
      chainId: 59144,
      address: '0x0e5F2ee8C29e7eBc14e45dA7FF90566d8c407dB7',
      decimals: 18,
      symbol: 'HAPI',
      name: 'HAPI',
      icon: `https://assets.dapdap.net/images/${'0x0e5F2ee8C29e7eBc14e45dA7FF90566d8c407dB7'.toLowerCase()}.png`,
    },
    '0x3b2F62d42DB19B30588648bf1c184865D4C3B1D6': {
      chainId: 59144,
      address: '0x3b2F62d42DB19B30588648bf1c184865D4C3B1D6',
      name: 'Kyber Network Crystal v2',
      symbol: 'KNC',
      icon: `https://assets.dapdap.net/images/${'0x3b2F62d42DB19B30588648bf1c184865D4C3B1D6'.toLowerCase()}.png`,
      decimals: 18,
    },
    '0x0e076AAFd86a71dCEAC65508DAF975425c9D0cB6': {
      chainId: 59144,
      address: '0x0e076AAFd86a71dCEAC65508DAF975425c9D0cB6',
      decimals: 18,
      symbol: 'LDO',
      name: 'Lido DAO Token',
      icon: `https://assets.dapdap.net/images/${'0x0e076AAFd86a71dCEAC65508DAF975425c9D0cB6'.toLowerCase()}.png`,
    },
    '0x5B16228B94b68C7cE33AF2ACc5663eBdE4dCFA2d': {
      chainId: 59144,
      address: '0x5B16228B94b68C7cE33AF2ACc5663eBdE4dCFA2d',
      name: 'ChainLink Token',
      symbol: 'LINK',
      icon: `https://assets.dapdap.net/images/${'0x5B16228B94b68C7cE33AF2ACc5663eBdE4dCFA2d'.toLowerCase()}.png`,
      decimals: 18,
    },
    '0x7da14988E4f390C2E34ed41DF1814467D3aDe0c3': {
      chainId: 59144,
      address: '0x7da14988E4f390C2E34ed41DF1814467D3aDe0c3',
      decimals: 18,
      symbol: 'PEPE',
      name: 'Pepe',
      icon: `https://assets.dapdap.net/images/${'0x7da14988E4f390C2E34ed41DF1814467D3aDe0c3'.toLowerCase()}.png`,
    },
    '0x99AD925C1Dc14Ac7cc6ca1244eeF8043C74E99d5': {
      chainId: 59144,
      address: '0x99AD925C1Dc14Ac7cc6ca1244eeF8043C74E99d5',
      name: 'SHIBA INU',
      symbol: 'SHIB',
      icon: `https://assets.dapdap.net/images/${'0x99AD925C1Dc14Ac7cc6ca1244eeF8043C74E99d5'.toLowerCase()}.png`,
      decimals: 18,
    },
    '0x636B22bC471c955A8DB60f28D4795066a8201fa3': {
      chainId: 59144,
      address: '0x636B22bC471c955A8DB60f28D4795066a8201fa3',
      decimals: 18,
      symbol: 'UNI',
      name: 'Uniswap',
      icon: `https://assets.dapdap.net/images/${'0x636B22bC471c955A8DB60f28D4795066a8201fa3'.toLowerCase()}.png`,
    },
    '0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4': {
      chainId: 59144,
      address: '0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4',
      name: 'Wrapped BTC',
      symbol: 'WBTC',
      icon: `https://assets.dapdap.net/images/${'0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4'.toLowerCase()}.png`,
      decimals: 8,
    },
    '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f': {
      chainId: 59144,
      address: '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f',
      decimals: 18,
      symbol: 'WETH',
      name: 'Wrapped Ether',
      icon: 'https://ipfs.near.social/ipfs/bafkreihyzmiuawyekwiyofkzm25xzrrfenhvadi6lb42juvq7tah2u7ha4',
    },
  },
};
