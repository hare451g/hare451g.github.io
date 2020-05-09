import React from 'react';
import moment from 'moment';
import { graphql } from 'gatsby';

import SEO from '../../components/SEO';
import AppLayout from '../../layouts/AppLayout';
import formats from '../../constants/formats';

export default ({ data, pageContext }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: {
        title,
        description,
        date,
        heroImage,
        series,
        photographer,
        unsplashAccount,
      },
    },
    site: {
      siteMetadata: { longDescription: siteDescription },
    },
  } = data;

  const timeStamp = moment(date, formats.FRONT_MATTER_DATE).format(
    formats.ARTICLE_TIMESTAMP
  );

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
