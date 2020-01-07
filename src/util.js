export const findRating = (id, user, type) => {
  const userRatingsIds = user.ratings.map(rating => rating.movie_id);
    if (userRatingsIds.includes(id)) {
      return user.ratings.find(movie => movie.movie_id === id)[type]
    } else if (type === 'rating' && !userRatingsIds.includes(id)) {
      return '...';
    }
}

export const sortFilms = (allMovies) => {
  const sortedFilms = [...allMovies].sort((a, b) => {
    if (a.release_date > b.release_date) {
      return -1
    }

    if (a.release_date < b.release_date) {
      return 1
    }
  })

  return sortedFilms
};
