import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { HeaderWrapper, BrandImage, NavWrapper, NavLink } from './styled';

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
      <NavWrapper>
        <Link to="/">
          <BrandImage
            src={websiteLogo.publicURL}
            alt="hare451g brand"
            height={32}
          />
        </Link>
        <NavLink to="/">Hendra Sadewa</NavLink>
      </NavWrapper>
      <NavWrapper>
        <NavLink to="/blog">blog</NavLink>
        <NavLink to="/about">about</NavLink>
      </NavWrapper>
    </HeaderWrapper>
  );
}

export default Header;
