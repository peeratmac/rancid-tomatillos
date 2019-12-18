import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = props => {
  const {
    id,
    title,
    poster_path,
    backdrop_path,
    release_date,
    overview,
    average_rating
  } = props;

  return (
    <div>
      <h1>{title}</h1>
      <img
        className='poster'
        src={poster_path}
        alt={`Poster Picture of ${title}`}
      />
      <p>Average Rating: {average_rating}</p>
      <NavLink to={`/movies/${id}`}>
        <div>View Movie</div>
      </NavLink>
    </div>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  poster_path: PropTypes.string,
  backdrop_path: PropTypes.string,
  release_date: PropTypes.string,
  overview: PropTypes.string,
  average_rating: PropTypes.number
}
