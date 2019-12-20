import { loadingStatusReducer } from '../reducers/loadingStatusReducer';

describe('loadingStatusReducer', () => {
  it('should return the initial state', () => {
    const expected = true;
    const result = loadingStatusReducer(true, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is IS_LOADING', () => {
    const initialState = true;
    const action = {type: 'IS_LOADING', loadingStatus: false};
    const result = loadingStatusReducer(initialState, action);
    const expectedState = false;

    expect(result).toEqual(expectedState);
  });
});
