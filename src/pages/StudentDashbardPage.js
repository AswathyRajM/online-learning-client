import React, { useEffect } from 'react';
import EnrolledCourseCard from '../components/Course/EnrolledCourseCard';
import { Fade } from 'react-awesome-reveal';
import Accordion from '../components/Accordion';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseDetails } from '../features/redux/slices/studentSlice';
import Loading from '../components/Loading';

function StudentDashbardPage() {
  const dispatch = useDispatch();
  const { studentDetails, loading } = useSelector((state) => state.students);
  useEffect(() => {
    dispatch(fetchCourseDetails());
  }, []);
  console.log();

  return (
    <>
      {studentDetails && !loading ? (
        <>
          <div className='rounded-xl bg-gray-100 shadow-lg p-2 border-2'>
            <Accordion
              leftArrow={true}
              title={<h2 className='py-2'>Enrolled Courses</h2>}
              content={
                <Fade triggerOnce>
                  <div className='grid m-auto gap-3 xl:gap-8  grid-cols-1 xl:grid-cols-2'>
                    {studentDetails.inProgressCourses?.length ? (
                      studentDetails.inProgressCourses.map((course) => {
                        if (course.progress < 100)
                          return <EnrolledCourseCard course={course} />;
                      })
                    ) : (
                      <div>Nothing to Show</div>
                    )}
                  </div>
                </Fade>
              }
            />
          </div>
          <div className='rounded-xl bg-gray-100 shadow-lg p-2'>
            <Accordion
              leftArrow={true}
              title={<h2 className='py-2'>Completed Courses</h2>}
              content={
                <Fade triggerOnce>
                  <div className='grid m-auto gap-3 xl:gap-8  grid-cols-1 xl:grid-cols-2'>
                    {studentDetails.completedCourses?.length ? (
                      studentDetails.completedCourses.map((course) => {
                        if (course.progress === 100)
                          return <EnrolledCourseCard course={course} />;
                      })
                    ) : (
                      <div>Nothing to Show</div>
                    )}
                  </div>
                </Fade>
              }
            />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default StudentDashbardPage;
