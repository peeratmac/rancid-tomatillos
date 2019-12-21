import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './MovieShowPage.css'

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
    <div className="movie-page">
      <img className='backdrop' src={backdrop_path} alt={title} />
      <h1>{title}</h1>
      <p>In Theaters: {release_date}</p>
      <p className="overview">{overview}</p>
      <p>Average Rating: {average_rating}</p>
      <div className="rating-bar">
        <p className="rating-description">Rate Film:</p>
        <div className="rating-scale">
          <button className="rating-btn btn-one" value="1">1</button>
          <button className="rating-btn btn-two" value="2">2</button>
          <button className="rating-btn btn-three" value="3">3</button>
          <button className="rating-btn btn-four" value="4">4</button>
          <button className="rating-btn btn-five" value="5">5</button>
          <button className="rating-btn btn-six" value="6">6</button>
          <button className="rating-btn btn-seven" value="7">7</button>
          <button className="rating-btn btn-eight" value="8">8</button>
          <button className="rating-btn btn-nine" value="9">9</button>
          <button className="rating-btn btn-ten" value="10">10</button>
        </div>
      </div>
    </div>
    );
};

export const mapStateToProps = state => ({
  allMovies: state.movies,

});

export default connect(mapStateToProps, null)(MovieShowPage);

MovieShowPage.propTypes = {
  allMovies: PropTypes.array
};
