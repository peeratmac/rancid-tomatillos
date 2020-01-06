import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllMovies } from '../apiCalls';
import { addMovies } from '../actions/index';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from '../containers/NavigationBar';
import MovieContainer from '../containers/MovieContainer';
import MovieShowPage from '../components/MovieShowPage';
import LoginForm from '../containers/LoginForm';
import NoMatch from '../components/NoMatch';
import { handleError, isLoading } from '../actions';
import PropTypes from 'prop-types';

export class App extends Component {
  componentDidMount() {
    const { addMovies } = this.props;
    fetchAllMovies()
      .then(data => {
        addMovies(data.movies)
        this.props.isLoading(false)
      })
      .catch(error => {
        this.props.handleError('Data retrieval error - Please refresh the page')
      })
  }

  render = () => {
    return (
      <main>
        <NavigationBar />
        <Switch>
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
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </main>
    );
  };
}

export const mapStateToProps = state => ({
  allMovies: state.movies
});

export const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch(addMovies(movies)),
  handleError: errorMessage => dispatch(handleError(errorMessage)),
  isLoading: loadingStatus => dispatch(isLoading(loadingStatus))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  allMovies: PropTypes.array,
  addMovies: PropTypes.func,
  handleError: PropTypes.func,
  isLoading: PropTypes.func
};
