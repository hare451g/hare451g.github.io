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

  a {
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: #3d3d3d;

    :hover {
      color: #2196f3;
      text-decoration: underline;
    }
  }
  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export default GlobalStyles;
