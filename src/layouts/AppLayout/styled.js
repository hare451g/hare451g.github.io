import styled from 'styled-components';

const AppLayoutWrapper = styled.div`
  padding: 0 1rem;
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;

  header {
    grid-row-start: 1;
    grid-row-end: 2;
  }

  main {
    grid-row-start: 2;
    grid-row-end: 3;
  }

  footer {
    grid-row-start: 3;
    grid-row-end: 4;
  }

  @media (min-width: 480px) {
    padding: 0 2rem;
  }
`;

export { AppLayoutWrapper };
