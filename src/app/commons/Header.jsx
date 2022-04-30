import React from 'react';
import logo from '../../assets/infojobs-logo.png';

const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center w-full'>
      <img src={logo} alt='' />
      <p className='text-base font-medium'>JobsFast</p>
    </div>
  );
};

export default Header;
