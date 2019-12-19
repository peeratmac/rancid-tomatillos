import React from 'react';
import { connect } from 'react-redux';

const MovieShowPage = props => {
  console.log(props);
  return (
    <div>
      <h1>x</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  allMovies: state.movies
});

export default connect(mapStateToProps, null)(MovieShowPage);
