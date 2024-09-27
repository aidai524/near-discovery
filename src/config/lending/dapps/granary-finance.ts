import { arbitrum } from '@/config/tokens/arbitrum';
import { avalanche } from '@/config/tokens/avalanche';
import { base } from '@/config/tokens/base';
import { bsc } from '@/config/tokens/bsc';
import { linea } from '@/config/tokens/linea';
import { metis } from '@/config/tokens/metis';
import { optimism } from '@/config/tokens/optimism';

const basic = {
  name: 'Granary Finance',
  icon: '/assets/apps/granary.png',
  data: 'bluebiu.near/widget/Lending.Data.Radiant',
  handler: 'bluebiu.near/widget/Lending.Handler.Radiant',
  type: 'aave2',
  loaderName: 'GranaryFinance'
};

const networks = {
  // arb
  42161: {
    oracleAddress: '0xe12e084FC4550387cB2b252b5F289BA38b755354',
    poolAddressProvider: '0x642cc899652B068D1bED786c4B060Ec1027D1563',
    aaveProtocolDataProviderAddress: '0x96bCFB86F1bFf315c13e00D850e2FAeA93CcD3e7',
    lendingPoolAddress: '0x102442A3BA1e441043154Bc0B8A2e2FB5E0F94A7',
    wethGateway: '0x3CC0a623f1aFFab5D5514A453965cE8C80B45549',
    markets: {
      [arbitrum['dai'].address]: {
        decimals: 18,
        symbol: 'grainDAI',
        address: '0xFC2eaC1AeB490d5ff727E659273C8AfC5dD2b0bb',
        underlyingToken: arbitrum['dai'],
        stableDebtTokenAddress: '0x75803D39dB1f2d3C84fd1B3AD74D5070283c0E39',
        variableDebtTokenAddress: '0xFdF4EE30CEFF9a6253d4Eb43257abC361433bF04'
      },
      [arbitrum['wst-eth'].address]: {
        decimals: 18,
        symbol: 'grainWSTETH',
        address: '0x93e5E80029b36E5e5E75311cf50EBC60995F9EA6',
        underlyingToken: arbitrum['wst-eth'],
        stableDebtTokenAddress: '0x73B4cDF788aC8BF0B0104966Cdae4dc482FC3800',
        variableDebtTokenAddress: '0x5d13FfbC005a2bdd16F3c50e527D42C387759299'
      },
      [arbitrum['arb'].address]: {
        decimals: 18,
        symbol: 'grainARB',
        address: '0x8B9a4ded05ad8C3AB959980538437b0562dBb129',
        underlyingToken: arbitrum['arb'],
        stableDebtTokenAddress: '0xa05934ACb42768343035BCe74F72BFd6d2F61010',
        variableDebtTokenAddress: '0x5935530b52332D1030d98c1ce06F2943E06B75Ad'
      },
      [arbitrum['usdc.e'].address]: {
        decimals: 6,
        symbol: 'grainUSDC',
        address: '0x6C4CB1115927D50E495E554d38b83f2973F05361',
        underlyingToken: arbitrum['usdc.e'],
        stableDebtTokenAddress: '0x3fc33103748cB94495Be26A35C6b77B2D7a71A61',
        variableDebtTokenAddress: '0xE2B1674f85c8a1729567f38CB502088c6E147938'
      },
      [arbitrum['usdt'].address]: {
        decimals: 6,
        symbol: 'grainUSDT',
        address: '0x66ddD8F3A0C4CEB6a324376EA6C00B4c8c1BB3d9',
        underlyingToken: arbitrum['usdt'],
        stableDebtTokenAddress: '0x03ADcEC5D760E50A2bed982cb5e6A6Ab2580D55E',
        variableDebtTokenAddress: '0x3E2deEDA33d8Ba579430F38868Db3ed0e2394576'
      },
      [arbitrum['weth'].address]: {
        decimals: 18,
        symbol: 'grainETH',
        address: '0x712F1955E5eD3F7A5Ac7B5E4c480db8edF9b3fD7',
        underlyingToken: arbitrum['eth'],
        stableDebtTokenAddress: '0xC39b18F5E6F3338B787d10bb6c37058D29c1DA79',
        variableDebtTokenAddress: '0xC5e029C1097D9585629aE4bDf74C37182EC8d1ba'
      },
      [arbitrum['wbtc'].address]: {
        decimals: 8,
        symbol: 'grainWBTC',
        address: '0x731e2246A0c67b1B19188C7019094bA9F107404f',
        underlyingToken: arbitrum['wbtc'],
        stableDebtTokenAddress: '0x01C4dD26296E7A13418D0dc6822591810da8B989',
        variableDebtTokenAddress: '0x8DaEc4344A99f575B13DE9F16c53d5bf65e75a42'
      },
      [arbitrum['reth'].address]: {
        decimals: 8,
        symbol: 'grainRETH',
        address: '0x883b786504a2c6bfa2c9e578e5D1752ecbc24DEe',
        underlyingToken: arbitrum['reth'],
        stableDebtTokenAddress: '0xE0B08f55697FeA5272604fC002B96b8379298f1A',
        variableDebtTokenAddress: '0x458D60c27B433A157462c7959e2a103389DE3fcE'
      }
    }
  },
  // avalanche
  43114: {
    oracleAddress: '0x5A3423210536d930150080F699248EDeBC65E2B4',
    poolAddressProvider: '0xEDc83309549e36f3c7FD8c2C5C54B4c8e5FA00FC',
    aaveProtocolDataProviderAddress: '0xed984A0E9c12Ee27602314191Fc4487A702bB83f',
    lendingPoolAddress: '0xB702cE183b4E1Faa574834715E5D4a6378D0eEd3',
    wethGateway: '0x29563f73De731Ae555093deb795ba4D1E584e42E',
    markets: {
      [avalanche['usdc.e'].address]: {
        decimals: 6,
        symbol: 'grainUSDC',
        address: '0x02CD18c03b5b3f250d2B29C87949CDAB4Ee11488',
        underlyingToken: avalanche['usdc.e'],
        stableDebtTokenAddress: '0x73C177510cb7b5c6a7C770376Fc6EBD29eF9e1A7',
        variableDebtTokenAddress: '0xBcE07537DF8AD5519C1d65e902e10aA48AF83d88'
      },
      [avalanche['dai.e'].address]: {
        decimals: 18,
        symbol: 'grainDAI',
        address: '0xe7334Ad0e325139329E747cF2Fc24538dD564987',
        underlyingToken: avalanche['dai.e'],
        stableDebtTokenAddress: '0xC40709470139657E6D80249c5cC998eFb44898C9',
        variableDebtTokenAddress: '0xe5415Fa763489C813694D7A79d133F0A7363310C'
      },
      [avalanche['usdt.e'].address]: {
        decimals: 6,
        symbol: 'grainUSDT',
        address: '0x9c29a8eC901DBec4fFf165cD57D4f9E03D4838f7',
        underlyingToken: avalanche['usdt.e'],
        stableDebtTokenAddress: '0x6f66C5C5e2FF94929582EaBfc19051F19ed9EB70',
        variableDebtTokenAddress: '0x06D38c309d1dC541a23b0025B35d163c25754288'
      },
      [avalanche['eth'].address]: {
        decimals: 18,
        symbol: 'grainWETH',
        address: '0x58254000eE8127288387b04ce70292B56098D55C',
        underlyingToken: avalanche['eth'],
        stableDebtTokenAddress: '0xc73AC4D26025622167a2BC67C93a855C1c6BDb24',
        variableDebtTokenAddress: '0x05249f9Ba88F7d98fe21a8f3C460f4746689Aea5'
      },
      [avalanche['xava'].address]: {
        decimals: 18,
        symbol: 'grainXAVA',
        address: '0xC17312076F48764d6b4D263eFdd5A30833E311DC',
        underlyingToken: avalanche['xava'],
        stableDebtTokenAddress: '0x5183adca8472B7c999c310e4D5aAab04ad12E252',
        variableDebtTokenAddress: '0x3F332f38926b809670b3cac52Df67706856a1555'
      },
      [avalanche['wavax'].address]: {
        decimals: 18,
        symbol: 'grainAVAX',
        address: '0xe3f709397e87032E61f4248f53Ee5c9a9aBb6440',
        underlyingToken: avalanche['wavax'],
        stableDebtTokenAddress: '0x383995FD2E86a2e067Ffb31674aa0d1B370B39bD',
        variableDebtTokenAddress: '0x083E519E76fe7e68C15A6163279eAAf87E2addAE'
      },
      [avalanche['wbtc.e'].address]: {
        decimals: 8,
        symbol: 'grainWBTC',
        address: '0x272CfCceFbEFBe1518cd87002A8F9dfd8845A6c4',
        underlyingToken: avalanche['wbtc.e'],
        stableDebtTokenAddress: '0x09AB5cA2d537b81520F78474d6ED43675451A7f8',
        variableDebtTokenAddress: '0x5eEA43129024eeE861481f32c2541b12DDD44c08'
      }
    }
  },
  // base
  8453: {
    oracleAddress: '0x5A3423210536d930150080F699248EDeBC65E2B4',
    poolAddressProvider: '0xEDc83309549e36f3c7FD8c2C5C54B4c8e5FA00FC',
    aaveProtocolDataProviderAddress: '0xed984A0E9c12Ee27602314191Fc4487A702bB83f',
    lendingPoolAddress: '0xB702cE183b4E1Faa574834715E5D4a6378D0eEd3',
    wethGateway: '0x29563f73De731Ae555093deb795ba4D1E584e42E',
    markets: {
      [base['usdbc'].address]: {
        decimals: 6,
        symbol: 'grainUSDC',
        address: '0x02CD18c03b5b3f250d2B29C87949CDAB4Ee11488',
        underlyingToken: base['usdbc'],
        stableDebtTokenAddress: '0x73C177510cb7b5c6a7C770376Fc6EBD29eF9e1A7',
        variableDebtTokenAddress: '0xBcE07537DF8AD5519C1d65e902e10aA48AF83d88'
      },
      [base['cbeth'].address]: {
        decimals: 18,
        symbol: 'grainCBETH',
        address: '0x272CfCceFbEFBe1518cd87002A8F9dfd8845A6c4',
        underlyingToken: base['cbeth'],
        stableDebtTokenAddress: '0x09AB5cA2d537b81520F78474d6ED43675451A7f8',
        variableDebtTokenAddress: '0x5eEA43129024eeE861481f32c2541b12DDD44c08'
      },
      [base['dai'].address]: {
        decimals: 18,
        symbol: 'grainDAI',
        address: '0xe7334Ad0e325139329E747cF2Fc24538dD564987',
        underlyingToken: base['dai'],
        stableDebtTokenAddress: '0xC40709470139657E6D80249c5cC998eFb44898C9',
        variableDebtTokenAddress: '0xe5415Fa763489C813694D7A79d133F0A7363310C'
      },
      [base['weth'].address]: {
        decimals: 18,
        symbol: 'grainETH',
        address: ' 0x9c29a8eC901DBec4fFf165cD57D4f9E03D4838f7',
        underlyingToken: base['weth'],
        stableDebtTokenAddress: '0x6f66C5C5e2FF94929582EaBfc19051F19ed9EB70',
        variableDebtTokenAddress: '0x06D38c309d1dC541a23b0025B35d163c25754288'
      }
    }
  },
  // bsc
  56: {
    oracleAddress: '0x417cA1091Fa4C329cEe19452851dff46902440a5',
    poolAddressProvider: '0x12c26138b666360AB2B7A1B149dF9Cf6642CDfBf',
    aaveProtocolDataProviderAddress: '0x7Fb479624ca336bA8f2dc66439F8683330eE2880',
    lendingPoolAddress: '0x7171054f8d148Fe1097948923C91A6596fC29032',
    wethGateway: '0x9df4Ac62F9E435DbCD85E06c990a7f0ea32739a9',
    markets: {
      [bsc['btcb'].address]: {
        decimals: 18,
        symbol: 'grainBTC',
        address: '0x6c578574a5400C5E45F18Be65227cFc2A64D94f7',
        underlyingToken: bsc['btcb'],
        stableDebtTokenAddress: '0x60516165Bcee35870499AcD040ba8B586f280959',
        variableDebtTokenAddress: '0x7F459f3C6d068168eF791746602ca29180B5d03F'
      },
      [bsc['wbnb'].address]: {
        decimals: 18,
        symbol: 'grainBNB',
        address: '0x70aD5E32e6ea548DcE7D331B447C2791cf695a98',
        underlyingToken: bsc['bnb'],
        stableDebtTokenAddress: '0x24f515b64f1D5dc8D702dAa4e0cE0Ef9FcdcE589',
        variableDebtTokenAddress: '0x839c8Ca0873De853c5F8DF1ef3e82e9da398abf6'
      },
      [bsc['dai'].address]: {
        decimals: 18,
        symbol: 'grainDAI',
        address: '0x6055558D88DDE78df51bF9E90Bdd225D525Cf80b',
        underlyingToken: bsc['dai'],
        stableDebtTokenAddress: '0x6F4FDe7277E70483C344e3175b1262928FB52BAE',
        variableDebtTokenAddress: '0xa0758Cd24cF68f486F3F6D96e833680d4971ccf8'
      },
      [bsc['usdt'].address]: {
        decimals: 18,
        symbol: 'grainUSDT',
        address: '0x7E25119b5e52c32970161F1e0da3e66BBef100F1',
        underlyingToken: bsc['usdt'],
        stableDebtTokenAddress: '0xaf8ED214adF8358D296a3135BfEf8167594D181D',
        variableDebtTokenAddress: '0x573BcE236692b48f5Faa07947e78C1e282E16c28'
      },
      [bsc['usdc'].address]: {
        decimals: 18,
        symbol: 'grainUSDC',
        address: '0xe37BbfdD50b715d49df6e596f9248BFE6b967cd7',
        underlyingToken: bsc['usdc'],
        stableDebtTokenAddress: '0xE56873b4886E4C08a07498a90D6Cdb2f0069c4B3',
        variableDebtTokenAddress: '0x2f4e44316AF0CAc2154f95acca305082A2382e98'
      },
      [bsc['eth'].address]: {
        decimals: 18,
        symbol: 'grainETH',
        address: '0x2a050A0D74C9A12bA44bd2acA9D7D7d1bDF988E9',
        underlyingToken: bsc['eth'],
        stableDebtTokenAddress: '0x64F719B2A1668835337fff491e7c88402093fbB4',
        variableDebtTokenAddress: '0xa7EDe8701D7dac898b04DDf27C781b4eB961443f'
      }
    }
  },
  // op
  10: {
    oracleAddress: '0x9aEeFef549323511E027D70562f0C7EdcDEB294C',
    poolAddressProvider: '0xdDE5dC81e40799750B92079723Da2acAF9e1C6D6',
    aaveProtocolDataProviderAddress: '0x9546F673eF71Ff666ae66d01Fd6E7C6Dae5a9995',
    lendingPoolAddress: '0x8FD4aF47E4E63d1D2D45582c3286b4BD9Bb95DfE',
    wethGateway: '0x6e20E155819f0ee08d1291b0b9889b0e011b8224',
    markets: {
      [optimism['usdc.e'].address]: {
        decimals: 6,
        symbol: 'grainUSDC',
        address: '0x7A0FDDBA78FF45D353B1630B77f4D175A00df0c0',
        underlyingToken: optimism['usdc.e'],
        stableDebtTokenAddress: '0xBd11f9AD2522447849C376B9cbBcdcFD80814f17',
        variableDebtTokenAddress: '0xb271973b367E50fcDE5Ee5e426944C37045Dd0bf'
      },
      [optimism['usdt'].address]: {
        decimals: 6,
        symbol: 'grainUSDT',
        address: ' 0x4e7849f846f8cdDAF37c72065b65Ec22cecEE109',
        underlyingToken: optimism['usdt'],
        stableDebtTokenAddress: '0xD3d5Fd831C00c5cB54A925B8263508ccCaBf070E',
        variableDebtTokenAddress: '0x5c4Acfcba420F8A0E14b7aaDA3d8726452642FBb'
      },
      [optimism['dai'].address]: {
        decimals: 18,
        symbol: 'grainDAI',
        address: '0x18D2b18Af9A1f379025f46b8aeB4aF75f6642c9F',
        underlyingToken: optimism['dai'],
        stableDebtTokenAddress: '0xf3F47cc1d683C3e8862EcCE239E6679C331499d3',
        variableDebtTokenAddress: '0xbaBDD3E2231990b1f47844536E19B2F1CC1D5077'
      },
      [optimism['op'].address]: {
        decimals: 18,
        symbol: 'grainOP',
        address: '0x30091e843deb234EBb45c7E1Da4bBC4C33B3f0B4',
        underlyingToken: optimism['op'],
        stableDebtTokenAddress: '0x9C6EB7B564f1B81E9E8a41a6E8e5e34D0d9a570F',
        variableDebtTokenAddress: '0xB1AfE7c8D6d94e8EF04Ab3C99848a3B21A33d9eF'
      },
      [optimism['snx'].address]: {
        decimals: 18,
        symbol: 'grainSNX',
        address: '0xa73b7C26eF3221BF9eA7E5981840519427f7dCaF',
        underlyingToken: optimism['snx'],
        stableDebtTokenAddress: '0xC539CA809d6d7C3B37759c4A4484202204AA1484',
        variableDebtTokenAddress: ' 0x9dd559b1d7454979b1699d710885Ba5C658277E3'
      },
      [optimism['susd'].address]: {
        decimals: 18,
        symbol: 'grainSUSD',
        address: '0x8AaA9d29305D331aE67AD65495B9e22cf98f9035',
        underlyingToken: optimism['susd'],
        stableDebtTokenAddress: '0xF0E94bdC2D589EaD059072aC1BF27c67ACf931B6',
        variableDebtTokenAddress: '0xc0031304549E494f1F48A9AC568242B1a6Ca1804'
      }
    }
  },
  // metis
  1088: {
    oracleAddress: '0xC4ae6CEA0f15F5a44e0F8EEA1D516aF2Eccb9709',
    poolAddressProvider: '0xE2dfcb86C99599DAFC12028F67b8456f99c9de4c',
    aaveProtocolDataProviderAddress: '0x10615D451a5b91C92ce8538703E7AABA5d5cCC4D',
    lendingPoolAddress: '0x65dEc665ea1e96Ee5203DB321b5Cd413b81B2bd2',
    wethGateway: '0x4d8d90FAF90405b9743Ce600E98A2Aa8CdF579a0',
    markets: {
      [metis['m.usdc'].address]: {
        decimals: 6,
        symbol: 'grainUSDC',
        address: '0x37FA438EdfB7044E9444b4022b2516C4dAA4592F',
        underlyingToken: metis['m.usdc'],
        stableDebtTokenAddress: '0x9e398d935d3e9e02319124110aab1b4646944f45',
        variableDebtTokenAddress: '0x1eee9a7452c6e73e6fae6b6f95bfcb3afebeddbd'
      },
      [metis['m.usdt'].address]: {
        decimals: 6,
        symbol: 'grainUSDT',
        address: '0x18bA3e87876f4982810d321D447b81d01Cdf6668',
        underlyingToken: metis['m.usdt'],
        stableDebtTokenAddress: '',
        variableDebtTokenAddress: ''
      },
      [metis['metis'].address]: {
        decimals: 18,
        symbol: 'grainMETIS',
        address: '0x7f5eC43a46dF54471DAe95d3C05BEBe7301b75Ff',
        underlyingToken: metis['metis'],
        stableDebtTokenAddress: '0x179659d5e67c64b54b0df4960389787ffa4db6c2',
        variableDebtTokenAddress: '0xeaf4cbd2622bf807a02091804db775cdce2169fb'
      },
      [metis['m.wbtc'].address]: {
        decimals: 8,
        symbol: 'grainWBTC',
        address: '0x826ED083724909196e6598452Be4fDFe0FA6C7CD',
        underlyingToken: metis['m.wbtc'],
        stableDebtTokenAddress: '0xcdce2de35069a192c74a44adc94323bf80f8adcf',
        variableDebtTokenAddress: '0x9ae05c138ebaa84c0e65ee63edd5ad64a8b78ab6'
      },
      [metis['weth'].address]: {
        decimals: 18,
        symbol: 'grainWETH',
        address: '0x73d49aC28C4Fea2B8e7C6BF45d64A2e68ed53bE0',
        underlyingToken: metis['weth'],
        stableDebtTokenAddress: '0xcbd8930edde3f64cff1f1b1f079282d1377db62b',
        variableDebtTokenAddress: '0xe772bf4d6f458552bc6a0e067efd69b9c1acbcc3'
      }
    }
  },
  // Linea
  59144: {
    oracleAddress: '0x8429d0AFade80498EAdb9919E41437A14d45A00B',
    poolAddressProvider: '0x3884fcD0DB58C0fE9f6DA852fa43DB898524be95',
    aaveProtocolDataProviderAddress: '0xd2abC5d7841d49C40Fd35A1Ec832ee1daCC8D339',
    lendingPoolAddress: '0x871AfF0013bE6218B61b28b274a6F53DB131795F',
    wethGateway: '0x9546F673eF71Ff666ae66d01Fd6E7C6Dae5a9995',
    defaultMarket: [linea['usdc'].address],
    markets: {
      [linea['usdc'].address]: {
        decimals: 6,
        symbol: 'grainUSDC',
        address: '0x5C4866349ff0Bf1e7C4b7f6d8bB2dBcbe76f8895',
        underlyingToken: linea['usdc'],
        stableDebtTokenAddress: '0xAA36A2840a4a3666989C51751cE2D2F9dB658BA0',
        variableDebtTokenAddress: '0x157903B7c6D759c9D3c65A675a15aA0723eea95B'
      },
      [linea['usdt'].address]: {
        decimals: 6,
        symbol: 'grainUSDT',
        address: '0xa0f8323A84AdC89346eD3F7c5dcddf799916b51E',
        underlyingToken: linea['usdt'],
        stableDebtTokenAddress: '0x0B624a977087ED828560636bBe26FBD6df489696',
        variableDebtTokenAddress: '0x393a64Fc561D6c8f5D8D8c427005cAB66DfeCA9D'
      },
      [linea['dai'].address]: {
        decimals: 18,
        symbol: 'grainDAI',
        address: '0x245B368d5a969179Df711774e7BdC5eC670e92EF',
        underlyingToken: linea['dai'],
        stableDebtTokenAddress: '0x6F2783E0f6fDaCD7ce8E87b69CEfB5Fb6Be25791',
        variableDebtTokenAddress: '0xd4c3692B753302Ef0Ef1d50dd7928D60ef00B9ff'
      },
      [linea['weth'].address]: {
        decimals: 18,
        symbol: 'grainWETH',
        address: '0xB36535765A7421B397Cfd9fEc03cF96aA99C8D08',
        underlyingToken: linea['weth'],
        stableDebtTokenAddress: '0x9ff79431A180249B229341d8597BDC7f64a73c74',
        variableDebtTokenAddress: '0xd8A40a27dD36565cC2B17C8B937eE50B69209E22'
      },
      [linea['wbtc'].address]: {
        decimals: 8,
        symbol: 'grainBTC',
        address: '0xdc66aC2336742E387b766B4c264c993ee6a3EF28',
        underlyingToken: linea['wbtc'],
        stableDebtTokenAddress: '0x58DcB9517a9757710898000b31f54Db44E19d7e9',
        variableDebtTokenAddress: '0x9576c6FDd82474177781330Fc47C38D89936E7c8'
      }
    }
  }
};

export default { basic, networks };
