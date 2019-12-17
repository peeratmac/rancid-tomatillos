import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllMovies } from '../apiCalls';
import { addMovies } from '../actions/index';

export class App extends Component {
  componentDidMount() {
    fetchAllMovies().then(data => this.props.addMovies(data.movies));
  }

  render() {
    return (
      <div>
        <h1>Rancid Tomatillos</h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch(addMovies(movies))
});

export default connect(null, mapDispatchToProps)(App);
