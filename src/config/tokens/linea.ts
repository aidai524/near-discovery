import type { Token } from '@/types';

const CHAIN_ID = 59144;
export const linea: { [key: string]: Token } = {
  eth: {
    chainId: CHAIN_ID,
    name: 'ETH',
    symbol: 'ETH',
    icon: 'https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628',
    decimals: 18,
    isNative: true,
    address: 'native',
  },
  weth: {
    chainId: CHAIN_ID,
    address: '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f',
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
    icon: 'https://assets.coingecko.com/coins/images/2518/small/weth.png?1628852295',
  },
  axlusdc: {
    chainId: CHAIN_ID,
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    decimals: 6,
    symbol: 'axlUSDC',
    name: 'Axelar Wrapped USDC',
    icon: 'https://assets.coingecko.com/coins/images/26476/small/uausdc_D_3x.png?1690776252',
  },
  axlusdt: {
    chainId: CHAIN_ID,
    address: '0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6',
    decimals: 6,
    symbol: 'axlUSDT',
    name: 'Axelar Wrapped USDT',
    icon: 'https://assets.coingecko.com/coins/images/31002/small/uusdt_D_3x.png?1689648389',
  },
  hzn: {
    chainId: CHAIN_ID,
    address: '0x0B1A02A7309dFbfAD1Cd4adC096582C87e8A3Ac1',
    decimals: 18,
    symbol: 'HZN',
    name: 'Horizon',
    icon: 'https://assets.coingecko.com/coins/images/31156/small/Circle_logo_black_%281%29.png?1691040942',
  },
  usdc: {
    chainId: CHAIN_ID,
    address: '0x176211869cA2b568f2A7D4EE941E073a821EE1ff',
    decimals: 6,
    symbol: 'USDC',
    name: 'USDC.e',
    icon: 'https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389',
  },
  busd: {
    chainId: CHAIN_ID,
    address: '0x7d43AABC515C356145049227CeE54B608342c0ad',
    decimals: 18,
    symbol: 'BUSD',
    name: 'Binance USD',
    icon: 'https://assets.coingecko.com/coins/images/9576/small/BUSD.png?1568947766',
  },
  bnb: {
    chainId: CHAIN_ID,
    address: '0xf5C6825015280CdfD0b56903F9F8B5A2233476F5',
    decimals: 18,
    symbol: 'BNB',
    name: 'Binance Coin',
    icon: 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png?1644979850',
  },
  usdt: {
    chainId: CHAIN_ID,
    address: '0xA219439258ca9da29E9Cc4cE5596924745e12B93',
    decimals: 6,
    symbol: 'USDT',
    name: 'Tether USD ',
    icon: 'https://ipfs.near.social/ipfs/bafkreih45jy7ggj45ck34rf736kb67smsoa52wd7e46c2grh6etd3bhe5i',
  },
  dai: {
    chainId: CHAIN_ID,
    address: '0x4AF15ec2A0BD43Db75dd04E62FAA3B8EF36b00d5',
    decimals: 18,
    symbol: 'DAI',
    name: 'Dai Stablecoin ',
    icon: 'https://assets.coingecko.com/coins/images/9956/small/Badge_Dai.png?1687143508',
  },
  matic: {
    chainId: CHAIN_ID,
    address: '0x265B25e22bcd7f10a5bD6E6410F10537Cc7567e8',
    decimals: 18,
    symbol: 'MATIC',
    name: 'Matic Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreihhijqfwysk3ck524rx7ult2pmuxs6tsfz5mvq2nlsq2mginak7wm',
  },
  izi: {
    chainId: CHAIN_ID,
    address: '0x60D01EC2D5E98Ac51C8B4cF84DfCCE98D527c747',
    decimals: 18,
    symbol: 'iZi',
    name: 'izumi Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreifsgwu2zd6y2n5alekr5qgdhzoivlkl5wujtq3z7gnm5pw4jy7sgi',
  },
  wbtc: {
    chainId: CHAIN_ID,
    address: '0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4',
    decimals: 8,
    symbol: 'WBTC',
    name: 'Wrapped BTC',
    icon: 'https://assets.coingecko.com/coins/images/7598/small/wrapped_bitcoin_wbtc.png?1548822744',
  },
  lab: {
    chainId: CHAIN_ID,
    address: '0xB97F21D1f2508fF5c73E7B5AF02847640B1ff75d',
    decimals: 18,
    symbol: 'LAB',
    name: 'LineaBank Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreihjcqx2wtmzq6l2dobpx7oe5zb5epz3frvgzw6wfnojkps7d6cjce',
  },
  mendi: {
    chainId: CHAIN_ID,
    address: '0x43E8809ea748EFf3204ee01F08872F063e44065f',
    decimals: 18,
    symbol: 'MENDI',
    name: 'Mendi Finance',
    icon: 'https://ipfs.near.social/ipfs/bafkreihtevj6whwlekvhfymajsosbhkqxljqwumgniacye724pxvt24tk4',
  },
  wsteth: {
    chainId: CHAIN_ID,
    address: '0xB5beDd42000b71FddE22D3eE8a79Bd49A568fC8F',
    decimals: 18,
    symbol: 'wstETH',
    name: 'Wrapped liquid staked Ether 2.0',
    icon: 'https://ipfs.near.social/ipfs/bafkreibukwahpp2ei74ax5acm6p7uwcnbsfvdzkizsdzqu26yfbxndpvra',
  },
  cebusd: {
    chainId: CHAIN_ID,
    address: '0x7d43AABC515C356145049227CeE54B608342c0ad',
    decimals: 18,
    symbol: 'ceBUSD',
    name: 'Celer Network BUSD',
    icon: 'https://ipfs.near.social/ipfs/bafkreibp36dfkfjzgnnbb7u4jxh57gpjmfjerc6pefmyzhueulz5ovd5xy',
  },
  cake: {
    chainId: CHAIN_ID,
    address: '0x0D1E753a25eBda689453309112904807625bEFBe',
    decimals: 18,
    symbol: 'CAKE',
    name: 'PancakeSwap Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreigj4avciznhfu3j3pwqiqjq367x3tj2rmoduccyh3otk4c2sjt3hq',
  },
  xfit: {
    chainId: CHAIN_ID,
    address: '0x8c56017b172226fe024dea197748fc1eaccc82b1',
    decimals: 18,
    symbol: 'XFIT',
    name: 'XFIT',
    icon: '/images/tokens/xfit.webp',
  },
  mai: {
    chainId: CHAIN_ID,
    address: '0xf3b001d64c656e30a62fbaaca003b1336b4ce12a',
    decimals: 18,
    symbol: 'MAI',
    name: 'Mai Stablecoin ',
    icon: 'https://ipfs.near.social/ipfs/bafkreidburs6q3dzqnpvodhxl4a7o47sgsjoh2toryltts6zeaxh22h7hm',
  },
  grai: {
    chainId: CHAIN_ID,
    address: '0x894134a25a5faC1c2C26F1d8fBf05111a3CB9487',
    decimals: 18,
    symbol: 'GRAI',
    name: 'Gravita Debt Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreic62f4fvqgjso3trvpbyveldzk5ejt5ggb43jy56l2m5rjm7fzdtu',
  },
  wrseth: {
    chainId: CHAIN_ID,
    address: '0xD2671165570f41BBB3B0097893300b6EB6101E6C',
    decimals: 18,
    symbol: 'wrsETH',
    name: 'rsETHWrapper',
    icon: 'https://ipfs.near.social/ipfs/bafkreiablktwaz4gul2cnx4zkkfl5zqolg76imnp7dzjaqkdywknvadzty',
  },
  rseth: {
    chainId: CHAIN_ID,
    address: 'rsETH',
    decimals: 18,
    symbol: 'rsETH',
    name: 'KelpDao Restaked ETH',
    icon: 'https://ipfs.near.social/ipfs/bafkreibhmbhdfll7apn5mjmlmt6eh2fgn4wcvrkl3yhqfujgw5dgkqvg2e',
  },
};
