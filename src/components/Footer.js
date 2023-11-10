import React from 'react';
import Logo from './Logo';

function Footer() {
  return (
    <div className='bg-gray-100 border-t-2 flex items-center justify-center '>
      <div className='text-center md:py-7 py-3'>
        @{new Date().getFullYear()} Edufy
      </div>
    </div>
  );
}

export default Footer;
