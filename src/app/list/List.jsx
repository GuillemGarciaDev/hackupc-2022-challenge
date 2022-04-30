import React from 'react';
import Header from '../home/components/Header'
import Data from './response.json'
import Item from './components/Item'

import { useSelector } from 'react-redux';

const List = () => {

  
  const offers = useSelector(({ app }) => app.offers);

  return (
    <div className='flex flex-col mx-6 my-7'>
      <Header/>
      <p className='font-bold text-3xl text-center w-full my-10'>Here you can find all your <span className="text-[#167DB7]">offers</span></p>
      <div className='flex flex-col justify-center w-full h-auto'>
      {offers.map((currentOffer) => <Item currentOffer={currentOffer}/>)}
      </div>
    </div>
  );
};

export default List;
