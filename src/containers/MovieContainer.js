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

  return <div>{displayMovies}</div>;
};

const mapStateToProps = state => ({
  allMovies: state.movies
});

export default connect(mapStateToProps, null)(MovieContainer);


MovieContainer.propTypes = {
  allMovies: PropTypes.array,
}
