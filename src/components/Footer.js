import React from 'react';
import Logo from './Logo';

function Footer() {
  return (
    <div className='w-100 bg-black '>
      <div className='h-fit max-w-screen-2xl md:py-7 md:px-20 py-3 px-2 mx-auto'>
        <Logo />
      </div>
    </div>
  );
}

export default Footer;
