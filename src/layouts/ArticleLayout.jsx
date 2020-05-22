import React from 'react';
import moment from 'moment';
import { graphql } from 'gatsby';
import { Link, Box, Flex, Heading, Text } from 'rebass';

// components
import SEO from '../components/SEO';
import Article from '../components/Article';

// constants
import formats from '../constants/formats';

// Layout
import HomeLayout from './HomeLayout';

function ArticleLayout({ data, pageContext }) {
  const {
    markdownRemark: {
      html,
      frontmatter: {
        title,
        description,
        heroImage,
        date,
        photographer,
        unsplashAccount,
      },
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
      <>
        <Heading fontSize={5} textAlign="center" pb={2} pt={3}>
          {title}
        </Heading>

        <Text fontFamily="monospace" fontSize={2} textAlign="center" pb={4}>
          {moment(date).format(formats.ARTICLE_TIMESTAMP)}
        </Text>

        <Text
          fontFamily="heading"
          fontSize={2}
          fontStyle="italic"
          textAlign="center"
          pb={3}
        >
          {description}
        </Text>

        <Box
          sx={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            height: [240, 320, 420],
            width: '100%',
            minHeight: '320px',
            boxShadow: 'medium',
            borderRadius: 8,
          }}
          alt={title}
        />

        <Box my={2}>
          <Text fontFamily="heading" textAlign="center" fontStyle="italic">
            Hero photo by{' '}
            <Link
              href={`https://unsplash.com/${unsplashAccount}`}
              variant="link"
            >
              {photographer}
            </Link>
            , powered by{' '}
            <Link href="https://unsplash.com/" variant="link">
              unsplash
            </Link>
            .
          </Text>
        </Box>

        <Box width="inherit">
          <Article dangerouslySetInnerHTML={{ __html: html }} />
        </Box>
      </>
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
      id
      fields {
        slug
      }
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
