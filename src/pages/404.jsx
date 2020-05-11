import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Text, Image, Heading } from 'rebass';

import NavLink from '../components/NavLink';
import SEO from '../components/SEO';

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

      <Heading fontSize={[2, 2, 6]} my={4}>
        404! Not Found.
      </Heading>

      <Image
        height={[200, 320, 320]}
        src={notFoundImage.publicURL}
        alt="Not Found"
        my={4}
      />

      <Text textAlign="center" fontFamily="body" mt={4} mb={2} fontSize={4}>
        Page that you requested is doesn't exists . . . (yet ?)
      </Text>
      <Text textAlign="center" fontFamily="Heading">
        <NavLink to="/">click here, I'll take you to home.</NavLink>
      </Text>
    </HomeLayout>
  );
}

export default NotFoundPage;
