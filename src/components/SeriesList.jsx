import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

function SeriesList() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: frontmatter___date }
          filter: { frontmatter: { isPublished: { eq: true } } }
        ) {
          distinct(field: frontmatter___series)
        }
      }
    `
  );

  const { distinct: availableSeries } = data.allMarkdownRemark;

  return (
    <div>
      {availableSeries.map(serie => (
        <div key={serie}>
          <Link
            to={`/#${serie}`}
            style={{ textDecoration: 'none' }}
            key={serie}
          >
            {serie}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SeriesList;
