import React from 'react';
import { Box, Flex, Text } from 'rebass';

// components
import ArticleSeriesTab from './ArticleSeriesTab';

function ArticlesBySeasons({ seriesBySeasons = [] }) {
  return seriesBySeasons.map(({ serie, seasons }) => (
    <Flex
      width={['100%', '100%', 720]}
      m="auto"
      flexDirection="column"
      key={`serie-${serie}`}
    >
      <Text
        fontFamily="heading"
        fontSize={[4, 5, 6]}
        textAlign="center"
        px={[1, 1, 5]}
        pb={4}
        fontWeight="heading"
        sx={{ textTransform: 'uppercase' }}
      >
        {serie}
      </Text>
      <Box mb={5}>
        <ArticleSeriesTab serie={serie} seasons={seasons} />
      </Box>
    </Flex>
  ));
}

export default ArticlesBySeasons;
