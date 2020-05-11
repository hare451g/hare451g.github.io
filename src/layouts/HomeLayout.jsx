import React from 'react';
import AppLayout from './AppLayout';
import NavigationBar from '../components/NavigationBar';

function HomeLayout({ children }) {
  return (
    <AppLayout>
      <header>
        <NavigationBar />
      </header>
      <main>{children}</main>
    </AppLayout>
  );
}

export default HomeLayout;
