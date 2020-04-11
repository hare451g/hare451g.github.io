import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import {
  IdentityCardWrapper,
  AuthorThumbnailWrapper,
  AuthorDescriptionWrapper,
  AuthorName,
  AuthorIntro,
} from './styled';

function IdentityCard() {
  const {
    site: { siteMetadata },
    authorThumbnail,
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            authorShortIntro
          }
        }
        authorThumbnail: file(relativePath: { eq: "author-thumbnail.png" }) {
          publicURL
        }
      }
    `
  );
  return (
    <IdentityCardWrapper>
      <Link to="/about">
        <AuthorThumbnailWrapper>
          <img src={authorThumbnail.publicURL} alt={siteMetadata.author} />
        </AuthorThumbnailWrapper>
      </Link>
      <AuthorDescriptionWrapper>
        <Link to="/about">
          <AuthorName>{siteMetadata.author}</AuthorName>
        </Link>
        <AuthorIntro>{siteMetadata.authorShortIntro}</AuthorIntro>
      </AuthorDescriptionWrapper>
    </IdentityCardWrapper>
  );
}

export default IdentityCard;
