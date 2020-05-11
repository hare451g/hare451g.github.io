import React from 'react';
import { Flex, Heading, Text, Box } from 'rebass';

// components
import SEO from '../components/SEO';
import ArticleListWithTitle from '../components/ArticleListWithTitle';

// layouts
import HomeLayout from '../layouts/HomeLayout';

// hooks
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteLogo from '../hooks/useSiteLogo';
import useRecentArticlesQuery from '../hooks/useRecentArticlesQuery';

function IndexPage() {
  const { description, longDescription } = useSiteMetadata();
  const siteLogo = useSiteLogo();
  const recentArticles = useRecentArticlesQuery();

  return (
    <HomeLayout>
      <SEO
        title="Home"
        description={`${description} | ${longDescription}`}
        image={siteLogo.publicURL}
      />
      <Flex flexDirection="column" mt={4}>
        <Box p={2} mb={3}>
          <Heading mb={2}>Hi! I'm Hendra</Heading>
          <Text fontFamily="body" fontSize={2} lineHeight={1.5}>
            Software engineer specialized in JavaScript (ES6/Node.Js) and
            React. I have great passion in functional programming, and web
            development. Currently working fulltime as Front-end Developer at
            Hara, but I do some freelance jobs and writing about tech too.
          </Text>
        </Box>

        <ArticleListWithTitle title="Recent Articles" list={recentArticles} />
      </Flex>
    </HomeLayout>
  );
}

export default IndexPage;
