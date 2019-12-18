export const fetchAllMovies = () => {
  return fetch(
    'https://rancid-tomatillos.herokuapp.com/api/v1/movies'
  ).then(response => response.json());
};

const body = {email: "marge@turing.io", password: "password123"};
// We will need to make the body based on the this.state.email and
// this.state.password from the local state of the form.  This is just set up to
// be able to easily merge with form when that component is ready.

const options = {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  }
}
const fetchUserLogin = (options) => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v1/login', options)
    .then(response => response.json())
    // The .then()s below here won't stay in this file, we will chain them on
    // wherever we invoke this fetch function
    // .then(data => console.log(`Number ${data.user.id} is ${data.user.name}`))
    .then(data => {
      // here we would want to send the data.user.id and data.user.name to the store
    })
}
fetchUserLogin(options);

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user))
});

// will need to add the about mapDispatchToProps to the FORM to submit the USER
// when it gets the user obj back
