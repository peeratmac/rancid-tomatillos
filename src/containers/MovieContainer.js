import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../components/MovieCard';
import PropTypes from 'prop-types';
import './MovieContainer.css';

export const MovieContainer = props => {
  const { allMovies } = props;

  const loader =
    <img src='https://media.giphy.com/media/VxbP9tLeKzazm/giphy.gif'
      alt="loading..."/>;

  const displayMovies = allMovies.map(movie => {
    return (
      <MovieCard
        id={movie.id}
        title={movie.title}
        key={movie.id}
        poster_path={movie.poster_path}
        backdrop_path={movie.backdrop_path}
        release_date={movie.release_date}
        overview={movie.overview}
        average_rating={movie.average_rating}
      />
    );
  });

  return (
  <div className='movie-container'>
    {props.loadingStatus === false &&
      <div className='inner-container'>
        <h1 className='error-styling'>
          {props.errorMessage}
        </h1>
        {displayMovies}
      </div>
    }
    {props.loadingStatus === true &&
      <div className='inner-container'>
        {loader}
      </div>
    }
  </div>
  )
};

export const mapStateToProps = state => ({
  allMovies: state.movies,
  errorMessage: state.errorMessage,
  loadingStatus: state.loadingStatus
});

export default connect(mapStateToProps, null)(MovieContainer);

MovieContainer.propTypes = {
  allMovies: PropTypes.array,
  errorMessage: PropTypes.string,
  loadingStatus: PropTypes.bool

};
