import React from 'react';
import moment from 'moment';

import { useStaticQuery, graphql, Link } from 'gatsby';

import formats from '../../constants/formats';

import {
  PostWrapper,
  PostTimestamp,
  PostTitle,
  PostDescription,
} from './styled';

function ArticleList() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
          edges {
            node {
              id
              excerpt
              frontmatter {
                date
                description
                title
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

  const posts = data.allMarkdownRemark.edges;

  return posts.map(({ node }) => {
    const {
      id,
      frontmatter: { date, title, description },
      fields: { slug },
    } = node;

    return (
      <Link key={id} to={slug} style={{ textDecoration: 'none' }}>
        <PostWrapper>
          <PostTimestamp>
            {moment(date, formats.FRONT_MATTER_DATE).format(
              formats.ARTICLE_TIMESTAMP
            )}
          </PostTimestamp>
          <PostTitle>{title}</PostTitle>
          <PostDescription>{description}</PostDescription>
        </PostWrapper>
      </Link>
    );
  });
}

export default ArticleList;
