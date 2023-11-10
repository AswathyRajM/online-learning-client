import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import { useDispatch } from 'react-redux';
import { updateCourseStatus } from '../../features/redux/slices/studentSlice';

function EnrolledCourseCard({ course }) {
  const dispatch = useDispatch();
  const { progress, courseId, due } = course;

  const handleCourseStatusUpdate = () => {
    let newProgress;
    if (progress === 100) {
      newProgress = 0;
    } else newProgress = 100;
    dispatch(
      updateCourseStatus({ courseId: courseId._id, progress: newProgress })
    );
  };
  return (
    <div className='grid border-2 rounded-xl overflow-hidden grid-rows-2 md:grid-rows-1 md:grid-cols-2 shadow-lg relative'>
      <div className='w-[100%] md:w-[100%] relative rounded-t-xl md:rounded-none md:rounded-l-xl overflow-hidden'>
        <img
          src={courseId.thumbnail}
          alt='course'
          className='h-[100%] w-[100%] object-cover'
        />
      </div>
      <div className='p-4 '>
        <h4 className='heading-elipsis'>{courseId.name}</h4>
        <div className='flex items-center -mt-3 '>
          <h6>Instructor :</h6>
          <p className='capitalize mt-4 text-sm'>{courseId.instructor}</p>
        </div>
        <div className='flex items-center mb-4 -mt-3 '>
          <h6>Due Date :</h6>
          <p className='capitalize mt-4  text-sm'>{due}</p>
        </div>
        <hr />
        <div className='w-full'>
          <h6>Progress</h6>
          <ProgressBar
            completed={progress}
            bgColor='green'
            animateOnRender={true}
            labelAlignment='outside'
            labelColor='green'
            labelSize='14px'
            dir='auto'
          />
        </div>

        <div className='w-full text-sm  mt-4 text-white '>
          <button
            className='p-2 text-[var(--primary-blue)] rounded-lg shadow-lg border-2 border-[var(--primary-blue)] hover:border-[var(--secondary-blue)] hover:text-[var(--secondary-blue)] w-fit '
            onClick={handleCourseStatusUpdate}
          >
            {progress === 100 ? 'Learn Again' : 'Mark as Complete'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnrolledCourseCard;
