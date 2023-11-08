import React, { useEffect } from 'react';
import Accordion from '../Accordion';
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import { Fade } from 'react-awesome-reveal';

function CourseDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      <Fade>
        <div className='flex flex-col-reverse transition-all delay-100 md:flex-row rounded-xl overflow-hidden relative md:gap-x-10'>
          <div className='md:w-[70%] w-[100%] bg-white h-[fit] rounded-xl p-4 shadow-xl'>
            <h1>
              The Complete Python Bootcamp From Zero to Hero in
              PythonPythonPython Python Python Python Python Python Python
              Python
            </h1>
            <div>
              <h4>Instructor :</h4>
              <p>Jose Portilla</p>
            </div>
            <div>
              <h4>About the Course</h4>
              <p>
                Learn Python like a Professional Start from trounded-xl
                shadow-xlhe basics and go all the way to creating your own
                applications and ok games Learn Python like a Professional Start
                from the basics and go allrounded-xl shadow-xl the way to
                creating your own applications and dgames Learn Python like a
                Professional Start from the basics and go all the way to
                creating your own applications and games Learn vsm s dsdPython
                like a Professional Start from the basics and go all the way to
                creating your own applications and gamesrounded-xl shadow-xl
              </p>
            </div>
            <div>
              <h4>Location</h4>
              <p>Online</p>
            </div>
            <div>
              <h4>Syllabus</h4>
              <div className='rounded-xl overflow-hidden'>
                {[
                  { week: 1, topic: 'Section1', content: 'Content 1' },
                  { week: 2, topic: 'Section2', content: 'Content 2' },
                  { week: 3, topic: 'Section3', content: 'Content 3' },
                ].map((item, i) => {
                  return (
                    <div key={item.week + '' + i}>
                      <Accordion title={item.topic} content={item.content} />
                      <hr />
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h4>Pre Requisites</h4>
              <ol className='list-decimal mx-4'>
                {['one', 'two'].map((item) => {
                  return <li>{item}</li>;
                })}
              </ol>
            </div>
          </div>
          <div className='w-[100%] bg-gray-100 md:h-[100%] md:w-[30%] rounded-xl shadow-xl'>
            <img
              src='https://ik.imagekit.io/aswathy/Alemeno-Online-Courses/images/course4_Jbit8khAw'
              alt='course'
              className='h-[100%] w-[100%] object-center rounded-t-xl overflow-hidden shadow-lg'
            />
            <div className='mt-4'>
              <button className='bg-[var(--primary-blue)] w-[100%] h-14 hover:bg-[var(--secondary-blue)] text-white font-bold rounded-xl overflow-hidden shadow-lg text-base hover:text-lg duration-75'>
                Enroll Now
              </button>
              <div className='p-4'>
                <div className='flex items-center'>
                  <h4>Enrollment status :</h4>
                  <p className='capitalize mt-4'>In progress</p>
                </div>
                <div className='flex'>
                  <h4>Course duration :</h4>
                  <p className='mt-4'>2 hours 30 minutes</p>
                </div>
                <div className='flex'>
                  <h4>Schedule : </h4>
                  <p className='mt-4'>Flexible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default CourseDetails;
