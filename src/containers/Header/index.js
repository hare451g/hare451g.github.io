import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import {
  HeaderWrapper,
  BrandImage,
  HeaderTitle,
  HeaderSubtitle,
} from './styled';

function Header() {
  const { site, websiteLogo } = useStaticQuery(
    graphql`
      query {
        websiteLogo: file(relativePath: { eq: "hareblog-icon.svg" }) {
          publicURL
        }
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
    <HeaderWrapper>
      <Link to="/">
        <BrandImage
          src={websiteLogo.publicURL}
          alt="hare451g brand"
          height={72}
        />
      </Link>
      <Link to="/">
        <HeaderTitle>{site.siteMetadata.title}</HeaderTitle>
        <HeaderSubtitle>{site.siteMetadata.description}</HeaderSubtitle>
      </Link>
    </HeaderWrapper>
  );
}

export default Header;
