import React from 'react';
import Header from '../commons/Header';
import Title from './components/Title';
import Offer from './components/Offer';
import Footer from '../home/components/Footer';
const Tinder = () => {
  return (
    <div className='mx-6 my-7'>
      <Header />
      <Title />
      <Offer />
      <Footer />
    </div>
  );
};

export default Tinder;
