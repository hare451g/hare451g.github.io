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
        <HeroImage src={heroImage} alt={title} />
        <PostTitle>{title}</PostTitle>
        <PostTimestamp>{timeStamp}</PostTimestamp>
      </header>
      <MainArticle dangerouslySetInnerHTML={{ __html: html }} />
      <footer>
        <hr />
        <p>
          Artikel ini bersifat <strong>'FREE'</strong>, yang artinya kalian
          dapat edit / publish ulang sesuka hati kalian. Jika ada kesalahan atau
          hal yang membuat kalilan bingung, silahkan post issue ke{' '}
          <a href="https://github.com/hare451g/hare451g.github.io/issues">
            link issue ini
          </a>
          .
        </p>

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
        series
      }
    }
  }
`;
