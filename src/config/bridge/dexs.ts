import type { Dex,SupportDex } from '@/components/Bridge/types';

export default {
  Stargate: {
    icon: '/stargate.svg',
    name: 'Stargate',
    tags: ['faster', 'best'],
  },
  Lifi: {
    icon: '/lifi.jpg',
    name: 'Lifi',
    tags: ['faster', 'best'],
  },
} as { [key in SupportDex]: Dex };
