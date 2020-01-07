import React from 'react';
import { shallow } from 'enzyme';
import NoMatch from './NoMatch';

describe('NoMatch', () => {
  let wrapper;

  it('should match snapshot', () => {
    wrapper = shallow(<NoMatch />);
    expect(wrapper).toMatchSnapshot();
  })
})
