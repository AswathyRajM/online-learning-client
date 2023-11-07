import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to='/' className='link'>
        Home
      </Link>
    </div>
  );
}

export default Navbar;
