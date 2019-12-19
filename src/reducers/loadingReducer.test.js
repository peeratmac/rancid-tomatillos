import { loadingReducer } from '../reducers/loadingReducer';

describe('loadingReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = loadingReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is IS_LOADING', () => {
    const initialState = false;
    const action = {type: 'IS_LOADING', loadingStatus: true};
    const result = loadingReducer(initialState, action);
    const expectedState = true;

    expect(result).toEqual(expectedState);
  });
});
