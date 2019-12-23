import React from 'react';
import { shallow } from 'enzyme';
import { NavigationBar } from './NavigationBar';

describe('NavigationBar', () => {
  let wrapper;

  it('should match the NavigationBar Snapshot when no one is logged in', () => {
    wrapper = shallow(<NavigationBar
        user={{}}
        isLoggedIn={false}
        updateUser={jest.fn()}
        updateLoggedInStatus={jest.fn()}
      />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when user is logged in', () => {
    wrapper = shallow(<NavigationBar
      user={{ id: 22, name: 'Marge', email: 'marge@turing.io', ranking: [] }}
      isLoggedIn={true}
      updateUser={jest.fn()}
      updateLoggedInStatus={jest.fn()}
      />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke updateUser props when log out button is clicked',
    () => {
      const mockUpdateUser = jest.fn();
      wrapper = shallow(<NavigationBar
        user={{ id: 22, name: 'Marge', email: 'marge@turing.io', ranking: [] }}
        isLoggedIn={true}
        updateUser={mockUpdateUser}
        updateLoggedInStatus={jest.fn()}
        />);

      wrapper.find('.logout-button').simulate('click');
      expect(mockUpdateUser).toHaveBeenCalledWith({});
  });

  // it('should invoke updateLoggedInStatus props with status passed in when button is clicked',
  //   () => {
  //
  // });

  // without Redux we would test that updateUser and updateLoggedInStatus update
  // state (which is the Redux store).  With Redux, do we still test this? how?
});
