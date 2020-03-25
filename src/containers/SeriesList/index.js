import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { SeriesWrapper, SerieWrapper } from './styled';

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
    <SeriesWrapper>
      {availableSeries.map(serie => (
        <SerieWrapper key={serie}>
          <Link
            to={`/#${serie}`}
            style={{ textDecoration: 'none' }}
            key={serie}
          >
            {serie}
          </Link>
        </SerieWrapper>
      ))}
      <SerieWrapper>
        <Link to={'/covid-19'} style={{ textDecoration: 'none' }}>
          COVID-19
        </Link>
      </SerieWrapper>
    </SeriesWrapper>
  );
}

export default SeriesList;
