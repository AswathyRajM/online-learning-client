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

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
    }
  };

  return (
    <form className='flex items-center p-0 m-0 w-[100%] bottom-0 relative'>
      <input
        className='
        flex 
        px-[0.5rem] 
        py-[0.6rem] 
        h-[2.5rem] 
        m-0 
        w-[100%] 
        bottom-0 
        text-[var(--text-darkGrey)] 
        rounded-l-md
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
          // make sure the search item isnt wempty when calling keypress
          // handleSeahcInputChange(e.target.value);
        }}
        onKeyDown={(e) => handleKeyPress(e)}
      />
      <button className='bg-[var(--primary-blue)] rounded-r-md'>
        <div className='flex relative items-center px-3 py-2 justify-center'>
          <span className='p-[.5rem] font-bold text-white mr-2 shadow-lg'>
            <BsSearch />
          </span>
        </div>
      </button>
    </form>
  );
}

export default SearchInput;
