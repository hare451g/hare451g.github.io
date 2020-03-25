import React from 'react';
import moment from 'moment';
import { graphql, Link } from 'gatsby';

import Header from '../containers/Header';
import IdentityCard from '../containers/IdentityCard';
import Footer from '../containers/Footer';
import SEO from '../containers/SEO';

import AppLayout from '../layouts/AppLayout';

import formats from '../constants/formats';

import {
  PostTimestamp,
  PostTitle,
  Description,
  HeroImage,
  MainArticle,
  AuthorWrapper,
} from './styled';

export default ({ data, pageContext }) => {
  const {
    html,
    frontmatter: { title, description, date, heroImage },
  } = data.markdownRemark;

  const timeStamp = moment(date, formats.FRONT_MATTER_DATE).format(
    formats.ARTICLE_TIMESTAMP
  );

  return (
    <AppLayout>
      <SEO
        title={title}
        description={description}
        pathname={pageContext.slug}
        image={heroImage}
      />
      <header>
        <Header />
        <Link to="/">
          <span role="img" alt="home">
            ⬅️
          </span>{' '}
          Back to Home
        </Link>
        <PostTitle>{title}</PostTitle>
        <PostTimestamp>{timeStamp}</PostTimestamp>
        <Description>{description}</Description>
        <AuthorWrapper>
          <span role="img" alt="author">
            ✍️
          </span>{' '}
          Author:
          <IdentityCard />
        </AuthorWrapper>
        <HeroImage src={heroImage} alt={title} />
      </header>
      <MainArticle>
        <article dangerouslySetInnerHTML={{ __html: html }}></article>
      </MainArticle>

      <footer>
        <hr />
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
        series
      }
    }
  }
`;
