export const errorReducer = (state = '', action) => {
  switch (action.type) {
    case 'HANDLE_ERROR':
      return action.errorMessage
      //May need to reconfigure the dot notation here (have yet to set final error formatting)
    default:
      return state;
  }
};
