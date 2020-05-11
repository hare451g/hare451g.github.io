import React from 'react';
import { Box, Flex, Image, Text, Heading } from 'rebass';
import { Link } from 'gatsby';

function HighlightArticle({ slug, heroImage, title, date, description }) {
  return (
    <Flex flexDirection="row" alignItems="flex-start" py={4} px={2}>
      <Flex flexDirection="column">
        <Flex
          sx={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            height: [240, 480],
            width: '100%',
          }}
          alt={title}
          alignItems="flex-end"
        />
        <Flex flexDirection="column" p={2}>
          <Text fontFamily="body">{date}</Text>
          <Heading>{title}</Heading>
          <Text fontFamily="body" py={2}>
            {description}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default HighlightArticle;
