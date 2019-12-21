import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  let wrapper;

  it('should match the LoginForm Snapshot', () => {
    wrapper = shallow(<LoginForm />);

    expect(wrapper).toMatchSnapshot();
  });
});
