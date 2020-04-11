import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '../components/SEO';
import ArticleList from '../components/ArticleList';

import HomeLayout from '../layouts/HomeLayout';

function BlogPage() {
  const data = useStaticQuery(
    graphql`
      query {
        siteLogo: file(relativePath: { eq: "hareblog-icon.svg" }) {
          publicURL
        }
        site {
          siteMetadata {
            title
            description
            longDescription
          }
        }
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
    site: {
      siteMetadata: { description, longDescription },
    },
    siteLogo,
    allMarkdownRemark: { edges: posts, distinct: availableSeries },
  } = data;

  return (
    <HomeLayout>
      <SEO
        title="Developer Blog"
        description={`${description} | ${longDescription}`}
        image={siteLogo.publicURL}
      />
      <h1>Blog Posts</h1>
      <ArticleList posts={posts} availableSeries={availableSeries} />
    </HomeLayout>
  );
}

export default BlogPage;
