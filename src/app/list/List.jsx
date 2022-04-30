import React from 'react';
import Header from '../home/components/Header'
import Data from './response.json'
import Item from './components/Item'

const List = () => {

  const dummy = Data.offers.slice(0, 20)

  return (
    <div className='flex flex-col mx-6 my-7'>
      <Header/>
      <div className='flex flex-col justify-center w-full h-auto'>
      {dummy.map((currentOffer) => <Item currentOffer={currentOffer}/>)}
      </div>
    </div>
  );
};

export default List;
