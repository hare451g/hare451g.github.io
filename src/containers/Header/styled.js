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
      color: #851de0;
    }
    25% {
      color: #aa26da;
    }
    75% {
      color: #c355f5;
    }
    100% {
      color: #851de0;
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
