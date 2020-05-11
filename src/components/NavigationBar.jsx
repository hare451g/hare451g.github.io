import React from 'react';
import { Flex, Text, Box, Heading } from 'rebass';

import NavLink from './NavLink';

function NavigationBar() {
  return (
    <Box variant="navbar">
      <Flex
        color="text"
        alignItems="center"
        justifyContent="space-between"
        width={['100%', '100%', 720]}
        m="auto"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <NavLink to="/">
            <Box>
              <Heading fontFamily="heading" fontSize={2}>
                Hendra Sadewa
              </Heading>
            </Box>
          </NavLink>
        </Flex>

        <Flex alignItems="center">
          <NavLink to="/blog">blog</NavLink>
          <NavLink to="/about">about</NavLink>
        </Flex>
      </Flex>
    </Box>
  );
}

export default NavigationBar;
