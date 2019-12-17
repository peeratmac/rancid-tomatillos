import React from 'react';
import { connect } from 'react-redux';
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <header className='header'>
      <button className='back-button'>Back to Home</button>
      <h1>Welcome maybe-user-name?</h1>
      <button className='login-button'>Log In</button>
      <button className='logout-button'>Log Out</button>
    </header>
  );
};

export default connect(null, null)(NavigationBar);
