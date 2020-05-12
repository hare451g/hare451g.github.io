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
        bg="background"
        sx={{
          borderRadius: 8,
          boxShadow: 'medium',
        }}
      >
        <Flex
          flexDirection="column"
          py={1}
          px={2}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Flex flexDirection="column" py={2}>
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
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            minHeight: [120, 180],
            minWidth: [120, 240],
          }}
        />
      </Flex>
    </Link>
  );
}

export default ArticleCard;
