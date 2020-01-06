import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../components/MovieCard';
import PropTypes from 'prop-types';
import './MovieContainer.css';
import { addMovies } from '../actions/index';

export const MovieContainer = props => {
  const { allMovies, addMovies } = props;

  const loader =
    <img src='https://media.giphy.com/media/VxbP9tLeKzazm/giphy.gif'
      alt="loading..."/>;

  const sortFilms = () => {
    const sortedFilms = [...allMovies].sort((a, b) => {
      if (a.release_date > b.release_date) {
        return -1
      }

      if (a.release_date < b.release_date) {
        return 1
      }
    })

    return sortedFilms
  };

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
      <button
        className='sort-button'
        onClick={() => {
          addMovies(sortFilms())
        }}>
        Sort Films by Most Recent
      </button>
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

export const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch(addMovies(movies))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);

MovieContainer.propTypes = {
  allMovies: PropTypes.array,
  errorMessage: PropTypes.string,
  loadingStatus: PropTypes.bool

};
