import React from 'react';
import { Link } from 'gatsby';
import { Box, Flex, Text } from 'rebass';
import moment from 'moment';

// constants
import formats from '../constants/formats';

function ArticleCard({ id, slug, heroImage, title, date, description }) {
  const datePublished = moment(date).format(formats.ARTICLE_TIMESTAMP);

  return (
    <Link to={slug} style={{ textDecoration: 'none' }} key={id}>
      <Flex
        flexDirection="row"
        mb={4}
        variant="articleCard"
        justifyContent="space-between"
        sx={{
          boxShadow: 'small',
        }}
      >
        <Flex
          flexDirection="column"
          py={1}
          px={2}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Flex flexDirection="column">
            <Text
              fontFamily="heading"
              color="text"
              fontWeight="heading"
              fontSize={[1, 2, 3]}
            >
              {title}
            </Text>
            <Text fontFamily="body" color="text" py={3} fontSize={[1, 2, 2]}>
              {description}
            </Text>
          </Flex>
          <Text fontFamily="monospace" color="text" fontSize={[1, 2, 1]}>
            {datePublished}
          </Text>
        </Flex>
        <Box
          sx={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            minHeight: [120],
            minWidth: [120],
          }}
        />
      </Flex>
    </Link>
  );
}

export default ArticleCard;
