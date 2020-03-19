import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`  
  body {
    font-family: 'Open Sans', sans-serif;
    min-height: 100%;
    font-size: 16px;
    margin: 0;
  }
  html {
    height: 100vh;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Quicksand', sans-serif;
  }
`;

export default GlobalStyles;
