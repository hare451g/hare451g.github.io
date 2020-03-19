import styled from 'styled-components';

const AppLayoutWrapper = styled.div`
  padding: 0 1rem;
  display: grid;
  height: 100vh;
  max-width: 720px;
  margin: auto;
  grid-template-rows: auto 1fr auto;

  header,
  main,
  footer {
    padding: inherit;
  }

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
    padding-top: 2rem;
    padding-bottom: 1rem;
  }

  @media (min-width: 480px) {
    padding: 0 2rem;
  }
`;

export { AppLayoutWrapper };
