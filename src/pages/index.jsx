import React from 'react';
import { Flex, Heading, Text, Box } from 'rebass';

// components
import SEO from '../components/SEO';
import ArticleListWithTitle from '../components/ArticleListWithTitle';

// layouts
import HomeLayout from '../layouts/HomeLayout';

// hooks
import useSiteMetadata from '../hooks/useSiteMetadata';
import useLocalImage from '../hooks/useLocalImage';
import useRecentArticlesQuery from '../hooks/useRecentArticlesQuery';

function IndexPage() {
  const { description, longDescription } = useSiteMetadata();
  const { siteLogo } = useLocalImage();
  const recentArticles = useRecentArticlesQuery();

  return (
    <HomeLayout>
      <SEO
        title="Home"
        description={`${description} | ${longDescription}`}
        image={siteLogo.publicURL}
      />
      <Box mb={4}>
        <Heading mb={2}>Hi! I'm Hendra</Heading>
        <Text fontFamily="body" fontSize={2} lineHeight={1.5}>
          <p>
            My name is Hendra, Nice to meet You! I'm a Software engineer mostly
            write code in JavaScript (ES6/Node.Js) and React. I have great
            passion in web development.
          </p>
          <p>
            This is my personal blog, contains my own personal thoughts and
            tutorials not related to any organizations and instances. This blog
            currently written in Bahasa Indonesia (I will working for english
            version soon :D ).
          </p>

          <p>Please enjoy your stay 🛋️</p>
        </Text>
      </Box>

      <ArticleListWithTitle title="Recent Articles" list={recentArticles} />
    </HomeLayout>
  );
}

export default IndexPage;
