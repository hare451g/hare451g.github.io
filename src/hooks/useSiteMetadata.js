import { useStaticQuery, graphql } from 'gatsby';

function useSiteMetadata() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            longDescription
            author
            authorShortIntro
            twitter
            instagram
            linkedIn
            linkedInURL
            twitterURL
            instagramURL
            email
            siteUrl
          }
        }
      }
    `
  );

  return siteMetadata;
}

export default useSiteMetadata;
