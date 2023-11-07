import React from 'react';
import Logo from './Logo';

function Footer() {
  return (
    <div className='w-100 max-w-screen-2xl bg-black h-fit md:py-10 md:px-20 py-5 px-5'>
      <div>
        <Logo />
      </div>
    </div>
  );
}

export default Footer;
