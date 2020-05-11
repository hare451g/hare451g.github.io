import React from 'react';
import { Flex } from 'rebass';

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
      <ArticleListWithTitle title="Recent Articles" list={recentArticles} />
    </HomeLayout>
  );
}

export default IndexPage;
