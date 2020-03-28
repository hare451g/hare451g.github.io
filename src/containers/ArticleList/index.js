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

  return results.map(({ serie, entries }) => (
    <SerieWrapper key={serie}>
      <h2
        id={serie}
        style={{
          fontFamily: `'IBM Plex Mono', monospace`,
        }}
      >
        #{serie}
      </h2>
      <PostsWrapper>
        {entries.map(({ node }) => {
          const {
            id,
            frontmatter: { date, title, description, heroImage },
            fields: { slug },
          } = node;

          return (
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
          );
        })}
      </PostsWrapper>
    </SerieWrapper>
  ));
}

export default ArticleList;
