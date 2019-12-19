import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../components/MovieCard';
import PropTypes from 'prop-types';

const MovieContainer = props => {
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
  
  let loader;
  if (displayMovies.length > 1) {
    loader = displayMovies

  } else {
    loader = <img src="https://media.giphy.com/media/VxbP9tLeKzazm/giphy.gif" alt="loading screen depicting a running film spool"/>
    //Alternative GIF URLS for loading icon
    //https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif
    //https://media.giphy.com/media/AITymLVsG2v2U/giphy.gif
    //https://media.giphy.com/media/DvVTVeqPc5qEM/giphy.gif
  }

  return (
    <div className="movie-container">
      {loader}
    </div>
)};

const mapStateToProps = state => ({
  allMovies: state.movies
});

export default connect(mapStateToProps, null)(MovieContainer);


MovieContainer.propTypes = {
  allMovies: PropTypes.array,
}
