"use strict";exports.id=4561,exports.ids=[4561],exports.modules={74561:(a,e,s)=>{s.r(e),s.d(e,{basic:()=>t,networks:()=>o});var i=s(75594),d=s(16967),c=s(12414),n=s(22433),f=s(97567);let t={name:"iZiSwap",logo:"/images/apps/izi-swap.png",amountOutFn:"bluebiu.near/widget/Swap.Data.AmountOut"},o={59144:{defaultCurrencies:{input:i.P.eth,output:i.P.usdc},tokens:[i.P.eth,i.P.usdc,i.P.weth,i.P.izi,i.P.wbtc,i.P.busd]},5e3:{defaultCurrencies:{input:d.Z.weth,output:d.Z.usdc},tokens:[d.Z.weth,d.Z.usdc,d.Z.mnt,d.Z.usdt,d.Z.wbtc,d.Z.wmnt]},169:{defaultCurrencies:{input:c.f.weth,output:c.f.usdc},tokens:[c.f.weth,c.f.usdc,c.f.iusd,c.f.izi,c.f.usdt,c.f.wbtc,c.f.dai,c.f.wsteth,c.f.tia]},534352:{defaultCurrencies:{input:n.A.weth,output:n.A.usdc},tokens:[n.A.weth,n.A.usdc,n.A.dai,n.A.wbtc,n.A.izi,n.A.wsteth]},34443:{defaultCurrencies:{input:f.x.eth,output:f.x.usdt},tokens:[f.x.eth,f.x.weth,f.x.mode,f.x.usdc,f.x.usdt,f.x.ezeth,f.x["m-btc"],f.x["we-eth.mode"]]}}},12414:(a,e,s)=>{s.d(e,{f:()=>i});let i={eth:{address:"native",isNative:!0,chainId:169,symbol:"ETH",decimals:18,name:"Ether",icon:"https://ipfs.near.social/ipfs/bafkreibspnls7q67q25r2ifv2rrfmvzl744pzuh3s5ekigeqkmyycl2auq"},weth:{address:"0x0Dc808adcE2099A9F62AA87D9670745AbA741746",chainId:169,symbol:"WETH",decimals:18,name:"Wrapped Ether",icon:"https://ipfs.near.social/ipfs/bafkreie3hr7iav3gmgdl4mtyt4khorzdln4x746d25emnuwqkhs62t55wq"},usdc:{address:"0xb73603C5d87fA094B7314C74ACE2e64D165016fb",chainId:169,symbol:"USDC",decimals:6,name:"USD Coin",icon:"https://ipfs.near.social/ipfs/bafkreig2f274oowfjwh5w4uai4dbxarqkupj635k3r4dnjp3xxxh5fugiy"},usdt:{address:"0xf417F5A458eC102B90352F697D6e2Ac3A3d2851f",chainId:169,symbol:"USDT",decimals:6,name:"Tether USD",icon:"https://ipfs.near.social/ipfs/bafkreih45jy7ggj45ck34rf736kb67smsoa52wd7e46c2grh6etd3bhe5i"},wbtc:{address:"0x305E88d809c9DC03179554BFbf85Ac05Ce8F18d6",chainId:169,symbol:"WBTC",decimals:8,name:"Wrapped BTC",icon:"https://ipfs.near.social/ipfs/bafkreigdklwcldjo4w7viyrym54hdb43wgpv23mbicetszygzapttbgo7q"},dai:{address:"0x1c466b9371f8aBA0D7c458bE10a62192Fcb8Aa71",chainId:169,symbol:"DAI",decimals:18,name:"Dai Stablecoin",icon:"https://ipfs.near.social/ipfs/bafkreiguzm6s42t2hecx7bhwtwlhlsxt3fjkbzllro3n566kyrv3dq6ene"},matic:{chainId:169,name:"MATIC",symbol:"MATIC",icon:"https://ipfs.near.social/ipfs/bafkreih5yowurclpyrr5bwzonh76ywld22riv4mjp2scne6ye7746dcjl4",decimals:18,address:"0x0f52A51287f9b3894d73Df05164D0Ee2533ccBB4"},quick:{chainId:169,name:"QuickSwap",symbol:"QUICK",icon:"https://ipfs.near.social/ipfs/bafkreic7svq723bgukivtik7lb3xujjq24s7wsxto4bfzlh235k2ejzjme",decimals:18,address:"0xE22E3D44Ea9Fb0A87Ea3F7a8f41D869C677f0020"},wsteth:{chainId:169,name:"Wrapped liquid staked Ether 2.0",symbol:"wstETH",icon:"https://ipfs.near.social/ipfs/bafkreibukwahpp2ei74ax5acm6p7uwcnbsfvdzkizsdzqu26yfbxndpvra",decimals:18,address:"0x2FE3AD97a60EB7c79A976FC18Bb5fFD07Dd94BA5"},wusdm:{chainId:169,name:"Wrapped Mountain Protocol USD",symbol:"wUSDM",icon:"https://ipfs.near.social/ipfs/bafkreiekygvbrjobjko3wktxtgme3yhhbegb3j4momrgk6y25mldz4g7qu",decimals:18,address:"0xbdAd407F77f44F7Da6684B416b1951ECa461FB07"},stone:{chainId:169,name:"StakeStone Ether",symbol:"STONE",icon:"https://ipfs.near.social/ipfs/bafkreicchailtli5hsh4gn2fyg3yr4wpph6gksgbl32srffps6mdzkp2yi",decimals:18,address:"0xec901da9c68e90798bbbb74c11406a32a70652c3"},tia:{chainId:169,name:"TIA",symbol:"TIA",icon:"https://ipfs.near.social/ipfs/bafkreifnzrp2jmtp6nadc6vhd2ypnrawp6owl66f5qkeqiyiqxyu6iwaim",decimals:6,address:"0x6fae4d9935e2fcb11fc79a64e917fb2bf14dafaa"},izi:{chainId:169,name:"iZUMi Token",symbol:"iZi",icon:"https://ipfs.near.social/ipfs/bafkreifsgwu2zd6y2n5alekr5qgdhzoivlkl5wujtq3z7gnm5pw4jy7sgi",decimals:18,address:"0x91647632245caBf3d66121F86C387aE0ad295F9A"},iusd:{chainId:169,address:"0x078f712f038a95beea94f036cadb49188a90604b",decimals:18,symbol:"iUSD",name:"iZUMi Bond USD",icon:"https://ipfs.near.social/ipfs/bafkreiabjt25div73chcsnfhfqlfxj62j5fp2fvnl427qv3mlicx2bwanq"},lab:{chainId:169,address:"0x20A512dbdC0D006f46E6cA11329034Eb3d18c997",decimals:18,symbol:"LAB",name:"LineaBank Token",icon:"https://ipfs.near.social/ipfs/bafkreihjcqx2wtmzq6l2dobpx7oe5zb5epz3frvgzw6wfnojkps7d6cjce"},manta:{chainId:169,address:"0x95CeF13441Be50d20cA4558CC0a27B601aC544E5",decimals:18,symbol:"MANTA",name:"Manta",icon:"https://ipfs.near.social/ipfs/bafkreiblmivom5d5yrxtvtwf4aztyjzjxophzflqrppntwb3c7qc7sspgu"}}},16967:(a,e,s)=>{s.d(e,{Z:()=>i});let i={mnt:{chainId:5e3,name:"MNT",symbol:"MNT",icon:"https://ipfs.near.social/ipfs/bafkreibmrdi5ww5rk657jqglnaek5nptc6ze3kljferdsdewcirx4jijhe",decimals:18,isNative:!0,address:"native"},weth:{address:"0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111",chainId:5e3,symbol:"WETH",decimals:18,name:"Wrapped Ether",icon:"https://ipfs.near.social/ipfs/bafkreihyzmiuawyekwiyofkzm25xzrrfenhvadi6lb42juvq7tah2u7ha4"},usdc:{address:"0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9",chainId:5e3,symbol:"USDC",decimals:6,name:"USD Coin",icon:"https://ipfs.near.social/ipfs/bafkreie4jihoa76mgyzxhw2yrapihzu2qhkjz6m7u4opoxjebzg6zc2lla"},usdt:{address:"0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE",chainId:5e3,symbol:"USDT",decimals:6,name:"Tether USD",icon:"https://ipfs.near.social/ipfs/bafkreih45jy7ggj45ck34rf736kb67smsoa52wd7e46c2grh6etd3bhe5i"},wbtc:{address:"0xCAbAE6f6Ea1ecaB08Ad02fE02ce9A44F09aebfA2",chainId:5e3,symbol:"WBTC",decimals:8,name:"Wrapped BTC",icon:"https://ipfs.near.social/ipfs/bafkreigdklwcldjo4w7viyrym54hdb43wgpv23mbicetszygzapttbgo7q"},dai:{address:"0xAfAF32C57659BC9992b43bc6840A9d997632a0F5",chainId:5e3,symbol:"DAI",decimals:18,name:"Dai Stablecoin",icon:"https://ipfs.near.social/ipfs/bafkreieuxntkdzi2mzkzdcbk6kahwxqpftxnipxcwc4oe4p4jm2rhj2xhu"},wmnt:{address:"0x78c1b0c915c4faa5fffa6cabf0219da63d7f4cb8",chainId:5e3,decimals:18,symbol:"WMNT",name:"Wrapped Mantle",icon:"https://ipfs.near.social/ipfs/bafkreibmrdi5ww5rk657jqglnaek5nptc6ze3kljferdsdewcirx4jijhe"},lend:{chainId:5e3,address:"0x25356aeca4210ef7553140edb9b8026089e49396",decimals:18,symbol:"LEND",name:"Lendle Protocol Token",icon:"https://ipfs.near.social/ipfs/bafkreig36gyyl6bv2s6f5c2kq22x4omgaclfzyf5ifvjmsxl55svptlq3e"},moe:{chainId:5e3,address:"0x4515A45337F461A11Ff0FE8aBF3c606AE5dC00c9",decimals:18,symbol:"MOE",name:"Moe Token",icon:"https://ipfs.near.social/ipfs/bafkreihj5lvetwoz42vcgr6nwc4ibyslzuwxguv4cdpy4qcf5o3bu4uai4"},lusd:{chainId:5e3,address:"0xf93a85d53e4af0d62bdf3a83ccfc1ecf3eaf9f32",name:"LUSD Stablecoin",symbol:"LUSD",icon:"https://ipfs.near.social/ipfs/bafkreihne6zw3myw5dwh72giml63vjjksmixrf435hf7cnsg5f3ubgdnde",decimals:18},cleo:{chainId:5e3,address:"0xC1E0C8C30F251A07a894609616580ad2CEb547F2",name:"Cleopatra",symbol:"CLEO",icon:"https://ipfs.near.social/ipfs/bafkreibncghvd7ajh5fdqxzittwyl2bukx32i4fjpr4xzd4aznjs5y2wly",decimals:18},mvm:{chainId:5e3,address:"0x861A6Fc736Cbb12ad57477B535B829239c8347d7",name:"VelociMantle",symbol:"MVM",icon:"https://ipfs.near.social/ipfs/bafkreif5v6cfcqxlusijhonbjuiiywbynlftafwo4a3bztde3cvlye4qhe",decimals:18}}},97567:(a,e,s)=>{s.d(e,{x:()=>i});let i={eth:{chainId:34443,address:"native",name:"ETH",symbol:"ETH",icon:"https://ipfs.near.social/ipfs/bafkreibmo3leq3youcg4o2fxe6pjxajkz4rfee4u5qbcxrx4puebx46psy",decimals:18,isNative:!0},weth:{chainId:34443,address:"0x4200000000000000000000000000000000000006",decimals:18,symbol:"WETH",name:"Wrapped Ether",icon:"https://assets.coingecko.com/coins/images/2518/small/weth.png?1628852295"},usdt:{chainId:34443,address:"0xf0F161fDA2712DB8b566946122a5af183995e2eD",decimals:6,symbol:"USDT",name:"Tether USD ",icon:"https://ipfs.near.social/ipfs/bafkreih45jy7ggj45ck34rf736kb67smsoa52wd7e46c2grh6etd3bhe5i"},usdc:{chainId:34443,address:"0xd988097fb8612cc24eeC14542bC03424c656005f",decimals:6,symbol:"USDC",name:"USDC",icon:"https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389"},ezeth:{address:"0x2416092f143378750bb29b79eD961ab195CcEea5",chainId:34443,symbol:"ezETH",decimals:18,name:"Renzo Restaked ETH",icon:"https://ipfs.near.social/ipfs/bafkreiee5yhfnbsjedzqj2p4uaeko327ooenqptplslol2pxwir463z7ii"},"m-btc":{address:"0x59889b7021243dB5B1e065385F918316cD90D46c",chainId:34443,symbol:"M-BTC",decimals:18,name:"Merlin BTC",icon:"https://ipfs.near.social/ipfs/bafkreiepihwrzkrc3z5d4brgjgh7i32vsvx7c5tn5sbb5tng55fh26qygq"},"we-eth":{address:"0x028227c4dd1e5419d11Bb6fa6e661920c519D4F5",chainId:34443,symbol:"weETH",decimals:18,name:"Wrapped eETH",icon:"https://ipfs.near.social/ipfs/bafkreiay4btbz3rhrgxzztx72njurb5sgubxno3tlkv2hvzxoauxzz6d6e"},"we-eth.mode":{address:"0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A",chainId:34443,symbol:"weETH.mode",decimals:18,name:"Wrapped eETH",icon:"https://ipfs.near.social/ipfs/bafkreiay4btbz3rhrgxzztx72njurb5sgubxno3tlkv2hvzxoauxzz6d6e"},"ankr-eth":{address:"0x12D8CE035c5DE3Ce39B1fDD4C1d5a745EAbA3b8C",chainId:34443,symbol:"ankrETH",decimals:18,name:"Ankr Staked ETH",icon:"https://ipfs.near.social/ipfs/bafkreigq26tdgnyrwg45swnx5v3oogy232z2q46cwbvd6jkirc4aqyz5nq"},dai:{chainId:34443,address:"0xe7798f023fc62146e8aa1b36da45fb70855a77ea",decimals:18,symbol:"DAI",name:"Dai Stablecoin",icon:"https://ipfs.near.social/ipfs/bafkreiguzm6s42t2hecx7bhwtwlhlsxt3fjkbzllro3n566kyrv3dq6ene"},smd:{chainId:34443,address:"0xfda619b6d20975be80a10332cd39b9a4b0faa8bb",decimals:18,symbol:"SMD",name:"Swap Mode",icon:"https://ipfs.near.social/ipfs/bafkreidos7g5c4y4cplsamp2rry6a5x3kn5cxbyc734lrevbm4ron35nfa"},mochad:{chainId:34443,address:"0xcda802a5bffaa02b842651266969a5bba0c66d3e",decimals:18,symbol:"MOCHAD",name:"MoChadCoin",icon:"https://ipfs.near.social/ipfs/bafkreiezw2pp2yptuajshiqfxxeqrw3vgkjt6xi2jx62cqb53chlnup6h4"},wbtc:{chainId:34443,address:"0xcdd475325d6f564d27247d1dddbb0dac6fa0a5cf",decimals:8,symbol:"WBTC",name:"Wrapped BTC",icon:"https://ipfs.near.social/ipfs/bafkreigdklwcldjo4w7viyrym54hdb43wgpv23mbicetszygzapttbgo7q"},modi:{chainId:34443,address:"0x598f9cb99bafc8346b4c153a61b3a27c8f13b10f",decimals:18,symbol:"MODI",name:"Modie",icon:"https://ipfs.near.social/ipfs/bafkreiemajqfppspgsp3aqpg7rmgex672idgamyqrrcs6t7ut7t2uqrhia"},stone:{chainId:34443,address:"0x80137510979822322193fc997d400d5a6c747bf7",decimals:18,symbol:"STONE",name:"StakeStone Ether",icon:"https://ipfs.near.social/ipfs/bafkreih3upiejskutko5ochkysbzuihf4t7ngopshrdefi3zjknmnmou6i"},lab:{chainId:34443,address:"0xFE67e16313f4B38743a153f74D5762F7C83e59aE",decimals:18,symbol:"LAB",name:"LineaBank Token",icon:"https://ipfs.near.social/ipfs/bafkreihjcqx2wtmzq6l2dobpx7oe5zb5epz3frvgzw6wfnojkps7d6cjce"},kim:{chainId:34443,address:"0x6863fb62Ed27A9DdF458105B507C15b5d741d62e",decimals:18,symbol:"KIM",name:"KIM",icon:"https://ipfs.near.social/ipfs/bafkreidiekbdac2oxzv3wue537e22wi7hvb62wqwp3tkmy3oquolbsedf4"},rseth:{chainId:34443,address:"0x4186BFC76E2E237523CBC30FD220FE055156b41F",decimals:18,symbol:"rsETH",name:"KelpDao Restaked ETH",icon:"https://ipfs.near.social/ipfs/bafkreibhmbhdfll7apn5mjmlmt6eh2fgn4wcvrkl3yhqfujgw5dgkqvg2e"},wrseth:{address:"0xe7903B1F75C534Dd8159b313d92cDCfbC62cB3Cd",chainId:34443,symbol:"wrsETH",decimals:18,name:"rsETHWrapper",icon:"https://ipfs.near.social/ipfs/bafkreiablktwaz4gul2cnx4zkkfl5zqolg76imnp7dzjaqkdywknvadzty"},mode:{address:"0xDfc7C877a950e49D2610114102175A06C2e3167a",chainId:34443,symbol:"MODE",decimals:18,name:"MODE",icon:"https://ipfs.near.social/ipfs/bafkreihyh7mw7dieuobllbdpzs2irqadepophuc764rtdxbwdn36csz5ei"}}},22433:(a,e,s)=>{s.d(e,{A:()=>d,K:()=>i});let i=534352,d={eth:{address:"native",isNative:!0,chainId:i,symbol:"ETH",decimals:18,name:"Ether",icon:"https://ipfs.near.social/ipfs/bafkreibmo3leq3youcg4o2fxe6pjxajkz4rfee4u5qbcxrx4puebx46psy"},usdt:{chainId:i,address:"0xf55bec9cafdbe8730f096aa55dad6d22d44099df",decimals:6,symbol:"USDT",name:"Tether USD",icon:"https://ipfs.near.social/ipfs/bafkreih45jy7ggj45ck34rf736kb67smsoa52wd7e46c2grh6etd3bhe5i"},weth:{chainId:i,address:"0x5300000000000000000000000000000000000004",decimals:18,symbol:"WETH",name:"Wrapped Ether",icon:"https://ipfs.near.social/ipfs/bafkreie3hr7iav3gmgdl4mtyt4khorzdln4x746d25emnuwqkhs62t55wq"},usdc:{chainId:i,address:"0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4",decimals:6,symbol:"USDC",name:"USD Coin",icon:"https://ipfs.near.social/ipfs/bafkreig2f274oowfjwh5w4uai4dbxarqkupj635k3r4dnjp3xxxh5fugiy"},lusd:{chainId:i,address:"0xedeabc3a1e7d21fe835ffa6f83a710c70bb1a051",name:"LUSD Stablecoin",symbol:"LUSD",icon:"https://ipfs.near.social/ipfs/bafkreihne6zw3myw5dwh72giml63vjjksmixrf435hf7cnsg5f3ubgdnde",decimals:18},wbtc:{chainId:i,address:"0x3c1bca5a656e69edcd0d4e36bebb3fcdaca60cf1",decimals:8,symbol:"WBTC",name:"Wrapped BTC",icon:"https://ipfs.near.social/ipfs/bafkreigdklwcldjo4w7viyrym54hdb43wgpv23mbicetszygzapttbgo7q"},lab:{chainId:i,address:"0x2A00647F45047f05BDed961Eb8ECABc42780e604",decimals:18,symbol:"LAB",name:"LineaBank Token",icon:"https://ipfs.near.social/ipfs/bafkreihjcqx2wtmzq6l2dobpx7oe5zb5epz3frvgzw6wfnojkps7d6cjce"},wsteth:{chainId:i,name:"Wrapped liquid staked Ether 2.0",symbol:"wstETH",icon:"https://ipfs.near.social/ipfs/bafkreibukwahpp2ei74ax5acm6p7uwcnbsfvdzkizsdzqu26yfbxndpvra",decimals:18,address:"0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32"},sky:{chainId:i,name:"Skydrome",symbol:"SKY",icon:"/images/tokens/sky.png",decimals:18,address:"0x95a52ec1d60e74cd3eb002fe54a2c74b185a4c16"},crv:{chainId:i,address:"0xB755039eDc7910C1F1BD985D48322E55A31AC0bF",decimals:18,symbol:"CRV",name:"Curve DAO Token",icon:"https://ipfs.near.social/ipfs/bafkreihfv7kul7d6e2fxnlpalx3p7wx47ylhw7tauozhipcughshj25ehm"},aave:{chainId:i,address:"0x79379C0E09a41d7978f883a56246290eE9a8c4d3",decimals:18,symbol:"AAVE",name:"Aave Token",icon:"https://ipfs.near.social/ipfs/bafkreicmsnivbvp2xd3ewcjb5kybgnbnevbcojhn4mgub7rregnbtqcige"},reth:{chainId:i,address:"0x53878b874283351d26d206fa512aece1bef6c0dd",decimals:18,symbol:"rETH",name:"Rocket Pool ETH",icon:"https://ipfs.near.social/ipfs/bafkreicgk4jnpvyfe7jqup46y5epyxoemounktft6yxtym7o7wcagiecpy"},dai:{chainId:i,address:"0xcA77eB3fEFe3725Dc33bccB54eDEFc3D9f764f97",decimals:18,symbol:"DAI",name:"Dai Stablecoin",icon:"https://ipfs.near.social/ipfs/bafkreieuxntkdzi2mzkzdcbk6kahwxqpftxnipxcwc4oe4p4jm2rhj2xhu"},izi:{chainId:i,address:"0x60D01EC2D5E98Ac51C8B4cF84DfCCE98D527c747",decimals:18,symbol:"iZi",name:"izumi Token",icon:"https://ipfs.near.social/ipfs/bafkreifsgwu2zd6y2n5alekr5qgdhzoivlkl5wujtq3z7gnm5pw4jy7sgi"},dodo:{chainId:i,address:"0x912aB742e1ab30ffa87038C425F9Bc8ED12B3EF4",decimals:18,symbol:"DODO",name:"DODO bird",icon:"/images/tokens/dodo.webp"},pxeth:{chainId:i,address:"0x9E0d7D79735e1c63333128149c7b616a0dC0bBDb",decimals:18,symbol:"pxETH",name:"Pirex Ether OFT",icon:"https://ipfs.near.social/ipfs/bafkreiepil46e3xesbiq623ucwrwg3b4wxmynfejaks5osx2rhpyfv5gai"},wrseth:{chainId:i,address:"0xa25b25548b4c98b0c7d3d27dca5d5ca743d68b7f",decimals:18,symbol:"wrsETH",name:"rsETHWrapper",icon:"https://ipfs.near.social/ipfs/bafkreifcfbemweplxi43rajsimrzzfgovmh6bg7zkg5nkivyxob6gfu7ki"}}}};