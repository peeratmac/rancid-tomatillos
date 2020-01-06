import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCard.css';
import { findRating } from '../util';

export const MovieCard = props => {
  const {
    id,
    title,
    poster_path,
    average_rating
  } = props;

  const { isLoggedIn, user } = props;

  return (
    <div className="movie-card">
      <NavLink to={`/movies/${id}`} style={{ textDecoration: 'none'}}>
        <h1 className="poster-title">{title}</h1>
      </NavLink>
      {isLoggedIn && user.ratings && findRating(id, user, 'rating') !== '...' &&
        <div className='star-container'>
          <img
            className='user-star'
            src='https://img.icons8.com/officel/80/000000/filled-star.png'
            alt='cartoon star'
          />
          <span className={findRating(id, user, 'rating') === 10 ? 'user-score':
            'user__score--two'}>
            {findRating(id, user, 'rating')}
          </span>
        </div>
      }
      <NavLink to={`/movies/${id}`} style={{ textDecoration: 'none'}}>
        <img
          className='poster'
          src={poster_path}
          alt={`Movie Poster of ${title}`}
        />
      </NavLink>
      <div className='avg-container'>
        <img
          className='average-img'
          src='https://img.icons8.com/dusk/64/000000/tomato.png'
          alt='cartoon tomato'
        />
      </div>
      <span className='average-score'>
        {average_rating.toFixed(1)}
      </span>
    </div>
  );
};

export const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  user: state.user
});

export default connect(mapStateToProps, null)(MovieCard);

MovieCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  poster_path: PropTypes.string,
  backdrop_path: PropTypes.string,
  release_date: PropTypes.string,
  overview: PropTypes.string,
  average_rating: PropTypes.number
};
