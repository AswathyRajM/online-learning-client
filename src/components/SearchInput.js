import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
// import {
//   clearState,
//   setSearchTerm,
// } from '../../util/redux/reducer/movieReducer';
import { useDispatch, useSelector } from 'react-redux';

function SearchInput() {
  // const dispatch = useDispatch();
  // const { searchTerm } = useSelector((state) => state.movies);

  // const [searchText, setSearchText] = useState(searchTerm);
  // const [timer, setTimer] = useState(null);

  // const handleSeahcInputChange = (text) => {
  //   setSearchText(text);
  //   clearTimeout(timer);
  //   if (!text) {
  //     dispatch(clearState());
  //     dispatch(setSearchTerm(''));
  //     return;
  //   }

  //   // debounce technique
  //   const newTimer = setTimeout(() => {
  //     dispatch(clearState());
  //     dispatch(setSearchTerm(text));
  //   }, 700);
  //   setTimer(newTimer);
  // };

  return (
    <form className='flex p-0 m-0 w-[100%] bottom-0 relative'>
      <span className='py-[0.7rem] pr-[0.2rem] pl-[0.5rem] absolute font-bold text-[var(--text-black)]'>
        <BsSearch />
      </span>
      <input
        className='
        flex 
        pr-[0.25rem] 
        py-[0.6rem] 
        pl-[2.5rem] 
        h-[2.5rem] 
        m-0 
        w-[100%] 
        bottom-0 
        text-[var(--text-darkGrey)] 
        rounded-md 
        focus:outline-[var(--primary-blue)] 
        focus:outline-2 
        border-[var(--primary-blue)] 
        focus:border-[var(--primary-blue)] 
        outline 
        outline-offset-2 
        outline-1
        outline-[var(--text-grey)]'
        data-testid='search-input'
        aria-label='Search'
        type='search'
        placeholder='Search'
        autoComplete='off'
        // value={searchText}
        onChange={(e) => {
          e.preventDefault();
          // handleSeahcInputChange(e.target.value);
        }}
      />
    </form>
  );
}

export default SearchInput;
