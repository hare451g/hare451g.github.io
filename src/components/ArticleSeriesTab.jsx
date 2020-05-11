import React, { useState } from 'react';
import { Text, Box, Flex } from 'rebass';

import ArticleListWithTitle from './ArticleListWithTitle';

// components
import TabItem from './TabItem';

function ArticleSeriesTab({ serie, seasons }) {
  const [selectedTab, setTab] = useState(seasons[0].title);

  const filteredArticleList = seasons
    .filter(({ title }) => title === selectedTab)
    .map(({ title, entries }) => (
      <ArticleListWithTitle
        title={``}
        list={entries}
        key={`season-${serie}-${title}`}
      />
    ));

  return (
    <Box>
      <Flex justifyContent="space-evenly">
        <TabItem
          list={seasons}
          index="title"
          selectedTab={selectedTab}
          onTabClick={selected => setTab(selected)}
        />
      </Flex>
      {filteredArticleList}
    </Box>
  );
}

export default ArticleSeriesTab;
