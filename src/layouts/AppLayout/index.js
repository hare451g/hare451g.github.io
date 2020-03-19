import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Quicksand:wght@300;400;500;600;700&display=swap');
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
      <GlobalStyle />
      <main>{children}</main>;
    </>
  );
}

export default AppLayout;
