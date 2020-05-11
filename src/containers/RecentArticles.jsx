import React from 'react';
import { Link } from 'gatsby';

// components
import ArticleCard from '../components/ArticleCard';
import useRecentArticlesQuery from '../hooks/useRecentArticlesQuery';
import { Text } from 'rebass';

function RecentArticles() {
  const recentArticles = useRecentArticlesQuery();

  // render list of recent articles
  const list = recentArticles.map(article => <ArticleCard {...article} />);

  return (
    <div>
      <Text>Artikel Terbaru</Text>
      {list}
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
