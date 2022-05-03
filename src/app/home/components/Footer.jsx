import React from 'react';

const Footer = () => {
  return (
    <div className='container mx-auto my-8'>
      © Made by{' '}
      <a
        className='font-bold text-purple-500 underline underline-offset-2'
        href='https://github.com/obnol'
        target='_blank'
        rel='noreferrer'
      >
        Longbo
      </a>{' '}
      and{' '}
      <a
        className='font-bold text-purple-500 underline underline-offset-2'
        href='https://github.com/GuillemGarciaDev'
        target='_blank'
        rel='noreferrer'
      >
        Guillem
      </a>
    </div>
  );
};

export default Footer;
