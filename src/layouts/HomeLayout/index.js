import React from 'react';
import AppLayout from '../AppLayout';

function HomeLayout({ children }) {
  return (
    <AppLayout>
      <header></header>
      <main>{children}</main>
      <footer>
        <hr />
      </footer>
    </AppLayout>
  );
}

export default HomeLayout;
