import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCard.css';

export const MovieCard = props => {
  const {
    id,
    title,
    poster_path,
    backdrop_path,
    release_date,
    overview,
    average_rating
  } = props;

  const { isLoggedIn, user } = props;

  const findUserRating = id => {
    if (isLoggedIn && user.ratings) {
      const userRatings = user.ratings.map(ratedFilm => ratedFilm.movie_id);
        if (userRatings.includes(id)) {
          return user.ratings.find(movie => movie.movie_id === id).rating;
        } else {
          return '...';
        }
    }
  };

  return (
    <div className="movie-card">
      <h1 className="poster-title">{title}</h1>
      {isLoggedIn && findUserRating(id) !== '...' &&
        <div className='star-container'>
          <img
            className='user-star'
            src='https://img.icons8.com/officel/80/000000/filled-star.png'
            alt='cartoon star'
          />
          <span className={findUserRating(id) === 10 ? 'user-score': 'user__score--two'}>
            {findUserRating(id)}
          </span>
        </div>
      }
      <img
        className='poster'
        src={poster_path}
        alt={`Poster Picture of ${title}`}
      />
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
      <NavLink to={`/movies/${id}`} style={{ textDecoration: 'none'}}>
        <div className="view-movie">View Movie</div>
      </NavLink>
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
