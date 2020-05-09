import React from 'react';

// hooks
import useAllBlogEntriesQuery from '../hooks/useAllBlogEntriesQuery';
import ArticlesBySeasons from '../components/ArticlesBySeasons';

function BlogEntries() {
  const { groupBySeason } = useAllBlogEntriesQuery();
  const seriesBySeasons = groupBySeason();
  return (
    <div>
      <h1>Blog Posts</h1>
      <ArticlesBySeasons seriesBySeasons={seriesBySeasons} />
    </div>
  );
}

export default BlogEntries;
