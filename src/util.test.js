import {findRating} from './util';

describe('Util', () => {
  let mockId;
  let mockUser;

  beforeEach(() => {
    mockId = 3;
    mockUser = {id: 9, name: 'Marge', email: 'marge@turing.io', ratings: [
      {id:45,
        user_id:9,
        movie_id:1,
        rating:8,
        created_at:"2019-12-25T20:16:34.893Z",
        updated_at:"2019-12-25T20:16:34.893Z"},
      {id:46,
        user_id:9,
        movie_id:3,
        rating:10,
        created_at:"2019-12-25T20:30:21.606Z",
        updated_at:"2019-12-25T20:30:21.606Z"}
      ]}
  })

  it('should return correct rating score when passed the correct arguments',
    () => {
    let expected = 10;
    expect(findRating(mockId, mockUser, 'rating')).toEqual(expected);
  });

  it('should return correct rating id when passed the correct arguments',
    () => {
    let expected = 46;
    expect(findRating(mockId, mockUser, 'id')).toEqual(expected);
  });

  it('should return \'...\' when user has not yet rated movie', () => {
    mockUser = {id: 9, name: 'Marge', email: 'marge@turing.io', ratings: [
      {id:45,
        user_id:9,
        movie_id:1,
        rating:8,
        created_at:"2019-12-25T20:16:34.893Z",
        updated_at:"2019-12-25T20:16:34.893Z"},
      {id:46,
        user_id:9,
        movie_id:2,
        rating:10,
        created_at:"2019-12-25T20:30:21.606Z",
        updated_at:"2019-12-25T20:30:21.606Z"}
      ]};
    let expected = '...';
    expect(findRating(mockId, mockUser, 'rating')).toEqual(expected);
  });

  it('should return an array of sorted movies when passed an array of films', () => {
    const mockMoviesData = [
      {
        id: 2,
        title: 'Ad Astra',
        poster_path:
          'https://image.tmdb.org/t/p/original//xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
        backdrop_path:
          'https://image.tmdb.org/t/p/original//5BwqwxMEjeFtdknRV792Svo0K1v.jpg',
        release_date: '2019-09-17',
        overview:
          'The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.',
        average_rating: 7
      },
      {
        id: 1,
        title: 'Jumanji: The Next Level',
        poster_path:
          'https://image.tmdb.org/t/p/original//l4iknLOenijaB85Zyb5SxH1gGz8.jpg',
        backdrop_path:
          'https://image.tmdb.org/t/p/original//zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg',
        release_date: '2019-12-04',
        overview:
          "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
        average_rating: 4
      }
    ];
    let expected = [
      {
        id: 1,
        title: 'Jumanji: The Next Level',
        poster_path:
          'https://image.tmdb.org/t/p/original//l4iknLOenijaB85Zyb5SxH1gGz8.jpg',
        backdrop_path:
          'https://image.tmdb.org/t/p/original//zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg',
        release_date: '2019-12-04',
        overview:
          "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
        average_rating: 4
      },
      {
        id: 2,
        title: 'Ad Astra',
        poster_path:
          'https://image.tmdb.org/t/p/original//xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
        backdrop_path:
          'https://image.tmdb.org/t/p/original//5BwqwxMEjeFtdknRV792Svo0K1v.jpg',
        release_date: '2019-09-17',
        overview:
          'The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.',
        average_rating: 7
      }
    ];

    expect(sortFilms(mockMoviesData)).toEqual(expected);
  });
})
