import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../components/MovieCard';
import PropTypes from 'prop-types';
import './MovieContainer.css';
import { handleError} from '../actions/index';

export const MovieContainer = props => {
  const { allMovies } = props;

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

  // 'https://media.giphy.com/media/VxbP9tLeKzazm/giphy.gif'
    //Alternative GIF URLS for loading icon
    //https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif
    //https://media.giphy.com/media/AITymLVsG2v2U/giphy.gif
    //https://media.giphy.com/media/DvVTVeqPc5qEM/giphy.gif

  return (
  <div className='movie-container'>
    <div className='inner-container'>
      <h1 className='error-styling'>{props.errorMessage}</h1>
      {displayMovies}
    </div>
  </div>
  )
};

export const mapStateToProps = state => ({
  allMovies: state.movies,
  errorMessage: state.errorMessage
});

export default connect(mapStateToProps, null)(MovieContainer);

MovieContainer.propTypes = {
  allMovies: PropTypes.array
};
