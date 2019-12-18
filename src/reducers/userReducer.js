export const userReducer = (state = {id: '', name: '', email: ''}, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.user

    default:
      return state;
  };
}
