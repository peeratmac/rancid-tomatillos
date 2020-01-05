import { isLoggedInReducer } from '../reducers/isLoggedInReducer';

describe('isLoggedInReducer', () => {
  it('should return the initial state', () => {
    const expected = false;
    const result = isLoggedInReducer(false, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is UPDATE_LOGGEDIN_STATUS',
    () => {
      const initialState = false;
      const action = {type: 'UPDATE_LOGGEDIN_STATUS', status: true};
      const result = isLoggedInReducer(initialState, action);
      const expectedState = true;

      expect(result).toEqual(expectedState);
  });
});
