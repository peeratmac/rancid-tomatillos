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
      ]
    }

    const result = actions.addMovies(movies);

    expect(result).toEqual(expectedAction);
  })

  it ('should have a type of UPDATE_USER', () => {
    const user = {
        id: 1,
        name: 'placeholder',
        email: 'placeholder',
        ratings: []
      };
    const expectedAction = {
      type: 'UPDATE_USER',
      user: {
        id: 1,
        name: 'placeholder',
        email: 'placeholder',
        ratings: []
      }
    };

    const result = actions.updateUser(user);

    expect(result).toEqual(expectedAction);
  })

  it('should have a type of UPDATE_LOGGEDIN_STATUS', () => {
    const status = true;
    const expectedAction = {
      type: 'UPDATE_LOGGEDIN_STATUS',
      status: true
    };

    const result = actions.updateLoggedInStatus(status);

    expect(result).toEqual(expectedAction);
  })

  it ('should have a type of HANDLE_ERROR', () => {
    const errorMessage = 'placeholder';
    const expectedAction = {
      type: 'HANDLE_ERROR',
      errorMessage: 'placeholder'
    };

    const result = actions.handleError(errorMessage);

    expect(result).toEqual(expectedAction);
  })

  it ('should have a type of IS_LOADING', () => {
    const loadingStatus = true;
    const expectedAction = {
      type: 'IS_LOADING',
      loadingStatus: true
    };

    const result = actions.isLoading(loadingStatus);

    expect(result).toEqual(expectedAction);
  })
})

it('should have a type of UPDATE_RATINGS', () => {
  const ratings = [
    {id: 1, user_id: 1, movie_id: 1, rating: 6,
    created_at: "someDate", updated_at: "someDate"},
    {id: 2, user_id: 1, movie_id: 2, rating: 2,
      created_at: "secondDate", updated_at: "secondDate"}
  ];
  const expectedAction = {
    type: 'UPDATE_RATINGS',
    ratings: [
      {id: 1, user_id: 1, movie_id: 1, rating: 6,
      created_at: "someDate", updated_at: "someDate"},
      {id: 2, user_id: 1, movie_id: 2, rating: 2,
        created_at: "secondDate", updated_at: "secondDate"}
    ]
  };

  const result = actions.updateRatings(ratings);

  expect(result).toEqual(expectedAction);
})
