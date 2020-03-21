import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import SEO from '../containers/SEO';

import HomeLayout from '../layouts/HomeLayout';

function NotFoundPage() {
  const { notFoundImage } = useStaticQuery(
    graphql`
      query {
        notFoundImage: file(relativePath: { eq: "undraw_void_3ggu.svg" }) {
          publicURL
        }
      }
    `
  );
  return (
    <HomeLayout>
      <SEO title="404 Page Not Found" />

      <img
        width="100%"
        height="320"
        src={notFoundImage.publicURL}
        alt="Not Found"
        style={{ marginTop: '2rem' }}
      />

      <p style={{ textAlign: 'center' }}>
        Page that you requested is doesn't exists . . . (yet ?)
      </p>
      <p style={{ textAlign: 'center' }}>
        <Link to="/">click here, I'll take you to home.</Link>
      </p>
    </HomeLayout>
  );
}

export default NotFoundPage;
