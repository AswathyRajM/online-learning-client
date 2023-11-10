import React, { useState } from 'react';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { updateCourseLike } from '../../features/redux/slices/courseSlice';

function CourseCard({ course }) {
  const dispatch = useDispatch();
  const { name, instructor, thumbnail, likes, price, _id } = course;
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    dispatch(updateCourseLike({ _id, likes: likes + 1 }));
  };
  return (
    <div className='border-2 rounded-xl w-[100%] h-fit md:w-[290px] max-w-[100%] mt-6 md:max-w-[290px] overflow-hidden mx-auto hover:shadow-2xl cursor-pointer shadow-xl text-black hover:bg-white'>
      <div className='w-[100%] md:h-[165px] md:w-[320px] relative rounded-t-xl overflow-hidden'>
        <img
          src={thumbnail}
          alt='course'
          className='h-[100%] w-[100%] object-cover'
        />
      </div>
      <div className='flex flex-col w-[100%] space-y-1 p-2'>
        <h3 className='heading-elipsis'>{name}</h3>
        <p className='text-[var(--text-grey)] text-sm'>{instructor}</p>
        <p className='text-[var(--text-grey)] text-sm w-full'>
          {likes} Likes
          <span
            className={`float-right delay-100  transition-all text-2xl ${
              liked ? 'text-red-500' : ''
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleLike();
            }}
          >
            {liked ? <IoMdHeart /> : <IoMdHeartEmpty />}
          </span>
        </p>
        <p className='text-base font-medium'>
          {price}
          <span className='text-[var(--text-grey)] line-through ml-2 '>
            $199
          </span>
        </p>
      </div>
    </div>
  );
}

export default CourseCard;
