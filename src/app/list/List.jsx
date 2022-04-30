import React from 'react';
import logo from '../../assets/infojobs-logo.png';

const List = () => {
  return (
    <div className='flex mx-6 my-7'>
      <div className='flex flex-row justify-between items-center w-full'>
        <img src={logo} alt='' />
        <p className='text-base font-medium'>JobsFast</p>
      </div>
    </div>
  );
};

export default List;
