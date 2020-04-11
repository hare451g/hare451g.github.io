import React from 'react';

import Header from '../../components/Header';
import IdentityCard from '../../components/IdentityCard';
import Footer from '../../components/Footer';

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
