import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '../containers/SEO';
import ArticleList from '../containers/ArticleList';
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
        title="Javascript Developer Blog | JS101 | Programming Tips | FOSS"
        description={`${description} | ${longDescription}`}
        image={siteLogo.publicURL}
      />
      <ArticleList />
    </HomeLayout>
  );
}

export default IndexPage;
