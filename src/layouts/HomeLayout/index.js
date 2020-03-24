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
      </header>
      <main>{children}</main>
      <footer>
        <IdentityCard />
        <hr />
        <Footer />
      </footer>
    </AppLayout>
  );
}

export default HomeLayout;
