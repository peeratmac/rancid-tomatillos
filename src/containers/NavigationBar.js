import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import './NavigationBar.css';
import { updateUser, updateLoggedInStatus } from '../actions/index';
import PropTypes from 'prop-types';

export const NavigationBar = props => {
  const { user, isLoggedIn, updateUser, updateLoggedInStatus } = props;

  return (
    <header className='header'>
      <Link to='/'>
        <Route
          path={['/login', '/movies/:id']}
          render={() => <button className='home-button'>Home</button>}
        />
      </Link>
      {isLoggedIn && <h1 className='welcome-user'>Welcome {user.name}</h1>}
      {!isLoggedIn && (
        <Link to='/login'>
          <button className='login-button'>Log In</button>
        </Link>
      )}
      {isLoggedIn && (
        <Link to='/'>
          <button
            className='logout-button'
            onClick={() => {
              updateUser({});
              updateLoggedInStatus(false);
            }}>
            Log Out
          </button>
        </Link>
      )}
    </header>
  );
};

export const mapStateToProps = state => ({
  user: state.user,
  isLoggedIn: state.isLoggedIn
});

export const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  updateLoggedInStatus: status => dispatch(updateLoggedInStatus(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);

NavigationBar.propTypes = {
  user: PropTypes.object,
  isLoggedIn: PropTypes.bool,
  updateUser: PropTypes.func,
  updateLoggedInStatus: PropTypes.func
};
