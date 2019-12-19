export const loadingStatusReducer = (state = true, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.loadingStatus;
    default:
      return state;
  }
};


//adding a .then (and .catch) to the initial fetch statement to trigger the boolean flip
