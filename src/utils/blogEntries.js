import moment from 'moment';

function createFilteredSeasonsSet(series) {
  return [
    ...new Set(
      series.entries
        .filter(({ node }) => node.frontmatter.season !== null)
        .map(({ node }) => node.frontmatter.seasonTitle)
    ),
  ];
}

function mapSeriesBySeason(series) {
  const filteredSeasons = createFilteredSeasonsSet(series);

  // group by season
  const seasons = filteredSeasons.map(season => ({
    title: season,
    entries: series.entries
      .filter(
        ({ node }) =>
          node.frontmatter.seasonTitle !== null &&
          node.frontmatter.seasonTitle === season
      )
      .map(
        ({
          node: {
            id,
            frontmatter: { date, title, description, heroImage },
            fields: { slug },
          },
        }) => ({ id, date, title, description, heroImage, slug })
      ),
  }));

  return {
    serie: series.serie,
    seasons,
    latest:
      series.entries.length > 0
        ? series.entries[0].node.frontmatter.date
        : null,
  };
}

function sortByLatest(current, next) {
  if (moment(current.latest).isAfter(next.latest)) {
    return -1;
  }
  if (moment(current.latest).isBefore(next.latest)) {
    return 1;
  }
  return 0;
}

export { mapSeriesBySeason, sortByLatest };
