import React from 'react';
import moment from 'moment';

import { useStaticQuery, graphql, Link } from 'gatsby';

import formats from '../../constants/formats';

import {
  SerieWrapper,
  PostsWrapper,
  PostWrapper,
  PostTimestamp,
  PostTitle,
  PostDescription,
  PostContainer,
  PostHeroImage,
  PostHeroImageContainer,
} from './styled';

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

  const { edges: posts, distinct: availableSeries } = data.allMarkdownRemark;

  // group by available series
  const results = availableSeries.map(serie => ({
    serie,
    entries: posts.filter(
      ({ node: { frontmatter } }) => frontmatter.series === serie
    ),
  }));

  // group series by available seasons
  const seriesBySeasons = results
    .map(series => {
      const filteredSeasons = [
        ...new Set(
          series.entries
            .filter(({ node }) => node.frontmatter.season !== null)
            .map(({ node }) => node.frontmatter.seasonTitle)
        ),
      ];

      // group by season
      const seasons = filteredSeasons.map(season => ({
        title: season,
        entries: series.entries
          .filter(
            ({ node }) =>
              node.frontmatter.seasonTitle !== null &&
              node.frontmatter.seasonTitle === season
          )
          .map(({ node }) => ({ ...node })),
      }));

      return {
        serie: series.serie,
        seasons,
        latest:
          series.entries.length > 0
            ? series.entries[0].node.frontmatter.date
            : null,
      };
    })
    .sort((current, next) => {
      if (moment(current.latest).isAfter(next.latest)) {
        return -1;
      }
      if (moment(current.latest).isBefore(next.latest)) {
        return 1;
      }
      return 0;
    });

  return seriesBySeasons.map(({ serie, seasons }) => (
    <SerieWrapper key={serie}>
      <h2 id={serie} style={{ fontFamily: `'IBM Plex Mono', monospace` }}>
        #{serie}
      </h2>
      {seasons.map(({ title, entries }) => (
        <section style={{ paddingBottom: '1rem' }}>
          <h2>
            {serie} / {title}
          </h2>
          <PostsWrapper>
            {entries.map(
              ({
                id,
                frontmatter: { date, title, description, heroImage },
                fields: { slug },
              }) => (
                <Link to={slug} style={{ textDecoration: 'none' }} key={id}>
                  <PostContainer>
                    <PostHeroImageContainer>
                      <PostHeroImage src={heroImage} alt={title} async="on" />
                    </PostHeroImageContainer>
                    <PostWrapper>
                      <PostTimestamp>
                        {moment(date, formats.FRONT_MATTER_DATE).format(
                          formats.ARTICLE_TIMESTAMP
                        )}
                      </PostTimestamp>
                      <PostTitle>{title}</PostTitle>
                      <PostDescription>{description}</PostDescription>
                    </PostWrapper>
                  </PostContainer>
                </Link>
              )
            )}
          </PostsWrapper>
        </section>
      ))}
    </SerieWrapper>
  ));
}

export default ArticleList;
