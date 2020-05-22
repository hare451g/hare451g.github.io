import React from 'react';
import { Flex } from 'rebass';
import AppLayout from './AppLayout';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

function HomeLayout({ children }) {
  return (
    <AppLayout>
      <header>
        <NavigationBar />
      </header>
      <main>
        <Flex
          width={['100%', '100%', 720]}
          maxWidth={['100%', 600, 720]}
          m="auto"
          mt={5}
          flexDirection="column"
          px={[3, 2, 3]}
          pt={[2, 2, 4]}
        >
          {children}
        </Flex>
      </main>
      <Footer />
    </AppLayout>
  );
}

export default HomeLayout;
