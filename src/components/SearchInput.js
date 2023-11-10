import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import {
  fetchAllCourses,
  searchCourses,
} from '../features/redux/slices/courseSlice';
import { useDispatch, useSelector } from 'react-redux';

function SearchInput() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    const text = searchText;
    handleSearchInputChange(text);
    dispatch(searchCourses(text));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearchInputChange = (text) => {
    if (text === '') {
      dispatch(fetchAllCourses());
      setSearchText(text);
      return;
    }
    setSearchText(text);
  };

  return (
    <div className='flex items-center p-0 m-0 w-[100%] bottom-0 relative'>
      <input
        className='
        flex 
        px-[0.5rem] 
        py-[0.6rem] 
        h-[2.5rem] 
        m-0 
        w-[100%] 
        bottom-0 
        text-[var(--text-darkGray)] 
        rounded-l-md
        focus:outline-[var(--primary-blue)] 
        focus:outline-2 
        border-[var(--primary-blue)] 
        focus:border-[var(--primary-blue)] 
        outline 
        outline-offset-2 
        outline-1
        outline-[var(--text-gray)]'
        data-testid='search-input'
        aria-label='Search'
        type='search'
        placeholder='Search'
        autoComplete='off'
        value={searchText}
        onChange={(e) => {
          handleSearchInputChange(e.target.value);
        }}
        onKeyDown={(e) => handleKeyPress(e)}
      />
      <button
        className='bg-[var(--primary-blue)] rounded-r-md'
        onClick={() => {
          handleSearch();
        }}
      >
        <div className='flex relative items-center px-3 py-2 justify-center'>
          <span className='p-[.5rem] font-bold text-white mr-2 shadow-lg'>
            <BsSearch />
          </span>
        </div>
      </button>
    </div>
  );
}

export default SearchInput;
