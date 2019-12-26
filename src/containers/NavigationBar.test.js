import React from 'react';
import { shallow } from 'enzyme';
import { NavigationBar, mapStateToProps, mapDispatchToProps } from './NavigationBar';
import { updateUser, updateLoggedInStatus, handleError } from '../actions'

describe('NavigationBar', () => {
  let wrapper;

  it('should match the NavigationBar Snapshot', () => {
    wrapper = shallow(<NavigationBar />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('mapsStateToProps', () => {
    it('should return only the necessary information from the redux store', () => {
      const mockState = {
        movies: [],
        user: {user: 'data'},
        isLoggedIn: true,
        errorMessage: '',
        loadingStatus: false,
      };
      const expected = {
        user: {user: 'data'},
        isLoggedIn: true
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with an updateUser action when updateUser is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = updateUser({mock: 'value'});
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.updateUser({mock: 'value'});

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with an updateLoggedInStatus action when updateLoggedInStatus is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = updateLoggedInStatus(false);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.updateLoggedInStatus(false);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with an handleError action when handleError is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = handleError('eRroR');
      const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.handleError('eRroR');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
