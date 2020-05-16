import moment from 'moment';

function createFilteredSeasonsSet(series) {
  return [
    ...new Set(
      series.entries
        // filter only articles with season
        .filter(({ node }) => node.frontmatter.season !== null)
        // sort by season id
        .sort((current, next) =>
          current.node.frontmatter < next.node.frontmatter ? 1 : -1
        )
        // transform to return season title only
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
      // filter season not null and having same season
      .filter(
        ({ node }) =>
          node.frontmatter.seasonTitle !== null &&
          node.frontmatter.seasonTitle === season
      )
      // transform to articles to get id, slug and frontmatter
      .map(({ node: { id, frontmatter, fields: { slug } } }) => ({
        id,
        slug,
        ...frontmatter,
      }))
      // sort the entries by episodes
      .sort((current, next) => (current.episode > next.episode ? 1 : -1)),
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
