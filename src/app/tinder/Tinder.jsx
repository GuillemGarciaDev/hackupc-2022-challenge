import React from 'react';
import Header from '../commons/Header';
import Title from './components/Title';
import Offer from './components/Offer';
import Footer from '../home/components/Footer';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

const Tinder = () => {
  const offers = useSelector(({ app }) => app.offers);

  return (
    <div className='mx-6 my-7'>
      <Title />
      <Offer offers={offers} />
      
      <Footer />
    </div>
  );
};

export default Tinder;
