// HomeButton.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HomeButton = () => {
  const location = useLocation();

  // Check if the current location is not the home page
  const isNotHomePage = location.pathname !== '/';

  return isNotHomePage ? (
    <Link to="/">
      <button className='bg-green-800 text-green-400 font-semibold text-xl p-2 select-none rounded-xl'>Go to Home</button>
    </Link>
  ) : null;
};

export default HomeButton;
