export const fetchAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
    .then(response => {
      if (!response.ok) {
        throw Error('Error with GET request')
      }
      return response.json()
    })
};

export const fetchUserLogin = (email, password) => {
  const body = { email: email, password: password };

  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(
    'https://rancid-tomatillos.herokuapp.com/api/v1/login',
    options
  ).then(response => {
    if (!response.ok) {
      throw Error('Something went wrong');
    }
    return response.json();
  });
};

export const fetchRatings = userId => {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v1/users/${userId}/ratings`
  ).then(response => {
    if (!response.ok) {
      throw Error('Something went wrong');
    }
    return response.json();
  });
};

export const updateRatings = (movieId, rating, userId) => {
  const body = { movie_id: movieId, rating: rating };

  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v1/users/${userId}/ratings`,
    options
  ).then(response => {
    if (!response.ok) {
      throw Error('Something went wrong');
    }
    return response.json();
  });
};
