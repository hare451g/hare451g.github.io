import React from 'react';
import { Link } from 'gatsby';
import { Box, Flex, Text } from 'rebass';
import moment from 'moment';

function ArticleCard({ id, slug, heroImage, title, date, description }) {
  const datePublished = moment(date).format('dddd, D-MMMM-YYYY');

  return (
    <Link to={slug} style={{ textDecoration: 'none' }} key={id}>
      <Flex flexDirection="row" mb={3}>
        <Box
          sx={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            minHeight: [120],
            minWidth: [120],
          }}
        />
        <Flex
          flexDirection="column"
          px={2}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Flex flexDirection="column">
            <Text
              fontFamily="heading"
              color="text"
              fontWeight="heading"
              fontSize={3}
            >
              {title}
            </Text>
            <Text fontFamily="body" color="text" py={1}>
              {description}
            </Text>
          </Flex>
          <Text fontFamily="body" color="text">
            {datePublished}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
}

export default ArticleCard;
