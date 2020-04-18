import React from 'react';
import moment from 'moment';
import { graphql, Link } from 'gatsby';

import Header from '../../components/Header';
import IdentityCard from '../../components/IdentityCard';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import AppLayout from '../../layouts/AppLayout';
import formats from '../../constants/formats';

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
      <header>
        <Header />
        <hr />
        <Link to={`/blog/#${series}`}>
          <span role="img" alt="home">
            ⬅️
          </span>{' '}
          Back to blog home
        </Link>
        <PostTitle>{title}</PostTitle>
        <PostTimestamp>{timeStamp}</PostTimestamp>
        <Description>{description}</Description>
        <HeroImage src={heroImage} alt={title} />
        <PostTimestamp>
          Hero image taken by{' '}
          <Link to={`https://unsplash.com/@${unsplashAccount}`}>
            {photographer}
          </Link>{' '}
          powered by <Link to="https://unsplash.com/">unsplash</Link>
        </PostTimestamp>
        <AuthorWrapper>
          <span role="img" alt="author">
            ✍️
          </span>{' '}
          Author:
          <IdentityCard />
        </AuthorWrapper>
      </header>
      <MainArticle>
        <article dangerouslySetInnerHTML={{ __html: html }}></article>
      </MainArticle>

      <footer>
        <Link to={`/blog/#${series}`}>
          <span role="img" alt="home">
            ⬅️
          </span>{' '}
          Back to blog home
        </Link>
        <hr />
        <Footer />
      </footer>
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
