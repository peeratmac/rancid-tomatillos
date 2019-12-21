export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.user
    case 'UPDATE_RATING':
      return [...state.user.ratings, action.user.ratings]
      // do i even need this since i wont push the rating into store as a single object,
      // I'll just be updating the whole re-fetched array
    default:
      return state;
  };
}
