import React from 'react';
import { Flex, Box, Heading } from 'rebass';
import { GrCatalog, GrHome, GrCircleInformation } from 'react-icons/gr';

import useLocalImage from '../hooks/useLocalImage';

import NavLink from './NavLink';

function NavigationBar() {
  const { siteLogo } = useLocalImage();

  return (
    <Box
      variant="navbar"
      sx={{
        position: 'fixed',
        top: 0,
        width: '100%',
      }}
    >
      <Flex
        color="text"
        alignItems="center"
        justifyContent="space-between"
        width={['100%', '100%', 720]}
        m="auto"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <NavLink to="/">
            <Flex alignItems="center">
              <img src={siteLogo} height={32} alt="author" />
              <Heading fontFamily="heading" fontSize={2} pl={2}>
                Hendra Sadewa
              </Heading>
            </Flex>
          </NavLink>
        </Flex>

        <Flex alignItems="center">
          <NavLink to="/">
            <GrHome alt="home" size={18} />
          </NavLink>
          <NavLink to="/blog">
            <GrCatalog alt="blog" size={18} />
          </NavLink>
          <NavLink to="/about">
            <GrCircleInformation alt="about" size={18} />
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
}

export default NavigationBar;
