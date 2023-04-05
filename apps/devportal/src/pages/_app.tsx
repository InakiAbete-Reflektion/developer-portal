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
import { Environment, WidgetsProvider } from '@sitecore-discover/react';
import { AvenirNextLTPro } from 'ui/common/fonts/avenirNextLTPro';
import { AvenirNextR } from 'ui/common/fonts/avenirNextR';
import SearchInputSwitcher from '../components/integrations/sitecore-search/SearchInputSwitcher';
const SEARCH_CONFIG = {
  env: process.env.NEXT_PUBLIC_DISCOVER_APP_ENV as Environment,
  customerKey: process.env.NEXT_PUBLIC_DISCOVER_APP_CUSTOMER_KEY,
  apiKey: process.env.NEXT_PUBLIC_DISCOVER_APP_API_KEY,
  useToken: true,
};

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

  return (
    <WidgetsProvider {...SEARCH_CONFIG}>
      <React.StrictMode>
        <Head>
          <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
        </Head>
        <div className={`${AvenirNextR.variable} ${AvenirNextLTPro.variable} theme-light text-theme-text bg-theme-bg dark:theme-dark font-sans`}>
          <Nav navigationData={mainNavigation} sitecoreQuickLinks={sitecoreQuickLinks}>
            <SearchInputSwitcher />
          </Nav>
          <Component {...pageProps} />
          <Footer />
        </div>
      </React.StrictMode>
    </WidgetsProvider>
  );
}

export default SCDPApp;
