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


})
