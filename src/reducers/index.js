import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer
});

export default rootReducer;
