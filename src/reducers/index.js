import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { userReducer } from './userReducer';
import { isLoggedInReducer } from './isLoggedInReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
  isLoggedIn: isLoggedInReducer
});

export default rootReducer;
