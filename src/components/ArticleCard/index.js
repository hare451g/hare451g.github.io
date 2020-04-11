import React from 'react';
import { Link } from 'gatsby';
import {
  PostContainer,
  PostHeroImageContainer,
  PostHeroImage,
  PostWrapper,
  PostTimestamp,
  PostTitle,
  PostDescription,
} from './styled';

function ArticleCard({ id, slug, heroImage, title, date, description }) {
  return (
    <Link to={slug} style={{ textDecoration: 'none' }} key={id}>
      <PostContainer>
        <PostHeroImageContainer>
          <PostHeroImage src={heroImage} alt={title} async="on" />
        </PostHeroImageContainer>
        <PostWrapper>
          <PostTimestamp>{date}</PostTimestamp>
          <PostTitle>{title}</PostTitle>
          <PostDescription>{description}</PostDescription>
        </PostWrapper>
      </PostContainer>
    </Link>
  );
}

export default ArticleCard;
