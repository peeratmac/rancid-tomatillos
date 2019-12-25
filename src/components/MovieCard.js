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

  return (
    <div className="movie-card">
      <h1 className="poster-title">{title}</h1>
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
        { /* }<span className='avg'>Avg</span> */}
        {average_rating.toFixed(1)}
      </span>
      <NavLink to={`/movies/${id}`} style={{ textDecoration: 'none'}}>
        <div className="view-movie">View Movie</div>
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
};
