import type { Token } from '@/types';

const CHAIN_ID = 81457;

export const blast: { [key: string]: Token } = {
  eth: {
    address: 'native',
    isNative: true,
    chainId: CHAIN_ID,
    symbol: 'ETH',
    decimals: 18,
    name: 'Ether',
    icon: 'https://ipfs.near.social/ipfs/bafkreibspnls7q67q25r2ifv2rrfmvzl744pzuh3s5ekigeqkmyycl2auq',
  },
  usdb: {
    address: '0x4300000000000000000000000000000000000003',
    chainId: CHAIN_ID,
    symbol: 'USDB',
    decimals: 18,
    name: 'USDB',
    icon: 'https://ipfs.near.social/ipfs/bafkreifnzsv76qokb762t7x5rn5jrgkch67gxj2c7kvpfpy2u36a6csqkm',
  },
  weth: {
    address: '0x4300000000000000000000000000000000000004',
    chainId: CHAIN_ID,
    symbol: 'WETH',
    decimals: 18,
    name: 'Wrapped Ether',
    icon: 'https://ipfs.near.social/ipfs/bafkreihyzmiuawyekwiyofkzm25xzrrfenhvadi6lb42juvq7tah2u7ha4',
  },
  yes: {
    address: '0x20fe91f17ec9080e3cac2d688b4ecb48c5ac3a9c',
    chainId: CHAIN_ID,
    symbol: 'YES',
    decimals: 18,
    name: 'YES',
    icon: 'https://ipfs.near.social/ipfs/bafkreibooy44w3aiiir63xmusrqb5iay7xbmbj6ycgpjmjlwippbh5dorm',
  },
  ezeth: {
    address: '0x2416092f143378750bb29b79eD961ab195CcEea5',
    chainId: CHAIN_ID,
    symbol: 'ezETH',
    decimals: 18,
    name: 'Renzo Restaked ETH',
    icon: 'https://ipfs.near.social/ipfs/bafkreiee5yhfnbsjedzqj2p4uaeko327ooenqptplslol2pxwir463z7ii',
  },
  'mwstETH-WPUNKS:20': {
    address: '0x9a50953716bA58e3d6719Ea5c437452ac578705F',
    chainId: CHAIN_ID,
    symbol: 'mwstETH-WPUNKS:20',
    decimals: 18,
    name: 'MetaStreet V2 Deposit: WPUNKS-wstETH:20',
    icon: 'https://ipfs.near.social/ipfs/bafkreibhlytmbfxgbpvg3dm6ivbherojgxqpjhxf6rjdkjixctniwww4tm',
  },
  'mwstETH-WPUNKS:40': {
    address: '0x999f220296B5843b2909Cc5f8b4204AacA5341D8',
    chainId: CHAIN_ID,
    symbol: 'mwstETH-WPUNKS:40',
    decimals: 18,
    name: 'MetaStreet V2 Deposit: WPUNKS-wstETH:40',
    icon: 'https://ipfs.near.social/ipfs/bafkreiatybhuzoa5r5flzlyvbvrdwmvanaqgng4mqpo6lzqfiobbclafpy',
  },
  wrseth: {
    address: '0xe7903B1F75C534Dd8159b313d92cDCfbC62cB3Cd',
    chainId: CHAIN_ID,
    symbol: 'wrsETH',
    decimals: 18,
    name: 'rsETHWrapper',
    icon: 'https://ipfs.near.social/ipfs/bafkreiablktwaz4gul2cnx4zkkfl5zqolg76imnp7dzjaqkdywknvadzty',
  },
  orbit: {
    address: '0x42E12D42b3d6C4A74a88A61063856756Ea2DB357',
    chainId: CHAIN_ID,
    symbol: 'ORBIT',
    decimals: 18,
    name: 'Orbit Protocol',
    icon: 'https://ipfs.near.social/ipfs/bafkreigju6kwnbvknewc6x3zn5a4a4fmbyabhpuxnsoifavvk3srpp7sge',
  },
  axlusdc: {
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    chainId: CHAIN_ID,
    symbol: 'axlUSDC',
    decimals: 6,
    name: 'Axelar Wrapped USDC',
    icon: 'https://ipfs.near.social/ipfs/bafkreie4jihoa76mgyzxhw2yrapihzu2qhkjz6m7u4opoxjebzg6zc2lla',
  },
  juice: {
    address: '0x818a92bc81aad0053d72ba753fb5bc3d0c5c0923',
    chainId: CHAIN_ID,
    symbol: 'JUICE',
    decimals: 18,
    name: 'Juice',
    icon: 'https://ipfs.near.social/ipfs/bafkreia3z2wu7yi4omdqnhua2akrzlg7r36mcvrrhctafpr2leyg2mgkcm',
  },
  yield: {
    address: '0x67fa2887914fA3729e9EED7630294Fe124f417A0',
    chainId: CHAIN_ID,
    symbol: 'YIELD',
    decimals: 18,
    name: 'Yield Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreidq5kvdjzkbulwetgbdnbhuvucd7hwsm2gdnih36usqxkip4a7p7q',
  },
  $wai: {
    address: '0x129ed667bf8C065fE5f66c9b44B7cB0126D85cC3',
    chainId: CHAIN_ID,
    symbol: '$WAI',
    decimals: 18,
    name: 'AIWAIFU',
    icon: 'https://ipfs.near.social/ipfs/bafkreiewy7g6md4fudqjk775dcltpmt6ohvajbkhcevhbarhyrhwkyvi5y',
  },
  ole: {
    address: '0x73c369f61c90f03eb0dd172e95c90208a28dc5bc',
    chainId: CHAIN_ID,
    symbol: 'OLE',
    decimals: 18,
    name: 'OLE token powering both DistrictOne and OpenLeverage',
    icon: 'https://ipfs.near.social/ipfs/bafkreibv5fgl5qxu6iv2crptnl3ohlmsh44c2fy5fjh7o7yzjebfzrpecy',
  },
  andy: {
    address: '0xd43d8adac6a4c7d9aeece7c3151fca8f23752cf8',
    chainId: CHAIN_ID,
    symbol: 'ANDY',
    decimals: 9,
    name: 'Andy',
    icon: 'https://ipfs.near.social/ipfs/bafkreibbw3osobdjkzt4bpsh2urlhifm4n2qwtmry535lwtfse2aev5mxa',
  },
  mim: {
    address: '0x76DA31D7C9CbEAE102aff34D3398bC450c8374c1',
    chainId: CHAIN_ID,
    symbol: 'MIM',
    decimals: 18,
    name: 'Magic Internet Money',
    icon: 'https://ipfs.near.social/ipfs/bafkreib435margnveti57fw3puzvlw5jr6kmzgbmxn5gju37up2h4e6as4',
  },
  blste: {
    address: '0x5f49349fB82454d4cA935f3e2e736bD5BE556578',
    chainId: CHAIN_ID,
    symbol: 'BLSTE',
    decimals: 18,
    name: 'BLSTE',
    icon: 'https://ipfs.near.social/ipfs/bafkreidsegefzlryeqspakkawkl5wtwjcxng7ggkviutkholxb7wpskyym',
  },
  musd: {
    address: '0x837fE561e9C5DFa73F607fDa679295DBC2Be5E40',
    chainId: CHAIN_ID,
    symbol: 'MUSD',
    decimals: 18,
    name: 'Monoswap USD',
    icon: 'https://ipfs.near.social/ipfs/bafkreighxgisict5ibrpau64zsqx5gmmc5jaxx5i4ngxi6vdhzjihofoia',
  },
  // wif: {
  //   address: '0x2Ef6EE4884892b15DfCF53B33ed139FEF6141A49',
  //   chainId: CHAIN_ID,
  //   symbol: 'WIF',
  //   decimals: 18,
  //   name: 'Dog Wif Blast',
  //   icon: 'https://ipfs.near.social/ipfs/bafkreih2khaqlvmad2pyedcfxydll4rhtbtd7r7ol2z3mt3fussxo4jiey',
  // },
  xmomo: {
    address: '0x28A922aD2d2A02250473b30F3444E20b138354d1',
    chainId: CHAIN_ID,
    symbol: 'xMONO',
    decimals: 18,
    name: 'xMonoswap',
    icon: 'https://ipfs.near.social/ipfs/bafkreie25p2jnwdapgkt5ql3epn4mdv2pxn7u7aubb5mzq6xwoupcaosy4',
  },
  wbtc: {
    address: '0xF7bc58b8D8f97ADC129cfC4c9f45Ce3C0E1D2692',
    chainId: CHAIN_ID,
    decimals: 8,
    symbol: 'WBTC',
    name: 'Wrapped BTC',
    icon: 'https://ipfs.near.social/ipfs/bafkreigdklwcldjo4w7viyrym54hdb43wgpv23mbicetszygzapttbgo7q',
  },
  dbz: {
    address: '0x5F59EcF360F19444173D120fec7D1FB0c42e0f26',
    chainId: CHAIN_ID,
    symbol: 'DBZ',
    decimals: 18,
    name: 'DragonBall',
    icon: 'https://ipfs.near.social/ipfs/bafkreifck44dkveloglkiy3rmi4fjgy6n6yiwwcsrjsuvw3eaof4p7y66e',
  },
  omni: {
    address: '0x9e20461bc2c4c980f62f1B279D71734207a6A356',
    chainId: CHAIN_ID,
    symbol: 'OMNI',
    decimals: 18,
    name: 'OmniCat',
    icon: 'https://ipfs.near.social/ipfs/bafkreigzusaroe6xtxrlags6ke7jy576mxxfgphab4mhmigm6hfu5fbjiy',
  },
};
