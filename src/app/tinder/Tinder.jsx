import React from 'react';
import Offer from './components/Offer';
import Footer from '../home/components/Footer';
import { useSelector } from 'react-redux';


const Tinder = () => {
  const offers = useSelector(({ app }) => app.offers);

  return (
    <div className='mx-6 my-7'>
      
      <Offer offers={offers} />
      
      <Footer />
    </div>
  );
};

export default Tinder;
