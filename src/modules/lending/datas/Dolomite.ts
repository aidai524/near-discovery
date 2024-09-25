import Big from 'big.js';
import { ethers } from 'ethers';
import { useEffect } from 'react';

const ERC20_ABI = [
  {
    constant: true,
    inputs: [
      {
        name: '_owner',
        type: 'address'
      }
    ],
    name: 'balanceOf',
    outputs: [
      {
        name: 'balance',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
];

const MARGIN_ABI = [
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint64',
            name: 'marginRatioMax',
            type: 'uint64'
          },
          {
            internalType: 'uint64',
            name: 'liquidationSpreadMax',
            type: 'uint64'
          },
          {
            internalType: 'uint64',
            name: 'earningsRateMax',
            type: 'uint64'
          },
          {
            internalType: 'uint64',
            name: 'marginPremiumMax',
            type: 'uint64'
          },
          {
            internalType: 'uint64',
            name: 'liquidationSpreadPremiumMax',
            type: 'uint64'
          },
          {
            internalType: 'uint96',
            name: 'interestRateMax',
            type: 'uint96'
          },
          {
            internalType: 'uint128',
            name: 'minBorrowedValueMax',
            type: 'uint128'
          }
        ],
        internalType: 'struct Storage.RiskLimits',
        name: 'riskLimits',
        type: 'tuple'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: 'marginRatio',
        type: 'tuple'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: 'liquidationSpread',
        type: 'tuple'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: 'earningsRate',
        type: 'tuple'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Monetary.Value',
        name: 'minBorrowedValue',
        type: 'tuple'
      },
      {
        internalType: 'uint256',
        name: 'accountMaxNumberOfMarketsWithBalances',
        type: 'uint256'
      },
      {
        internalType: 'contract IOracleSentinel',
        name: 'oracleSentinel',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'callbackGasLimit',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'operator',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'trusted',
        type: 'bool'
      }
    ],
    name: 'LogOperatorSet',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'number',
            type: 'uint256'
          }
        ],
        internalType: 'struct Account.Info',
        name: 'account',
        type: 'tuple'
      }
    ],
    name: 'getAccountBalances',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]'
      },
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]'
      },
      {
        components: [
          {
            internalType: 'bool',
            name: 'sign',
            type: 'bool'
          },
          {
            internalType: 'uint128',
            name: 'value',
            type: 'uint128'
          }
        ],
        internalType: 'struct Types.Par[]',
        name: '',
        type: 'tuple[]'
      },
      {
        components: [
          {
            internalType: 'bool',
            name: 'sign',
            type: 'bool'
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Types.Wei[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'number',
            type: 'uint256'
          }
        ],
        internalType: 'struct Account.Info',
        name: 'account',
        type: 'tuple'
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256'
      }
    ],
    name: 'getAccountMarketWithBalanceAtIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'number',
            type: 'uint256'
          }
        ],
        internalType: 'struct Account.Info',
        name: 'account',
        type: 'tuple'
      }
    ],
    name: 'getAccountMarketsWithBalances',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'getAccountMaxNumberOfMarketsWithBalances',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'number',
            type: 'uint256'
          }
        ],
        internalType: 'struct Account.Info',
        name: 'account',
        type: 'tuple'
      }
    ],
    name: 'getAccountNumberOfMarketsWithBalances',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'number',
            type: 'uint256'
          }
        ],
        internalType: 'struct Account.Info',
        name: 'account',
        type: 'tuple'
      }
    ],
    name: 'getAccountNumberOfMarketsWithDebt',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'number',
            type: 'uint256'
          }
        ],
        internalType: 'struct Account.Info',
        name: 'account',
        type: 'tuple'
      },
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getAccountPar',
    outputs: [
      {
        components: [
          {
            internalType: 'bool',
            name: 'sign',
            type: 'bool'
          },
          {
            internalType: 'uint128',
            name: 'value',
            type: 'uint128'
          }
        ],
        internalType: 'struct Types.Par',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'number',
            type: 'uint256'
          }
        ],
        internalType: 'struct Account.Info',
        name: 'account',
        type: 'tuple'
      }
    ],
    name: 'getAccountRiskOverrideByAccount',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: 'marginRatioOverride',
        type: 'tuple'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: 'liquidationSpreadOverride',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: 'accountOwner',
        type: 'address'
      }
    ],
    name: 'getAccountRiskOverrideSetterByAccountOwner',
    outputs: [
      {
        internalType: 'contract IAccountRiskOverrideSetter',
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'number',
            type: 'uint256'
          }
        ],
        internalType: 'struct Account.Info',
        name: 'account',
        type: 'tuple'
      }
    ],
    name: 'getAccountStatus',
    outputs: [
      {
        internalType: 'enum Account.Status',
        name: '',
        type: 'uint8'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'number',
            type: 'uint256'
          }
        ],
        internalType: 'struct Account.Info',
        name: 'account',
        type: 'tuple'
      }
    ],
    name: 'getAccountValues',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Monetary.Value',
        name: '',
        type: 'tuple'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Monetary.Value',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'number',
            type: 'uint256'
          }
        ],
        internalType: 'struct Account.Info',
        name: 'account',
        type: 'tuple'
      },
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getAccountWei',
    outputs: [
      {
        components: [
          {
            internalType: 'bool',
            name: 'sign',
            type: 'bool'
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Types.Wei',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'number',
            type: 'uint256'
          }
        ],
        internalType: 'struct Account.Info',
        name: 'account',
        type: 'tuple'
      }
    ],
    name: 'getAdjustedAccountValues',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Monetary.Value',
        name: '',
        type: 'tuple'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Monetary.Value',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'getCallbackGasLimit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'getDefaultAccountRiskOverrideSetter',
    outputs: [
      {
        internalType: 'contract IAccountRiskOverrideSetter',
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'getEarningsRate',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: 'autoTrader',
        type: 'address'
      }
    ],
    name: 'getIsAutoTraderSpecial',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'getIsBorrowAllowed',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address'
      }
    ],
    name: 'getIsGlobalOperator',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'getIsLiquidationAllowed',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address'
      }
    ],
    name: 'getIsLocalOperator',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'getLiquidationSpread',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'number',
            type: 'uint256'
          }
        ],
        internalType: 'struct Account.Info',
        name: 'account',
        type: 'tuple'
      },
      {
        internalType: 'uint256',
        name: 'heldMarketId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'owedMarketId',
        type: 'uint256'
      }
    ],
    name: 'getLiquidationSpreadForAccountAndPair',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'heldMarketId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'owedMarketId',
        type: 'uint256'
      }
    ],
    name: 'getLiquidationSpreadForPair',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'number',
            type: 'uint256'
          }
        ],
        internalType: 'struct Account.Info',
        name: 'account',
        type: 'tuple'
      }
    ],
    name: 'getLiquidationSpreadOverrideByAccount',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'getMarginRatio',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'number',
            type: 'uint256'
          }
        ],
        internalType: 'struct Account.Info',
        name: 'account',
        type: 'tuple'
      }
    ],
    name: 'getMarginRatioForAccount',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'number',
            type: 'uint256'
          }
        ],
        internalType: 'struct Account.Info',
        name: 'account',
        type: 'tuple'
      }
    ],
    name: 'getMarginRatioOverrideByAccount',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getMarket',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address'
          },
          {
            internalType: 'bool',
            name: 'isClosing',
            type: 'bool'
          },
          {
            components: [
              {
                internalType: 'uint128',
                name: 'borrow',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'supply',
                type: 'uint128'
              }
            ],
            internalType: 'struct Types.TotalPar',
            name: 'totalPar',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint112',
                name: 'borrow',
                type: 'uint112'
              },
              {
                internalType: 'uint112',
                name: 'supply',
                type: 'uint112'
              },
              {
                internalType: 'uint32',
                name: 'lastUpdate',
                type: 'uint32'
              }
            ],
            internalType: 'struct Interest.Index',
            name: 'index',
            type: 'tuple'
          },
          {
            internalType: 'contract IPriceOracle',
            name: 'priceOracle',
            type: 'address'
          },
          {
            internalType: 'contract IInterestSetter',
            name: 'interestSetter',
            type: 'address'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
              }
            ],
            internalType: 'struct Decimal.D256',
            name: 'marginPremium',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
              }
            ],
            internalType: 'struct Decimal.D256',
            name: 'liquidationSpreadPremium',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'bool',
                name: 'sign',
                type: 'bool'
              },
              {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
              }
            ],
            internalType: 'struct Types.Wei',
            name: 'maxSupplyWei',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'bool',
                name: 'sign',
                type: 'bool'
              },
              {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
              }
            ],
            internalType: 'struct Types.Wei',
            name: 'maxBorrowWei',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
              }
            ],
            internalType: 'struct Decimal.D256',
            name: 'earningsRateOverride',
            type: 'tuple'
          }
        ],
        internalType: 'struct Storage.Market',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getMarketBorrowInterestRateApr',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Interest.Rate',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getMarketBorrowInterestRatePerSecond',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Interest.Rate',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getMarketCachedIndex',
    outputs: [
      {
        components: [
          {
            internalType: 'uint112',
            name: 'borrow',
            type: 'uint112'
          },
          {
            internalType: 'uint112',
            name: 'supply',
            type: 'uint112'
          },
          {
            internalType: 'uint32',
            name: 'lastUpdate',
            type: 'uint32'
          }
        ],
        internalType: 'struct Interest.Index',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getMarketCurrentIndex',
    outputs: [
      {
        components: [
          {
            internalType: 'uint112',
            name: 'borrow',
            type: 'uint112'
          },
          {
            internalType: 'uint112',
            name: 'supply',
            type: 'uint112'
          },
          {
            internalType: 'uint32',
            name: 'lastUpdate',
            type: 'uint32'
          }
        ],
        internalType: 'struct Interest.Index',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getMarketEarningsRateOverride',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address'
      }
    ],
    name: 'getMarketIdByTokenAddress',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getMarketInterestRate',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Interest.Rate',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getMarketInterestSetter',
    outputs: [
      {
        internalType: 'contract IInterestSetter',
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getMarketIsClosing',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getMarketLiquidationSpreadPremium',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getMarketMarginPremium',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getMarketMaxBorrowWei',
    outputs: [
      {
        components: [
          {
            internalType: 'bool',
            name: 'sign',
            type: 'bool'
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Types.Wei',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getMarketMaxSupplyWei',
    outputs: [
      {
        components: [
          {
            internalType: 'bool',
            name: 'sign',
            type: 'bool'
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Types.Wei',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getMarketMaxWei',
    outputs: [
      {
        components: [
          {
            internalType: 'bool',
            name: 'sign',
            type: 'bool'
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Types.Wei',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getMarketPrice',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Monetary.Price',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getMarketPriceOracle',
    outputs: [
      {
        internalType: 'contract IPriceOracle',
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getMarketSpreadPremium',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getMarketSupplyInterestRateApr',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Interest.Rate',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getMarketTokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getMarketTotalPar',
    outputs: [
      {
        components: [
          {
            internalType: 'uint128',
            name: 'borrow',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'supply',
            type: 'uint128'
          }
        ],
        internalType: 'struct Types.TotalPar',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getMarketTotalWei',
    outputs: [
      {
        components: [
          {
            internalType: 'uint128',
            name: 'borrow',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'supply',
            type: 'uint128'
          }
        ],
        internalType: 'struct Types.TotalWei',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getMarketWithInfo',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address'
          },
          {
            internalType: 'bool',
            name: 'isClosing',
            type: 'bool'
          },
          {
            components: [
              {
                internalType: 'uint128',
                name: 'borrow',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'supply',
                type: 'uint128'
              }
            ],
            internalType: 'struct Types.TotalPar',
            name: 'totalPar',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint112',
                name: 'borrow',
                type: 'uint112'
              },
              {
                internalType: 'uint112',
                name: 'supply',
                type: 'uint112'
              },
              {
                internalType: 'uint32',
                name: 'lastUpdate',
                type: 'uint32'
              }
            ],
            internalType: 'struct Interest.Index',
            name: 'index',
            type: 'tuple'
          },
          {
            internalType: 'contract IPriceOracle',
            name: 'priceOracle',
            type: 'address'
          },
          {
            internalType: 'contract IInterestSetter',
            name: 'interestSetter',
            type: 'address'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
              }
            ],
            internalType: 'struct Decimal.D256',
            name: 'marginPremium',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
              }
            ],
            internalType: 'struct Decimal.D256',
            name: 'liquidationSpreadPremium',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'bool',
                name: 'sign',
                type: 'bool'
              },
              {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
              }
            ],
            internalType: 'struct Types.Wei',
            name: 'maxSupplyWei',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'bool',
                name: 'sign',
                type: 'bool'
              },
              {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
              }
            ],
            internalType: 'struct Types.Wei',
            name: 'maxBorrowWei',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
              }
            ],
            internalType: 'struct Decimal.D256',
            name: 'earningsRateOverride',
            type: 'tuple'
          }
        ],
        internalType: 'struct Storage.Market',
        name: '',
        type: 'tuple'
      },
      {
        components: [
          {
            internalType: 'uint112',
            name: 'borrow',
            type: 'uint112'
          },
          {
            internalType: 'uint112',
            name: 'supply',
            type: 'uint112'
          },
          {
            internalType: 'uint32',
            name: 'lastUpdate',
            type: 'uint32'
          }
        ],
        internalType: 'struct Interest.Index',
        name: '',
        type: 'tuple'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Monetary.Price',
        name: '',
        type: 'tuple'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Interest.Rate',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'getMinBorrowedValue',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Monetary.Value',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      }
    ],
    name: 'getNumExcessTokens',
    outputs: [
      {
        components: [
          {
            internalType: 'bool',
            name: 'sign',
            type: 'bool'
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Types.Wei',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'getNumMarkets',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'getOracleSentinel',
    outputs: [
      {
        internalType: 'contract IOracleSentinel',
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'getRiskLimits',
    outputs: [
      {
        components: [
          {
            internalType: 'uint64',
            name: 'marginRatioMax',
            type: 'uint64'
          },
          {
            internalType: 'uint64',
            name: 'liquidationSpreadMax',
            type: 'uint64'
          },
          {
            internalType: 'uint64',
            name: 'earningsRateMax',
            type: 'uint64'
          },
          {
            internalType: 'uint64',
            name: 'marginPremiumMax',
            type: 'uint64'
          },
          {
            internalType: 'uint64',
            name: 'liquidationSpreadPremiumMax',
            type: 'uint64'
          },
          {
            internalType: 'uint96',
            name: 'interestRateMax',
            type: 'uint96'
          },
          {
            internalType: 'uint128',
            name: 'minBorrowedValueMax',
            type: 'uint128'
          }
        ],
        internalType: 'struct Storage.RiskLimits',
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'isOwner',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'number',
            type: 'uint256'
          }
        ],
        internalType: 'struct Account.Info[]',
        name: 'accounts',
        type: 'tuple[]'
      },
      {
        components: [
          {
            internalType: 'enum Actions.ActionType',
            name: 'actionType',
            type: 'uint8'
          },
          {
            internalType: 'uint256',
            name: 'accountId',
            type: 'uint256'
          },
          {
            components: [
              {
                internalType: 'bool',
                name: 'sign',
                type: 'bool'
              },
              {
                internalType: 'enum Types.AssetDenomination',
                name: 'denomination',
                type: 'uint8'
              },
              {
                internalType: 'enum Types.AssetReference',
                name: 'ref',
                type: 'uint8'
              },
              {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
              }
            ],
            internalType: 'struct Types.AssetAmount',
            name: 'amount',
            type: 'tuple'
          },
          {
            internalType: 'uint256',
            name: 'primaryMarketId',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'secondaryMarketId',
            type: 'uint256'
          },
          {
            internalType: 'address',
            name: 'otherAddress',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'otherAccountId',
            type: 'uint256'
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes'
          }
        ],
        internalType: 'struct Actions.ActionArgs[]',
        name: 'actions',
        type: 'tuple[]'
      }
    ],
    name: 'operate',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address'
      },
      {
        internalType: 'contract IPriceOracle',
        name: 'priceOracle',
        type: 'address'
      },
      {
        internalType: 'contract IInterestSetter',
        name: 'interestSetter',
        type: 'address'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: 'marginPremium',
        type: 'tuple'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: 'spreadPremium',
        type: 'tuple'
      },
      {
        internalType: 'uint256',
        name: 'maxSupplyWei',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'maxBorrowWei',
        type: 'uint256'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: 'earningsRateOverride',
        type: 'tuple'
      },
      {
        internalType: 'bool',
        name: 'isClosing',
        type: 'bool'
      }
    ],
    name: 'ownerAddMarket',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: 'accountMaxNumberOfMarketsWithBalances',
        type: 'uint256'
      }
    ],
    name: 'ownerSetAccountMaxNumberOfMarketsWithBalances',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'accountOwner',
        type: 'address'
      },
      {
        internalType: 'contract IAccountRiskOverrideSetter',
        name: 'accountRiskOverrideSetter',
        type: 'address'
      }
    ],
    name: 'ownerSetAccountRiskOverride',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'autoTrader',
        type: 'address'
      },
      {
        internalType: 'bool',
        name: 'special',
        type: 'bool'
      }
    ],
    name: 'ownerSetAutoTraderSpecial',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: 'callbackGasLimit',
        type: 'uint256'
      }
    ],
    name: 'ownerSetCallbackGasLimit',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'contract IAccountRiskOverrideSetter',
        name: 'accountRiskOverrideSetter',
        type: 'address'
      }
    ],
    name: 'ownerSetDefaultAccountRiskOverride',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: 'earningsRate',
        type: 'tuple'
      }
    ],
    name: 'ownerSetEarningsRate',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: 'earningsRateOverride',
        type: 'tuple'
      }
    ],
    name: 'ownerSetEarningsRateOverride',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address'
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool'
      }
    ],
    name: 'ownerSetGlobalOperator',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      },
      {
        internalType: 'contract IInterestSetter',
        name: 'interestSetter',
        type: 'address'
      }
    ],
    name: 'ownerSetInterestSetter',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      },
      {
        internalType: 'bool',
        name: 'isClosing',
        type: 'bool'
      }
    ],
    name: 'ownerSetIsClosing',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: 'spread',
        type: 'tuple'
      }
    ],
    name: 'ownerSetLiquidationSpread',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: 'liquidationSpreadPremium',
        type: 'tuple'
      }
    ],
    name: 'ownerSetLiquidationSpreadPremium',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: 'marginPremium',
        type: 'tuple'
      }
    ],
    name: 'ownerSetMarginPremium',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Decimal.D256',
        name: 'ratio',
        type: 'tuple'
      }
    ],
    name: 'ownerSetMarginRatio',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'maxBorrowWei',
        type: 'uint256'
      }
    ],
    name: 'ownerSetMaxBorrowWei',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'maxSupplyWei',
        type: 'uint256'
      }
    ],
    name: 'ownerSetMaxSupplyWei',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        internalType: 'struct Monetary.Value',
        name: 'minBorrowedValue',
        type: 'tuple'
      }
    ],
    name: 'ownerSetMinBorrowedValue',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'contract IOracleSentinel',
        name: 'oracleSentinel',
        type: 'address'
      }
    ],
    name: 'ownerSetOracleSentinel',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      },
      {
        internalType: 'contract IPriceOracle',
        name: 'priceOracle',
        type: 'address'
      }
    ],
    name: 'ownerSetPriceOracle',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketId',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address'
      }
    ],
    name: 'ownerWithdrawExcessTokens',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address'
      }
    ],
    name: 'ownerWithdrawUnsupportedTokens',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'operator',
            type: 'address'
          },
          {
            internalType: 'bool',
            name: 'trusted',
            type: 'bool'
          }
        ],
        internalType: 'struct Types.OperatorArg[]',
        name: 'args',
        type: 'tuple[]'
      }
    ],
    name: 'setOperators',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  }
];

const apr2Apy = (apr: string, n: number) => {
  const base = Big(1).plus(Big(apr).div(n));
  return base.pow(n).minus(1).times(100).minus(0.065).toFixed(2) + '%';
};

const minimumCollateralizationToLTV = (minCollateralization: string) => {
  return Big(1).div(Big(minCollateralization).plus(1)).toFixed(6);
};

const DolomiteData = (props: any) => {
  const { multicallAddress, marginAddress, account, update, name, onLoad, markets, multicall, prices, provider } =
    props;

  useEffect(() => {
    if (!marginAddress || !update || !account) return;

    const _cTokensData: any = {};
    let count = 0;
    let oTokensLength = Object.values(markets).length;

    const formatedData = (key: any) => {
      console.log(`${name}-${key}`, count);
      if (count < 1) return;
      count = 0;

      const userTotalBorrowUsd = Big(0);
      const userTotalCollateralUsd = Big(0);
      let userTotalSupplyUsd = Big(0);

      const tokenList: any = Object.values(_cTokensData);
      tokenList.forEach((token: any) => {
        userTotalSupplyUsd = userTotalSupplyUsd.plus(token.yourLendsUSD);

        // borrowToken
        for (const _token of tokenList) {
          if (token.address === _token.address) {
            continue;
          }
          token.borrowToken.push(_token);
          token.borrowTokenPrice.push(_token.underlyingPrice);
        }
      });

      onLoad({
        markets: _cTokensData,
        userTotalBorrowUsd: userTotalBorrowUsd.toString(),
        userTotalCollateralUsd: userTotalCollateralUsd.toString(),
        userTotalSupplyUsd: userTotalSupplyUsd.toString()
      });
    };
    const getWalletBalance = () => {
      const result: any = {};
      return new Promise((resolve) => {
        let nativeOToken = '';
        const tokenList: any = Object.values(markets).filter((market: any) => {
          if (market.isNative) nativeOToken = market.address;
          return market.address && !market.isNative;
        });
        const calls = tokenList.map((token: any) => ({
          address: token.address,
          name: 'balanceOf',
          params: [account]
        }));
        multicall({
          abi: ERC20_ABI,
          calls,
          options: {},
          multicallAddress,
          provider: provider
        })
          .then((res: any) => {
            for (let i = 0, len = res.length; i < len; i++) {
              result[tokenList[i].address.toLowerCase()] =
                res[i] && res[i][0] ? ethers.utils.formatUnits(res[i][0]._hex, tokenList[i].decimals) : '0';
            }
            if (nativeOToken) {
              provider.getBalance(account).then((rawBalance: any) => {
                result[nativeOToken.toLowerCase()] = ethers.utils.formatUnits(rawBalance._hex, 18);
                resolve(result);
              });
            } else {
              resolve(result);
            }
          })
          .catch((err: any) => {
            console.log('getWalletBalance error', err);
            resolve(result);
          });
      });
    };
    const getDolomiteBalance = () => {
      const result: any = {};
      return new Promise((resolve) => {
        const tokenList: any = Object.values(markets);
        const calls = [
          {
            address: marginAddress,
            name: 'getAccountBalances',
            params: [{ owner: account, number: 0 }]
          }
        ];
        multicall({
          abi: MARGIN_ABI,
          calls,
          options: {},
          multicallAddress,
          provider: provider
        })
          .then((res: any) => {
            const [marketIds, addresses = [], principal, real] = res[0];
            addresses.forEach((address: string, index: number) => {
              const currToken = tokenList.find((token: any) => token.address.toLowerCase() === address.toLowerCase());
              result[address.toLowerCase()] = ethers.utils.formatUnits(
                real[index].value?._hex || 0,
                currToken?.decimals || 18
              );
            });
            resolve(result);
          })
          .catch((err: any) => {
            console.log('getDepositBalance error', err);
            resolve(result);
          });
      });
    };
    const getMarketIdByTokenAddress = () => {
      const tokenMarketIds: any = {};
      return new Promise((resolve) => {
        const marketList: any = Object.values(markets).filter((market: any) => {
          if (market.isNative) {
            tokenMarketIds[market.address.toLowerCase()] = market.marketId;
            return false;
          }
          return true;
        });
        const calls = marketList.map((market: any) => {
          tokenMarketIds[market.address.toLowerCase()] = market.marketId;
          return {
            address: marginAddress,
            name: 'getMarketIdByTokenAddress',
            params: [market.address]
          };
        });
        multicall({
          abi: MARGIN_ABI,
          calls,
          options: {},
          multicallAddress,
          provider: provider
        })
          .then((res: any) => {
            for (let i = 0; i < res.length; i++) {
              tokenMarketIds[marketList[i].address.toLowerCase()] = ethers.utils.formatUnits(res[i][0]._hex, 0);
            }
            resolve(tokenMarketIds);
          })
          .catch((err: any) => {
            console.log('getMarketIdByTokenAddress failure: %o', err);
            resolve(tokenMarketIds);
          });
      });
    };
    const getCTokenData = (oToken: any) => {
      if (oTokensLength === 0) return;
      const calls = [
        {
          address: marginAddress,
          name: 'getMarketWithInfo',
          params: [oToken.marketId]
        },
        {
          address: marginAddress,
          name: 'getMarketSupplyInterestRateApr',
          params: [oToken.marketId]
        },
        {
          address: marginAddress,
          name: 'getMarketBorrowInterestRateApr',
          params: [oToken.marketId]
        },
        {
          address: marginAddress,
          name: 'getLiquidationSpreadForPair',
          params: [oToken.marketId, oToken.marketId]
        },
        {
          address: marginAddress,
          name: 'getMarginRatio',
          params: []
        }
      ];
      multicall({
        abi: MARGIN_ABI,
        calls,
        options: {},
        multicallAddress,
        provider: provider
      })
        .then((res: any) => {
          console.log('getCTokenData Res: %o', res);

          const MarginRatio = ethers.utils.formatUnits(res[4][0]?.value?._hex || 0, 18);
          const LTV = minimumCollateralizationToLTV(MarginRatio);

          const LiquidationPenalty = ethers.utils.formatUnits(res[3][0]?.value?._hex || 0, 18);

          const MarketSupplyInterestRateApr = ethers.utils.formatUnits(res[1] ? res[1][0]?.value?._hex || 0 : 0, 18);
          const supplyApy = apr2Apy(MarketSupplyInterestRateApr, 12);

          const MarketBorrowInterestRateApr = ethers.utils.formatUnits(res[2] ? res[2][0]?.value?._hex || 0 : 0, 18);
          const borrowApy = apr2Apy(MarketBorrowInterestRateApr, 12);

          const [Market, Interest, MonetaryPrice, InterestRate] = res[0];

          const totalParBorrow = ethers.utils.formatUnits(Market.totalPar?.borrow?._hex || 0, oToken.decimals);
          const totalParSupply = ethers.utils.formatUnits(Market.totalPar?.supply?._hex || 0, oToken.decimals);

          const interestBorrow = ethers.utils.formatUnits(Interest.borrow?._hex || 0, 18);
          const interestSupply = ethers.utils.formatUnits(Interest.supply?._hex || 0, 18);
          console.log('Interest.borrow: %o', interestBorrow);
          console.log('Interest.supply: %o', interestSupply);

          const marketIndexBorrow = ethers.utils.formatUnits(Market.index?.borrow?._hex || 0, 18);
          const marketIndexSupply = ethers.utils.formatUnits(Market.index?.supply?._hex || 0, 18);
          console.log('Market.index?.borrow: %o', marketIndexBorrow);
          console.log('Market.index?.supply: %o', marketIndexSupply);

          const marketMaxBorrowWei = ethers.utils.formatUnits(Market.maxBorrowWei?.value?._hex || 0, 18);
          const marketMaxSupplyWei = ethers.utils.formatUnits(Market.maxSupplyWei?.value?._hex || 0, 18);
          console.log('Market.maxBorrowWei: %o', marketMaxBorrowWei);
          console.log('Market.maxSupplyWei: %o', marketMaxSupplyWei);

          const monetaryPrice = ethers.utils.formatUnits(MonetaryPrice.value?._hex || 0, 36 - oToken.decimals);

          const interestRate = ethers.utils.formatUnits(InterestRate.value?._hex || 0, 18);
          console.log('interestRate: %o', interestRate);

          _cTokensData[oToken.address] = {
            ...oToken,
            marketId: oToken.marketId,
            dapp: name,
            Utilization: Big(totalParBorrow).div(totalParSupply).times(100).toFixed(2, 0) + '%',
            address: oToken.address,
            borrowAPR: Big(MarketBorrowInterestRateApr).times(100).toFixed(2) + '%',
            borrowAPY: borrowApy,
            borrowToken: [],
            borrowTokenPrice: [],
            exchangeRate: '',
            lendAPR: Big(MarketSupplyInterestRateApr).times(100).toFixed(2) + '%',
            lendAPY: supplyApy,
            liquidationFee: LiquidationPenalty,
            maxLTV: LTV,
            loanToValue: Big(LTV).times(100).toString(),
            name: oToken.symbol,
            totalBorrowUsd: Big(totalParBorrow).times(monetaryPrice).toString(),
            totalBorrowed: totalParBorrow,
            totalSupplied: totalParSupply,
            totalSupplyUsd: Big(totalParSupply).times(monetaryPrice).toString(),
            underlyingPrice: monetaryPrice,
            price: monetaryPrice,
            underlyingToken: oToken.underlyingToken,
            userBorrowBalance: '',
            userUnderlyingBalance: oToken.walletBalance,
            yourBorrow: 0,
            yourBorrowShares: 0,
            yourBorrowUSD: '0',
            yourCollateral: 0,
            yourCollateralUSD: '0',
            yourLends: oToken.dolomiteBalance || '',
            yourLendsUSD: Big(oToken.dolomiteBalance || 0)
              .times(monetaryPrice)
              .toString(),
            balance: oToken.dolomiteBalance || '0'
          };

          console.log('_cTokensData: %o', _cTokensData);

          oTokensLength--;
          if (oTokensLength === 0) {
            count++;
            formatedData('oTokens data');
          }
        })
        .catch((err: any) => {
          console.log('error-getCTokenData', err);
        });
    };
    const getCTokensData = async () => {
      const [tokenMarketId, tokenBalances, dolomiteBalance]: any = await Promise.all([
        getMarketIdByTokenAddress(),
        getWalletBalance(),
        getDolomiteBalance()
      ]);
      Object.values(markets).forEach((market: any) => {
        getCTokenData({
          ...market,
          marketId: tokenMarketId[market.address.toLowerCase()],
          walletBalance: tokenBalances[market.address.toLowerCase()],
          dolomiteBalance: dolomiteBalance[market.address.toLowerCase()]
        });
      });
    };

    getCTokensData();
  }, [update, account, provider]);

  return null;
};

export default DolomiteData;
