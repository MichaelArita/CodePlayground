import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/test'>Test</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Home;