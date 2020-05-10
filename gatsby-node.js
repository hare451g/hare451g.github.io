const path = require(`path`);
const moment = require('moment');
const { createFilePath } = require(`gatsby-source-filesystem`);

// Create link / slugs
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });

    const now = moment();
    const isFuture = moment(node.frontmatter.date).isAfter(now);

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });

    createNodeField({
      node,
      name: `isFuture`,
      value: isFuture,
    });
  }
};

// generating pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`./src/layouts/ArticleLayout.jsx`);
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              isFuture
              slug
            }
          }
        }
      }
    }
  `);
  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
