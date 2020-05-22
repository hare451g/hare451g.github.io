import React from 'react';
import { Text, Heading, Box } from 'rebass';
// components
import SEO from '../components/SEO';
import WorkExperienceItem from '../components/WorkExperienceItem';
// layouts
import HomeLayout from '../layouts/HomeLayout';
// hooks
import useSiteMetadata from '../hooks/useSiteMetadata';
// constants
import workExperiences from '../constants/workExperiences';
import professionalSkills from '../constants/professionalSkills';
import expertise from '../constants/expertise';

function IndexPage() {
  const siteMetadata = useSiteMetadata();

  const workingExperienceList = workExperiences.map(exp => (
    <WorkExperienceItem {...exp} />
  ));

  const professionalSkillList = professionalSkills.map(skill => (
    <Text fontSize={2} fontFamily="body" py={2} lineHeight={1.5}>
      {skill}
    </Text>
  ));

  const expertises = expertise.map(({ heading, descriptions }) => (
    <Box>
      <Text fontSize={2} fontFamily="heading" fontWeight="bold" py={1}>
        {heading}
      </Text>
      <Text fontSize={2} fontFamily="body" py={2} lineHeight={1.5}>
        {descriptions}
      </Text>
    </Box>
  ));

  return (
    <HomeLayout>
      <SEO
        title={`About ${siteMetadata.author}`}
        description={`Hendra Sadewa, Software engineer, javascript enthusiast | ${siteMetadata.description}`}
      />
      <>
        <Box width="inherit" mb={4}>
          <Heading mb={3} pb={2} sx={{ borderBottom: '1px solid #333' }}>
            Introduction
          </Heading>
          <Text fontFamily="body" fontSize={2} lineHeight={1.5} mb={3}>
            My name is Hendra, Nice to meet You! I'm a Software engineer
            specialized in JavaScript (ES6/Node.Js) and React. I have great
            passion in functional programming, and web development. Currently
            working fulltime as Front-end Developer at Hara, but I do some
            freelance jobs and writing about tech too.
          </Text>
          <Text fontFamily="body" fontSize={2} lineHeight={1.5} mb={3}>
            I have 3+ years (and counting!) of expertise in web development,
            mainly using React JS and modern javascript to deliver
            business-driven web or web-applications with solid, tested, and
            scalable architecture design. I get used to coding with clean,
            error-safe, and testable code, with a Functional Programming
            paradigm.
          </Text>
          <Text fontFamily="body" fontSize={2} lineHeight={1.5} mb={3}>
            Also, I'm a minimalist.
          </Text>
        </Box>

        <Box width="inherit" pt={4} mb={4}>
          <Heading mb={3} pb={2} sx={{ borderBottom: '1px solid #333' }}>
            Expertise
          </Heading>
          {expertises}
        </Box>

        <Box width="inherit" pt={4} mb={4}>
          <Heading mb={3} pb={2} sx={{ borderBottom: '1px solid #333' }}>
            Working Experience
          </Heading>
          {workingExperienceList}
        </Box>

        <Box width="inherit" pt={4} mb={4}>
          <Heading mb={3} pb={2} sx={{ borderBottom: '1px solid #333' }}>
            Professional Skills
          </Heading>
          {professionalSkillList}
        </Box>
      </>
    </HomeLayout>
  );
}

export default IndexPage;
