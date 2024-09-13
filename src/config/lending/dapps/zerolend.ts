import { linea } from '@/config/tokens/linea';
import { manta } from '@/config/tokens/manta';
import { zkSync } from '@/config/tokens/zkSync';

const ETH_TOKEN = { name: 'Ethereum', symbol: 'ETH', decimals: 18 };
const WETH_TOKEN = { name: 'Wrapped Ether', symbol: 'WETH', decimals: 18 };
const MATIC_TOKEN = { name: 'Matic', symbol: 'MATIC', decimals: 18 };
const WMATIC_TOKEN = { name: 'Wrapped Matic', symbol: 'WMATIC', decimals: 18 };
const ownerId = 'bluebiu.near';
const nodeUrl = 'https://rpc.mainnet.near.org';
const ipfsPrefix = 'https://ipfs.near.social/ipfs';

const CONTRACT_ABI = {
  wrappedTokenGatewayV3ABI:
    'https://raw.githubusercontent.com/corndao/aave-v3-bos-app/main/abi/WrappedTokenGatewayV3ABI.json',
  erc20Abi: 'https://raw.githubusercontent.com/corndao/aave-v3-bos-app/main/abi/ERC20Permit.json',
  aavePoolV3ABI: 'https://raw.githubusercontent.com/corndao/aave-v3-bos-app/main/abi/AAVEPoolV3.json',
  variableDebtTokenABI: 'https://raw.githubusercontent.com/corndao/aave-v3-bos-app/main/abi/VariableDebtToken.json',
  walletBalanceProviderABI:
    'https://raw.githubusercontent.com/corndao/aave-v3-bos-app/main/abi/WalletBalanceProvider.json'
};
const heroData = ['Net Worth', 'Net APY', 'Health Factor'];
const baseConfig = { ownerId, nodeUrl, ipfsPrefix, heroData };
const basic = {
  name: 'ZeroLend',
  data: 'bluebiu.near/widget/AAVE.Data.Zerolend',
  handlerClaim: 'bluebiu.near/widget/Lending.RewardClaim.Zerolend',
  type: 'aave-v3',
  loaderName: 'AaveV3'
};

const rewardToken = [
  {
    address: '',
    // decimals: 18,
    symbol: 'earlyZERO',
    name: 'earlyZERO',
    icon: '',
    unclaimed: ''
  }
];

const networks = {
  // zksync
  324: {
    // wethGateway: '0x4d8d90FAF90405b9743Ce600E98A2Aa8CdF579a0',
    // StabilityPool: '0xDAce04E411D9916169c0401033a7f76994eF5A0f',
    // borrowTokenAddress: '0x5FC44E95eaa48F9eB84Be17bd3aC66B6A82Af709',
    // BorrowerOperations: '0xd085Fd2338Cefb9cBD212F74d479072C1E7A25bf',
    // VesselManager: '0x8D9CDd9372740933702d606EaD3BB55dFfDC6303',
    // VesselManagerOperations: '0x03569d4c117f94e72e9f63B06F406c5bc7caddE9',
    // markets: {
    //   // [zkSync['weth'].address]: {
    //   //   decimals: 18,
    //   //   underlyingToken: zkSync['weth'],
    //   // },
    // },
    config: {
      ...baseConfig,
      chainName: 'zkSync Mainnet',
      nativeCurrency: zkSync['eth'],
      nativeWrapCurrency: zkSync['weth'],
      rpcUrl: 'https://1rpc.io/zksync2-era',
      aavePoolV3Address: '0x4d9429246EA989C9CeE203B43F6d1C7D83e3B8F8',
      PoolDataProvider: '0xB73550bC1393207960A385fC8b34790e5133175E',
      wrappedTokenGatewayV3Address: '0x767b4A087c11d7581Ac95eaFfc1FeBFA26bad3d2',
      balanceProviderAddress: '0xdeEa10da04D867e3303AB6E50FA26C2d8a5e9f70',
      incentivesProxy: '0x54AB34aB3C723bD2674c7082aA6fFcdfd3A5BEdc', //CLAIM
      rewardAddress: '0x9793eac2fECef55248efA039BEC78e82aC01CB2f'
    },
    rawMarkets: [
      {
        aTokenAddress: '0x9002ecb8a06060e3b56669c6B8F18E1c3b119914',
        availableLiquidity: 0,
        availableLiquidityUSD: '',
        borrowingEnabled: true,
        decimals: 18,
        icon: 'https://ipfs.near.social/ipfs/bafkreibmo3leq3youcg4o2fxe6pjxajkz4rfee4u5qbcxrx4puebx46psy',
        id: '1',
        isIsolated: false,
        name: 'Ethereum',
        supplyAPY: '',
        supportPermit: true,
        symbol: 'ETH',
        underlyingAsset: '0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91',
        usageAsCollateralEnabled: true,
        stableDebtTokenAddress: '0x9c9158BFF47342A20b7D2Ac09F89e96F3A209b9B',
        variableBorrowAPY: '',
        variableDebtTokenAddress: '0x56f58d9BE10929CdA709c4134eF7343D73B080Cf',
        supportBorrow: true
      },
      {
        id: '2',
        underlyingAsset: zkSync['weth'].address,
        name: zkSync['weth'].name,
        symbol: zkSync['weth'].symbol,
        decimals: zkSync['weth'].decimals,
        icon: zkSync['weth'].icon,
        supplyAPY: '',
        usageAsCollateralEnabled: true,
        borrowingEnabled: true,
        aTokenAddress: '0x9002ecb8a06060e3b56669c6B8F18E1c3b119914',
        stableDebtTokenAddress: '0x9c9158BFF47342A20b7D2Ac09F89e96F3A209b9B',
        variableDebtTokenAddress: '0x56f58d9BE10929CdA709c4134eF7343D73B080Cf',
        isIsolated: false,
        availableLiquidity: 0,
        availableLiquidityUSD: '',
        variableBorrowAPY: '',
        supportPermit: false,
        supportBorrow: false
      },
      {
        id: '3',
        underlyingAsset: zkSync['usdc'].address,
        name: zkSync['usdc'].name,
        symbol: zkSync['usdc'].symbol,
        decimals: zkSync['usdc'].decimals,
        icon: zkSync['usdc'].icon,
        supplyAPY: '',
        usageAsCollateralEnabled: true,
        borrowingEnabled: true,
        aTokenAddress: '0x016341e6Da8da66b33Fd32189328c102f32Da7CC',
        stableDebtTokenAddress: '0x5faC4FD2e4bCE392d34600d94Aa1114274e54Dff',
        variableDebtTokenAddress: '0xE60E1953aF56Db378184997cab20731d17c65004',
        isIsolated: false,
        availableLiquidity: 0,
        availableLiquidityUSD: '',
        variableBorrowAPY: '',
        supportPermit: false,
        supportBorrow: true
      },

      {
        id: '4',
        underlyingAsset: zkSync['usdt'].address,
        name: zkSync['usdt'].name,
        symbol: zkSync['usdt'].symbol,
        decimals: zkSync['usdt'].decimals,
        icon: 'https://ipfs.near.social/ipfs/bafkreiees4c52xtve6vtnwctudcv5yugs2tdmvyfywr4ltig4baloxzw2e',
        supplyAPY: '',
        usageAsCollateralEnabled: true,
        borrowingEnabled: true,
        aTokenAddress: '0x9ca4806fa54984Bf5dA4E280b7AA8bB821D21505',
        stableDebtTokenAddress: '0x6F977fD05962d67Eb7B16b15684fbEa0462F442d',
        variableDebtTokenAddress: '0xa333c6FF89525939271E796FbDe2a2D9A970F831',
        isIsolated: false,
        availableLiquidity: 0,
        availableLiquidityUSD: '',
        variableBorrowAPY: '',
        supportPermit: false,
        supportBorrow: true
      },
      {
        id: '5',
        underlyingAsset: zkSync['dai'].address,
        name: zkSync['dai'].name,
        symbol: zkSync['dai'].symbol,
        decimals: zkSync['dai'].decimals,
        icon: zkSync['dai'].icon,
        supplyAPY: '',
        usageAsCollateralEnabled: true,
        borrowingEnabled: true,
        aTokenAddress: '0x15b362768465F966F1E5983b7AE87f4C5Bf75C55',
        stableDebtTokenAddress: '0xb6ABb4183B98A2a85E1d8e9aC93542446461E2d7',
        variableDebtTokenAddress: '0x0325F21eB0A16802E2bACD931964434929985548',
        isIsolated: false,
        availableLiquidity: 0,
        availableLiquidityUSD: '',
        variableBorrowAPY: '',
        supportPermit: false,
        supportBorrow: true
      },
      {
        id: '6',
        underlyingAsset: zkSync['lusd'].address,
        decimals: zkSync['lusd'].decimals,
        symbol: zkSync['lusd'].symbol,
        name: zkSync['lusd'].name,
        icon: zkSync['lusd'].icon,
        supplyAPY: '',
        usageAsCollateralEnabled: true,
        borrowingEnabled: true,
        aTokenAddress: '0xd97Ac0ce99329EE19b97d03E099eB42D7Aa19ddB',
        stableDebtTokenAddress: '0x029214A5cd528433b8A4EccD7eF798210dB3518C',
        variableDebtTokenAddress: '0x41c618CCE58Fb27cAF4EEb1dd25de1d03A0DAAc6',
        isIsolated: false,
        availableLiquidity: 0,
        availableLiquidityUSD: '',
        variableBorrowAPY: '',
        supportPermit: false,
        supportBorrow: true
      }
    ],
    CONTRACT_ABI,
    rewardToken
  },
  //manta
  169: {
    config: {
      ...baseConfig,
      chainName: 'Manta Pacific Mainnet',
      nativeCurrency: manta['eth'],
      nativeWrapCurrency: manta['weth'],
      rpcUrl: 'https://pacific-rpc.manta.network/http',
      aavePoolV3Address: '0x2f9bB73a8e98793e26Cb2F6C4ad037BDf1C6B269',
      PoolDataProvider: '0x67f93d36792c49a4493652B91ad4bD59f428AD15',
      wrappedTokenGatewayV3Address: '0xE05361EA51E20118072aec0fB0FD178e8b09D69e',
      balanceProviderAddress: '0xCbDc0aeD7CDf2472784068abEf23a902CafABb98',
      incentivesProxy: '0x28F6899fF643261Ca9766ddc251b359A2d00b945', //CLAIM
      rewardAddress: '0x642CE49f36f74FCC430ff79A76EB984737A7672d'
    },
    rawMarkets: [
      {
        id: '1',
        underlyingAsset: manta['weth'].address,
        icon: 'https://ipfs.near.social/ipfs/bafkreibmo3leq3youcg4o2fxe6pjxajkz4rfee4u5qbcxrx4puebx46psy',
        decimals: 18,
        name: 'Ethereum',
        symbol: 'ETH',
        supplyAPY: '',
        usageAsCollateralEnabled: true,
        borrowingEnabled: false,
        aTokenAddress: '0x0684FC172a0B8e6A65cF4684eDb2082272fe9050',
        stableDebtTokenAddress: '0xffa256ad2487c4d989c3dfa6a6e9c13fe33beba4',
        variableDebtTokenAddress: '0xb5EEf4Df2e48Fb41E6eaE6778c14787bAAa181F1',
        isIsolated: false,
        availableLiquidity: 0,
        availableLiquidityUSD: '',
        variableBorrowAPY: '',
        supportPermit: false,
        supportBorrow: true
      },
      {
        id: '2',
        underlyingAsset: manta['weth'].address,
        icon: manta['weth'].icon,
        decimals: manta['weth'].decimals,
        symbol: manta['weth'].symbol,
        name: manta['weth'].name,
        supplyAPY: '',
        usageAsCollateralEnabled: true,
        borrowingEnabled: false,
        aTokenAddress: '0x0684FC172a0B8e6A65cF4684eDb2082272fe9050',
        stableDebtTokenAddress: '0xffa256ad2487c4d989c3dfa6a6e9c13fe33beba4',
        variableDebtTokenAddress: '0xb5EEf4Df2e48Fb41E6eaE6778c14787bAAa181F1',
        isIsolated: false,
        availableLiquidity: 0,
        availableLiquidityUSD: '',
        variableBorrowAPY: '',
        supportPermit: false,
        supportBorrow: true
      },
      {
        id: '3',
        underlyingAsset: manta['wusdm'].address,
        icon: manta['wusdm'].icon,
        decimals: manta['wusdm'].decimals,
        symbol: manta['wusdm'].symbol,
        name: manta['wusdm'].name,
        supplyAPY: '',
        usageAsCollateralEnabled: true,
        borrowingEnabled: true,
        aTokenAddress: '0x77E305B4D4D3b9DA4e82Cefd564F5b948366A44b',
        stableDebtTokenAddress: '0xba832bc55af97867170271f3afeab5eba1405ebc',
        variableDebtTokenAddress: '0x5F62aEa5549CdF5dc309255946D69E516a9C2042',
        isIsolated: false,
        availableLiquidity: 0,
        availableLiquidityUSD: '',
        variableBorrowAPY: '',
        supportPermit: false,
        supportBorrow: true
      },
      {
        id: '4',
        underlyingAsset: manta['wsteth'].address,
        icon: manta['wsteth'].icon,
        decimals: manta['wsteth'].decimals,
        symbol: manta['wsteth'].symbol,
        name: manta['wsteth'].name,
        supplyAPY: '',
        usageAsCollateralEnabled: true,
        borrowingEnabled: true,
        aTokenAddress: '0x0ab214F127998a36Ce7aB0087a9B0D20adc2d5AD',
        stableDebtTokenAddress: '0x28d7246cd9da102c75faa7d4cf1c5399b323f084',
        variableDebtTokenAddress: '0xb5EEf4Df2e48Fb41E6eaE6778c14787bAAa181F1',
        isIsolated: false,
        availableLiquidity: 0,
        availableLiquidityUSD: '',
        variableBorrowAPY: '',
        supportPermit: false,
        supportBorrow: true
      },
      {
        id: '5',
        underlyingAsset: manta['usdc'].address,
        icon: manta['usdc'].icon,
        decimals: manta['usdc'].decimals,
        symbol: manta['usdc'].symbol,
        name: manta['usdc'].name,
        supplyAPY: '',
        usageAsCollateralEnabled: true,
        borrowingEnabled: true,
        aTokenAddress: '0xB4FFEf15daf4C02787bC5332580b838cE39805f5',
        stableDebtTokenAddress: '0x27c7733d7a0f142720af777e70ebc33ca485d014',
        variableDebtTokenAddress: '0xCb2dA0F5aEce616e2Cbf29576CFc795fb15c6133',
        isIsolated: false,
        availableLiquidity: 0,
        availableLiquidityUSD: '',
        variableBorrowAPY: '',
        supportPermit: false,
        supportBorrow: true
      },
      {
        id: '6',
        underlyingAsset: manta['manta'].address,
        icon: manta['manta'].icon,
        decimals: manta['manta'].decimals,
        symbol: manta['manta'].symbol,
        name: manta['manta'].name,
        supplyAPY: '',
        usageAsCollateralEnabled: true,
        borrowingEnabled: true,
        aTokenAddress: '0x03114e4C29EA95BF26108c2c47338488555cEd1a',
        stableDebtTokenAddress: '0x7101ff22ea63464cc106e0a3274ef4a2d28cd292',
        variableDebtTokenAddress: '0x061ca6fDF24D586EE9a4e4B4A1D61f9090aB48e9',
        isIsolated: false,
        availableLiquidity: 0,
        availableLiquidityUSD: '',
        variableBorrowAPY: '',
        supportPermit: false,
        supportBorrow: true
      },
      {
        id: '7',
        underlyingAsset: manta['stone'].address,
        icon: manta['stone'].icon,
        decimals: manta['stone'].decimals,
        symbol: manta['stone'].symbol,
        name: manta['stone'].name,
        supplyAPY: '',
        usageAsCollateralEnabled: true,
        borrowingEnabled: true,
        aTokenAddress: '0x8d8b70a576113FEEdd7E3810cE61f5E243B01264',
        stableDebtTokenAddress: '0x7675abdc6139dbf46d3bb5a3dcf79e6cad936765',
        variableDebtTokenAddress: '0x3Da71Ad7E055ee9716bBA4DaC53E37cDDF60D509',
        isIsolated: false,
        availableLiquidity: 0,
        availableLiquidityUSD: '',
        variableBorrowAPY: '',
        supportPermit: false,
        supportBorrow: true
      },
      {
        id: '8',
        underlyingAsset: manta['usdt'].address,
        icon: 'https://ipfs.near.social/ipfs/bafkreiees4c52xtve6vtnwctudcv5yugs2tdmvyfywr4ltig4baloxzw2e',
        decimals: manta['usdt'].decimals,
        symbol: manta['usdt'].symbol,
        name: manta['usdt'].name,
        supplyAPY: '',
        usageAsCollateralEnabled: true,
        borrowingEnabled: true,
        aTokenAddress: '0x759cb97fbc452BAFD49992BA88d3C5dA4Dd9B0e7',
        stableDebtTokenAddress: '0xb8e26f3c4afb4f56f430a390dc3f3b12f8a50b26',
        variableDebtTokenAddress: '0xc1d9ca73f57930D4303D380C5DC668C40B38598B',
        isIsolated: false,
        availableLiquidity: 0,
        availableLiquidityUSD: '',
        variableBorrowAPY: '',
        supportPermit: false,
        supportBorrow: true
      },
      {
        id: '9',
        underlyingAsset: manta['tia'].address,
        icon: manta['tia'].icon,
        decimals: manta['tia'].decimals,
        symbol: manta['tia'].symbol,
        name: manta['tia'].name,
        supplyAPY: '',
        usageAsCollateralEnabled: true,
        borrowingEnabled: true,
        aTokenAddress: '0x508C39Cd02736535d5cB85f3925218E5e0e8F07A',
        stableDebtTokenAddress: '0x60c28a4cb4e78e9fee49bcaae3f4dbcde77f412f',
        variableDebtTokenAddress: '0x476F206511a18C9956fc79726108a03E647A1817',
        isIsolated: false,
        availableLiquidity: 0,
        availableLiquidityUSD: '',
        variableBorrowAPY: '',
        supportPermit: false,
        supportBorrow: true
      },
      {
        id: '10',
        underlyingAsset: manta['wbtc'].address,
        icon: manta['wbtc'].icon,
        decimals: manta['wbtc'].decimals,
        symbol: manta['wbtc'].symbol,
        name: manta['wbtc'].name,
        supplyAPY: '',
        usageAsCollateralEnabled: true,
        borrowingEnabled: true,
        aTokenAddress: '0xE7e54ca3D6F8a5561f8cee361260E537BDc5bE48',
        stableDebtTokenAddress: '0x7c2e57764ec33292fe098636aaa5d0357d814d16',
        variableDebtTokenAddress: '0xe6B9b00d42fA5831ccE4E44D9d6D8C51ba17cd1E',
        isIsolated: false,
        availableLiquidity: 0,
        availableLiquidityUSD: '',
        variableBorrowAPY: '',
        supportPermit: false,
        supportBorrow: true
      }
    ],
    CONTRACT_ABI,
    rewardToken
  },
  //linea
  59144: {
    config: {
      ...baseConfig,
      chainName: 'Linea',
      nativeCurrency: linea['eth'],
      nativeWrapCurrency: linea['weth'],
      rpcUrl: 'https://linea.blockpi.network/v1/rpc/public',
      aavePoolV3Address: '0x2f9bB73a8e98793e26Cb2F6C4ad037BDf1C6B269',
      PoolDataProvider: '0x67f93d36792c49a4493652B91ad4bD59f428AD15',
      wrappedTokenGatewayV3Address: '0x5d50bE703836C330Fc2d147a631CDd7bb8D7171c',
      balanceProviderAddress: '0xE05361EA51E20118072aec0fB0FD178e8b09D69e',
      incentivesProxy: '0x28F6899fF643261Ca9766ddc251b359A2d00b945', //CLAIM
      rewardAddress: '0x40A59A3F3b16d9e74C811d24D8b7969664cFe180'
    },
    rawMarkets: [
      {
        id: '1',
        underlyingAsset: linea['weth'].address,
        icon: 'https://ipfs.near.social/ipfs/bafkreibmo3leq3youcg4o2fxe6pjxajkz4rfee4u5qbcxrx4puebx46psy',
        decimals: 18,
        name: 'Ethereum',
        symbol: 'ETH',
        supplyAPY: '',
        usageAsCollateralEnabled: true,
        borrowingEnabled: false,
        aTokenAddress: '0xB4FFEf15daf4C02787bC5332580b838cE39805f5',
        stableDebtTokenAddress: '0x27C7733D7A0F142720Af777E70eBc33CA485d014',
        variableDebtTokenAddress: '0xCb2dA0F5aEce616e2Cbf29576CFc795fb15c6133',
        isIsolated: false,
        availableLiquidity: 0,
        availableLiquidityUSD: '',
        variableBorrowAPY: '',
        supportPermit: false,
        supportBorrow: true
      },
      {
        id: '2',
        underlyingAsset: linea['weth'].address,
        icon: linea['weth'].icon,
        decimals: linea['weth'].decimals,
        symbol: linea['weth'].symbol,
        name: linea['weth'].name,
        supplyAPY: '',
        usageAsCollateralEnabled: true,
        borrowingEnabled: false,
        aTokenAddress: '0xB4FFEf15daf4C02787bC5332580b838cE39805f5',
        stableDebtTokenAddress: '0x27C7733D7A0F142720Af777E70eBc33CA485d014',
        variableDebtTokenAddress: '0xCb2dA0F5aEce616e2Cbf29576CFc795fb15c6133',
        isIsolated: false,
        availableLiquidity: 0,
        availableLiquidityUSD: '',
        variableBorrowAPY: '',
        supportPermit: false,
        supportBorrow: false
      },

      {
        id: '3',
        underlyingAsset: linea['usdc'].address,
        icon: linea['usdc'].icon,
        decimals: linea['usdc'].decimals,
        symbol: linea['usdc'].symbol,
        name: linea['usdc'].name,
        supplyAPY: '',
        usageAsCollateralEnabled: true,
        borrowingEnabled: true,
        aTokenAddress: '0x2E207ecA8B6Bf77a6ac82763EEEd2A94de4f081d',
        stableDebtTokenAddress: '0xd07e6A4da4e360ba6EdDE42ce7867051ea4BE024',
        variableDebtTokenAddress: '0xa2703Dc9FbACCD6eC2e4CBfa700989D0238133f6',
        isIsolated: false,
        availableLiquidity: 0,
        availableLiquidityUSD: '',
        variableBorrowAPY: '',
        supportPermit: false,
        supportBorrow: true
      },

      {
        id: '4',
        underlyingAsset: linea['usdt'].address,
        icon: 'https://ipfs.near.social/ipfs/bafkreiees4c52xtve6vtnwctudcv5yugs2tdmvyfywr4ltig4baloxzw2e',
        decimals: linea['usdt'].decimals,
        symbol: linea['usdt'].symbol,
        name: linea['usdt'].name,
        supplyAPY: '',
        usageAsCollateralEnabled: true,
        borrowingEnabled: true,
        aTokenAddress: '0x508C39Cd02736535d5cB85f3925218E5e0e8F07A',
        stableDebtTokenAddress: '0x607f422f2e2de0FD1b084223ED16AE51c2453b06',
        variableDebtTokenAddress: '0x476F206511a18C9956fc79726108a03E647A1817',
        isIsolated: false,
        availableLiquidity: 0,
        availableLiquidityUSD: '',
        variableBorrowAPY: '',
        supportPermit: false,
        supportBorrow: true
      }
    ],
    CONTRACT_ABI,
    rewardToken
  }
};

export default { basic, networks };
