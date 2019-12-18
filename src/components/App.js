import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllMovies } from '../apiCalls';
import { addMovies } from '../actions/index';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavigationBar from '../containers/NavigationBar';
import MovieContainer from '../containers/MovieContainer';
import MovieShowPage from '../components/MovieShowPage';
import LoginForm from '../containers/LoginForm';

export class App extends Component {
  componentDidMount() {
    const { addMovies } = this.props;
    fetchAllMovies().then(data => addMovies(data.movies));
  }

  render = () => {
    return (
      <main>
        <NavigationBar />
        <Route exact path="/" component={MovieContainer} />
        <Route exact path="/login" component={LoginForm} />
        <Route
          exact
          path='/movie/:id'
          render={({ match }) => {
            let moviesData = [...this.props.movies];
            return <MovieShowPage {...moviesData} />;
          }}
        />
      </main>
    );
  };
}

const mapStateToProps = state => ({
  allMovies: state.movies
});

const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch(addMovies(movies))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
