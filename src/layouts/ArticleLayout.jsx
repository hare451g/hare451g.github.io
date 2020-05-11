import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import HomeLayout from './HomeLayout';

function ArticleLayout({ data, pageContext }) {
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
    <HomeLayout>
      <SEO
        title={`${title}`}
        description={`${description} | ${siteDescription}`}
        pathname={pageContext.slug}
        image={heroImage}
      />
      <main>
        <article dangerouslySetInnerHTML={{ __html: html }}></article>
      </main>
    </HomeLayout>
  );
}

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

export default ArticleLayout;
