import { useStaticQuery, graphql } from 'gatsby';

function useSiteLogo() {
  const {
    siteLogo: { publicURL },
  } = useStaticQuery(
    graphql`
      query {
        siteLogo: file(relativePath: { eq: "hareblog-icon.svg" }) {
          publicURL
        }
      }
    `
  );

  return publicURL;
}

export default useSiteLogo;
