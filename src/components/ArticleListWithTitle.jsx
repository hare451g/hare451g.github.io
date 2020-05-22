import React from 'react';
import { Link } from 'gatsby';
import { Text, Box } from 'rebass';

// components
import ArticleCard from './ArticleCard';

function ArticleListWithTitle({ title, list }) {
  // render list of recent articles
  const articles = list.map(article => (
    <ArticleCard {...article} key={article.id} />
  ));

  return (
    <>
      <Box>
        <Text fontWeight="heading" fontFamily="heading" fontSize={4} pb={3}>
          {title}
        </Text>
      </Box>
      {articles}
    </>
  );
}

export default ArticleListWithTitle;
