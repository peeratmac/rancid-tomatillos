import React from 'react';
import { shallow } from 'enzyme';
import { MovieShowPage, mapStateToProps, mapDispatchToProps } from './MovieShowPage';
import { updateUser} from '../actions'

describe('MovieShowPage', () => {
  let wrapper;

  it('should match the MovieShowPage Snapshot', () => {
    wrapper = shallow(<MovieShowPage />);

    expect(wrapper).toMatchSnapshot();
  });

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
        allMovies: [],
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
