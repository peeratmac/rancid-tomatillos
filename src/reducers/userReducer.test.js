import { userReducer } from '../reducers/userReducer';

describe('userReducer', () => {
  it('should return the initial state', () => {
    const expected = {id: '', name: '', email: ''};
    const result = userReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is UPDATE_USER', () => {
    const initialState = {id: '', name: '', email: ''};
    const action = {
      type: 'UPDATE_USER',
      user: {id: 1, name: 'placeholder', email: 'placeholder'}
    };
    const result = userReducer(initialState, action);
    const expectedState = {id: 1, name: 'placeholder', email: 'placeholder'};

    expect(result).toEqual(expectedState);
  });
});
