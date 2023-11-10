import React, { useEffect } from 'react';
import Accordion from '../Accordion';
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import { Fade } from 'react-awesome-reveal';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCourseDetails,
  fetchCourseDetails,
} from '../../features/redux/slices/courseSlice';
import Loading from '../Loading';

function CourseDetails() {
  let { id } = useParams();

  const dispatch = useDispatch();
  const { courseDetails, loading } = useSelector((state) => state.courses);
  const closed = courseDetails.enrollmentStatus?.toLowerCase() === 'closed';
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchCourseDetails(id));
    return () => {
      dispatch(clearCourseDetails());
    };
  }, [id]);

  return (
    <>
      <div>
        <Link
          to='/'
          className='text-[var(--primary-blue)] flex items-center gap-x-2 mb-2 md:mb-0'
        >
          <IoMdArrowBack /> Go Back
        </Link>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <Fade>
          <div className='flex flex-col-reverse transition-all delay-100 md:flex-row rounded-xl overflow-hidden relative md:gap-x-10'>
            <div className='md:w-[70%] w-[100%] bg-white h-[fit] rounded-xl p-4 shadow-xl'>
              <h1>{courseDetails.name}</h1>
              <div>
                <h4 className='mt-4'>Instructor </h4>
                <p className='capitalize'>{courseDetails.instructor}</p>
              </div>
              <div>
                <h4 className='mt-4'>About the Course</h4>
                <p>{courseDetails.description}</p>
              </div>
              <div>
                <h4 className='mt-4'>Location</h4>
                <p className='capitalize'>{courseDetails.location}</p>
              </div>
              <div>
                <h4 className='mt-4'>Syllabus</h4>
                <div className='rounded-xl overflow-hidden'>
                  {courseDetails.syllabus?.map((item) => {
                    return (
                      <div key={item._id}>
                        <Accordion title={item.topic} content={item.content} />
                        <hr />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <h4 className='mt-4'>Pre Requisites</h4>
                <ol className='list-decimal mx-4'>
                  {courseDetails.prerequisites?.map((item, i) => {
                    return <li key={item + i}>{item}</li>;
                  })}
                </ol>
              </div>
            </div>
            <div className='w-[100%] bg-gray-100 md:h-[100%] md:w-[30%] rounded-xl shadow-xl'>
              <img
                src={courseDetails.thumbnail}
                alt={courseDetails.name}
                className='h-[100%] w-[100%] object-cover rounded-t-xl overflow-hidden shadow-lg'
              />
              <div>
                <div className='p-4 pt-2'>
                  <div className='flex items-start my-4'>
                    <h4 className='mr-4'>Enrollment status :</h4>
                    <p className='capitalize'>
                      {courseDetails.enrollmentStatus}
                    </p>
                  </div>
                  <div className='flex items-start my-4'>
                    <h4 className='mr-4'>Course duration :</h4>
                    <p>{courseDetails.duration}</p>
                  </div>
                  <div className='flex items-start my-4'>
                    <h4 className='mr-4'>Schedule&nbsp;: </h4>
                    <p>{courseDetails.schedule}</p>
                  </div>
                  <button
                    disabled={closed}
                    className={` w-[100%] h-14 rounded-xl overflow-hidden shadow-lg text-base ${
                      closed
                        ? 'text-[var(--primary-blue)]  border-2 border-[var(--primary-blue)]'
                        : 'bg-[var(--primary-blue)]  text-white  hover:bg-[var(--secondary-blue)] font-bold hover:text-lg duration-75'
                    }`}
                  >
                    {closed ? 'Enrollment Closed' : 'Enroll Now'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      )}
    </>
  );
}

export default CourseDetails;
