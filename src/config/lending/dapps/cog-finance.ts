import { arbitrum } from '@/config/tokens/arbitrum';
import { scroll } from '@/config/tokens/scroll';

const BORROW_TOKEN = 'STAR';
const BORROW_URL = 'https://ipfs.near.social/ipfs/bafkreifn26whjukvke3m35hwcl74up7kckzvahrzib4ab3arq3qyfnelfy';

const MIN_DEBT = 180;
const MAX_LTV = 0.889;

const basic = {
  name: 'Cog Finance',
  data: 'bluebiu.near/widget/Lending.Data.Liquity',
  // handler: 'bluebiu.near/widget/Lending.Handler.Liquity',
  type: 'liquity',
  BORROW_TOKEN,
  BORROW_URL,
};

const networks = {
  //  scroll
  534352: {
    StabilityPool: '0x6afA834Bf44fF8aB7eF89Fd417853e9B13FBfB52',
    borrowTokenAddress: '0xC19669A405067927865B40Ea045a2baabbbe57f5',
    VesselManager: '0x5208c0c4c95A4636eFC403960969a4a4b4CCDFC5',
    VesselManagerOperations: '0x7A004E02177DA08dF4e4eEC15a0F75Fb5DE6Af04',
    BorrowerOperations: '0xbffC680a9aA46b8B19228497E77888dA6B944B2D',
    markets: {
      [scroll['wsteth'].address]: {
        decimals: 18,
        underlyingToken: scroll['wst-eth'],
        BORROW_TOKEN,
        BORROW_URL,
        MAX_LTV,
        ONE_TIME_FEE: 8,
        MIN_DEBT,
        MINTED: 0,
        MINTED_CAP: 500000,
      },
    },
  },
};

export default { basic, networks };
