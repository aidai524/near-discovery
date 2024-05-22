import { useDefaultLayout } from '@/hooks/useLayout';

import SingleDapp from '@/views/SingleDapp';
import type { NextPageWithLayout } from '@/utils/types';

// set dynamic routes for dapps in config file

export const Page: NextPageWithLayout = () => {
  return <SingleDapp dappPathname="xy-finance" />;
};

Page.getLayout = useDefaultLayout;

export default Page;
