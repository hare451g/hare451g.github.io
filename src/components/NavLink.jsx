import React from 'react';
import { Link } from 'gatsby';
import { Box } from 'rebass';
import styled from '@emotion/styled';

// styled components
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.heading};
`;

function NavLink({ children, to }) {
  return (
    <Box p={2}>
      <StyledLink to={to}>{children}</StyledLink>
    </Box>
  );
}

export default NavLink;
