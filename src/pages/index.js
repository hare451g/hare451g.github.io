import React from 'react';

import SEO from '../containers/SEO';
import ArticleList from '../containers/ArticleList';
import AppLayout from '../layouts/AppLayout';

function IndexPage() {
  return (
    <AppLayout>
      <SEO title={'Home'} />
      <h3>Threads</h3>
      <ArticleList />
    </AppLayout>
  );
}

export default IndexPage;
