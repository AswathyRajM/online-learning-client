import React from 'react';

function CourseCard() {
  return (
    <div
      className='
        rounded-xl
        w-[100%]
        h-fit
        md:w-[290px]
        max-w-[100%]
        mt-6  
        md:max-w-[290px]
        overflow-hidden
        mx-auto
        hover:shadow-2xl
        cursor-pointer
        shadow-xl
        text-black
      hover:bg-white'
    >
      <div className='w-[100%] md:h-[165px] md:w-[320px] relative rounded-t-xl overflow-hidden'>
        <img
          src='https://ik.imagekit.io/aswathy/Alemeno-Online-Courses/images/course4_Jbit8khAw'
          alt='course'
          className='h-[100%] w-[100%] object-cover'
        />
      </div>
      <div className='flex flex-col w-[100%] space-y-1 p-2'>
        <h3 className='heading-elipsis'>
          The Complete Python Bootcamp From Zero to Hero in Python
        </h3>
        <p className='text-[var(--text-grey)] text-sm'>The Complete Python</p>
        <p className='text-base font-medium'>
          $99
          <span className='text-[var(--text-grey)] line-through ml-2'>
            $199
          </span>
        </p>
      </div>
    </div>
  );
}

export default CourseCard;
