import * as actions from '../actions';

describe('actions', () => {
  it ('should have a type of ADD_MOVIES', () => {
    const movies = [
      {
        id: 1,
        title: 'placeholder',
        key: 1,
        poster_path: 'placeholder',
        backdrop_path: 'placeholder',
        release_date: 'placeholder',
        overview: 'placeholder',
        average_rating: 1
      }
    ];
    const expectedAction = {
      type: 'ADD_MOVIES',
      movies: [
        {
          id: 1,
          title: 'placeholder',
          key: 1,
          poster_path: 'placeholder',
          backdrop_path: 'placeholder',
          release_date: 'placeholder',
          overview: 'placeholder',
          average_rating: 1
        }
      ];
    }

    const result = actions.addMovies(movies);

    expect(result).toEqual(expectedAction);
  })

  it ('should have a type of UPDATE_USER', () => {
    const user = {
        id: 1,
        name: 'placeholder',
        email: 'placeholder'
      };
    const expectedAction = {
      type: 'UPDATE_USER',
      user: {
        id: 1,
        name: 'placeholder',
        email: 'placeholder'
      }
    };

    const result = actions.updateUser(user);

    expect(result).toEqual(expectedAction);
  })

  it ('should have a type of HANDLE_ERROR', () => {
    const errorMessage = 'placeholder';
    const expectedAction = {
      type: 'HANDLE_ERROR',
      errorMessage: 'placeholder'
    };

    const result = actions.updateUser(errorMessage);

    expect(result).toEqual(expectedAction);
  })

})
