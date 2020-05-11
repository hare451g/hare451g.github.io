import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Cookie from 'js-cookie';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'emotion-theming';

import lightTheme from '../constants/lightTheme';
import darkTheme from '../constants/darkTheme';
import GlobalStyle from '../components/GlobalStyles';

function AppLayout({ children }) {
  const themes = {
    light: lightTheme,
    dark: darkTheme,
  };

  // get theme from cookie
  const [theme, setTheme] = useState(themes[Cookie.get('theme')] || lightTheme);

  useEffect(() => {
    // check if night
    const isNight = moment().hour() >= 18 || moment().hour() <= 6;

    if (isNight) {
      setTheme(themes['dark']);
      Cookie.set('theme', 'dark');
    } else {
      setTheme(themes['light']);
      Cookie.set('theme', 'light');
    }
  }, []);

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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
}

export default AppLayout;
