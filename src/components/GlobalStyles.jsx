import React from 'react';
import { Global, css } from '@emotion/core';

import ChevronPattern from '../images/chevron.png';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        html,
        body {
          margin: 0px;
        }
      `}
    />
  );
}

export default GlobalStyle;
