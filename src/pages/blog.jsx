import React from 'react';

// components
import SEO from '../components/SEO';

// layout
import HomeLayout from '../layouts/HomeLayout';

// hooks
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteLogo from '../hooks/useSiteLogo';
import BlogEntries from '../containers/BlogEntries';

function BlogPage() {
  const { description, longDescription } = useSiteMetadata();
  const siteLogo = useSiteLogo();

  return (
    <HomeLayout>
      <SEO
        title="Developer Blog"
        description={`${description} | ${longDescription}`}
        image={siteLogo.publicURL}
      />
      <BlogEntries />
    </HomeLayout>
  );
}

export default BlogPage;
