import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Nav() {
  return(
    <>
      <nav>
        <ul>
          <li>
            <Link to='./home'>Home</Link>
            <Link to='/test'>Test</Link>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Nav;