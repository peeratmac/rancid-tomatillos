export const ratingsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RATINGS':
      return [...action.ratings];
    default:
      return state;
  }
}
