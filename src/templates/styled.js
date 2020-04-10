import styled from 'styled-components';

const PostTimestamp = styled.div`
  text-align: center;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  font-family: 'IBM Plex Mono', monospace;
  font-style: normal;
  font-weight: 300;
  font-size: 0.85rem;
  line-height: 0.75rem;
  text-decoration: none;
  color: #424242;
`;

const PostTitle = styled.h1`
  padding-bottom: 0.1rem;
  margin-bottom: 0.1rem;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 800;
  color: #424242;

  @media only screen and (max-device-width: 480px) {
    font-size: 1.5rem;
    padding-bottom: 0.1rem;
  }
`;

const AuthorWrapper = styled.div`
  padding: 1.5rem 0;
`;

const HeroImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
  max-height: 192px;

  padding: 2rem 0rem;
  padding-top: 0;
  @media only screen and (min-device-width: 480px) {
    max-height: 420px;
    max-width: 720px;
  }
`;

const Description = styled.blockquote`
  font-style: italic;
  font-weight: 200;
  font-family: 'IBM Plex Mono', monospace;
  margin-inline-start: 0;
  margin-inline-end: 0;
`;

const MainArticle = styled.main`
  min-width: 100%;
  max-width: 100%;

  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1.75rem;
    letter-spacing: 0.1px;
  }
  a {
    font-family: 'Open Sans', sans-serif;
    color: #34558b;
    text-decoration: underline;
  }

  pre {
    border-radius: 0.85rem;
    padding: 1rem 1rem;
    max-width: 100%;
    overflow-x: auto;
    cursor: text;
  }

  img {
    width: 100%;
    margin: 0rem auto;
  }

  pre > code {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 600;
  }

  ol {
    padding-inline-start: 1rem;
  }

  ol > li {
    margin-bottom: 1rem;
  }

  /* phone only */
  @media only screen and (max-device-width: 480px) {
    p {
      font-size: 1rem;
    }
  }

  /* larger than phone */
  @media only screen and (min-device-width: 480px) {
    min-width: 480px;
    max-width: 720px;
  }
`;

export {
  PostTimestamp,
  Description,
  AuthorWrapper,
  PostTitle,
  HeroImage,
  MainArticle,
};
