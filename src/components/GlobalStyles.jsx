import React from 'react';
import { withTheme } from 'emotion-theming';
import { Global, css } from '@emotion/core';

const makeGlobalStyles = theme => css`
  body {
    background: ${theme.colors.background};
  }
  html,
  body {
    margin: 0px;
  }
  p,
  ul,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${theme.colors.text};
  }
`;

const GlobalStyle = withTheme(({ theme }) => (
  <Global styles={makeGlobalStyles(theme)} />
));

export default GlobalStyle;
