import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { IoIosArrowDown } from 'react-icons/io';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className='flex text-center  bg-gray-100 cursor-pointer z-50  p-2 py-2'
        onClick={toggleAccordion}
      >
        <span
          className={`${
            isOpen
              ? 'my-auto -rotate-180 duration-150 '
              : 'my-auto duration-150'
          }`}
        >
          <IoIosArrowDown />
        </span>
        <div className='w-full p-2 text-left'>
          <h5>{title}</h5>
        </div>
      </div>

      {isOpen && (
        <Fade>
          <div className='bg-gray-100 md:py-4 px-8 py-2 rounded-b-xl'>
            {content}
          </div>
        </Fade>
      )}
    </>
  );
};

export default Accordion;
