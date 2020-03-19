import React from 'react';
import moment from 'moment';
import { graphql } from 'gatsby';

import Header from '../containers/Header';
import IdentityCard from '../containers/IdentityCard';
import Footer from '../containers/Footer';
import SEO from '../containers/SEO';

import AppLayout from '../layouts/AppLayout';

import formats from '../constants/formats';

import { PostTimestamp, PostTitle, HeroImage, MainArticle } from './styled';

export default ({ data, pageContext }) => {
  const {
    html,
    frontmatter: { title, description, date, heroImage },
  } = data.markdownRemark;

  return (
    <AppLayout>
      <SEO
        title={title}
        description={description}
        pathname={pageContext.slug}
      />
      <header>
        <Header />
        <HeroImage src={heroImage} alt={title} />
        <PostTimestamp>
          {moment(date, formats.FRONT_MATTER_DATE).format(
            formats.ARTICLE_TIMESTAMP
          )}
        </PostTimestamp>
        <PostTitle>{title}</PostTitle>
      </header>
      <MainArticle dangerouslySetInnerHTML={{ __html: html }} />

      <footer>
        <IdentityCard />
        <Footer />
      </footer>
    </AppLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        description
        heroImage
      }
    }
  }
`;
