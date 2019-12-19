import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { userReducer } from './userReducer';
import { errorReducer } from './errorReducer';
import { loadingStatusReducer } from './loadingStatusReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
  //Error and loading naming conventions need to be approved by teammates. Whatever offers most clarity
  errorMessage: errorReducer,
  loadingStatus: loadingStatusReducer
});

export default rootReducer;
