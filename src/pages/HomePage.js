import React from 'react';
import SearchInput from '../components/SearchInput';
import CourseCard from '../components/Course/CourseCard';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

function HomePage() {
  return (
    <div>
      <div className='w-100 h-fit py-4 md:py-2 px-2 md:p-6 bsg-black rounded-lg shadow-xl bg-gray-100  text-[var(--text-darkGrey)]'>
        <h1 className='mb-4'>What do you want to learn?</h1>
        <SearchInput />
      </div>
      <div className='w-100 h-fit py-2 md:py-6'>
        <Fade>
          <div className='grid m-auto gap-3 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((course) => {
              return (
                <Link to={`/course-details/${course}`}>
                  <CourseCard />
                </Link>
              );
            })}
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default HomePage;
