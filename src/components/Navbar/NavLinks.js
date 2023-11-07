import React from 'react';
import { NavLink } from 'react-router-dom';

function NavLinks({ isMobile, toggleNavbar }) {
  let linkClass =
    'px-5 underline text-center decoration-transparent underline-offset-1 transition-all fade-in hover:decoration-white delay-150 duration-150 hover:underline-offset-8 decoration-2 cursor-pointer ';
  let linkClassActive =
    'px-5 text-center underline transition-all fade-in decoration-white underline-offset-8 decoration-2 cursor-pointer ';

  if (isMobile) {
    linkClass +=
      'w-100 hover:bg-[var(--primary-blue)] py-5 text-[var(--primary-blue)] bg-[var(--text-white)]';
    linkClassActive +=
      'font-medium  w-100 py-5 bg-[var(--primary-blue)] text-[var(--text-white)]';
  }

  return (
    <>
      <hr />
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? linkClassActive : linkClass)}
        onClick={toggleNavbar}
      >
        All Courses
      </NavLink>
      <hr />
      <NavLink
        to='/student-dashboard'
        className={({ isActive }) => (isActive ? linkClassActive : linkClass)}
        onClick={toggleNavbar}
      >
        Dashboard
      </NavLink>
      <hr />
    </>
  );
}

export default NavLinks;
