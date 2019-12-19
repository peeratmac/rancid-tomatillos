export const loadingStatusReducer = (state = false, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.loadingStatus;
    default:
      return state;
  }
};
