import { updateUser, updateLoggedInStatus } from './actions/index';
import { updateRatings, fetchRatings, deleteRating } from './apiCalls';
import { connect } from 'react-redux';


// export const handleDeleteRating = (id, user) => {
//     deleteRating(findRatingId(id, user), user.id)
//       .then(data => {
//         fetchRatings(user.id).then(ratingData => {
//           const updatedRatings = { ...user, ratings: ratingData.ratings };
//           updateUser(updatedRatings);
//       })
//     })
//   };

// export const handleRatingsUpdates = (event, id, user) => {
//     updateRatings(id, Number(event.target.value), user.id).then(data => {
//       fetchRatings(user.id).then(ratingData => {
//         const newRatings = { ...user, ratings: ratingData.ratings };
//         updateUser(newRatings);
//       });
//     })
//   };

// export const findUserRating = (id, user) => {
//     const userRatings = user.ratings.map(rating => rating.movie_id);
//     if (userRatings.includes(id)) {
//       return user.ratings.find(movie => movie.movie_id === id).rating;
//     } else {
//       return '...';
//     }
//   };
//
//
// export const findRatingId = (id, user) => {
//       const movieIds = user.ratings.map(rating => rating.movie_id);
//       if (movieIds.includes(id)) {
//         return user.ratings.find(movie => movie.movie_id === id).id;
//       }
//       console.log(user.ratings.find(movie => movie.movie_id === id).id)
//     };
