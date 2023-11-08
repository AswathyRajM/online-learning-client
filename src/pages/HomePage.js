import React, { useEffect } from 'react';
import SearchInput from '../components/SearchInput';
import CourseCard from '../components/Course/CourseCard';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import {
  fetchAllCourses,
  clearState,
} from '../features/redux/slices/courseSlice';
import io from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';

const socket = io.connect(process.env.REACT_APP_SERVER_URL);

function HomePage() {
  const dispatch = useDispatch();
  const { allCourses, loading } = useSelector((state) => state.courses);
  useEffect(() => {
    dispatch(fetchAllCourses());
    socket.on('course_liked', (arg) => {});
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <div className='w-100 h-fit py-4 md:py-2 px-2 md:p-6 rounded-lg shadow-xl bg-gray-100  text-[var(--text-darkGrey)]'>
        <h1 className='mb-4'>What do you want to learn?</h1>
        <SearchInput />
      </div>
      <div className='w-100 h-fit py-2 md:py-6'>
        {allCourses && allCourses.length ? (
          <Fade>
            <div className='grid m-auto gap-2 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {allCourses.map((course) => {
                return (
                  <Link key={course._id} to={`/course-details/${course._id}`}>
                    <CourseCard course={course} />
                  </Link>
                );
              })}
            </div>
          </Fade>
        ) : loading ? (
          <Loading />
        ) : (
          <div className='w-full h-full text-center'>Nothing to show</div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
