import React from 'react';
import { connect } from 'react-redux';
import './NavigationBar.css'

const NavigationBar = (props) => {
  const { id, name, email } = props;

  return (
    <header className='header'>
      <button className='back-button'>Back to Home</button>
      <h1>`Welcome ${props.user.name}`</h1>
      <button className='login-button'>Log In</button>
      <button className='logout-button'>Log Out</button>
    </header>
  );
};

const mapStateToProps = state => ({
  allMovies: state.movies,
  user: state.user
});

export default connect(mapStateToProps, null)(NavigationBar);
