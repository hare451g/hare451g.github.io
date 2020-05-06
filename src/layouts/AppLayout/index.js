import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import moment from 'moment';

import { lightTheme, darkTheme } from '../../constants/themes';

import GlobalStyles from './GlobalStyles';
import { AppLayoutWrapper } from './styled';

function AppLayout({ children }) {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    // check if night
    const isNight = moment().hour() >= 18 || moment().hour() <= 4;

    if (isNight) {
      setTheme(darkTheme);
    }
  }, []);

  return (
    <AppLayoutWrapper>
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
        ></link>
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </AppLayoutWrapper>
  );
}

export default AppLayout;
