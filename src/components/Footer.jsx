import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Flex, Link, Heading, Box, Text } from 'rebass';
import moment from 'moment';
import {
  GrGatsbyjs,
  GrLinkedin,
  GrInstagram,
  GrTwitter,
  GrReactjs,
  GrGithub,
} from 'react-icons/gr';

function Footer() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            twitterURL
            instagramURL
            linkedInURL
            githubURL
          }
        }
      }
    `
  );
  return (
    <Flex variant="footer" flexDirection="column" mt={4}>
      <Flex
        flexDirection="row"
        color="text"
        justifyContent="space-between"
        width={['100%', '100%', 720]}
        m="auto"
        my={3}
      >
        <Flex flexDirection="column" width={['100%', '60%']}>
          <Box pb={2}>
            <Heading fontSize={2}>Hendra 'hare' Sadewa </Heading>
            <Text fontFamily="body">
              Tech enthusiast, likes ThinkPads and weird music.
            </Text>
          </Box>
          <Box py={2}>
            <Heading fontSize={2} pb={2}>
              This site powered by:
            </Heading>
            <GrGatsbyjs size={32} /> <GrReactjs size={32} />{' '}
            <GrGithub size={32} />
          </Box>
        </Flex>
        <Flex flexDirection="column" width={['100%', '40%']}>
          <Heading fontSize={2}>Connect with Me</Heading>
          <Box py={2}>
            <GrTwitter />{' '}
            <Link href={site.siteMetadata.twitterURL}>twitter</Link>
          </Box>
          <Box py={2}>
            <GrInstagram />{' '}
            <Link href={site.siteMetadata.instagramURL}>instagram</Link>
          </Box>

          <Box py={2}>
            <GrLinkedin />{' '}
            <Link href={site.siteMetadata.linkedInURL}>linkedIn</Link>
          </Box>

          <Box py={2}>
            <GrGithub /> <Link href={site.siteMetadata.githubURL}>github</Link>
          </Box>
        </Flex>
      </Flex>
      <Flex
        flexDirection="row"
        color="text"
        alignItems="center"
        justifyContent="space-between"
        width={['100%', '100%', 720]}
        m="auto"
        my={4}
      >
        <Text fontFamily="body">
          &copy; {moment().year()} Hendra 'hare' Sadewa
        </Text>
      </Flex>
    </Flex>
  );
}

export default Footer;
