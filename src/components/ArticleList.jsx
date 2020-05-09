import React from 'react';
import moment from 'moment';

import formats from '../constants/formats';
import ArticleCard from './ArticleCard';

function ArticleList({ entries = [] }) {
  return entries.map(
    ({
      id,
      frontmatter: { date, title, description, heroImage },
      fields: { slug },
    }) => (
      <ArticleCard
        id={id}
        slug={slug}
        heroImage={heroImage}
        title={title}
        date={moment(date, formats.FRONT_MATTER_DATE).format(
          formats.ARTICLE_TIMESTAMP
        )}
        description={description}
      />
    )
  );
}

export default ArticleList;
