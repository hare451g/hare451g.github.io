import React from 'react';
import { Link } from 'gatsby';
import { Text, Box } from 'rebass';

// components
import ArticleCard from '../components/ArticleCard';

// hooks
import useRecentArticlesQuery from '../hooks/useRecentArticlesQuery';

function RecentArticles() {
  const recentArticles = useRecentArticlesQuery();

  // render list of recent articles
  const list = recentArticles.map(article => <ArticleCard {...article} />);

  return (
    <Box m={2}>
      <Box>
        <Text fontWeight="heading" fontFamily="heading" fontSize={5} pb={3}>
          Artikel Terbaru
        </Text>
      </Box>
      {list}
    </Box>
  );
}

export default RecentArticles;
