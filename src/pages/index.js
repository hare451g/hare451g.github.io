import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '../containers/SEO';
import ArticleList from '../containers/ArticleList';
import HomeLayout from '../layouts/HomeLayout';
import SeriesList from '../containers/SeriesList';

function IndexPage() {
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
          }
        }
      }
    `
  );
  const { title, description } = siteMetadata;
  return (
    <HomeLayout>
      <SEO title={title} description={description} image={siteLogo.publicURL} />
      <SeriesList />
      <ArticleList />
    </HomeLayout>
  );
}

export default IndexPage;
