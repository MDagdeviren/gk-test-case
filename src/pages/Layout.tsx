import React from 'react';
import { Outlet } from 'react-router-dom';

// ** Components
import ScrollToTop from 'src/components/ScrollToTop';
import Footer from 'src/pages/Footer';
import Navbar from 'src/pages/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className='pt-28'>
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Layout;
