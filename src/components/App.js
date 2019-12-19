import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllMovies, fetchUserLogin } from '../apiCalls';
import { addMovies } from '../actions/index';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavigationBar from '../containers/NavigationBar';
import MovieContainer from '../containers/MovieContainer';
import MovieShowPage from '../components/MovieShowPage';
import LoginForm from '../containers/LoginForm';
import { handleError, isLoading } from '../actions';
import PropTypes from 'prop-types';

export class App extends Component {
  componentDidMount() {
    const { addMovies } = this.props;
    fetchAllMovies().then(data => addMovies(data.movies));
    //add a catch statement error => fireMethodSends
  }

  render = () => {
    return (
      <main>
        <NavigationBar />
        <Route exact path='/' component={MovieContainer} />
        <Route exact path='/login' component={LoginForm} />
        <Route
          exact
          path='/movies/:id'
          render={({ match }) => {
            const { id } = match.params;
            let moviesData = this.props.allMovies.find(
              movie => movie.id === parseInt(id)
            );
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

App.propTypes = {
  allMovies: PropTypes.array,
  addMovies: PropTypes.func
};
