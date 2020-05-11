import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/SEO';
import HomeLayout from '../layouts/HomeLayout';
import workExperiences from '../constants/workExperiences';
import WorkExperienceItem from '../components/WorkExperienceItem';
import useSiteMetadata from '../hooks/useSiteMetadata';
import { Text, Heading, Box } from 'rebass';

function IndexPage() {
  const siteMetadata = useSiteMetadata();

  const workingExperienceList = workExperiences.map(exp => (
    <WorkExperienceItem {...exp} />
  ));

  return (
    <HomeLayout>
      <SEO
        title={`About ${siteMetadata.author}`}
        description={`Hendra Sadewa, Software engineer, javascript enthusiast | ${siteMetadata.description}`}
      />

      <Box width="inherit" pt={4} mb={4}>
        <Heading mb={3} pb={2} sx={{ borderBottom: '1px solid #333' }}>
          Working Experience
        </Heading>
        {workingExperienceList}
      </Box>

      <Link to={'/'}>take me back to home</Link>
    </HomeLayout>
  );
}

export default IndexPage;
