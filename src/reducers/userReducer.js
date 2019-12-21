export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.user
    case 'UPDATE_RATINGS':
      return action.ratings
    default:
      return state;
  };
}
