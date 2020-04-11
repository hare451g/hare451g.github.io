import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    min-height: 100%;
    font-size: 16px;
    margin: 0;
  }

  html {
    background: ${props => props.theme.colors.background};
    height: 100vh;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Open Sans', sans-serif;
    color: ${props => props.theme.colors.text};
  }

  a {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: ${props => props.theme.colors.text};

    :hover {
    color: ${props => props.theme.colors.link};
      text-decoration: underline;
    }
  }
  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${props => props.theme.colors.text};
  }
`;

export default GlobalStyles;
