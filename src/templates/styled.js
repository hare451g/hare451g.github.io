import styled from 'styled-components';

const PostTimestamp = styled.div`
  padding-top: 1rem;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 300;
  font-size: 0.85rem;
  line-height: 0.75rem;
  text-decoration: none;
  color: #3d3d3d;
`;

const PostTitle = styled.h1`
  padding-top: 0;
  margin-top: 0;
  margin-bottom: 0.25rem;

  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  color: #3d3d3d;

  @media only screen and (max-device-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0.1rem;
  }
`;

const HeroImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
  max-height: 192px;

  @media only screen and (min-device-width: 480px) {
    max-height: 420px;
    max-width: 720px;
  }
`;

const MainArticle = styled.main`
  margin-top: 1rem;
  max-width: 720px;
  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    line-height: 1.8rem;
  }
  a {
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: bold;
    color: #34558b;
  }

  pre {
    background-color: #3d3d3d;
    border-radius: 0.85rem;
    padding: 1rem 0.4rem;
    overflow-x: auto;
    cursor: text;
  }

  img {
    max-width: 100%;
  }

  pre > code {
    color: #fff;
  }

  ol {
    padding-inline-start: 1rem;
  }

  ol > li {
    margin-bottom: 1rem;
  }
`;

export { PostTimestamp, PostTitle, HeroImage, MainArticle };
