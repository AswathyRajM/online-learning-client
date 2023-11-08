import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

function EnrolledCourseCard() {
  const completed = false;
  return (
    <div>
      <div className='grid pr-4 md:gap-4 grid-rows-2 md:grid-rows-1 md:grid-cols-2 shadow-lg'>
        <div className='w-[100%] md:w-[290px] relative rounded-l-xl overflow-hidden'>
          <img
            src='https://ik.imagekit.io/aswathy/Alemeno-Online-Courses/images/course4_Jbit8khAw'
            alt='course'
            className='h-[100%] w-[100%] object-cover'
          />
        </div>
        <div>
          <h4 className='heading-elipsis'>
            The Complete Python Bootcamp From Zero to Hero in Bootcamp From Zero
            to Hero in Bootcamp From Zero to Hero in Bootcamp From Zero to Hero
            in Python
          </h4>
          <div className='flex items-center -mt-3 '>
            <h6>Instructor :</h6>
            <p className='capitalize mt-4 text-sm'>Jose Portilla</p>
          </div>
          <div className='flex items-center -mt-3 '>
            <h6>Due Date :</h6>
            <p className='capitalize mt-4 text-sm'>11-10-2023</p>
          </div>
          <hr />
          <div className='w-full -mt-3'>
            <h6>Progress</h6>
            <ProgressBar
              className='w-[90%]'
              completed={50}
              bgColor='green'
              animateOnRender={true}
            />
          </div>

          <div className='w-full text-sm flex justify-between my-4 text-white'>
            <button className='p-2 text-[var(--primary-blue)] rounded-lg shadow-lg border-2 border-[var(--primary-blue)] hover:border-[var(--secondary-blue)] hover:text-[var(--secondary-blue)]'>
              {completed ? 'Mark as incomplete' : 'Mark as Completed'}
            </button>
            <button
              className={`bg-[var(--primary-blue)] p-2 hover:bg-[var(--secondary-blue)] rounded-lg shadow-lg ${
                completed && 'px-6'
              }`}
            >
              {completed ? 'Learn again' : 'Continue Learning'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnrolledCourseCard;
