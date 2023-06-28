import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return(
    <>
      <h1>ERROR: You have reached an unknown endpoint</h1>
      <Link to="/">Go to home page</Link>
    </>
  );
};

export default NoMatch;