import React from 'react';
import { Link } from 'gatsby';

function ArticleCard({ id, slug, heroImage, title, date, description }) {
  return (
    <Link to={slug} style={{ textDecoration: 'none' }} key={id}>
      <div>
        <div>
          <img src={heroImage} alt={title} async="on" />
        </div>
        <div>
          <span>{date}</span>
          <span>{title}</span>
          <span>{description}</span>
        </div>
      </div>
    </Link>
  );
}

export default ArticleCard;
