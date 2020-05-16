import { useStaticQuery, graphql } from 'gatsby';
import { mapSeriesBySeason, sortByLatest } from '../utils/blogEntries';

function useAllBlogEntriesQuery() {
  const {
    allMarkdownRemark,
    allMarkdownRemark: { edges: entries, distinct: availableSeries },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: frontmatter___date }
          filter: {
            frontmatter: { isPublished: { eq: true } }
            fields: { isFuture: { eq: false } }
          }
        ) {
          distinct(field: frontmatter___series)
          edges {
            node {
              id
              excerpt
              frontmatter {
                date
                description
                title
                series
                heroImage
                series
                seasonTitle
                season
                episode
                isPublished
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  const groupBySeason = () =>
    availableSeries
      .map(serie => ({
        serie,
        entries: entries.filter(
          ({ node: { frontmatter } }) => frontmatter.series === serie
        ),
      }))
      .map(mapSeriesBySeason)
      .sort(sortByLatest);

  return { allMarkdownRemark, groupBySeason };
}

export default useAllBlogEntriesQuery;
