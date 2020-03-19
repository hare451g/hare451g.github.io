import React from 'react';

import Header from '../../containers/Header';
import IdentityCard from '../../containers/IdentityCard';
import Footer from '../../containers/Footer';

import AppLayout from '../AppLayout';

function HomeLayout({ children }) {
  return (
    <AppLayout>
      <header>
        <Header />
        <IdentityCard />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </AppLayout>
  );
}

export default HomeLayout;
