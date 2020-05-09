import React from 'react';

import ArticleList from './ArticleList';

function ArticlesBySeasons({ seriesBySeasons = [] }) {
  return seriesBySeasons.map(({ serie, seasons }) => (
    <div key={serie}>
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

          <ArticleList entries={entries} />
        </section>
      ))}
    </div>
  ));
}

export default ArticlesBySeasons;
