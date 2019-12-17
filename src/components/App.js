import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllMovies } from '../apiCalls';
import { addMovies } from '../actions/index';
import NavigationBar from '../containers/NavigationBar';

export class App extends Component {
  componentDidMount() {
    const { addMovies } = this.props;
    fetchAllMovies().then(data => addMovies(data.movies));
  }

  render() {
    return (
      <main>
        <NavigationBar />
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch(addMovies(movies))
});

export default connect(null, mapDispatchToProps)(App);
