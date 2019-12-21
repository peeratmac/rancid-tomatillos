export const addMovies = movies => ({
  type: 'ADD_MOVIES',
  movies: movies
});

export const updateUser = user => ({
  type: 'UPDATE_USER',
  user: user
});

export const updateLoggedInStatus = status => ({
  type: 'UPDATE_LOGGEDIN_STATUS',
  status: status
});

export const handleError = errorMessage => ({
  type: 'HANDLE_ERROR',
  errorMessage
});

export const isLoading = loadingStatus => ({
  //Passing in a boolean, where loadingStatus key is assigned: true/false
  type: 'IS_LOADING',
  loadingStatus
});
