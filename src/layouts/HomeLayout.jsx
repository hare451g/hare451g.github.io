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
      <footer>
        <hr />
      </footer>
    </AppLayout>
  );
}

export default HomeLayout;
