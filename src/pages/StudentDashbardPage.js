import React from 'react';
import { Link } from 'react-router-dom';
import EnrolledCourseCard from '../components/Course/EnrolledCourseCard';
import { Fade } from 'react-awesome-reveal';

function StudentDashbardPage() {
  return (
    <div>
      <div className='rounded-xl  bg-gray-100 shadow-lg p-2'>
        <h2 className='py-2'>Enrolled Courses</h2>
        <Fade>
          <div className='grid m-auto gap-3 xl:gap-8  grid-cols-1 xl:grid-cols-2'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((course) => {
              return (
                // <Link to={`/course-details/${course}`}>
                <EnrolledCourseCard />
                // </Link>
              );
            })}
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default StudentDashbardPage;
