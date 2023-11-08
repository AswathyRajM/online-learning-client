import React, { useState } from 'react';
//  socket.emit('send_message', { username, room, message, __createdtime__ });
//  setMessage('');
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';

function CourseCard({ course }) {
  const { name, instructor, thumbnail, likes, price } = course;
  const [liked, setLiked] = useState(false);

  return (
    <div className='rounded-xl w-[100%] h-fit md:w-[290px] max-w-[100%] mt-6 md:max-w-[290px] overflow-hidden mx-auto hover:shadow-2xl cursor-pointer shadow-xl text-black hover:bg-white'>
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
              setLiked(!liked);
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
