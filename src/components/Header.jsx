import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

function Header() {
  const { websiteLogo } = useStaticQuery(
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
    <div>
      <div>
        <Link to="/">
          <img src={websiteLogo.publicURL} alt="hare451g brand" height={32} />
        </Link>
        <Link to="/">Hendra Sadewa</Link>
      </div>
      <div>
        <Link to="/blog">blog</Link>
        <Link to="/about">about</Link>
      </div>
    </div>
  );
}

export default Header;
