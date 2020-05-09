import React from 'react';
import { Link } from 'gatsby';

// components
import ArticleCard from '../components/ArticleCard';
import useRecentArticlesQuery from '../hooks/useRecentArticlesQuery';

function RecentArticles() {
  const recentArticles = useRecentArticlesQuery();
  return (
    <div>
      <h2>Artikel Terbaru</h2>
      {recentArticles.map(article => (
        <ArticleCard {...article} />
      ))}
      <Link to="/blog">
        <span role="img" aria-label="pointing to see more ">
          👉
        </span>{' '}
        Click here to see more.
      </Link>
    </div>
  );
}

export default RecentArticles;
