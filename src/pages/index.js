import React from 'react';

import SEO from '../containers/SEO';
import ArticleList from '../containers/ArticleList';
import HomeLayout from '../layouts/HomeLayout';

function IndexPage() {
  return (
    <HomeLayout>
      <SEO title={'Home'} />
      <h3>Threads</h3>
      <ArticleList />
    </HomeLayout>
  );
}

export default IndexPage;
