import React from 'react';
import moment from 'moment';

import formats from '../../constants/formats';
import ArticleCard from '../ArticleCard';

import { SerieWrapper, PostsWrapper } from './styled';
import { mapSeriesBySeason, sortByLatest } from './helpers';

function ArticleList({ posts, availableSeries }) {
  // group by available series
  const seriesBySeasons = availableSeries
    .map(serie => ({
      serie,
      entries: posts.filter(
        ({ node: { frontmatter } }) => frontmatter.series === serie
      ),
    }))
    .map(mapSeriesBySeason)
    .sort(sortByLatest);

  return seriesBySeasons.map(({ serie, seasons }) => (
    <SerieWrapper key={serie}>
      {seasons.map(({ title, entries }) => (
        <section style={{ paddingBottom: '1rem' }} key={`season-${title}`}>
          <h2
            style={{
              textAlign: 'center',
              fontFamily: `${props => props.theme.fonts.monospace};`,
            }}
            id={serie}
          >
            {' '}
            #{serie} | {title}
          </h2>

          <PostsWrapper>
            {entries.map(
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
            )}
          </PostsWrapper>
        </section>
      ))}
    </SerieWrapper>
  ));
}

export default ArticleList;
