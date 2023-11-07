import React, { useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import Logo from '../Logo';
import NavLinks from './NavLinks';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='bg-[var(--primary-bg)]'>
      <nav className='max-w-screen-2xl md:py-10 md:px-20 py-5 px-5 mx-auto text-[var(--primary-text)] flex items-baseline justify-between relative z-50'>
        <Logo />
        <div className='flex items-center justify-between w-fit'>
          <div className='hidden md:block'>
            <div className='flex items-center justify-between w-fit'>
              <NavLinks isMobile={false} />
            </div>
          </div>
          <div>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='bg-transparent inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[var(--primary-text)] focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='block h-7 w-7'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='white'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                ) : (
                  <Fade>
                    <svg
                      className='block h-7 w-7'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='white'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </Fade>
                )}
              </button>
            </div>
            <div
              className={`${isOpen ? 'block md:hidden' : 'hidden'}`}
              id='mobile-menu'
            >
              <Fade
                duration={150}
                className='absolute left-0 right-0 top-full'
                childClassName='bg-blue-700 flex flex-col w-[100%] rounded-bl-lg rounded-br-lg overflow-hidden shadow-lg transition-all ease-in'
              >
                <div>
                  <NavLinks isMobile={isOpen} />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
