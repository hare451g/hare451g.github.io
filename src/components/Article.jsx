import styled from '@emotion/styled';

const Article = styled.article`
  font-family: ${props => props.theme.fonts.body};
  font-style: normal;
  font-weight: normal;
  font-size: ${props => props.theme.fontSizes[3]}px;
  line-height: ${props => props.theme.lineHeights.body};
  width: inherit;

  p {
    margin-bottom: ${props => props.theme.space[2]}px;
    color: ${props => props.theme.colors.text};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props => props.theme.fonts.heading};
  }

  a {
    text-decoration-color: ${props => props.theme.colors.brand};
    text-decoration-thickness: 4px;
    font-weight: bold;
    color: ${props => props.theme.colors.text};
  }

  u {
    background-color: ${props => props.theme.colors.brand};
  }

  * > img {
    border-radius: 8px;
    box-shadow: ${props => props.theme.shadows.large};
    width: 100%;
  }

  pre {
    overflow-x: auto;
    cursor: text;
    color: rgb(238, 238, 238);
    border-radius: 0.85rem;
    padding: 1rem;
    box-shadow: ${props => props.theme.shadows.large};
  }
`;

export default Article;
