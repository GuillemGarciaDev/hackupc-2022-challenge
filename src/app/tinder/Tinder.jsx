import React from 'react';
import Header from '../commons/Header';
import Title from './components/Title';
import Offer from './components/Offer';

const Tinder = () => {
  return (
    <div className='mx-6 my-7'>
      <Header />
      <Title />
      <Offer />
    </div>
  );
};

export default Tinder;
