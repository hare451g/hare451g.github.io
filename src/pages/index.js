import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '../components/SEO';
import ArticleList from '../components/ArticleList';
import HomeLayout from '../layouts/HomeLayout';

function IndexPage(props) {
  const {
    site: { siteMetadata },
    siteLogo,
  } = useStaticQuery(
    graphql`
      query {
        siteLogo: file(relativePath: { eq: "hareblog-icon.svg" }) {
          publicURL
        }
        site {
          siteMetadata {
            title
            description
            longDescription
          }
        }
      }
    `
  );
  const { description, longDescription } = siteMetadata;
  return (
    <HomeLayout>
      <SEO
        title="Home"
        description={`${description} | ${longDescription}`}
        image={siteLogo.publicURL}
      />
    </HomeLayout>
  );
}

export default IndexPage;
