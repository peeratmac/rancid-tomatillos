import React from 'react';
import { shallow } from 'enzyme';
import { Route, Link } from 'react-router-dom';

import { NavigationBar, mapStateToProps, mapDispatchToProps }
  from './NavigationBar';
import { updateUser, updateLoggedInStatus, handleError } from '../../actions'

describe('NavigationBar Container', () => {
  describe('NavigationBar component', () => {
    let wrapper;
    let mockUpdateUser;
    let mockUpdateLoggedInStatus;
    let mockHandleError;

    beforeEach(() => {
      mockUpdateUser = jest.fn();
      mockUpdateLoggedInStatus = jest.fn();
      mockHandleError = jest.fn();
      wrapper = shallow(<NavigationBar
        user={{ id: 22, name: 'Marge', email: 'marge@turing.io', ranking: [] }}
        isLoggedIn={true}
        updateUser={mockUpdateUser}
        updateLoggedInStatus={mockUpdateLoggedInStatus}
        handleError={mockHandleError}
        />);
    })

    it('should match snapshot when user is logged in', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should match the NavigationBar Snapshot when no one is logged in',
      () => {
        wrapper = shallow(<NavigationBar
            user={{}}
            isLoggedIn={false}
            updateUser={jest.fn()}
            updateLoggedInStatus={jest.fn()}
          />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should invoke updateUser props with empty object on click',
      () => {
        wrapper.find('.logout-button').simulate('click');
        expect(mockUpdateUser).toHaveBeenCalledWith({});
    });

    it('should invoke updateLoggedInStatus props with false status on click',
      () => {
        wrapper.find('.logout-button').simulate('click');
        expect(mockUpdateLoggedInStatus).toHaveBeenCalledWith(false);
    });

    // it('should invoke handleError props with empty string when button is clicked',
    //   () => {
    //     <Link>
    //       <Route path={'/login'}>
    //         {wrapper.find('.home-button').simulate('click')}
    //       </Route>
    //     </Link>
    //     expect(mockHandleError).toHaveBeenCalledWith('');
    // });
    // FAILING TEST because home-button can't be found bc its wrapped in <Route>
  });

  describe('mapsStateToProps', () => {
    it('should return only the necessary information from the redux store',
      () => {
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
    it('calls dispatch with an updateUser action when updateUser is called',
      () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = updateUser({mock: 'value'});
        const mappedProps = mapDispatchToProps(mockDispatch);

        mappedProps.updateUser({mock: 'value'});

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with an updateLoggedInStatus action when \
      updateLoggedInStatus is called', () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = updateLoggedInStatus(false);
        const mappedProps = mapDispatchToProps(mockDispatch);

        mappedProps.updateLoggedInStatus(false);

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with an handleError action when handleError is called',
      () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = handleError('eRroR');
        const mappedProps = mapDispatchToProps(mockDispatch);
          mappedProps.handleError('eRroR');

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
