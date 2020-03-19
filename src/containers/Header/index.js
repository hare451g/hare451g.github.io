import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

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
    <div style={{ marginBottom: '1.5rem' }}>
      <Link to="/">
        <HeaderTitle>{site.siteMetadata.title}</HeaderTitle>
      </Link>
      <HeaderSubtitle>{site.siteMetadata.description}</HeaderSubtitle>
    </div>
  );
}

export default Header;
