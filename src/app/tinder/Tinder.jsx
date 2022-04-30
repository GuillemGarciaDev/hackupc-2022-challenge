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
      <Header />
      <Title />
      <Offer offers={offers} />
      <div className='my-10 flex flex-row justify-center'>
        <Link to='/list'><p className='text-[#767676]'>See all</p></Link>
      </div>
      <Footer />
    </div>
  );
};

export default Tinder;
