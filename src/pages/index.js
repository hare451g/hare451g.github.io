import React from 'react';

import SEO from '../containers/SEO';
import ArticleList from '../containers/ArticleList';
import HomeLayout from '../layouts/HomeLayout';

function IndexPage() {
  return (
    <HomeLayout>
      <SEO title={'Home'} />
      <ArticleList />
    </HomeLayout>
  );
}

export default IndexPage;
