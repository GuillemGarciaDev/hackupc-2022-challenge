import React from 'react';
import { MdPlace } from 'react-icons/md';

const Item = ({ currentOffer }) => {
  const handleOpenLink = () => {
    window.open(currentOffer.link, '_blank');
  };

  return (
    <div className='w-100 rounded-lg bg-gradient-to-br from-[#DBE2EF] to-white border-blue-200 border-solid border-2 my-4 h-auto'>
      <div
        className='flex flex-row justify-between items-center my-3 mx-5'
        onClick={() => handleOpenLink(currentOffer.link)}
      >
        <div className='h-12 w-12'>
          <img
            className='w-full h-full rounded-lg'
            src={currentOffer.author.logoUrl}
            alt=''
          />
        </div>
        <div className='flex flex-col'>
          <p className='font-semibold leading-tight text-base w-44'>
            {currentOffer.title}
          </p>
          <div className='flex flex-row mt-2'>
            <MdPlace className='text-[#767676]' />{' '}
            <span className='text-sm text-[#767676] font-light'>
              {currentOffer.city}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
