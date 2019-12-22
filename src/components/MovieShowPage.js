import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './MovieShowPage.css';
import { updateUser, updateLoggedInStatus } from '../actions/index';
import { updateRatings, fetchRatings } from '../apiCalls';

export const MovieShowPage = props => {
  const {
    id,
    title,
    backdrop_path,
    release_date,
    overview,
    average_rating
  } = props;

  const handleRatingsUpdates = event => {
    const { updateUser, user } = props;
    updateRatings(id, Number(event.target.value), user.id).then(data => {
      fetchRatings(user.id).then(ratingData => {
        const newRatings = { ...user, ratings: ratingData.ratings };
        updateUser(newRatings);
      });
    });
  };

  return (
    <div className='movie-page'>
      <img className='backdrop' src={backdrop_path} alt={title} />
      <h1>{title}</h1>
      <p>In Theaters: {release_date}</p>
      <p className='overview'>{overview}</p>
      <p>Average Rating: {average_rating}</p>
      <div className='rating-bar'>
        <p className='rating-description'>Rate Film:</p>
        <div className='rating-scale'>
          <button
            className='rating-btn btn-one'
            value='1'
            onClick={event => handleRatingsUpdates(event)}>
            1
          </button>
          <button
            className='rating-btn btn-two'
            value='2'
            onClick={event => handleRatingsUpdates(event)}>
            2
          </button>
          <button
            className='rating-btn btn-three'
            value='3'
            onClick={event => handleRatingsUpdates(event)}>
            3
          </button>
          <button
            className='rating-btn btn-four'
            value='4'
            onClick={event => handleRatingsUpdates(event)}>
            4
          </button>
          <button
            className='rating-btn btn-five'
            value='5'
            onClick={event => handleRatingsUpdates(event)}>
            5
          </button>
          <button
            className='rating-btn btn-six'
            value='6'
            onClick={event => handleRatingsUpdates(event)}>
            6
          </button>
          <button
            className='rating-btn btn-seven'
            value='7'
            onClick={event => handleRatingsUpdates(event)}>
            7
          </button>
          <button
            className='rating-btn btn-eight'
            value='8'
            onClick={event => handleRatingsUpdates(event)}>
            8
          </button>
          <button
            className='rating-btn btn-nine'
            value='9'
            onClick={event => handleRatingsUpdates(event)}>
            9
          </button>
          <button
            className='rating-btn btn-ten'
            value='10'
            onClick={event => handleRatingsUpdates(event)}>
            10
          </button>
        </div>
      </div>
    </div>
  );
};

export const mapStateToProps = state => ({
  allMovies: state.movies,
  isLoggedIn: state.isLoggedIn,
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieShowPage);

MovieShowPage.propTypes = {
  allMovies: PropTypes.array,
  isLoggedIn: PropTypes.bool,
  user: PropTypes.object,
  updateUser: PropTypes.func
};
