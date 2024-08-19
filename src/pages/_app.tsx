import '@/styles/theme.css';
import '@/styles/globals.css';
import '@near-wallet-selector/modal-ui/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'nprogress/nprogress.css';

import { useDebounceFn } from 'ahooks';
import type { AppProps } from 'next/app';
import NProgress from 'nprogress';

import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import { useState } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { ToastContainer } from 'react-toastify';

import useAccount from '@/hooks/useAccount';
import { useBosLoaderInitializer } from '@/hooks/useBosLoaderInitializer';
import useClickTracking from '@/hooks/useClickTracking';
import useInitialDataWithoutAuth from '@/hooks/useInitialDataWithoutAuth';
import useTokenPrice from '@/hooks/useTokenPrice';
import { useAuthStore } from '@/stores/auth';
import { report } from '@/utils/burying-point';
import type { NextPageWithLayout } from '@/utils/types';
import { styleZendesk } from '@/utils/zendesk';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  useBosLoaderInitializer();
  useClickTracking();
  const { getInitialDataWithoutAuth } = useInitialDataWithoutAuth();
  const { account } = useAccount();
  const [ready, setReady] = useState(false);

  const { initializePrice } = useTokenPrice();
  const getLayout = Component.getLayout ?? ((page) => page);
  const router = useRouter();
  const authStore = useAuthStore();

  const componentSrc = router.query;

  const handleRouteChangeStart = () => {
    NProgress.start();
  };
  const handleRouteChangeComplete = () => {
    NProgress.done();
  };
  const handleRouteChangeError = () => {
    NProgress.done();
  };

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router.events]);

  useEffect(() => {
    // Displays the Zendesk widget only if user is signed in and on the home page
    if (!window.zE) return;
    if (!authStore.signedIn || Boolean(componentSrc?.componentAccountId && componentSrc?.componentName)) {
      window.zE('webWidget', 'hide');
      return;
    }
    localStorage.setItem('accountId', authStore.accountId);
    window.zE('webWidget', 'show');
  }, [authStore.accountId, authStore.signedIn, componentSrc]);

  const { run: updateAccount } = useDebounceFn(
    () => {
      if (account) report({ code: '1001-005', address: account });
    },
    { wait: 500 },
  );

  useEffect(() => {
    updateAccount();
  }, [account]);

  useEffect(() => {
    initializePrice();
    getInitialDataWithoutAuth();
    const interval = setInterval(zendeskCheck, 20);

    function zendeskCheck() {
      // once the zendesk widget comes online, style it
      const zwFrame = document.getElementById('launcher') as HTMLIFrameElement | null;
      const zwEmbed = zwFrame?.contentDocument?.getElementById('Embed');
      const zwButton = zwEmbed?.querySelector('[data-testid="launcher"]');
      if (zwButton) {
        styleZendesk();
        clearInterval(interval);
      }
    }
    setReady(true);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // useEffect(() => {
  //   const x = import('@/views/SuperBridge/BridgeAction')
  //   x.then(res => {
  //     // console.log(res)
  //   })
  // }, [])

  return (
    <>
      <Head>
        <meta name="google-site-verification" content="CDEVFlJTyVZ2vM7ePugKgWsl_7Rd-MrfDv42u0vZ0B0" />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_HOSTNAME}/near/widget/NearOrg.HomePage`}
          key="canonical"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>DapDap</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </Head>
      <Script id="telegram-widget" src="https://telegram.org/js/telegram-widget.js?22" />
      <Script id="phosphor-icons" src="https://unpkg.com/@phosphor-icons/web@2.0.3" async />

      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PR996H5E9T"></Script>
      <Script id="ga-config">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PR996H5E9T');`}
      </Script>

      <Script
        src="https://static.zdassets.com/ekr/snippet.js?key=1736c8d0-1d86-4080-b622-12accfdb74ca"
        id="ze-snippet"
        async
      />

      <Script id="zendesk-config">
        {`
          window.zESettings = {
            webWidget: {
              color: { theme: '#2b2f31' },
              offset: {
                horizontal: '10px',
                vertical: '10px',
                mobile: { horizontal: '2px', vertical: '65px', from: 'right' },
              },
              contactForm: {
                attachments: true,
                title: { '*': 'Feedback and Support' },
                fields: [
                  {
                    id: 13149356989591,
                    prefill: { '*': localStorage.getItem('accountId') },
                  },
                ],
              },
            },
          };
        `}
      </Script>

      {ready && (
        <>
          <SkeletonTheme baseColor="#353649" highlightColor="#444">
            {getLayout(<Component {...pageProps} />)}
          </SkeletonTheme>
          <ToastContainer
            position={window.innerWidth > 768 ? 'top-right' : 'bottom-right'}
            autoClose={5000}
            hideProgressBar={true}
            theme="dark"
            toastStyle={{ backgroundColor: 'transparent', boxShadow: 'none' }}
            newestOnTop
            rtl={false}
            pauseOnFocusLoss
            closeButton={false}
          />
        </>
      )}
    </>
  );
}
