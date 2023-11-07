import React from 'react';
import { NavLink } from 'react-router-dom';

function NavLinks({ isMobile }) {
  let linkClass =
    'px-5 underline text-center decoration-transparent underline-offset-1 transition-all ease-in hover:decoration-white delay-150 duration-150 hover:underline-offset-8 decoration-2 cursor-pointer ';
  let linkClassActive =
    'px-5 text-center underline transition-all ease-in decoration-white underline-offset-8 decoration-2 cursor-pointer ';

  if (isMobile) {
    linkClass += 'no-underline w-100 hover:bg-white py-5';
    linkClassActive +=
      'font-medium no-underline bg-white text-black w-100 py-5';
  }
  return (
    <>
      <NavLink
        to='/student-dashboard'
        className={({ isActive }) => (isActive ? linkClassActive : linkClass)}
      >
        All Courses
      </NavLink>
      <hr />
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? linkClassActive : linkClass)}
      >
        Dashboard
      </NavLink>
      <hr />
      <NavLink
        to='/profile'
        className={({ isActive }) => (isActive ? linkClassActive : linkClass)}
      >
        Profile
      </NavLink>
      <hr />
    </>
  );
}

export default NavLinks;
