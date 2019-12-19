export const addMovies = movies => ({
  type: 'ADD_MOVIES',
  movies: movies
});

export const updateUser = user => ({
  type: 'UPDATE_USER',
  user: user
});

export const handleError = errorMessage => ({
  type: 'HANDLE_ERROR',
  errorMessage
});
