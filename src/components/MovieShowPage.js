import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './MovieShowPage.css';
import { updateUser, handleError } from '../actions/index';
import { updateRatings, fetchRatings, deleteRating } from '../apiCalls';
import { findRating } from '../util';

export class MovieShowPage extends Component {
  // constructor(props) {
  //   super(props);
  // }

  handleRatingsUpdates = event => {
    const { user, id, updateUser } = this.props;
    updateRatings(id, Number(event.target.value), user.id)
      .then(data => {
        fetchRatings(user.id).then(ratingData => {
          const newRatings = { ...user, ratings: ratingData.ratings };
          updateUser(newRatings);
        });
      })
      .catch(error => {
        this.props.handleError(
          'Problem updating your rating, please try again later.'
        );
      });
  };

  render() {
    const {
      id,
      title,
      backdrop_path,
      release_date,
      overview,
      average_rating,
      isLoggedIn,
      updateUser,
      user,
      errorMessage
    } = this.props;

    return (
      <div className='movie-page'>
        <img className='backdrop' src={backdrop_path} alt={title} />
        <h1 className='movie__title--two'>{title}</h1>
        <p className='in-theaters'>In Theaters: {release_date}</p>
        <p className='overview'>{overview}</p>
        <p className='average__rating--two'>
          Average Rating: {Math.round(average_rating * 10) / 10}
        </p>
        {isLoggedIn && findRating(id, user, 'rating') !== '...' && (
          <div className='already-rated'>
            <p
              className={
                findRating(id, user, 'rating') === 10
                  ? 'top-marks'
                  : 'my-rating'
              }>
              My Rating: {findRating(id, user, 'rating')}
            </p>
            <button
              className='reset-rating'
              onClick={() => {
                deleteRating(findRating(id, user, 'id'), user.id)
                  .then(data => {
                    fetchRatings(user.id).then(ratingData => {
                      const updatedRatings = {
                        ...user,
                        ratings: ratingData.ratings
                      };
                      updateUser(updatedRatings);
                    });
                  })
                  .catch(error => {
                    this.props.handleError(
                      'Problem deleting your rating, please try again later.'
                    );
                  });
              }}>
              Reset Rating
            </button>
          </div>
        )}
        {isLoggedIn && findRating(id, user, 'rating') === '...' && (
          <div className='rating-bar'>
            <div className='rating-scale'>
              {errorMessage && (
                <h1 className='error-styling'>{this.props.errorMessage}</h1>
              )}
              <button
                className='rating-btn btn-one'
                value='1'
                onClick={event => this.handleRatingsUpdates(event)}>
                1
              </button>
              <button
                className='rating-btn btn-two'
                value='2'
                onClick={event => this.handleRatingsUpdates(event)}>
                2
              </button>
              <button
                className='rating-btn btn-three'
                value='3'
                onClick={event => this.handleRatingsUpdates(event)}>
                3
              </button>
              <button
                className='rating-btn btn-four'
                value='4'
                onClick={event => this.handleRatingsUpdates(event)}>
                4
              </button>
              <button
                className='rating-btn btn-five'
                value='5'
                onClick={event => this.handleRatingsUpdates(event)}>
                5
              </button>
              <button
                className='rating-btn btn-six'
                value='6'
                onClick={event => this.handleRatingsUpdates(event)}>
                6
              </button>
              <button
                className='rating-btn btn-seven'
                value='7'
                onClick={event => this.handleRatingsUpdates(event)}>
                7
              </button>
              <button
                className='rating-btn btn-eight'
                value='8'
                onClick={event => this.handleRatingsUpdates(event)}>
                8
              </button>
              <button
                className='rating-btn btn-nine'
                value='9'
                onClick={event => this.handleRatingsUpdates(event)}>
                9
              </button>
              <button
                className='rating-btn btn-ten'
                value='10'
                onClick={event => this.handleRatingsUpdates(event)}>
                10
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  user: state.user,
  errorMessage: state.errorMessage
});

export const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  handleError: errorMessage => dispatch(handleError(errorMessage))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieShowPage);

MovieShowPage.propTypes = {
  allMovies: PropTypes.array,
  isLoggedIn: PropTypes.bool,
  user: PropTypes.object,
  updateUser: PropTypes.func,
  errorMessage: PropTypes.string,
  handleError: PropTypes.func
};
