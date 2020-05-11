import React from 'react';
import { Flex, Text, Image, Box } from 'rebass';

import NavLink from './NavLink';
import useSiteLogo from '../hooks/useSiteLogo';

function NavigationBar() {
  const siteLogo = useSiteLogo();
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
            <Image src={siteLogo} height={32} width={32} alt="site logo" />
          </NavLink>
          <NavLink to="/">
            <Box variant="activeTab">
              <Text fontFamily="heading" fontSize={2}>
                Hendra Sadewa
              </Text>
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
