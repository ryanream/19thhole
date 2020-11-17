import React, { useState } from 'react';
import Banner from '../layout/Banner';
import Nav from '../layout/Nav';
import Menu from '../layout/Menu';
import Body from '../layout/Body';
import Footer from '../layout/Footer';

const Home = () => {
  return (
    <div className='parent'>
      <Banner />
      <div className='content'>
        <Nav />
        <Menu />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
