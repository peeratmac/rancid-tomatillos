export const isLoggedInReducer = (state = false, action) => {
  switch (action.type) {
    case 'UPDATE_LOGGEDIN_STATUS':
      return action.status

    default:
      return state;
  };
}
