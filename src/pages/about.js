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
            description
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
      <SEO
        title={`About ${siteMetadata.author}`}
        description={`Hendra Sadewa, Software engineer, javascript enthusiast | ${siteMetadata.description}`}
      />
      <article style={{ marginTop: '2rem' }}>
        <h3>
          Hello there{' '}
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </h3>
        <p>
          I'm a software engineer specialized in JavaScript (ES6/Node.Js) and
          React. I have great passion in functional programming, and data
          visualization. Currently working fulltime as Front-end Developer at{' '}
          <a href="https://hara.ag/">Hara</a>, but I do some freelance jobs and
          tech talk too.
        </p>
        <section>
          <h3>
            Profressional Skills{' '}
            <span role="img" aria-label="computer">
              💻
            </span>
          </h3>
          <ul>
            <li>JavaScript, ES6+ & vanilla.</li>
            <li>TypeScript.</li>
            <li>ReactJs, I do Redux (+Saga), GraphQL, and hooks.</li>
            <li>Node.js, I can build REST API with Express.</li>
            <li>I can do visualization with D3.js.</li>
            <li>
              Functional Programming (HoF, composition, Immutability, Monad,
              Currying, etc).
            </li>
            <li>I know OOP too!</li>
            <li>
              Docker and Dockerizing Projects{' '}
              <span role="img" aria-label="whale">
                🐋
              </span>
              .
            </li>
            <li>
              I'm everyday Linux User{' '}
              <span role="img" aria-label="penguin">
                🐧
              </span>
              .
            </li>
            <li>Web Devlopment, I do SPA, SSR, and PWA.</li>
            <li>Git</li>
          </ul>
          <p>
            You can see details of my professional career journey on my{' '}
            <a href="https://www.linkedin.com/in/hendra-sadewa/">
              {' '}
              LinkedIn page
            </a>
            . Don't hestitate to DM me if you have a question or job offers. and
            for business inquiries, kindly email me with this{' '}
            <a href={mailToLink}>link</a>.
          </p>
        </section>
      </article>
      <Link to={'/'}>take me back to home</Link>
    </HomeLayout>
  );
}

export default IndexPage;
