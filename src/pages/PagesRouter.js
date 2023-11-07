import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import StudentDashbard from './StudentDashbard';
import CourseDetails from './CourseDetails';
import Profile from './Profile';

function index() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/course-details/:id' element={<CourseDetails />} />
      <Route path='/student-dashboard' element={<StudentDashbard />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
}

export default index;
