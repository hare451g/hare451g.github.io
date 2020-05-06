import styled from 'styled-components';

const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px 0px;

  border: solid 2px ${props => props.theme.colors.border};
  border-radius: 0.5rem;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }

  :hover {
    animation: elevate 1.5s forwards;
    background-color: ${props => props.theme.colors.background};
  }

  @keyframes elevate {
    0% {
      box-shadow: none;
      background-color: ${props => props.theme.colors.background};
    }
    100% {
      box-shadow: 0 3px 8px 0 rgba(229, 117, 165, 0.2),
        0 3px 8px -2px rgba(130, 117, 229, 0.2),
        0 3px 8px 0 rgba(117, 206, 229, 0.2);
      background-color: ${props => props.theme.colors.background};
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
  font-family: ${props => props.theme.fonts.monospace};
  font-size: 0.85rem;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
`;

const PostTitle = styled.div`
  padding: 0.2rem 0;
  padding-right: 1rem;
  font-family: ${props => props.theme.fonts.secondary};
  font-style: normal;
  font-weight: 800;
  font-size: 1rem;
  color: ${props => props.theme.colors.text};

  :hover {
    color: ${props => props.theme.colors.link};
  }
`;

const PostDescription = styled.div`
  padding: 0.5rem 0;
  padding-right: 0.75rem;
  font-family: ${props => props.theme.fonts.secondary};
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
`;
export {
  PostContainer,
  PostHeroImageContainer,
  PostHeroImage,
  PostWrapper,
  PostTimestamp,
  PostTitle,
  PostDescription,
};
