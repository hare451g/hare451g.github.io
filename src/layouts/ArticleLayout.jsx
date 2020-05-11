import React from 'react';
import moment from 'moment';
import { graphql } from 'gatsby';

// components
import SEO from '../components/SEO';
import Article from '../components/Article';

// Layout
import HomeLayout from './HomeLayout';
import { Box, Flex, Heading, Text } from 'rebass';
import formats from '../constants/formats';

function ArticleLayout({ data, pageContext }) {
  const {
    markdownRemark: {
      html,
      frontmatter: { title, description, heroImage, date },
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
      <Flex width="inherit" flexDirection="column">
        <Heading fontSize={5} textAlign="center" pt={[1, 2, 4]} pb={2}>
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
            height: [240, 320],
            width: '100%',
            boxShadow: 'medium',
            borderRadius: 8,
          }}
          alt={title}
        />
        <Box width="inherit">
          <Article dangerouslySetInnerHTML={{ __html: html }} />
        </Box>
      </Flex>
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
