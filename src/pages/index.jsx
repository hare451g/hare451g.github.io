import React from 'react';
import { Flex } from 'rebass';

// components
import SEO from '../components/SEO';
import NavigationBar from '../components/NavigationBar';

// containers
import ArticleListWithTitle from '../components/ArticleListWithTitle';

// layouts
import AppLayout from '../layouts/AppLayout';

// hooks
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteLogo from '../hooks/useSiteLogo';
import useRecentArticlesQuery from '../hooks/useRecentArticlesQuery';

function IndexPage() {
  const { description, longDescription } = useSiteMetadata();
  const siteLogo = useSiteLogo();
  const recentArticles = useRecentArticlesQuery();

  return (
    <AppLayout>
      <SEO
        title="Home"
        description={`${description} | ${longDescription}`}
        image={siteLogo.publicURL}
      />
      <NavigationBar />
      <Flex
        width={['100%', '100%', 720]}
        alignItems="center"
        justifyContent="center"
        m="auto"
        mt={5}
      >
        <ArticleListWithTitle title="Recent Articles" list={recentArticles} />
      </Flex>
    </AppLayout>
  );
}

export default IndexPage;
