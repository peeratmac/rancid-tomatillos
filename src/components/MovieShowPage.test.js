import React from 'react';
import { shallow } from 'enzyme';
import { MovieShowPage, mapStateToProps, mapDispatchToProps } from './MovieShowPage';
import { updateUser} from '../actions'

describe('MovieShowPage', () => {
  let wrapper, mockUpdateUser;

  beforeEach(() => {
    mockUpdateUser = jest.fn();
    wrapper = shallow(<MovieShowPage
      id={2}
      title="Ad Astra"
      poster_path="https://image.tmdb.org/t/p/original//xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
      backdrop_path="https://image.tmdb.org/t/p/original//5BwqwxMEjeFtdknRV792Svo0K1v.jpg"
      release_date="2019-09-17"
      overview="The near future, humanity to look to the stars an....."
      average_rating={5.142857142857143}
      isLoggedIn={true}
      updateUser={mockUpdateUser}
      user={ {id: 22, name: 'Marge', email: 'marge@turing.io', ratings: [
        {id:45,
          user_id:9,
          movie_id:8,
          rating:8,
          created_at:"2019-12-25T20:16:34.893Z",
          updated_at:"2019-12-25T20:16:34.893Z"},
        {id:46,
          user_id:9,
          movie_id:10,
          rating:10,
          created_at:"2019-12-25T20:30:21.606Z",
          updated_at:"2019-12-25T20:30:21.606Z"}
        ]} }
    />)
  })

  it('should match the MovieShowPage Snapshot', () => {
    wrapper = shallow(<MovieShowPage
      id={2}
      title="Ad Astra"
      poster_path="https://image.tmdb.org/t/p/original//xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
      backdrop_path="https://image.tmdb.org/t/p/original//5BwqwxMEjeFtdknRV792Svo0K1v.jpg"
      release_date="2019-09-17"
      overview="The near future, humanity to look to the stars an....."
      average_rating={5.142857142857143}
      isLoggedIn={false}
      updateUser={mockUpdateUser}
      user={ {} }
      />);
    expect(wrapper).toMatchSnapshot();
  });

// Should have snapshop test for each conditional rendering possibility
// Do we need to pass the props through for proper snapshot?
// 'should match the MovieShowPage snapshot when no user logged in'
// 'should match snapshot when logged in and user rating < 10'
// 'should match snapshot when logged in and user rating === 10'
// 'should match snapshot when logged in and no user rating yet'

  //
  // it('should', () => {
  //
  // });
  //
  // it('should', () => {
  //
  // });
  //
  // it('should', () => {
  //
  // });
  //
  // it('should', () => {
  //
  // });




  describe('mapsStateToProps', () => {
    it('should return only the necessary information from the redux store', () => {
      const mockState = {
        movies: [],
        user: {newUser: 'Tron'},
        isLoggedIn: true,
        errorMessage: '',
        loadingStatus: false,
      };
      const expected = {
        isLoggedIn: true,
        user: {newUser: 'Tron'}
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with an updateUser action when updateUser is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = updateUser({some: 'thing'});
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.updateUser({some: 'thing'});

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
