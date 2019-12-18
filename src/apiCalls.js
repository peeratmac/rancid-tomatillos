export const fetchAllMovies = () => {
  return fetch(
    'https://rancid-tomatillos.herokuapp.com/api/v1/movies'
  ).then(response => response.json());
};

export const fetchUserLogin = (options) => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v1/login', options)
    .then(response => {
      if (!response.ok) {
        throw Error('Something went wrong')
      }
      return response.json()
    })
}
