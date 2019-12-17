import React from 'react';
import { connect } from 'react-redux';

const MovieContainer = ({ allMovies }) => {
  console.log('from MovieContainer', allMovies);
  return (
    <div>
      <h1>MovieContainer</h1>
    </div>
  );
};

export default connect(null, null)(MovieContainer);
