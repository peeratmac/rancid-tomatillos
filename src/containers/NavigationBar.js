import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <header className='header'>
      <button className='back-button'>Back to Home</button>
      <h1>Welcome maybe-user-name?</h1>
      <Link to='/login'>
        <button className='login-button'>Log In</button>
      </Link>
        <button className='logout-button'>Log Out</button>
    </header>
  );
};

export default connect(null, null)(NavigationBar);
