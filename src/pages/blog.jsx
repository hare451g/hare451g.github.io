import React from 'react';

// components
import SEO from '../components/SEO';
import ArticlesBySeasons from '../components/ArticlesBySeasons';

// layout
import HomeLayout from '../layouts/HomeLayout';

// hooks
import useSiteMetadata from '../hooks/useSiteMetadata';
import useLocalImage from '../hooks/useLocalImage';
import useAllBlogEntriesQuery from '../hooks/useAllBlogEntriesQuery';

function BlogPage() {
  const { description, longDescription } = useSiteMetadata();
  const { siteLogo } = useLocalImage();
  const { groupBySeason } = useAllBlogEntriesQuery();
  const seriesBySeasons = groupBySeason();

  return (
    <HomeLayout>
      <SEO
        title="Developer Blog"
        description={`${description} | ${longDescription}`}
        image={siteLogo.publicURL}
      />
      <ArticlesBySeasons seriesBySeasons={seriesBySeasons} />
    </HomeLayout>
  );
}

export default BlogPage;
