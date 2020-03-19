import React from 'react';
import { graphql } from 'gatsby';

import AppLayout from '../layouts/AppLayout';
import SEO from '../containers/SEO';

export default ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { title, description, date } = post.frontmatter;
  return (
    <AppLayout>
      <SEO
        title={title}
        description={description}
        pathname={pageContext.slug}
      />
      <div>
        <h1>{title}</h1>
        <div>{description}</div>
        <div>
          <span>Published: {date}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </AppLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`;
