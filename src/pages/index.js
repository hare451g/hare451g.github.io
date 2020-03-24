import React from 'react';

import SEO from '../containers/SEO';
import ArticleList from '../containers/ArticleList';
import HomeLayout from '../layouts/HomeLayout';
import SeriesList from '../containers/SeriesList';

function IndexPage() {
  return (
    <HomeLayout>
      <SEO title={'Home'} />
      <SeriesList />
      <ArticleList />
    </HomeLayout>
  );
}

export default IndexPage;
