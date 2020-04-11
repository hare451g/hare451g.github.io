import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Link } from './styled';

function Footer() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            twitterURL
            instagramURL
            linkedInURL
          }
        }
      }
    `
  );
  return (
    <div>
      <Link href={site.siteMetadata.twitterURL}>twitter</Link> -{' '}
      <Link href={site.siteMetadata.instagramURL}>instagram</Link> -{' '}
      <Link href={site.siteMetadata.linkedInURL}>linkedIn</Link>
    </div>
  );
}

export default Footer;
