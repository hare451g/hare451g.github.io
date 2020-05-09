import React from 'react';

import SEO from '../components/SEO';
import HomeLayout from '../layouts/HomeLayout';
import RecentArticles from '../containers/RecentArticles';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteLogo from '../hooks/useSiteLogo';

function IndexPage(props) {
  const { description, longDescription } = useSiteMetadata();
  const siteLogo = useSiteLogo();

  return (
    <HomeLayout>
      <SEO
        title="Home"
        description={`${description} | ${longDescription}`}
        image={siteLogo.publicURL}
      />
      <section>
        <h3>Hello there</h3>
        <p>
          I'm a software engineer specialized in JavaScript (ES6/Node.Js) and
          React. I have great passion in functional programming, and web
          development. Currently working fulltime as Front-end Developer at{' '}
          <a href="https://hara.ag/">Hara</a>, but I do some freelance jobs and
          tech talk too.
        </p>
      </section>
      <section>
        <RecentArticles />
      </section>
    </HomeLayout>
  );
}

export default IndexPage;
