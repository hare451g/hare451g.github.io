import styled from 'styled-components';
import {
  COLOR_BODY_TEXT,
  COLOR_LINK_TEXT,
  COLOR_BACKGROUND,
  COLOR_CHARCOAL,
} from '../../constants/colors';

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

  border: solid 1px ${COLOR_CHARCOAL};
  border-radius: 0.5rem;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }

  :hover {
    animation: elevate 1.5s forwards;
    background-color: #ffffff;
  }

  @keyframes elevate {
    0% {
      box-shadow: none;
      background-color: ${COLOR_BACKGROUND};
    }
    25% {
      box-shadow: 0 3px 4px 0 rgba(229, 117, 165, 0.14),
        0 3px 3px -2px rgba(130, 117, 229, 0.12),
        0 1px 8px 0 rgba(117, 206, 229, 0.2);
      background-color: #fffffa;
    }
    50% {
      box-shadow: 0 3px 3px -2px rgba(130, 117, 229, 0.12),
        0 3px 4px 0 rgba(229, 117, 165, 0.14),
        0 1px 8px 0 rgba(117, 206, 229, 0.2);
      background-color: #fffffa;
    }
    75% {
      box-shadow: 0 1px 8px 0 rgba(117, 206, 229, 0.2),
        0 3px 3px -2px rgba(130, 117, 229, 0.12),
        0 3px 4px 0 rgba(229, 117, 165, 0.14);
      background-color: #fffffa;
    }
    100% {
      box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
        0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
      background-color: #ffffff;
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
  border-radius: 0.5rem 0.5rem 0 0;

  @media (min-width: 720px) {
    width: 160px;
    margin-right: 1rem;
    border-radius: 0.5rem 0 0 0.5rem;
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
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.85rem;
  text-decoration: none;
  color: ${COLOR_BODY_TEXT};
`;

const PostTitle = styled.div`
  padding: 0.2rem 0;
  padding-right: 1rem;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 1rem;
  color: ${COLOR_BODY_TEXT};

  :hover {
    color: ${COLOR_LINK_TEXT};
  }
`;

const PostDescription = styled.div`
  padding: 0.5rem 0;
  padding-right: 0.75rem;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: ${COLOR_BODY_TEXT};
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
