import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

import Header from '../../containers/Header';
import IdentityCard from '../../containers/IdentityCard';

const GlobalStyle = createGlobalStyle`  
  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Quicksand', sans-serif;
  }
`;

function AppLayout({ children }) {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Header />
      <IdentityCard />
      <main>{children}</main>
    </>
  );
}

export default AppLayout;
