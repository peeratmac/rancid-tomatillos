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
  

});
