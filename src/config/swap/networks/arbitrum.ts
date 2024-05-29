import { basic as camelotBasic, networks as camelotNetworks } from '../dapps/camelot';
import { basic as apeBasic, networks as apeNetworks } from '../dapps/ape';
import { basic as chronosV1Basic, networks as chronosV1Networks } from '../dapps/chronos-v1';
import { basic as ramsesV1Basic, networks as ramsesV1Networks } from '../dapps/ramses-v1';
import { basic as ramsesV2Basic, networks as ramsesV2Networks } from '../dapps/ramses-v2';
import { basic as spartaBasic, networks as spartaNetworks } from '../dapps/sparta';
import { basic as sushiBasic, networks as sushiNetworks } from '../dapps/sushi-swap';
import { basic as solidLizardBasic, networks as solidLizardNetworks } from '../dapps/solid-lizard';
import { arbitrum } from '@/config/tokens/arbitrum';

const CHAIN_ID = 42161;

export default {
  chainId: CHAIN_ID,
  defalutInputCurrency: arbitrum['eth'],
  dexs: {
    Camelot: {
      ...camelotBasic,
      ...camelotNetworks[CHAIN_ID],
    },
    Spartadex: {
      ...spartaBasic,
      ...spartaNetworks[CHAIN_ID],
    },
    'Ramses V2': {
      ...ramsesV2Basic,
      ...ramsesV2Networks[CHAIN_ID],
    },
    'Ramses V1': {
      ...ramsesV1Basic,
      ...ramsesV1Networks[CHAIN_ID],
    },
    SushiSwap: {
      ...sushiBasic,
      ...sushiNetworks[CHAIN_ID],
    },
    'Chronos V1': {
      ...chronosV1Basic,
      ...chronosV1Networks[CHAIN_ID],
    },
    SolidLizard: {
      ...solidLizardBasic,
      ...solidLizardNetworks[CHAIN_ID],
    },
    Apeswap: {
      ...apeBasic,
      ...apeNetworks[CHAIN_ID],
    },
  },
};
