import { createGlobalStyle } from 'styled-components';
import {
  COLOR_BODY_TEXT,
  COLOR_LINK_TEXT,
  COLOR_BACKGROUND,
} from '../../constants/colors';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    min-height: 100%;
    font-size: 16px;
    margin: 0;
  }

  html {
    background: ${COLOR_BACKGROUND};
    height: 100vh;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Open Sans', sans-serif;
    color: ${COLOR_BODY_TEXT};
  }

  a {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: ${COLOR_BODY_TEXT};

    :hover {
      color: ${COLOR_LINK_TEXT};
      text-decoration: underline;
    }
  }
  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${COLOR_BODY_TEXT};
  }
`;

export default GlobalStyles;
