import React from 'react';
import moment from 'moment';
import { Flex, Text, Box } from 'rebass';

import formats from '../constants/formats';

function WorkExperienceItem({
  descriptions,
  companyName,
  role,
  start,
  end,
  isPresent,
}) {
  return (
    <Flex flexDirection="row" mb={3}>
      <Box width="25%">
        <Text fontFamily="heading" fontSize={2} fontFamily="heading">
          {moment(start).format(formats.WORK_EXPERIENCE_DATE)} -{' '}
          {isPresent
            ? 'Present'
            : moment(end).format(formats.WORK_EXPERIENCE_DATE)}
        </Text>
      </Box>
      <Flex flexDirection="column" width="75%">
        <Text fontSize={2} fontFamily="heading">
          {companyName}
        </Text>
        <Text fontSize={2} fontFamily="heading" fontWeight="bold" py={1}>
          {role}
        </Text>
        <Text fontSize={2} fontFamily="body" py={2}>
          {descriptions}
        </Text>
      </Flex>
    </Flex>
  );
}

export default WorkExperienceItem;
