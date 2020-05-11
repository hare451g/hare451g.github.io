import React from 'react';
import { Flex } from 'rebass';
import AppLayout from './AppLayout';
import NavigationBar from '../components/NavigationBar';

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
          alignItems="center"
          justifyContent="center"
          m="auto"
          flexDirection="column"
        >
          {children}
        </Flex>
      </main>
    </AppLayout>
  );
}

export default HomeLayout;
