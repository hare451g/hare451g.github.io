import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

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
    <div>
      <Link to="/about">
        <div>
          <img src={authorThumbnail.publicURL} alt={siteMetadata.author} />
        </div>
      </Link>
      <div>
        <Link to="/about">
          <span>{siteMetadata.author}</span>
        </Link>
        <span>{siteMetadata.authorShortIntro}</span>
      </div>
    </div>
  );
}

export default IdentityCard;
