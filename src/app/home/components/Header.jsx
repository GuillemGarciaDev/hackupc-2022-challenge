import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center w-full'>
      <Link to='/' className='w-1/3'>
        <img className='w-full' src='/title-logo.png' alt='' />
      </Link>
      <p className='text-lg font-semibold'>InstantJobs</p>
    </div>
  );
};

export default Header;
