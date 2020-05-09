import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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
    <p>
      <a href={site.siteMetadata.twitterURL}>twitter</a> -{' '}
      <a href={site.siteMetadata.instagramURL}>instagram</a> -{' '}
      <a href={site.siteMetadata.linkedInURL}>linkedIn</a>
    </p>
  );
}

export default Footer;
