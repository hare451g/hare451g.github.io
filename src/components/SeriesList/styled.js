import styled from 'styled-components';

const SeriesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SerieWrapper = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;

  :hover {
    animation: elevate 1.5s forwards;
  }

  @keyframes elevate {
    0% {
      box-shadow: none;
    }
    50% {
      box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
        0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.2);
    }
    100% {
      box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
        0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    }
  }
`;

export { SeriesWrapper, SerieWrapper };
