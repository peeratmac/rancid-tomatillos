import React from 'react';
import { shallow } from 'enzyme';
import { NavigationBar } from './NavigationBar';

describe('NavigationBar', () => {
  let wrapper;
  let mockUpdateUser;
  let mockUpdateLoggedInStatus;

  beforeEach(() => {
    mockUpdateUser = jest.fn();
    mockUpdateLoggedInStatus = jest.fn();
    wrapper = shallow(<NavigationBar
      user={{ id: 22, name: 'Marge', email: 'marge@turing.io', ranking: [] }}
      isLoggedIn={true}
      updateUser={mockUpdateUser}
      updateLoggedInStatus={mockUpdateLoggedInStatus}
      />);
  })

  it('should match snapshot when user is logged in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the NavigationBar Snapshot when no one is logged in', () => {
    wrapper = shallow(<NavigationBar
        user={{}}
        isLoggedIn={false}
        updateUser={jest.fn()}
        updateLoggedInStatus={jest.fn()}
      />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke updateUser props with empty object when log out button is clicked',
    () => {
      wrapper.find('.logout-button').simulate('click');
      expect(mockUpdateUser).toHaveBeenCalledWith({});
  });

  it('should invoke updateLoggedInStatus props with false status when button is clicked',
    () => {
      wrapper.find('.logout-button').simulate('click');
      expect(mockUpdateLoggedInStatus).toHaveBeenCalledWith(false);
  });

});
