import React from 'react';

// components
import SEO from '../components/SEO';
import NavigationBar from '../components/NavigationBar';

// containers
import RecentArticles from '../containers/RecentArticles';

// layouts
import AppLayout from '../layouts/AppLayout';

// hooks
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteLogo from '../hooks/useSiteLogo';

function IndexPage(props) {
  const { description, longDescription } = useSiteMetadata();
  const siteLogo = useSiteLogo();

  return (
    <AppLayout>
      <SEO
        title="Home"
        description={`${description} | ${longDescription}`}
        image={siteLogo.publicURL}
      />
      <header>
        <NavigationBar />
      </header>
      <main>
        <RecentArticles />
      </main>
    </AppLayout>
  );
}

export default IndexPage;
