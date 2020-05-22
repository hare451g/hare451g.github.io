import { useStaticQuery, graphql } from 'gatsby';

function useLocalImage() {
  const {
    authorImage: { publicURL: authorImage },
    siteLogo: { publicURL: siteLogo },
  } = useStaticQuery(
    graphql`
      query {
        authorImage: file(relativePath: { eq: "author-thumbnail.png" }) {
          publicURL
        }
        siteLogo: file(relativePath: { eq: "Logo.svg" }) {
          publicURL
        }
      }
    `
  );

  return { siteLogo, authorImage };
}

export default useLocalImage;
