import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import SEO from '../components/SEO';
import HomeLayout from '../layouts/HomeLayout';
import workExperiences from '../constants/workExperiences';
import WorkExperienceItem from '../components/WorkExperienceItem';

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
      <section>
        <h2>Working Experiences</h2>
        {workExperiences.map(exp => (
          <WorkExperienceItem {...exp} />
        ))}
      </section>
      <section>
        <h2>Devlopment Stack</h2>
        <ul>
          <li>JavaScript (ES6+ & vanilla)</li>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>ReactJs</li>
          <li>Styled-Components</li>
          <li>Gatsby</li>
          <li>Redux</li>
          <li>Redux-Saga</li>
          <li>GraphQL</li>
          <li>Express</li>
          <li>Docker</li>
        </ul>
      </section>
      <section>
        <h2>Interest</h2>
        <ul>
          <li>Functional Programming</li>
          <li>Microservices</li>
          <li>Offline Web</li>
          <li>PWA</li>
          <li>Web Performance</li>
          <li>Responsive Web</li>
          <li>Data Visualization</li>
        </ul>
      </section>
      <section>
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

      <Link to={'/'}>take me back to home</Link>
    </HomeLayout>
  );
}

export default IndexPage;
