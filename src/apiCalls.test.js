import {
  fetchAllMovies,
  fetchUserLogin,
  fetchRatings,
  updateRatings
} from './apiCalls';

describe('apiCalls', () => {
  describe('fetchAllMovies', () => {
    let mockResponse = [
      {
        id: 2,
        title: 'Ad Astra',
        poster_path:
          'https://image.tmdb.org/t/p/original//xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
        backdrop_path:
          'https://image.tmdb.org/t/p/original//5BwqwxMEjeFtdknRV792Svo0K1v.jpg',
        release_date: '2019-09-17',
        average_rating: 5,
        overview:
          'The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.'
      },
      {
        id: 3,
        title: 'Frozen II',
        poster_path:
          'https://image.tmdb.org/t/p/original//pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg',
        backdrop_path:
          'https://image.tmdb.org/t/p/original//xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg',
        release_date: '2019-11-20',
        average_rating: 6.333333333333333,
        overview:
          'Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.'
      }
    ];

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return Promise.resolve(mockResponse);
          }
        });
      });
    });

    it('should be passed the correct URL', () => {
      fetchAllMovies();

      expect(window.fetch).toHaveBeenCalledWith(
        'https://rancid-tomatillos.herokuapp.com/api/v1/movies'
      );
    });

    it('should return an array of movies', () => {
      expect(fetchAllMovies()).resolves.toEqual(mockResponse);
    });

    it('should return an error for response that is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(fetchAllMovies()).rejects.toEqual(Error('Error with GET request'));
    });
  });

  describe('fetchUserLogin', () => {
    let mockResponse = { id: 9, name: 'Marge', email: 'marge@turing.io' };
    let mockEmail = 'marge@turing.io';
    let mockPassword = 'topsecretpassword';
    let mockBody = { email: mockEmail, password: mockPassword };
    let mockOptions = {
      method: 'POST',
      body: JSON.stringify(mockBody),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return Promise.resolve(mockResponse);
          }
        });
      });
    });

    it('should be passed the correct URL', () => {
      fetchUserLogin(mockEmail, mockPassword);

      expect(window.fetch).toHaveBeenCalledWith(
        'https://rancid-tomatillos.herokuapp.com/api/v1/login',
        mockOptions
      );
    });

    it('should return a user object', () => {
      expect(fetchUserLogin(mockEmail, mockPassword)).resolves.toEqual(
        mockResponse
      );
    });

    it('should return an error for response that is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });

      expect(fetchUserLogin()).rejects.toEqual(Error('Something went wrong'));
    });
  });

  describe('fetchRatings', () => {
    let mockResponse = { ratings: [] };
    let mockUserId = 3;

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return Promise.resolve(mockResponse);
          }
        });
      });
    });

    it('should be passed the correct URL', () => {
      fetchRatings(mockUserId);

      expect(window.fetch).toHaveBeenCalledWith(
        `https://rancid-tomatillos.herokuapp.com/api/v1/users/${mockUserId}/ratings`
      );
    });

    it('should return an object with a ratings key with an array of ratings', () => {
      expect(fetchRatings(mockUserId)).resolves.toEqual(mockResponse);
    });

    it('should return an error for response that is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });

      expect(fetchRatings(mockUserId)).rejects.toEqual(
        Error('Something went wrong')
      );
    });
  });

  describe('updateRatings', () => {
    let mockResponse = {
      movie_id: 9,
      rating: 10
    };
    let mockMovieId = 9;
    let mockRating = 10;
    let mockUserId = 9;

    const mockOptions = {
      method: 'POST',
      body: JSON.stringify(mockResponse),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    it('should passed the correct URL', () => {
      updateRatings(mockMovieId, mockRating, mockUserId);

      expect(window.fetch).toHaveBeenCalledWith(
        `https://rancid-tomatillos.herokuapp.com/api/v1/users/${mockUserId}/ratings`,
        mockOptions
      );
    });

    it('should return an object with a ratings key with an array of movie_id and rating', () => {
      expect(
        updateRatings(mockMovieId, mockRating, mockUserId)
      ).resolves.toEqual(mockResponse);
    });

    it('should return an error for response that is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });

      expect(fetchRatings(mockUserId)).rejects.toEqual(
        Error('Something went wrong')
      );
    });
  });
});
