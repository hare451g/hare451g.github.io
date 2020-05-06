import styled from 'styled-components';
import { COLOR_PINK, COLOR_PURPLE, COLOR_CYAN } from '../../constants/colors';
import { Link } from 'gatsby';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  background: ${props => props.theme.colors.background};
`;

const BrandImage = styled.img`
  height: 36px;
  width: 36px;

  @media only screen and (max-device-width: 480px) {
    height: 32px;
    width: 32px;
  }
`;

const NavWrapper = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
`;

const NavLink = styled(Link)`
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: normal;
  font-size: 1rem;
  padding-left: 1rem;

  @media only screen and (max-device-width: 480px) {
    font-size: 0.7rem;
  }

  :hover {
    animation: changecolor 1s infinite;
    text-decoration: none;
  }

  @keyframes changecolor {
    0% {
      color: ${COLOR_PINK};
    }
    50% {
      color: ${COLOR_PURPLE};
    }
    100% {
      color: ${COLOR_CYAN};
    }
  }
`;

export { HeaderWrapper, BrandImage, NavWrapper, NavLink };
