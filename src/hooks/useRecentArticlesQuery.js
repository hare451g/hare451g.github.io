import { useStaticQuery, graphql } from 'gatsby';

function useRecentArticlesQuery() {
  const {
    allMarkdownRemark: { edges: entries },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          limit: 3
          sort: { fields: frontmatter___date, order: DESC }
          filter: {
            frontmatter: { isPublished: { eq: true } }
            fields: { isFuture: { eq: false } }
          }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                description
                heroImage
                seasonTitle
                series
                title
                date
              }
            }
          }
        }
      }
    `
  );

  const mapRecentArticles = ({ node }) => ({
    id: node.id,
    slug: node.fields.slug,
    ...node.frontmatter,
  });

  const recentArticles = entries.map(mapRecentArticles);

  return recentArticles;
}

export default useRecentArticlesQuery;
