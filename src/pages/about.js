import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import SEO from '../containers/SEO';
import HomeLayout from '../layouts/HomeLayout';

function IndexPage() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            email
            author
          }
        }
      }
    `
  );

  const email = siteMetadata.email;
  const subject = 'Business Inquiry';
  const body = `Hello ${siteMetadata.author}, I would like to talk about ...`;

  const mailToLink = `mailTo:${email}?subject=${subject}&body=${body}`;

  return (
    <HomeLayout>
      <SEO title={'About'} />
      <article style={{ marginTop: '2rem' }}>
        <p>Hello there</p>
        <p>
          I'm a software engineer specialized in JavaScript (ES6/Node.Js) and
          React. I have great passion in functional programming, and data
          visualization. Currently working fulltime as Front-end Developer at{' '}
          <a href="https://hara.ag/">Hara</a>, but I do some freelance jobs and
          tech talk too.
        </p>

        <p>
          For business inquiries, you can mail me with this{' '}
          <a href={mailToLink}>link</a>.
        </p>
      </article>
      <Link to={'/'}>take me back to home</Link>
    </HomeLayout>
  );
}

export default IndexPage;
