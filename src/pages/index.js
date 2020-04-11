import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import SEO from '../components/SEO';
import HomeLayout from '../layouts/HomeLayout';
import ArticleCard from '../components/ArticleCard';

function IndexPage(props) {
  const {
    site: {
      siteMetadata: { description, longDescription },
    },
    allMarkdownRemark: { edges: entries },
    siteLogo,
  } = useStaticQuery(
    graphql`
      query {
        siteLogo: file(relativePath: { eq: "hareblog-icon.svg" }) {
          publicURL
        }
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
              }
            }
          }
        }
        site {
          siteMetadata {
            title
            description
            longDescription
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

  return (
    <HomeLayout>
      <SEO
        title="Home"
        description={`${description} | ${longDescription}`}
        image={siteLogo.publicURL}
      />
      <section>
        <h3>Hello there</h3>
        <p>
          I'm a software engineer specialized in JavaScript (ES6/Node.Js) and
          React. I have great passion in functional programming, and web
          development. Currently working fulltime as Front-end Developer at{' '}
          <a href="https://hara.ag/">Hara</a>, but I do some freelance jobs and
          tech talk too.
        </p>
      </section>
      <section>
        <h2>Artikel Terbaru</h2>
        {recentArticles.map(article => (
          <ArticleCard {...article} />
        ))}
        <Link to="/blog">
          <span role="img" aria-label="pointing to see more ">
            👉
          </span>{' '}
          Click here to see more.
        </Link>
      </section>
    </HomeLayout>
  );
}

export default IndexPage;
