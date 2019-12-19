import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const MovieShowPage = props => {
  const {
    id,
    title,
    backdrop_path,
    release_date,
    overview,
    average_rating
  } = props;

  return (
    <div>
      <img className='backdrop' src={backdrop_path} alt={title} />
      <h1>{title}</h1>
      <p>{release_date}</p>
      <p>{overview}</p>
      <p>Average Rating: {average_rating}</p>
    </div>
  );
};

export const mapStateToProps = state => ({
  allMovies: state.movies
});

export default connect(mapStateToProps, null)(MovieShowPage);

MovieShowPage.propTypes = {
  allMovies: PropTypes.array
};
