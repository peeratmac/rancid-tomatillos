import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import { updateUser, updateLoggedInStatus } from '../actions/index';

const NavigationBar = props => {
  const { user, isLoggedIn, updateUser, updateLoggedInStatus } = props;

  return (
    <header className='header'>
      <button className='back-button'>Back to Home</button>
      <h1>Welcome {user.name}</h1>
      {!isLoggedIn &&
      <Link to='/login'>
        <button className='login-button'>Log In</button>
      </Link> }
      {isLoggedIn &&
      <Link to='/'>
        <button className='logout-button' onClick={() => {
          updateUser({});
          updateLoggedInStatus(false);
         }}>Log Out</button>
      </Link> }
    </header>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  updateLoggedInStatus: status => dispatch(updateLoggedInStatus(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
