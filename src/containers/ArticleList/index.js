import React from 'react';
import moment from 'moment';

import { useStaticQuery, graphql, Link } from 'gatsby';

import { PostWrapper, PostTimestamp, PostTitle } from './styled';
import formats from '../../constants/formats';

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
      frontmatter: { date, title },
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
        </PostWrapper>
      </Link>
    );
  });
}

export default ArticleList;
