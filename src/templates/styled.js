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
  margin-bottom: 1.5rem;

  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  color: #3d3d3d;
`;

const HeroImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
  max-height: 192px;

  @media only screen and (min-device-width: 480px) {
    max-height: 420px;
  }
`;

const MainArticle = styled.main`
  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
  }
  a {
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: bold;
    color: #2196f3;
  }

  pre {
    background-color: #3d3d3d;
    border-radius: 0.85rem;
    padding: 1rem 0.4rem;
  }

  pre > code {
    color: #fff;
  }
`;

export { PostTimestamp, PostTitle, HeroImage, MainArticle };
