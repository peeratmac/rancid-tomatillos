import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
      <NavLink to={`/movies/${id}`}>
        <div>View Movie</div>
      </NavLink>
    </div>
  );
};

const mapStateToProps = state => ({
  allMovies: state.movies
});

export default connect(mapStateToProps, null)(MovieCard);
