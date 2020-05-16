import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'emotion-theming';

import lightTheme from '../constants/lightTheme';
import GlobalStyle from '../components/GlobalStyles';

function AppLayout({ children }) {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700&family=Karla:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
          lazyLoad
        />
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300&display=swap"
          rel="stylesheet"
          lazyLoad
        />
      </Helmet>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
}

export default AppLayout;
