import { gnosis } from '@/config/tokens/gnosis';

const basic = {
  name: 'AuraFinance',
  type: 'staking'
};
const POOL_TYPES = {
  WeightedPool: 'WeightedPool',
  ComposableStablePool: 'ComposableStablePool',
  StablePool: 'StablePool'
};
const tokenArray = Object.values(gnosis);
const tokenMapping = tokenArray.reduce((prev, cur) => {
  (prev as any)[cur.address] = cur;
  return prev;
}, {});

const networks = {
  // gnosis
  100: {
    RewardPoolDepositWrapper: '0x0Fec3d212BcC29eF3E505B555D7a7343DF0B7F76',
    PoolContractWrapper: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    POOLS: [
      {
        poolName: 'wstETH-GNO',
        Rewards_contract_address: '0x14a81c9283cc16897daa3f466847baa260b770eb',
        Rewards_depositor_contract_address: '0x0fec3d212bcc29ef3e505b555d7a7343df0b7f76',
        LP_token_address: '0x4683e340a8049261057d5ab1b29c8d840e75695e',
        Balancer_Gauge: '0xb812249d60b80c7cbc9398e382ed6dfdf82e23d2',
        Aura_Stash: '0x95d41829eb179d549ede8e6db31c10818c7a4e0f',
        Balancer_Pool_ID: '0x4683e340a8049261057d5ab1b29c8d840e75695e00020000000000000000005a',
        Aura_Pool_ID: 15,
        poolType: POOL_TYPES.WeightedPool,
        APR: 0,
        pjAPR: 0
      },
      {
        poolName: 'COW-wstETH',
        Rewards_contract_address: '0x85298595d4f6f8fa91f8658ba9c10f9a85b17f62',
        Rewards_depositor_contract_address: '0x0fec3d212bcc29ef3e505b555d7a7343df0b7f76',
        LP_token_address: '0x4cdabe9e07ca393943acfb9286bbbd0d0a310ff6',
        Balancer_Gauge: '0xce18a3d0d928ab8883f355b5009d2de07d5c1d83',
        Aura_Stash: '0x918a3d87ddb20f225647e1560f4f66f8e0590311',
        Balancer_Pool_ID: '0x4cdabe9e07ca393943acfb9286bbbd0d0a310ff600020000000000000000005c',
        Aura_Pool_ID: 20,
        poolType: POOL_TYPES.WeightedPool,
        APR: 0,
        pjAPR: 0
      },
      {
        poolName: 'USDT-sDAI-USDC',
        Rewards_contract_address: '0x7513105d6cf9d18756d95ded81d6d3f68db4b8da',
        Rewards_depositor_contract_address: '0x0fec3d212bcc29ef3e505b555d7a7343df0b7f76',
        LP_token_address: '0x7644fa5d0ea14fcf3e813fdf93ca9544f8567655',
        Balancer_Gauge: '0xdec0362b3229690fbe4f88c57472610588bb9a2e',
        Aura_Stash: '0xffd046ed3635697c98c5ee1ac92f6c7ed1c9da54',
        Balancer_Pool_ID: '0x7644fa5d0ea14fcf3e813fdf93ca9544f8567655000000000000000000000066',
        Aura_Pool_ID: 21,
        poolType: POOL_TYPES.ComposableStablePool,
        APR: 0,
        pjAPR: 0
      },
      {
        poolName: 'wstETH-sDAI',
        Rewards_contract_address: '0x49aadc30b5ccc57bddd55ac8bd7d8db7cf1f2b8b',
        Rewards_depositor_contract_address: '0x0fec3d212bcc29ef3e505b555d7a7343df0b7f76',
        LP_token_address: '0xbc2acf5e821c5c9f8667a36bb1131dad26ed64f9',
        Balancer_Gauge: '0x4d13d387f372dbe5125b7d78e75094ac85b31edc',
        Aura_Stash: '0x6363d0c1f5cbc85e49af00cd8da1827f7a417b19',
        Balancer_Pool_ID: '0xbc2acf5e821c5c9f8667a36bb1131dad26ed64f9000200000000000000000063',
        Aura_Pool_ID: 19,
        poolType: POOL_TYPES.WeightedPool,
        APR: 0,
        pjAPR: 0
      },
      {
        poolName: 'crvUSD-sDAI',
        Rewards_contract_address: '0xfad4505c5bf3d3654ba7c97a0cea6e7b35882959',
        Rewards_depositor_contract_address: '0x0fec3d212bcc29ef3e505b555d7a7343df0b7f76',
        LP_token_address: '0xc9f00c3a713008ddf69b768d90d4978549bfdf94',
        Balancer_Gauge: '0xb079bd76dd9b5f9a8d3954e4250fc25be0549ac0',
        Aura_Stash: '0x19e21f4a9283f940e871f648efd07051cd274eaa',
        Balancer_Pool_ID: '0xc9f00c3a713008ddf69b768d90d4978549bfdf9400000000000000000000006d',
        Aura_Pool_ID: 23,
        poolType: POOL_TYPES.ComposableStablePool,
        APR: 0,
        pjAPR: 0
      },
      {
        poolName: 'sDAI-EURe',
        Rewards_contract_address: '0xde151980d461696543aa07a19bbe2603b20ecbae',
        Rewards_depositor_contract_address: '0x0fec3d212bcc29ef3e505b555d7a7343df0b7f76',
        LP_token_address: '0xdd439304a77f54b1f7854751ac1169b279591ef7',
        Balancer_Gauge: '0xbb2598b89202596a743be0b615001d7d5164f167',
        Aura_Stash: '0x6068eb7490748a1a49830b58524c002b545c1ce2',
        Balancer_Pool_ID: '0xdd439304a77f54b1f7854751ac1169b279591ef7000000000000000000000064',
        Aura_Pool_ID: 18,
        poolType: POOL_TYPES.ComposableStablePool,
        APR: 0,
        pjAPR: 0
      },
      {
        poolName: 'WETH-wstETH',
        Rewards_contract_address: '0x026d163C28cC7dbf57d6ED57f14208Ee412CA526',
        Rewards_depositor_contract_address: '0x0fec3d212bcc29ef3e505b555d7a7343df0b7f76',
        LP_token_address: '0xbad20c15a773bf03ab973302f61fabcea5101f0a',
        Balancer_Gauge: '0x27519F69b2Ac912aeb6fE066180FB25a17c71755',
        Aura_Stash: '0xe2F2499474B4Bef0a7320c1D2b0FEfFD5430Acf8',
        Balancer_Pool_ID: '0xbad20c15a773bf03ab973302f61fabcea5101f0a000000000000000000000034',
        Aura_Pool_ID: 0,
        poolType: POOL_TYPES.WeightedPool,
        APR: 0,
        pjAPR: 0
      },
      {
        poolName: 'AURA-wstETH-BAL',
        Rewards_contract_address: '0x51867537e5532186E76BA5380235512A9A4ca52a',
        Rewards_depositor_contract_address: '0x0fec3d212bcc29ef3e505b555d7a7343df0b7f76',
        LP_token_address: '0x00df7f58e1cf932ebe5f54de5970fb2bdf0ef06d',
        Balancer_Gauge: '0x64cee2356f959E78DB36A4C23a28f0454447C3dF',
        Aura_Stash: '0xbcb983169F5206E7a01DdB75f22489965fB9eF66',
        Balancer_Pool_ID: '0x00df7f58e1cf932ebe5f54de5970fb2bdf0ef06d00010000000000000000005b',
        Aura_Pool_ID: 17,
        poolType: POOL_TYPES.WeightedPool,
        APR: 0,
        pjAPR: 0
      },
      {
        poolName: 'staBAL3-WETH-WBTC',
        Rewards_contract_address: '0x112EA63D3A70bB7926F95DA81EaDF71Aba0f0955',
        Rewards_depositor_contract_address: '0x0fec3d212bcc29ef3e505b555d7a7343df0b7f76',
        LP_token_address: '0x66888e4f35063ad8bb11506a6fde5024fb4f1db0',
        Balancer_Gauge: '0x9fF4e3925B88B6885083A88c2283a21CD504D3d4',
        Aura_Stash: '0x353a64558c8670974216BDa16c3d420FADE65293',
        Balancer_Pool_ID: '0x66888e4f35063ad8bb11506a6fde5024fb4f1db0000100000000000000000053',
        Aura_Pool_ID: 13,
        poolType: POOL_TYPES.WeightedPool,
        APR: 0,
        pjAPR: 0
      },
      {
        poolName: 'stEUR-EURe',
        Rewards_contract_address: '0x408883e983695dec78cf66480e6efef907a73c21',
        Rewards_depositor_contract_address: '0x0fec3d212bcc29ef3e505b555d7a7343df0b7f76',
        LP_token_address: '0x06135a9ae830476d3a941bae9010b63732a055f4',
        Balancer_Gauge: '0x49b7c059bf0a71583918928d33c84dcb2aa001f8',
        Aura_Stash: '0xf2a9d8ea9bebf593977e98da1e642403c8834e06',
        Balancer_Pool_ID: '0x06135a9ae830476d3a941bae9010b63732a055f4000000000000000000000065',
        Aura_Pool_ID: 22,
        poolType: POOL_TYPES.ComposableStablePool,
        APR: 0,
        pjAPR: 0
      }
    ],
    TOKENS: tokenMapping,
    markets: {
      // [gnosis['wmatic'].address]: {
      //   decimals: 18,
      //   underlyingToken: gnosis['wmatic'],
      // },
    }
  }
};

export default { basic, networks };
