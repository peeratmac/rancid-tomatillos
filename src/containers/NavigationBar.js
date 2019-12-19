import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = props => {
  const { id, name, email } = props;

  return (
    <header className='header'>
      <button className='back-button'>Back to Home</button>
      <h1>Welcome {props.user.name}</h1>
      <Link to='/login'>
        <button className='login-button'>Log In</button>
      </Link>
      <Link to='/'>
        <button className='logout-button'>Log Out</button>
      </Link>
    </header>
  );
};

const mapStateToProps = state => ({
  allMovies: state.movies,
  user: state.user
});

export default connect(mapStateToProps, null)(NavigationBar);
