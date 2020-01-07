import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { addMovies, handleError, isLoading } from '../../actions'

describe('App', () => {
  let wrapper;
  const mockMoviesData = [
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
    },
    {
      id: 3,
      title: 'Frozen II',
      poster_path:
        'https://image.tmdb.org/t/p/original//pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg',
      backdrop_path:
        'https://image.tmdb.org/t/p/original//xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg',
      release_date: '2019-11-20',
      overview:
        'Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.',
      average_rating: 8
    }
  ];

  it('should match the App Snapshot', () => {
    wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapsStateToProps', () => {
    it('should return only the necessary information from the redux store', () => {
      const mockState = {
        movies: [
          {
            id: 1,
            title: 'Jumanji: The Next Level',
            poster_path: 'https://image.tmdb.org/t/p/original//l4iknLOenijaB85Zyb5SxH1gGz8.jpg',
            backdrop_path: 'https://image.tmdb.org/t/p/original//zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg',
            release_date: '2019-12-04',
            overview: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
            average_rating: 4
          }
        ],
        user: {oldUser: 'Grandpa Gary'},
        isLoggedIn: true,
        errorMessage: '',
        loadingStatus: false,
      };
      const expected = {
        allMovies: [
          {
            id: 1,
            title: 'Jumanji: The Next Level',
            poster_path: 'https://image.tmdb.org/t/p/original//l4iknLOenijaB85Zyb5SxH1gGz8.jpg',
            backdrop_path: 'https://image.tmdb.org/t/p/original//zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg',
            release_date: '2019-12-04',
            overview: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
            average_rating: 4
          }
        ],
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with an addMovies action when addMovies is called',
      () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = addMovies([{some: 'flick'}]);
        const mappedProps = mapDispatchToProps(mockDispatch);

        mappedProps.addMovies([{some: 'flick'}]);

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with an handleError action when handleError is called',
      () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = handleError('Mega Mishap');
        const mappedProps = mapDispatchToProps(mockDispatch);

        mappedProps.handleError('Mega Mishap');

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with an isLoading action when isLoading is called',
      () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = isLoading(false);
        const mappedProps = mapDispatchToProps(mockDispatch);

        mappedProps.isLoading(false);

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
