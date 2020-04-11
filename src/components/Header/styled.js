import styled from 'styled-components';
import { COLOR_PINK, COLOR_PURPLE, COLOR_CYAN } from '../../constants/colors';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
`;

const BrandImage = styled.img`
  height: 36px;
  width: 36px;

  @media only screen and (max-device-width: 480px) {
    height: 32px;
    width: 32px;
  }
`;

const HeaderTitle = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  margin: 0;
  padding-bottom: 0.2rem;
  padding-left: 1rem;

  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};

  animation: none;

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

const HeaderSubtitle = styled.div`
  font-family: 'Open Sans' sans-serif;
  font-weight: normal;
  font-size: 1rem;
  padding-left: 1rem;

  @media only screen and (max-device-width: 480px) {
    font-size: 0.7rem;
  }
`;

export { HeaderWrapper, BrandImage, HeaderTitle, HeaderSubtitle };
