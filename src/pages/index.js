import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import StudentDashbard from './StudentDashbard';
import CourseDetails from './CourseDetails';

function index() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/course-details/:id' element={<CourseDetails />} />
      <Route path='/student-dashboard' element={<StudentDashbard />} />
    </Routes>
  );
}

export default index;
