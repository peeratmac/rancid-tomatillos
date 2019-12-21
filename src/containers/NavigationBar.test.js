import React from 'react';
import { shallow } from 'enzyme';
import { NavigationBar } from './NavigationBar';

describe('NavigationBar', () => {
  let wrapper;

  it('should match the NavigationBar Snapshot', () => {
    wrapper = shallow(<NavigationBar />);

    expect(wrapper).toMatchSnapshot();
  });
});
