import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import StudentDashbard from './StudentDashbard';
import CourseDetails from './CourseDetails';
import PageNotFound from './PageNotFound';

function index() {
  return (
    <div className='max-w-screen-2xl md:py-7 md:px-20 py-3 px-2 mx-auto bg-[var(--bg)]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-details/:id' element={<CourseDetails />} />
        <Route path='/student-dashboard' element={<StudentDashbard />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default index;
