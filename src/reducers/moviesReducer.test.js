import { moviesReducer } from '../reducers/moviesReducer';

describe('moviesReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = moviesReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is ADD_MOVIES', () => {
    const initialState = [];
    const action = {type: 'ADD_MOVIES', movies: [
      {
        id: 1,
        title: 'placeholder',
        key: 1,
        poster_path: 'placeholder',
        backdrop_path: 'placeholder',
        release_date: 'placeholder',
        overview: 'placeholder',
        average_rating: 1
      }]
    };
    const result = moviesReducer(initialState, action);
    const expectedState = [
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

    expect(result).toEqual(expectedState);
  });
});
