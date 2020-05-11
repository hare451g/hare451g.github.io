import { useStaticQuery, graphql } from 'gatsby';

function useSiteLogo() {
  const {
    siteLogo: { publicURL },
  } = useStaticQuery(
    graphql`
      query {
        siteLogo: file(relativePath: { eq: "Logo.svg" }) {
          publicURL
        }
      }
    `
  );

  return publicURL;
}

export default useSiteLogo;
