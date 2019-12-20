export const rankingsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RANKINGS':
      return [...action.rankings];
    default:
      return state;
  }
}
