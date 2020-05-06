import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  font-family: ${props => props.theme.fonts.monospace};
  font-weight: bold;
  color: ${props => props.theme.colors.link};
`;

export { Link };
