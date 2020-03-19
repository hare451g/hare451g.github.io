import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../containers/Header';
import IdentityCard from '../../containers/IdentityCard';

import GlobalStyles from './GlobalStyles';
import { AppLayoutWrapper } from './styled';
import Footer from '../../containers/Footer';

function AppLayout({ children }) {
  return (
    <AppLayoutWrapper>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans"
          rel="stylesheet"
          lazyLoad
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
          lazyLoad
        />
      </Helmet>
      <GlobalStyles />
      <header>
        <Header />
        <IdentityCard />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </AppLayoutWrapper>
  );
}

export default AppLayout;
