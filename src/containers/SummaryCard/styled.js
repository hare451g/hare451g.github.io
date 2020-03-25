import styled from 'styled-components';

const CardWrapper = styled.div`
  padding: 1.5rem;
  border: 0.5px solid #9f9f9f;
  border-radius: 0.5rem;
  min-width: 180px;

  @media only screen and (max-device-width: 480px) {
    margin-bottom: 1rem;
    width: 100%;
    min-width: 100px;
    max-width: 300px;
  }
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

const ValueLabel = styled.h3`
  text-align: right;
`;

export { CardWrapper, ValueLabel };
