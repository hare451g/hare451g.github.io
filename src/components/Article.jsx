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
    color: ${props => props.theme.colors.text};
  }

  pre {
    overflow-x: auto;
    cursor: text;
    color: rgb(238, 238, 238);
    border-radius: 0.85rem;
    padding: 1rem;
  }
`;

export default Article;
