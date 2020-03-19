import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { HeaderTitle, HeaderSubtitle } from './styled';

function Header() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );
  return (
    <header>
      <HeaderTitle>{site.siteMetadata.title}</HeaderTitle>
      <HeaderSubtitle>{site.siteMetadata.description}</HeaderSubtitle>
    </header>
  );
}

export default Header;
