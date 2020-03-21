import styled from 'styled-components';

const HeaderTitle = styled.h1`
  font-family: Quicksand, sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 1.875rem;
  color: #3d3d3d;

  animation: none;

  :hover {
    animation: changecolor 1s infinite;
    text-decoration: none;
  }

  @keyframes changecolor {
    0% {
      color: #d86898;
    }
    50% {
      color: #7668d8;
    }
    100% {
      color: #68c1d8;
    }
  }
`;

const HeaderSubtitle = styled.div`
  font-family: Quicksand, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 0.9375rem;
`;

export { HeaderTitle, HeaderSubtitle };
