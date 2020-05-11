import React from 'react';
import { Flex, Text, Image } from 'rebass';

import NavLink from './NavLink';
import useSiteLogo from '../hooks/useSiteLogo';

function NavigationBar() {
  const siteLogo = useSiteLogo();
  return (
    <Flex variant="navbar">
      <Flex alignItems="center" justifyContent="space-between">
        <Image src={siteLogo} height={32} width={32} />
        <Text fontFamily="heading" fontSize={2} fontWeight="bold" pl={2}>
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
