import { useDefaultLayout } from '@/hooks/useLayout';
import { useRouter } from 'next/router';
import OdysseyV2 from '@/views/OdysseyV2';
import CompassApp from '@/views/Compass/home';

function Compass() {
  const router = useRouter();
  if (router.query.id === '2') return <OdysseyV2 />;
  if (router.query.id === '1') return <CompassApp />;
  return <div />;
}

Compass.getLayout = useDefaultLayout;

export default Compass;
