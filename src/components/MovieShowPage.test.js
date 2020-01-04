import React from 'react';
import { shallow } from 'enzyme';
import { MovieShowPage, mapStateToProps, mapDispatchToProps } from './MovieShowPage';
import { updateUser} from '../actions';
import { updateRatings, fetchRatings, deleteRating } from '../apiCalls';

jest.mock('../apiCalls.js');

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
      user={ {id: 9, name: 'Marge', email: 'marge@turing.io', ratings: [
        {id:45,
          user_id:9,
          movie_id:2,
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
    />);
    deleteRating.mockImplementation(() => {
      return Promise.resolve()
    });
    updateRatings.mockImplementation(() => {
      return Promise.resolve({ rating: { user_id: 9, movie_id: 2, rating: 2 } })
    });
    fetchRatings.mockImplementation(() => {
      return Promise.resolve({ ratings: [
        {id: 45, user_id: 9, movie_id: 8, rating: 8,
          created_at: "2019-12-25T20:16:34.893Z",
          updated_at: "2019-12-25T20:16:34.893Z"
        },
        {id: 46, user_id: 9, movie_id: 10, rating: 5,
          created_at: "2019-12-25T20:30:21.606Z",
          updated_at: "2019-12-25T20:30:21.606Z"
        } ] })
    })
  })

  it('should match the MovieShowPage Snapshot with no logged in user', () => {
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

  it('should match snapshot when user is logged in and rating is less than 10',
    () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when user is logged in and rating is 10',
    () => {
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
        user={ {id: 9, name: 'Marge', email: 'marge@turing.io', ratings: [
          {id:45,
            user_id:9,
            movie_id:10,
            rating:8,
            created_at:"2019-12-25T20:16:34.893Z",
            updated_at:"2019-12-25T20:16:34.893Z"},
          {id:46,
            user_id:9,
            movie_id:2,
            rating:10,
            created_at:"2019-12-25T20:30:21.606Z",
            updated_at:"2019-12-25T20:30:21.606Z"}
          ]} }
      />)
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when logged in and no user rating yet', () => {
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
      user={ {id: 9, name: 'Marge', email: 'marge@turing.io', ratings: []} }
    />)
    expect(wrapper).toMatchSnapshot();
  });

  //DO WE NEED A TEST FOR INVOCATION OF findUserRating SINCE IT HAPPENS DURING RENDERING AUTOMATICALLY?
  it('should invoke deleteRating on click', () => {
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
      user={ {id: 9, name: 'Marge', email: 'marge@turing.io', ratings: [
        {id:45,
          user_id:9,
          movie_id:2,
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
    />);
    wrapper.find('.reset-rating').simulate('click');
    expect(deleteRating).toHaveBeenCalledWith(45, 9);
  });

  it('should invoke fetchRatings when deleteRating is resolved', () => {
    deleteRating(45, 9);
    expect(fetchRatings).toHaveBeenCalledWith(9);
  })



  it('should invoke handleRatingsUpdates on click of any rating button (10)', () => {
   let mockEvent = { target: {value: '2'} };
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
     user={ {id: 9, name: 'Marge', email: 'marge@turing.io', ratings: [
       {id:45,
         user_id:9,
         movie_id:4,
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
   />);
   wrapper.instance().handleRatingsUpdates = jest.fn();
   wrapper.find('.btn-two').simulate('click', mockEvent);
   expect(wrapper.instance().handleRatingsUpdates).toHaveBeenCalledWith(mockEvent);
  });

  it('should invoke updateRatings fetch when handleRatingsUpdates is called', () => {
    let mockEvent = { target: {value: '2'} };
    wrapper.instance().handleRatingsUpdates(mockEvent);
    expect(updateRatings).toHaveBeenCalledWith(2, 2, 9);
  });

  it('should invoke fetchRatings when updateRatings resolves', () => {
    updateRatings(2, 2, 9);
    expect(fetchRatings).toHaveBeenCalledWith(9);
  });

  // it('should invoke updateUser when fetchRatings resolves', () => {
  //   let mockNewRatings = {id: 9, name: 'Marge', email: 'marge@turing.io', ratings: [
  //     {id: 45, user_id: 9, movie_id: 8, rating: 8,
  //       created_at: "2019-12-25T20:16:34.893Z",
  //       updated_at: "2019-12-25T20:16:34.893Z"
  //     },
  //     {id: 46, user_id: 9, movie_id: 10, rating: 5,
  //       created_at: "2019-12-25T20:30:21.606Z",
  //       updated_at: "2019-12-25T20:30:21.606Z"
  //     } ]};
  //   fetchRatings(9);
  //   expect(mockUpdateUser).toHaveBeenCalledWith(mockNewRatings);
  //   // FAILING TEST - NUMBER OF CALLS: 0 - WHY???
  // });

  // Nested describe for findUserRating???  Do we need this?
  // it('should return rating for already rated movie', () => {
  //
  // });
  // it('should return '...' for unrated movie', () => {
  //
  // });
  // end nested describe for findUserRating

  // HOW DO I MAKE THE TEST BELOW DIFFERENT FROM THE IDENTICAL ONE ABOVE SINCE FETCH RATINGS IS INVOKED MORE THAN ONCE?
  // lines 23-25 are identical to lines 42-44 so maybe we can wrap them in a handler function?
  // it('should invoke updateUser when fetchRatings resolves', () => {
  //
  // });

  // Do we need to test findRatingId?


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
