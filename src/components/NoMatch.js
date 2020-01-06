import React from 'react';
import { Link } from 'react-router-dom';


const NoMatch = () => {
  return (
    <div className='no-match'>
      <h2 className='invalid-route-header'>Uh-oh! Page Not Found</h2>
      <Link to ='/'>
        <button className='invalid-route-button'>Return To Homepage</button>
      </Link>
    </div>
  )
}

export default NoMatch;
