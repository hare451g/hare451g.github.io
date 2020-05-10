import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import AppLayout from './AppLayout';

export default ({ data, pageContext }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: { title, description, heroImage },
    },
    site: {
      siteMetadata: { longDescription: siteDescription },
    },
  } = data;

  return (
    <AppLayout>
      <SEO
        title={`${title}`}
        description={`${description} | ${siteDescription}`}
        pathname={pageContext.slug}
        image={heroImage}
      />
      <main>
        <article dangerouslySetInnerHTML={{ __html: html }}></article>
      </main>
    </AppLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        longDescription
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        description
        heroImage
        series
        photographer
        unsplashAccount
      }
    }
  }
`;
