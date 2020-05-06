import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    min-height: 100%;
    margin: 0;
  }

  html {
    background: ${props => props.theme.colors.background};
    height: 100vh;
    font-size: 16px;
  }
  
  h1, h2, h3, h4, h5, h6, a {
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.text};
  }

  p, li {
    font-family: ${props => props.theme.fonts.secondary};
  }

  code > * {
    font-family: ${props => props.theme.fonts.monospace};
  }

  a {
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
`;

export default GlobalStyles;
