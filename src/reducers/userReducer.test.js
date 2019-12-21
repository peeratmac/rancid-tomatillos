import { userReducer } from '../reducers/userReducer';

describe('userReducer', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = userReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is UPDATE_USER', () => {
    const initialState = {};
    const action = {
      type: 'UPDATE_USER',
      user: {id: 1, name: 'placeholder', email: 'placeholder', ratings: []}
    };
    const result = userReducer(initialState, action);
    const expectedState = {id: 1, name: 'placeholder',
      email: 'placeholder', ratings: []};

    expect(result).toEqual(expectedState);
  });

  // it('should return the correct state if the action is UPDATE_RATINGS', () => {
  //   const initialState = {id: 1, name: 'Marge', email: 'marge@turing.io',
  //     ratings: [
  //       {id: 1, user_id: 1, movie_id: 1, rating: 6,
  //       created_at: "someDate", updated_at: "someDate"},
  //       {id: 2, user_id: 1, movie_id: 2, rating: 2,
  //         created_at: "secondDate", updated_at: "secondDate"}
  //     ]};
  //   const action = {
  //     type: 'UPDATE_RATINGS',
  //     ratings: [
  //       {id: 1, user_id: 1, movie_id: 1, rating: 6,
  //       created_at: "someDate", updated_at: "someDate"},
  //       {id: 2, user_id: 1, movie_id: 2, rating: 2,
  //         created_at: "secondDate", updated_at: "secondDate"},
  //       {id: 3, user_id: 1, movie_id: 3, rating: 3,
  //         created_at: "thirdDate", updated_at: "thirdDate"}
  //     ]
  //   };
  //
  //   const result = userReducer(initialState, action);
  //   const expectedState = {id: 1, name: 'Marge', email: 'marge@turing.io',
  //     ratings: [
  //       {id: 1, user_id: 1, movie_id: 1, rating: 6,
  //       created_at: "someDate", updated_at: "someDate"},
  //       {id: 2, user_id: 1, movie_id: 2, rating: 2,
  //         created_at: "secondDate", updated_at: "secondDate"},
  //       {id: 3, user_id: 1, movie_id: 3, rating: 3,
  //         created_at: "thirdDate", updated_at: "thirdDate"}
  //     ]};
  //   expect(result).toEqual(expectedState);
  // })
});
