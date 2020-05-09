import { useStaticQuery, graphql } from 'gatsby';

function useSiteLogo() {
  const { siteLogo } = useStaticQuery(
    graphql`
      query {
        siteLogo: file(relativePath: { eq: "hareblog-icon.svg" }) {
          publicURL
        }
      }
    `
  );

  return siteLogo;
}

export default useSiteLogo;
