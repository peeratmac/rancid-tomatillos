import React from 'react';
import { shallow } from 'enzyme';
import { MovieShowPage } from './MovieShowPage';

describe('MovieShowPage', () => {
  let wrapper;

  it('should match the MovieShowPage Snapshot', () => {
    wrapper = shallow(<MovieShowPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
