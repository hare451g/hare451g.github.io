import styled from 'styled-components';

const SerieWrapper = styled.div`
  margin: 2.5rem 0px;
`;

const PostsWrapper = styled.div`
  margin: 24px 0px;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px 0px;
  border: 2px solid #3d3d3d;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }

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

const PostWrapper = styled.div`
  padding: 0 0.5rem;
  @media (min-width: 720px) {
    padding: 0 0.25rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }
`;

const PostHeroImage = styled.img`
  object-fit: cover;
  height: auto;
  height: 160px;
  width: 100%;
  margin-right: 0;

  @media (min-width: 720px) {
    width: 160px;
    margin-right: 1rem;
  }
`;

const PostHeroImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PostTimestamp = styled.div`
  padding-top: 1rem;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 300;
  font-size: 0.85rem;
  text-decoration: none;
  color: #3d3d3d;
`;

const PostTitle = styled.div`
  padding: 0.2rem 0;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 800;
  font-size: 1rem;
  color: #3d3d3d;

  :hover {
    color: #2196f3;
  }
`;

const PostDescription = styled.div`
  padding: 0.5rem 0;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: #3d3d3d;
`;
export {
  SerieWrapper,
  PostsWrapper,
  PostContainer,
  PostWrapper,
  PostHeroImageContainer,
  PostHeroImage,
  PostTimestamp,
  PostTitle,
  PostDescription,
};
