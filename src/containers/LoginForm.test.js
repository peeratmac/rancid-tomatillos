import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm, mapStateToProps, mapDispatchToProps } from './LoginForm';
import { handleError, updateLoggedInStatus, updateUser } from '../actions';

describe('LoginForm Container', () => {
  describe('LoginForm component', () => {
    let wrapper;
    let mockUpdateUser;
    let mockUpdateLoggedInStatus;
    let mockHandleError;

    beforeEach(() => {
      mockUpdateUser = jest.fn();
      mockUpdateLoggedInStatus = jest.fn();
      mockHandleError = jest.fn();
      wrapper = shallow(<LoginForm
        isLoggedIn={true}
        errorMessage={''}
        updateUser={mockUpdateUser}
        updateLoggedInStatus={mockUpdateLoggedInStatus}
        handleError={mockHandleError}
      />);
    });

    it('should match the LoginForm Snapshot when no one is logged in', () => {
      wrapper = shallow(<LoginForm
        isLoggedIn={false}
        errorMessage={''}
        updateUser={mockUpdateUser}
        updateLoggedInStatus={mockUpdateLoggedInStatus}
        handleError={mockHandleError}
      />);

      expect(wrapper).toMatchSnapshot();
    });

    // it('should match the LoginForm Snapshot when user is logged in', () => {
      // expect(wrapper).toMatchSnapshot();
    // });
  });

  describe('mapStateToProps', () => {
    it('should return an object with error and loggedIn properties from state', () => {
      const mockState = {
        movies: [],
        user: {},
        isLoggedIn: true,
        errorMessage: '',
        loadingStatus: false,
      };
      const expected = {
        isLoggedIn: true,
        errorMessage: ''
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a handleError action when handleInputChange is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = handleError('mockError');
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.handleError('mockError');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with an updateUser action when updateUser is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = updateUser({mock: 'property'});
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.updateUser({mock: 'property'});

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with an updateLoggedInStatus action when updateLoggedInStatus is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = updateLoggedInStatus(true);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.updateLoggedInStatus(true);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
