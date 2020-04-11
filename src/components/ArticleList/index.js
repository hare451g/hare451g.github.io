import React from 'react';
import moment from 'moment';

import { useStaticQuery, graphql } from 'gatsby';

import formats from '../../constants/formats';
import ArticleCard from '../ArticleCard';

import { SerieWrapper, PostsWrapper } from './styled';
import { mapSeriesBySeason, sortByLatest } from './helpers';

function ArticleList() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: frontmatter___date }
          filter: { frontmatter: { isPublished: { eq: true } } }
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

  const {
    allMarkdownRemark: { edges: posts, distinct: availableSeries },
  } = data;

  // group by available series
  const results = availableSeries.map(serie => ({
    serie,
    entries: posts.filter(
      ({ node: { frontmatter } }) => frontmatter.series === serie
    ),
  }));

  // group series by available seasons
  const seriesBySeasons = results.map(mapSeriesBySeason).sort(sortByLatest);

  return seriesBySeasons.map(({ serie, seasons }) => (
    <SerieWrapper key={serie}>
      {seasons.map(({ title, entries }) => (
        <section style={{ paddingBottom: '1rem' }} key={`season-${title}`}>
          <h2
            style={{
              textAlign: 'center',
              fontFamily: `'IBM Plex Mono', monospace`,
            }}
          >
            {' '}
            #{serie} | {title}
          </h2>

          <PostsWrapper>
            {entries.map(
              ({
                id,
                frontmatter: { date, title, description, heroImage },
                fields: { slug },
              }) => (
                <ArticleCard
                  id={id}
                  slug={slug}
                  heroImage={heroImage}
                  title={title}
                  date={moment(date, formats.FRONT_MATTER_DATE).format(
                    formats.ARTICLE_TIMESTAMP
                  )}
                  description={description}
                />
              )
            )}
          </PostsWrapper>
        </section>
      ))}
    </SerieWrapper>
  ));
}

export default ArticleList;
