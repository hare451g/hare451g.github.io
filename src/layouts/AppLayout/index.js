import React from 'react';
import { Helmet } from 'react-helmet';

import GlobalStyles from './GlobalStyles';
import { AppLayoutWrapper } from './styled';

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
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300&display=swap"
          rel="stylesheet"
          lazyLoad
        ></link>
      </Helmet>
      <GlobalStyles />
      {children}
    </AppLayoutWrapper>
  );
}

export default AppLayout;
