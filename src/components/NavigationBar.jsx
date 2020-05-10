import React from 'react';
import { Flex, Text } from 'rebass';

import NavLink from './NavLink';

function NavigationBar() {
  return (
    <Flex p={2} color="text" alignItems="center" justifyContent="space-between">
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontFamily="heading" fontSize="4" fontWeight="bold">
          Hendra Sadewa
        </Text>
      </Flex>
      <Flex alignItems="center">
        <NavLink to="/blog">blog</NavLink>
        <NavLink to="/about">about</NavLink>
      </Flex>
    </Flex>
  );
}

export default NavigationBar;
