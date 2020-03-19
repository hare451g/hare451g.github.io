import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

import Header from '../../containers/Header';
import IdentityCard from '../../containers/IdentityCard';

const GlobalStyle = createGlobalStyle`  
  body {
    font-family: 'Open Sans', sans-serif;
    min-height: 100%;
    font-size: 16px;
  }
  html {
    height: 100%;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Quicksand', sans-serif;
  }
`;

const AppLayoutWrapper = styled.div`
  padding: 0 1rem;
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;

  header {
    grid-row-start: 1;
    grid-row-end: 2;
  }

  main {
    grid-row-start: 2;
    grid-row-end: 3;
  }

  footer {
    grid-row-start: 3;
    grid-row-end: 4;
  }

  @media (min-width: 480px) {
    padding: 0 3rem;
  }
`;

function AppLayout({ children }) {
  return (
    <AppLayoutWrapper>
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
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <IdentityCard />
      </footer>
    </AppLayoutWrapper>
  );
}

export default AppLayout;
