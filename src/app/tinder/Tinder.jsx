import React from 'react';
import Header from '../commons/Header';
import Title from './components/Title';
import Offer from './components/Offer';
import Footer from '../home/components/Footer';
import { useSelector } from 'react-redux';

const Tinder = () => {
  const offers = useSelector(({ app }) => app.offers);

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
