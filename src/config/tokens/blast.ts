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
    icon: '/assets/tokens/eth.png'
  },
  usdb: {
    address: '0x4300000000000000000000000000000000000003',
    chainId: CHAIN_ID,
    symbol: 'USDB',
    decimals: 18,
    name: 'USDB',
    icon: 'https://ipfs.near.social/ipfs/bafkreifnzsv76qokb762t7x5rn5jrgkch67gxj2c7kvpfpy2u36a6csqkm'
  },
  weth: {
    address: '0x4300000000000000000000000000000000000004',
    chainId: CHAIN_ID,
    symbol: 'WETH',
    decimals: 18,
    name: 'Wrapped Ether',
    icon: '/assets/tokens/weth.png'
  },
  yes: {
    address: '0x20fe91f17ec9080e3cac2d688b4ecb48c5ac3a9c',
    chainId: CHAIN_ID,
    symbol: 'YES',
    decimals: 18,
    name: 'YES',
    icon: 'https://ipfs.near.social/ipfs/bafkreibooy44w3aiiir63xmusrqb5iay7xbmbj6ycgpjmjlwippbh5dorm'
  },
  ezeth: {
    address: '0x2416092f143378750bb29b79eD961ab195CcEea5',
    chainId: CHAIN_ID,
    symbol: 'ezETH',
    decimals: 18,
    name: 'Renzo Restaked ETH',
    icon: '/assets/tokens/ezeth.svg'
  },
  oezeth: {
    address: '0x4991b902f397dc16b0bbd21b0057a20b4b357ae2',
    chainId: CHAIN_ID,
    symbol: 'oezETH',
    decimals: 18,
    name: 'Orbit ezETH ',
    icon: '/assets/tokens/ezeth.svg'
  },
  'mwstETH-WPUNKS:20': {
    address: '0x9a50953716bA58e3d6719Ea5c437452ac578705F',
    chainId: CHAIN_ID,
    symbol: 'mwstETH-WPUNKS:20',
    decimals: 18,
    name: 'MetaStreet V2 Deposit: WPUNKS-wstETH:20',
    icon: 'https://ipfs.near.social/ipfs/bafkreibhlytmbfxgbpvg3dm6ivbherojgxqpjhxf6rjdkjixctniwww4tm'
  },
  'mwstETH-WPUNKS:40': {
    address: '0x999f220296B5843b2909Cc5f8b4204AacA5341D8',
    chainId: CHAIN_ID,
    symbol: 'mwstETH-WPUNKS:40',
    decimals: 18,
    name: 'MetaStreet V2 Deposit: WPUNKS-wstETH:40',
    icon: 'https://ipfs.near.social/ipfs/bafkreiatybhuzoa5r5flzlyvbvrdwmvanaqgng4mqpo6lzqfiobbclafpy'
  },
  wrseth: {
    address: '0xe7903B1F75C534Dd8159b313d92cDCfbC62cB3Cd',
    chainId: CHAIN_ID,
    symbol: 'wrsETH',
    decimals: 18,
    name: 'rsETHWrapper',
    icon: 'https://ipfs.near.social/ipfs/bafkreiablktwaz4gul2cnx4zkkfl5zqolg76imnp7dzjaqkdywknvadzty'
  },
  orbit: {
    address: '0x42E12D42b3d6C4A74a88A61063856756Ea2DB357',
    chainId: CHAIN_ID,
    symbol: 'ORBIT',
    decimals: 18,
    name: 'Orbit Protocol',
    icon: 'https://ipfs.near.social/ipfs/bafkreigju6kwnbvknewc6x3zn5a4a4fmbyabhpuxnsoifavvk3srpp7sge'
  },
  axlusdc: {
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    chainId: CHAIN_ID,
    symbol: 'axlUSDC',
    decimals: 6,
    name: 'Axelar Wrapped USDC',
    icon: '/assets/tokens/usdc.png'
  },
  juice: {
    address: '0x818a92bc81aad0053d72ba753fb5bc3d0c5c0923',
    chainId: CHAIN_ID,
    symbol: 'JUICE',
    decimals: 18,
    name: 'Juice',
    icon: 'https://ipfs.near.social/ipfs/bafkreia3z2wu7yi4omdqnhua2akrzlg7r36mcvrrhctafpr2leyg2mgkcm'
  },
  yield: {
    address: '0x67fa2887914fA3729e9EED7630294Fe124f417A0',
    chainId: CHAIN_ID,
    symbol: 'YIELD',
    decimals: 18,
    name: 'Yield Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreidq5kvdjzkbulwetgbdnbhuvucd7hwsm2gdnih36usqxkip4a7p7q'
  },
  $wai: {
    address: '0x129ed667bf8C065fE5f66c9b44B7cB0126D85cC3',
    chainId: CHAIN_ID,
    symbol: '$WAI',
    decimals: 18,
    name: 'AIWAIFU',
    icon: 'https://ipfs.near.social/ipfs/bafkreiewy7g6md4fudqjk775dcltpmt6ohvajbkhcevhbarhyrhwkyvi5y'
  },
  ole: {
    address: '0x73c369f61c90f03eb0dd172e95c90208a28dc5bc',
    chainId: CHAIN_ID,
    symbol: 'OLE',
    decimals: 18,
    name: 'OLE token powering both DistrictOne and OpenLeverage',
    icon: 'https://ipfs.near.social/ipfs/bafkreibv5fgl5qxu6iv2crptnl3ohlmsh44c2fy5fjh7o7yzjebfzrpecy',
    priceKey: 'openleverage'
  },
  andy: {
    address: '0xd43d8adac6a4c7d9aeece7c3151fca8f23752cf8',
    chainId: CHAIN_ID,
    symbol: 'ANDY',
    decimals: 9,
    name: 'Andy',
    icon: 'https://ipfs.near.social/ipfs/bafkreibbw3osobdjkzt4bpsh2urlhifm4n2qwtmry535lwtfse2aev5mxa'
  },
  mim: {
    address: '0x76DA31D7C9CbEAE102aff34D3398bC450c8374c1',
    chainId: CHAIN_ID,
    symbol: 'MIM',
    decimals: 18,
    name: 'Magic Internet Money',
    icon: '/assets/tokens/mim.png'
  },
  blste: {
    address: '0x5f49349fB82454d4cA935f3e2e736bD5BE556578',
    chainId: CHAIN_ID,
    symbol: 'BLSTE',
    decimals: 18,
    name: 'BLSTE',
    icon: 'https://ipfs.near.social/ipfs/bafkreidsegefzlryeqspakkawkl5wtwjcxng7ggkviutkholxb7wpskyym'
  },
  musd: {
    address: '0x837fE561e9C5DFa73F607fDa679295DBC2Be5E40',
    chainId: CHAIN_ID,
    symbol: 'MUSD',
    decimals: 18,
    name: 'Monoswap USD',
    icon: 'https://ipfs.near.social/ipfs/bafkreighxgisict5ibrpau64zsqx5gmmc5jaxx5i4ngxi6vdhzjihofoia'
  },
  wif: {
    address: '0x2Ef6EE4884892b15DfCF53B33ed139FEF6141A49',
    chainId: CHAIN_ID,
    symbol: 'WIF',
    decimals: 18,
    name: 'Dog Wif Blast',
    icon: 'https://ipfs.near.social/ipfs/bafkreih2khaqlvmad2pyedcfxydll4rhtbtd7r7ol2z3mt3fussxo4jiey'
  },
  xmomo: {
    address: '0x28A922aD2d2A02250473b30F3444E20b138354d1',
    chainId: CHAIN_ID,
    symbol: 'xMONO',
    decimals: 18,
    name: 'xMonoswap',
    icon: 'https://ipfs.near.social/ipfs/bafkreie25p2jnwdapgkt5ql3epn4mdv2pxn7u7aubb5mzq6xwoupcaosy4'
  },
  wbtc: {
    address: '0xF7bc58b8D8f97ADC129cfC4c9f45Ce3C0E1D2692',
    chainId: CHAIN_ID,
    decimals: 8,
    symbol: 'WBTC',
    name: 'Wrapped BTC',
    icon: '/assets/tokens/wbtc.png'
  },
  dbz: {
    address: '0x5F59EcF360F19444173D120fec7D1FB0c42e0f26',
    chainId: CHAIN_ID,
    symbol: 'DBZ',
    decimals: 18,
    name: 'DragonBall',
    icon: 'https://ipfs.near.social/ipfs/bafkreifck44dkveloglkiy3rmi4fjgy6n6yiwwcsrjsuvw3eaof4p7y66e'
  },
  omni: {
    address: '0x9e20461bc2c4c980f62f1B279D71734207a6A356',
    chainId: CHAIN_ID,
    symbol: 'OMNI',
    decimals: 18,
    name: 'OmniCat',
    icon: '/assets/tokens/omni.png',
    priceKey: 'omnicat'
  },
  sss: {
    address: '0xfd4D19F9FBb9F730C3C88a21755832BD2455144e',
    chainId: CHAIN_ID,
    symbol: 'SSS',
    decimals: 18,
    name: 'SSS',
    icon: 'https://ipfs.near.social/ipfs/bafkreibwsc4ozsbjv4w2njano5bfsx7k6z4bfzzjamrgt6odcu543ks7mq'
  },
  weeth: {
    address: '0x04c0599ae5a44757c0af6f9ec3b93da8976c150a',
    chainId: CHAIN_ID,
    symbol: 'weETH',
    decimals: 18,
    name: 'Wrapped eETH',
    icon: 'https://ipfs.near.social/ipfs/bafkreihndqwsdhlc2fwzzen3nuokj4nbwy3oj4ppohgpuyvzyjo742beou'
  },
  pac: {
    address: '0x5ffd9ebd27f2fcab044c0f0a26a45cb62fa29c06',
    chainId: CHAIN_ID,
    symbol: 'PAC',
    decimals: 18,
    name: 'PacMoon',
    icon: 'https://ipfs.near.social/ipfs/bafkreifref3epdp5jltndpuezmqgd7eyrn5gd2vtikwnu3an6upijwfno4'
  },
  fwweth: {
    address: '0x66714DB8F3397c767d0A602458B5b4E3C0FE7dd1',
    chainId: CHAIN_ID,
    symbol: 'fwWETH',
    decimals: 18,
    name: 'Few Wrapped Wrapped Ether',
    icon: 'https://ipfs.near.social/ipfs/bafkreig3gppjmgeyecm5v5qs57ekewun6mjimgbtcwjelcnit7pr7nwoxe'
  },
  fwusdb: {
    address: '0x866f2C06B83Df2ed7Ca9C2D044940E7CD55a06d6',
    chainId: CHAIN_ID,
    symbol: 'fwUSDB',
    decimals: 18,
    name: 'Few Wrapped USDB',
    icon: 'https://ipfs.near.social/ipfs/bafkreidqacumfzj6j6u4nf7dfboepvuyzfjbfmmf5rxulpvxjovfd2lwxm'
  },
  ousdb: {
    address: '0x9aECEdCD6A82d26F2f86D331B17a1C1676442A87',
    chainId: CHAIN_ID,
    symbol: 'oUSDB',
    decimals: 18,
    name: 'Orbit USDB',
    icon: 'https://ipfs.near.social/ipfs/bafkreiem26ziwuaffnuv3vxmsoww7zuclznfhfwp32ovuhbrz7v62qgtmi'
  },
  oeth: {
    address: '0x0872b71EFC37CB8DdE22B2118De3d800427fdba0',
    chainId: CHAIN_ID,
    symbol: 'oETH',
    decimals: 18,
    name: 'oEther V2',
    icon: 'https://ipfs.near.social/ipfs/bafkreid2nz4ivnj4sucoedgze3f23l3pjjwjn5mokvm6y4schduc4xnacq'
  },
  rseth: {
    address: '0x4186bfc76e2e237523cbc30fd220fe055156b41f',
    chainId: CHAIN_ID,
    symbol: 'rsETH',
    decimals: 18,
    name: 'KelpDao Restaked ETH',
    icon: '/assets/tokens/rseth.svg'
  },
  deus: {
    address: '0xDE55B113A27Cc0c5893CAa6Ee1C020b6B46650C0',
    chainId: CHAIN_ID,
    symbol: 'DEUS',
    decimals: 18,
    name: 'DEUS',
    icon: 'https://ipfs.near.social/ipfs/bafkreielpapejnsqu3cbohttepntbzw77au2vt7cptlfa4l4c66shqv3qe'
  },
  pxeth: {
    chainId: CHAIN_ID,
    address: '0x9E0d7D79735e1c63333128149c7b616a0dC0bBDb',
    decimals: 18,
    symbol: 'pxETH',
    name: 'Pirex Ether OFT',
    icon: 'https://ipfs.near.social/ipfs/bafkreiepil46e3xesbiq623ucwrwg3b4wxmynfejaks5osx2rhpyfv5gai'
  },
  'usd+': {
    chainId: CHAIN_ID,
    address: '0x4fEE793d435c6D2c10C135983BB9d6D4fC7B9BBd',
    decimals: 18,
    symbol: 'USD+',
    name: 'USD+',
    icon: '/assets/tokens/usd+.png'
  },
  blade: {
    chainId: CHAIN_ID,
    address: '0xD1FedD031b92f50a50c05E2C45aF1aDb4CEa82f4',
    decimals: 18,
    symbol: 'BLADE',
    name: 'Blade',
    icon: 'https://ipfs.near.social/ipfs/bafkreic7dzgldxuip2qutdwjevznhjuyofo2zns3cocn7kqs5qeuir4wzi'
  },
  've-blade': {
    chainId: CHAIN_ID,
    address: '0xF8f2ab7C84CDB6CCaF1F699eB54Ba30C36B95d85',
    decimals: 18,
    symbol: 'veBLADE',
    name: 'Locked BLADE',
    icon: 'https://ipfs.near.social/ipfs/bafkreibsxydstw24mzhcx4e4r6cwlhuni2fr6fbmaig2zmfrz4me6jhkjy'
  },
  aso: {
    chainId: CHAIN_ID,
    address: '0x54E7780089AeE73EF98B8238B0866a517914254e',
    decimals: 18,
    symbol: 'ASO',
    name: 'ASO',
    icon: 'https://ipfs.near.social/ipfs/bafkreiefxodun2nsudwxsovbi2vgrqr6h7bej4ijkp7oxjl3egiv6p56n4'
  },
  mclb: {
    chainId: CHAIN_ID,
    address: '0xc308c807bf32bd26ee249deaaa6e04aba463962d',
    decimals: 18,
    symbol: 'MCLB',
    name: 'MCLB',
    icon: 'https://ipfs.near.social/ipfs/bafkreidws2h7lwrgfpua2julp3fr6xppoc4idshksiu6tyxjhjz3vxk5jm'
  },
  kap: {
    chainId: CHAIN_ID,
    address: '0x15d24de366F69b835Be19f7Cf9447e770315DD80',
    decimals: 18,
    symbol: 'KAP',
    name: 'KAP',
    icon: 'https://ipfs.near.social/ipfs/bafkreigpmejc7xjlejl6dy7wuldddblx4fz7k4uxsgge74dq7ojaylsjmi'
  },
  glory: {
    chainId: CHAIN_ID,
    address: '0xd582879453337bd149ae53ec2092b0af5281d1d7',
    decimals: 18,
    symbol: 'GLORY',
    name: 'GLORY',
    icon: 'https://ipfs.near.social/ipfs/bafkreietybg2sosdvhp7bhwsyfxwxhcgnvfn2fsbebi2lzppzfahopux2u'
  },
  early: {
    chainId: CHAIN_ID,
    address: '0x7135B32e9903BdB4e19a8b1D22fC2038964B8451',
    decimals: 18,
    symbol: 'EARLY',
    name: 'EARLY',
    icon: 'https://ipfs.near.social/ipfs/bafkreihw7q5zv3g4urfmb5g7vjms5bzyy52qceukxhigdp2agx2yytpnaq'
  },
  mia: {
    chainId: CHAIN_ID,
    address: '0xA4C7aA67189EC5623121c6C94Ec757DfeD932D4B',
    decimals: 18,
    symbol: 'MIA',
    name: 'Mia',
    icon: 'https://ipfs.near.social/ipfs/bafkreigqpqthx4b24mkd7rfx6vkt3cezbgpvkjij7hwsbrhmsouu4fsmgu',
    priceKey: 'mia-2d4b'
  },
  baja: {
    chainId: CHAIN_ID,
    address: '0x5FE8534a6F96cb01261Bd96e98c17C2c1Cab3204',
    decimals: 18,
    symbol: 'BAJA',
    name: 'Baja',
    icon: 'https://ipfs.near.social/ipfs/bafkreidhasxaac5qubzqzzugelyspyk34h3fda2eolsrtg6szn2q6qjfwy'
  },
  bag: {
    chainId: CHAIN_ID,
    address: '0xb9dfCd4CF589bB8090569cb52FaC1b88Dbe4981F',
    decimals: 18,
    symbol: 'BAG',
    name: 'Bag',
    icon: 'https://ipfs.near.social/ipfs/bafkreibdniijs4dzpeflvmjmnyidribyapwtqik6palhmxow7wttj4w66u'
  },
  pump: {
    chainId: CHAIN_ID,
    address: '0x216a5a1135a9dab49fa9ad865e0f22fe22b5630a',
    decimals: 18,
    symbol: 'PUMP',
    name: 'PUMP',
    icon: 'https://ipfs.near.social/ipfs/bafkreihukx3msdv34esnf2haial5xlbbrevis3pdphfzlyygp6nuklbbga'
  },
  dusd: {
    chainId: CHAIN_ID,
    address: '0x1a3d9b2fa5c6522c8c071dc07125ce55df90b253',
    decimals: 18,
    symbol: 'DUSD',
    name: 'DUSD',
    icon: '/images/tokens/dusd.png'
  },
  deth: {
    chainId: CHAIN_ID,
    address: '0x1Da40C742F32bBEe81694051c0eE07485fC630f6',
    decimals: 18,
    symbol: 'DETH',
    name: 'DETH',
    icon: '/images/tokens/deth.png'
  },
  fxs: {
    chainId: CHAIN_ID,
    address: '0x23432452b720c80553458496d4d9d7c5003280d0',
    decimals: 18,
    symbol: 'FXS',
    name: 'Frax Shares',
    icon: 'https://ipfs.near.social/ipfs/bafkreiduun7olzwqnvucb3dhgmsqguwoiucbnw6pwowyzeekz6qwz4ryjq'
  },
  usdbx: {
    chainId: CHAIN_ID,
    address: '0x836aED3b0E0ee44C77e0b6Db34D170AbCCe9BaAC',
    decimals: 18,
    symbol: 'USDBx',
    name: 'Wand USDBx',
    icon: 'https://ipfs.near.social/ipfs/bafkreiadkwko46oqgxfyz3omgudg5vbhftwfz57ejlkn6hfg7ns2remu3a'
  },
  upt: {
    chainId: CHAIN_ID,
    address: '0x08e0948E952063a6396a24fc59554aC476bEa66e',
    decimals: 18,
    symbol: 'UPT',
    name: 'Upto3',
    icon: 'https://ipfs.near.social/ipfs/bafkreidacbquef7aw2ob5swmj5xu3ufbmg4utehzjfrzat32lnsrpqrnhm'
  },
  nptx: {
    chainId: CHAIN_ID,
    address: '0x75483179a38d21f3608e71bbede5ec1314f0067d',
    decimals: 18,
    symbol: 'NPTX',
    name: 'NeptuneX',
    icon: 'https://ipfs.near.social/ipfs/bafkreibvq57bqmj5xemvywfuhgbox6hfi42cysxl7k3uf2bfoev6mhfgrm'
  },
  'mWETH-PPG:10': {
    chainId: CHAIN_ID,
    address: '0x6531ae67098bc73db9179dcbc6f161fcd9fd4c01',
    decimals: 18,
    symbol: 'mWETH-PPG:10',
    name: 'MetaStreet V2 Deposit: PPG-WETH:10',
    icon: 'https://ipfs.near.social/ipfs/bafkreihs7xcl27qsoil7henowhfunlt6mikzaupgasdt4f7by3olnvvebi'
  },
  big: {
    chainId: CHAIN_ID,
    address: '0x76d6556758365e63e48a0dfafd19c8dba15f97ee',
    decimals: 18,
    symbol: 'BIG',
    name: 'BIG',
    icon: 'https://ipfs.near.social/ipfs/bafkreih54gsd24viquwwjnc2bhulrzlyfeo4pilja3lyg3xzwftaufzzo4'
  },
  ankr: {
    chainId: CHAIN_ID,
    address: '0x3580ac35BED2981d6bDD671a5982c2467d301241',
    decimals: 18,
    symbol: 'ANKR',
    name: 'Ankr Network',
    icon: 'https://ipfs.near.social/ipfs/bafkreicvewusprqlx6on5qprdm3me2db27ie3m5hwpw67rxmfwzi4pdmku'
  },
  peace: {
    chainId: CHAIN_ID,
    address: '0x0A4B0263589750E6383e199310Be98E6e2deE258',
    decimals: 18,
    symbol: 'PEACE',
    name: 'WORLD PEACE',
    icon: 'https://ipfs.near.social/ipfs/bafkreiegg6af3jwanlecsorstexnrufo4yvp2idepea2kkuevib7w7ctgi'
  },
  vroom: {
    chainId: CHAIN_ID,
    address: '0x891c9B37177Bdf8Edc891119C9d8aEefDa9A5246',
    decimals: 18,
    symbol: 'VROOM',
    name: 'VROOM',
    icon: 'https://ipfs.near.social/ipfs/bafkreicgmc3ygi2qau6sz7s4dhp5zpoftg3rwk77xuknrztusbpvbxsksq'
  },
  swim: {
    chainId: CHAIN_ID,
    address: '0x5D68d64e80F47EFF763B087DeAAe46fF25205674',
    decimals: 18,
    symbol: '$SWIM',
    name: 'SWIM',
    icon: 'https://ipfs.near.social/ipfs/bafkreiddgfyre4tsfiaj7k566e55lytft6u6xaaaayzdlq432itf35e36m'
  },
  alien: {
    chainId: CHAIN_ID,
    address: '0xca84812e477ee5a96a92328689d8ce2589ab6ffd',
    decimals: 18,
    symbol: 'ALIEN',
    name: 'Alien',
    icon: 'https://ipfs.near.social/ipfs/bafkreieuhl77htjlfcy2erdlrswa4aeyshd3a6j5uh3ovet2vtfgkqbjwm'
  },
  'usdc+': {
    chainId: CHAIN_ID,
    address: '0x870a8F46b62B8BDeda4c02530C1750CddF2ED32e',
    decimals: 18,
    symbol: 'USDC+',
    name: 'USDC+',
    icon: '/assets/tokens/usdc+.svg'
  },
  bnd: {
    chainId: CHAIN_ID,
    address: '0xd71035849d2fba67533bf50900a3e8b684ac1b42',
    decimals: 18,
    symbol: 'BND',
    name: 'BlastName Dot',
    icon: 'https://ipfs.near.social/ipfs/bafkreiailsg6444jv2yw23fvluedhv4jkt7wtw3frue2mvgtdpojuaf4xe'
  },
  pacm: {
    chainId: CHAIN_ID,
    address: '0x0b4d0ee29857c3961b380d4ec138ea5814e346b9',
    decimals: 18,
    symbol: '$PACM',
    name: 'P@cman Blastoff',
    icon: 'https://ipfs.near.social/ipfs/bafkreickszrb7eq7qa45t56wclgua3e77puan5b56qg7wwdh5actn5h754'
  },
  usb: {
    chainId: CHAIN_ID,
    address: '0xD86b2B6f1169e4304Be700D6522c3Ff79FF8fB77',
    decimals: 18,
    symbol: 'USB',
    name: 'Wand USB',
    icon: 'https://ipfs.near.social/ipfs/bafkreidftclryzhconoawlpmexvwpb5mq7zijtfysdqqrp6h4u6eboze4u'
  },
  wels: {
    chainId: CHAIN_ID,
    address: '0xb3443dd8590ec811726df6909d9bca6d6d4e250e',
    decimals: 18,
    symbol: 'WELS',
    name: 'Wrapped Ethlas Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreicx2o7kyapp554kb3yoncmzax2swvuw7lur4wcrlan5y6hdbot7oq'
  },
  aura: {
    chainId: CHAIN_ID,
    address: '0x1509706a6c66CA549ff0cB464de88231DDBe213B',
    decimals: 18,
    symbol: 'AURA',
    name: 'Aura',
    icon: 'https://ipfs.near.social/ipfs/bafkreih2jc4ml33yxolsdyv65ohcgncttb65kq456fknoxbwbam6io6fqu'
  },
  bns: {
    chainId: CHAIN_ID,
    address: '0x0c2ffacd70c1d1cb04d4803dea055dd9d4b57601',
    decimals: 18,
    symbol: 'BNS',
    name: 'BlastName Service',
    icon: 'https://ipfs.near.social/ipfs/bafkreiczq3tqdgw4yt3x5gd7x42uyfinfvcfmfe4mwiue2mfpypc2hbfqe'
  },
  ethx: {
    chainId: CHAIN_ID,
    address: '0xd79d6Fe06F4C2b17291015169d1443f50D0C2838',
    decimals: 18,
    symbol: 'ETHx',
    name: 'Wand ETHx',
    icon: '/assets/tokens/ethx.svg'
  },
  inETH: {
    chainId: CHAIN_ID,
    address: '0x5A7a183B6B44Dc4EC2E3d2eF43F98C5152b1d76d',
    decimals: 18,
    symbol: 'inETH',
    name: 'InceptionLRT restaked ETH',
    icon: 'https://ipfs.near.social/ipfs/bafkreiblndagim35kf6kzyz3kvtmycsvvocparrctqdektmvp3vhdutepa'
  },
  zai: {
    chainId: CHAIN_ID,
    address: '0x68449870eea84453044bd430822827e21fd8f101',
    decimals: 18,
    symbol: 'ZAI',
    name: 'ZAIBOT.io',
    icon: 'https://ipfs.near.social/ipfs/bafkreidl2uh4nlvhu46n65okavmhsvgvdq2rtguuyzagbwgit4ydkpjoai'
  },
  pstake: {
    chainId: CHAIN_ID,
    address: '0xcbf7b47e9da345812e3bd732e3ee369a7203b5ae',
    decimals: 18,
    symbol: 'PSTAKE',
    name: 'pSTAKE Finance',
    icon: 'https://ipfs.near.social/ipfs/bafkreiasc6mzmvz3ajquirguv4fzqiqprqpqku2wxi6ai7qwhq3ddrvybq'
  },
  core: {
    chainId: CHAIN_ID,
    address: '0x233b23DE890A8c21F6198D03425a2b986AE05536',
    decimals: 18,
    symbol: 'CORE',
    name: 'Core Markets',
    icon: 'https://ipfs.near.social/ipfs/bafkreicv44evy4os34hob7e5qoait4ylvpwvtjo6amdwc2s6f7rusc5kzm'
  },
  ohno: {
    chainId: CHAIN_ID,
    address: '0x000000dAA580e54635a043D2773f2c698593836a',
    decimals: 18,
    symbol: 'OHNO',
    name: 'Oh No',
    icon: 'https://ipfs.near.social/ipfs/bafkreifbzdlfdwzwpd2wteukxwzplzfsctwy6u7hhyinofhizwcdayj5gu'
  },
  bepe: {
    chainId: CHAIN_ID,
    address: '0xb582dc28968c725d2868130752afa0c13ebf9b1a',
    decimals: 18,
    symbol: 'BEPE',
    name: 'Blast Pepe',
    icon: 'https://ipfs.near.social/ipfs/bafkreihk2h64vnl7gogjotwphasqtsiwkpraylbj3svdkxmd2eij2eautm'
  },
  dola: {
    chainId: CHAIN_ID,
    address: '0x8e38179D361402f6a94767757e807146609E9B3d',
    decimals: 18,
    symbol: 'DOLA',
    name: 'DOLA USD Stablecoin',
    icon: '/assets/tokens/dola.svg'
  },
  ghost: {
    chainId: CHAIN_ID,
    address: '0xCC50560827465F25132929711D5b2cf78625d399',
    decimals: 18,
    symbol: 'GHOST',
    name: 'Ghost Coin',
    icon: 'https://ipfs.near.social/ipfs/bafkreid6enojz24x4qdh4odhi7pix3hi3zzu3cchtibe4vprw53cpdeqnu'
  },
  ankrETH: {
    chainId: CHAIN_ID,
    address: '0x049e6A52e2C9b7814c8178908F3630726c134c92',
    symbol: 'ankrETH',
    decimals: 18,
    name: 'Ankr Staked ETH',
    icon: 'https://ipfs.near.social/ipfs/bafkreigq26tdgnyrwg45swnx5v3oogy232z2q46cwbvd6jkirc4aqyz5nq'
  },
  sfrax: {
    chainId: CHAIN_ID,
    address: '0xe4796ccb6bb5de2290c417ac337f2b66ca2e770e',
    decimals: 18,
    symbol: 'sFRAX',
    name: 'Staked FRAX',
    icon: 'https://ipfs.near.social/ipfs/bafkreihbd2z7wi3abvb2nbodxyfxv5g4i7ffrj7nlvlsdbtzaya6p77rjq'
  },
  mblastopians: {
    chainId: CHAIN_ID,
    address: '0xc8d8d820f88df3bd48c4f8e95bca3b994b73c699',
    decimals: 18,
    symbol: 'mBLASTOPIANS',
    name: 'mBlastopians',
    icon: 'https://ipfs.near.social/ipfs/bafkreigzivbupq6iqccqbvnc4ckmi7z7uegb7fxht3wdh76lzf3mftc5c4'
  },
  tes: {
    chainId: CHAIN_ID,
    address: '0x87E154E86Fb691AB8A27116e93Ed8d54e2b8C18C',
    decimals: 18,
    symbol: 'TES',
    name: 'Titan Trading Token',
    icon: 'https://ipfs.near.social/ipfs/bafkreiftzxmteqyluaa54rymmssmushjrsz4bz624x4a4ssce3gi6uhqpy'
  },
  'mWETH-PPG:5': {
    chainId: CHAIN_ID,
    address: '0x41cF7ea4Ba650191e829A6bD31B9e2049C78D858',
    decimals: 18,
    symbol: 'mWETH-PPG:5',
    name: 'MetaStreet V2 Deposit: PPG-WETH:5',
    icon: 'https://ipfs.near.social/ipfs/bafkreibcngeey65vasqt4xl56o6yvf75bkrtqmzc442onpqzz2ljwjpvta'
  },
  bus: {
    chainId: CHAIN_ID,
    address: '0x472df997a253a8ae94121572d2017a7232705ab2',
    decimals: 18,
    symbol: 'BUS',
    name: 'BUS',
    icon: 'https://ipfs.near.social/ipfs/bafkreiewagcjt7bjeoecxmy5xgthqz5fwupnbpk373fgga575eexqafrm4'
  },
  sfrxETH: {
    chainId: CHAIN_ID,
    address: '0x1f55a02a049033e3419a8e2975cf3f572f4e6e9a',
    decimals: 18,
    symbol: 'sfrxETH',
    name: 'Staked Frax Ether',
    icon: '/assets/tokens/sfrxETH.svg'
  },
  bwool: {
    chainId: CHAIN_ID,
    address: '0xb5a86030b64afaa75c42c0d28f8d5ce5f9f61401',
    decimals: 18,
    symbol: 'bWOOL',
    name: 'bWOOL',
    icon: 'https://ipfs.near.social/ipfs/bafkreiaznmakaip5yonbsjvrtkbfdtpftplrmomhsl5dh5nbxmcdupgpua'
  },
  sUSDe: {
    chainId: CHAIN_ID,
    address: '0x211cc4dd073734da055fbf44a2b4667d5e5fe5d2',
    decimals: 18,
    symbol: 'sUSDe',
    name: 'Staked USDe',
    icon: 'https://ipfs.near.social/ipfs/bafkreidxvyu2pudqn3fhkdlboelqqmaour6dfite7hx2ikiwbd24w2xiay'
  },
  ese: {
    chainId: CHAIN_ID,
    address: '0x491e6de43b55c8eae702edc263e32339da42f58c',
    decimals: 18,
    symbol: 'ESE',
    name: 'eesee',
    icon: 'https://ipfs.near.social/ipfs/bafkreidnc74ypkhaz3uhidpz77lp2oln4q32unrk3t27ezsvlznuw6cpqe'
  },
  bpepe: {
    chainId: CHAIN_ID,
    address: '0xB6e0d8A730C6e5c85c637b1cf7aD6fD07927b965',
    decimals: 18,
    symbol: 'bPEPE',
    name: 'Blastin Pepes',
    icon: 'https://ipfs.near.social/ipfs/bafkreigiqqvtc7g23om3wj3ok5zxsjybq4e45uyzl4kfykmpj37d2kmqfa'
  },
  rbx: {
    chainId: CHAIN_ID,
    address: '0x236bb48fcF61ce996B2C8C196a9258c176100c7d',
    decimals: 18,
    symbol: 'RBX',
    name: 'RabbitX',
    icon: 'https://ipfs.near.social/ipfs/bafkreif76wmksrgwi4lzxot5kgomgmy4vxieydw7okdpsky6ng5aud6fqy'
  },
  usde: {
    chainId: CHAIN_ID,
    address: '0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34',
    decimals: 18,
    symbol: 'USDe',
    name: 'USDe',
    icon: '/assets/tokens/usde.svg'
  },
  ai: {
    chainId: CHAIN_ID,
    address: '0x764933fbAd8f5D04Ccd088602096655c2ED9879F',
    decimals: 18,
    symbol: 'AI',
    name: 'Any Inu',
    icon: 'https://ipfs.near.social/ipfs/bafkreig4gdlobne4u22ynpo3bvfcwtw5fjd2l7nkv3pu636mseatpxjjhm'
  },
  blast: {
    chainId: CHAIN_ID,
    address: '0xb1a5700fA2358173Fe465e6eA4Ff52E36e88E2ad',
    decimals: 18,
    symbol: 'BLAST',
    name: 'Blast',
    icon: 'https://ipfs.near.social/ipfs/bafkreicyqt7wbkd3oviqiphyfnwae65jsmlnyt3yd2e7ippaeytogpfwte'
  },
  'we-eth': {
    address: '0x04c0599ae5a44757c0af6f9ec3b93da8976c150a',
    chainId: CHAIN_ID,
    symbol: 'weETH',
    decimals: 18,
    name: 'Wrapped eETH',
    icon: '/assets/tokens/weeth.png'
  },
  yolo: {
    address: '0xf77dd21c5ce38ac08786BE35Ef1d1DeC1a6a15F3',
    chainId: CHAIN_ID,
    symbol: 'YOLO',
    decimals: 18,
    name: 'YOLO',
    icon: '/images/tokens/yolo.svg'
  },
  usdz: {
    address: '0x52056ed29fe015f4ba2e3b079d10c0b87f46e8c6',
    chainId: CHAIN_ID,
    symbol: 'USDz',
    decimals: 18,
    name: 'USDz',
    icon: '/images/tokens/usdz.svg'
  },
  ultraETHs: {
    address: '0xbb4e01b8940e8e2b3a95ced7941969d033786ff7',
    chainId: CHAIN_ID,
    symbol: 'ultraETHs',
    decimals: 18,
    name: 'Affine ultraETHs 2.0',
    icon: '/images/tokens/ultra-eths.svg'
  },
  pex: {
    address: '0xae57fe379494B30Ec1E085Fb8a87d9C2FdcbcA2a',
    chainId: CHAIN_ID,
    symbol: 'PEX',
    decimals: 18,
    name: 'Phoenix',
    icon: '/images/tokens/default_icon.png'
  },
  kala: {
    address: '0x2f67f59b3629bf24962290db9ede0cd4127e606d',
    chainId: CHAIN_ID,
    symbol: 'KALA',
    decimals: 18,
    name: 'Kalax',
    icon: '/images/tokens/kala.png'
  },
  tok: {
    address: '0x232009a705c382046f9ee8c05558d3fbc249949a',
    chainId: CHAIN_ID,
    symbol: 'TOK',
    decimals: 9,
    name: 'TOKAI',
    icon: '/images/tokens/default_icon.png'
  },
  skeep: {
    address: '0x5B1eBa69DC9F9c09AFE29b27264cCf3183999a47',
    chainId: CHAIN_ID,
    symbol: 'SKEEP',
    decimals: 18,
    name: 'Keep Calm',
    icon: '/images/tokens/default_icon.png'
  },
  goody: {
    address: '0x2f7acaB1e2cc551D9423E74c0FD625B957d52efD',
    chainId: CHAIN_ID,
    symbol: 'GOODY',
    decimals: 18,
    name: 'Goody',
    icon: '/images/tokens/default_icon.png'
  },
  hype: {
    address: '0x9FE9991dAF6b9a5d79280F48cbb6827D46DE2EA4',
    chainId: CHAIN_ID,
    symbol: 'HYPE',
    decimals: 18,
    name: 'HyperBlast',
    icon: '/images/tokens/hype.webp'
  },
  coin: {
    address: '0xb73d8850510f2001FD4655c3bAF98F3dFb00c0CC',
    chainId: CHAIN_ID,
    symbol: 'coin',
    decimals: 18,
    name: 'DJENN',
    icon: '/images/tokens/default_icon.png'
  },
  trndo: {
    address: '0x9E92C0B2b84DDac571BdE330C4b44096A7c99909',
    chainId: CHAIN_ID,
    symbol: 'TRNDO',
    decimals: 18,
    name: 'Tornado',
    icon: '/images/tokens/default_icon.png'
  },
  greed: {
    address: '0xe6A062fba3918376500A602c800b1E0307420457',
    chainId: CHAIN_ID,
    symbol: 'GREED',
    decimals: 18,
    name: 'GREED',
    icon: '/images/tokens/greed.webp'
  },
  gbt: {
    address: '0xBC295dfFD0cBd38747e511545e304615c4a1Dc6E',
    chainId: CHAIN_ID,
    symbol: 'GBT',
    decimals: 18,
    name: 'GBT',
    icon: '/images/tokens/default_icon.png'
  },
  dam: {
    address: '0xdC60C24de182b07CB3f3A9269F120d8c15c4b381',
    chainId: CHAIN_ID,
    symbol: 'DAM',
    decimals: 18,
    name: 'Digital Art Movement',
    icon: '/images/tokens/default_icon.png'
  },
  nogold: {
    address: '0xcDbe12611F18B43098202d45928c905b34736C06',
    chainId: CHAIN_ID,
    symbol: 'NOGOLD',
    decimals: 18,
    name: 'NOGOLD',
    icon: '/images/tokens/default_icon.png'
  },
  ring: {
    address: '0x25F233C3E3676f9e900a89644a3FE5404d643c84',
    chainId: CHAIN_ID,
    symbol: 'RING',
    decimals: 18,
    name: 'Ring Governance Token',
    icon: '/images/tokens/ring.svg'
  },
  long: {
    address: '0xbDFd771208c7A0fC128AE538e1c4BcA9A354Ec4E',
    chainId: CHAIN_ID,
    symbol: 'LONG',
    decimals: 18,
    name: 'Long Token',
    icon: '/assets/tokens/long.jpg'
  },
  up: {
    address: '0x2D4B554c0596C7B77EAEDF3e732Ce93Ba968b23d',
    chainId: CHAIN_ID,
    symbol: 'UP',
    decimals: 18,
    name: 'UP',
    icon: '/images/tokens/up.svg'
  },
  flap: {
    address: '0x40fF8458f802Cc057edccDC143Cf701C828f7308',
    chainId: CHAIN_ID,
    symbol: 'FLAP',
    decimals: 18,
    name: 'Flappy Blast',
    icon: '/images/tokens/flap.png'
  },
  $hoge: {
    address: '0x548A6fE792015DD2A7827659D3Feb8Cf88cf1C79',
    chainId: CHAIN_ID,
    symbol: '$HOGE',
    decimals: 18,
    name: 'BlastHoge',
    icon: '/images/tokens/hoge.webp'
  },
  preon: {
    address: '0x135f9B3D5DEC9D73C042Cf380AdFFF95f4Fe9E35',
    chainId: CHAIN_ID,
    symbol: 'PREON',
    decimals: 18,
    name: 'PREON',
    icon: '/images/tokens/preon.svg'
  },
  star: {
    address: '0xC19669A405067927865B40Ea045a2baabbbe57f5',
    chainId: CHAIN_ID,
    symbol: 'STAR',
    decimals: 18,
    name: 'STAR',
    icon: '/images/tokens/star.svg'
  },
  ibex: {
    address: '0x9f04B6CEfd5BCd67d76aB708F17553Ce40188e6A',
    chainId: CHAIN_ID,
    symbol: 'IBEX',
    decimals: 18,
    name: 'IBEX',
    icon: '/assets/tokens/ibex.svg'
  },
  fdao: {
    address: '0x3B0cFFdA9a5aB64135C227638e777cEec0C243A8',
    chainId: CHAIN_ID,
    symbol: 'fDAO',
    decimals: 18,
    name: 'Fang Dao',
    icon: '/images/tokens/fdao.svg'
  }
};
