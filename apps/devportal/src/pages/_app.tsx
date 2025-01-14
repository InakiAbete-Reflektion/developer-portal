/* eslint-disable react/no-unknown-property */
// Global
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
// Data
import { mainNavigation, sitecoreQuickLinks } from '@/data/data-navigation';
// Components
import Footer from 'ui/layouts/components/footer/Footer';
import Nav from 'ui/layouts/components/header/Nav';
// Local
import '@/src/styles/global.css';
import React from 'react';
// Fonts
import dynamic from 'next/dynamic';
import { AvenirNextLTPro } from 'ui/common/fonts/avenirNextLTPro';
import { AvenirNextR } from 'ui/common/fonts/avenirNextR';

const Coveo = dynamic(() => import('@/src/components/integrations/search/SearchInput'), {
  ssr: false,
});

function SCDPApp({ Component, pageProps }: AppProps) {
  // useEffect for basic page views tracking via router/gtag.
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: process.env.NEXT_PUBLIC_GTM_ID as string,
      auth: process.env.NEXT_PUBLIC_GTM_AUTH as string,
      preview: process.env.NEXT_PUBLIC_GTM_ENVIRONMENT as string,
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  const Disabled = () => {
    return <div className="text-red pt-3 text-center text-sm font-semibold">Search disabled; please check environment variables to enable</div>;
  };
  const SearchInput = !process.env.NEXT_PUBLIC_COVEO_ORGANIZATION_ID || !process.env.NEXT_PUBLIC_COVEO_ACCESS_TOKEN || !process.env.NEXT_PUBLIC_COVEO_SEARCH_HUB || !process.env.NEXT_PUBLIC_COVEO_PIPELINE ? Disabled : Coveo;

  return (
    <React.StrictMode>
      <Head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
      </Head>
      <style jsx global>{`
        :root {
          --font-avenirnext-r: ${AvenirNextR.style.fontFamily};
          --font-avenirnext-ltpro: ${AvenirNextLTPro.style.fontFamily};
        }
      `}</style>
      <div className={`theme-light text-theme-text bg-theme-bg dark:theme-dark font-sans`}>
        <Nav navigationData={mainNavigation} sitecoreQuickLinks={sitecoreQuickLinks}>
          <SearchInput />
        </Nav>
        <Component {...pageProps} />
        <Footer />
      </div>
    </React.StrictMode>
  );
}

export default SCDPApp;
