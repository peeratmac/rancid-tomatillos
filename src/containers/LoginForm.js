import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginForm.css';
import { updateUser } from '../actions/index';
import { fetchUserLogin } from '../apiCalls';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetchUserLogin(this.state.email, this.state.password)
      .then(data => {
        const { updateUser } = this.props;
        updateUser({ ...data.user });
      })
      .catch(error => console.log('error: ', error));
  }

  render() {
    return (
      <section className='login-section'>
        <div className='form-container'>
          <h1>Login Form</h1>
          <form onSubmit={event => this.handleSubmit(event)}>
            <div className='input-container'>
              <label htmlFor='email-input'>Email:</label>
              <input
                id='email-input'
                type='text'
                placeholder='Email Address'
                value={this.state.email}
                name='email'
                onChange={event => this.handleInputChange(event)}
              />
            </div>
            <div className='input-container'>
              <label htmlFor='password-input'>Password:</label>
              <input
                id='password-input'
                type='text'
                placeholder='Password'
                value={this.state.password}
                name='password'
                onChange={event => this.handleInputChange(event)}
              />
            </div>
            <button className='submit-btn'>Submit</button>
          </form>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user))
});

export default connect(null, mapDispatchToProps)(LoginForm);
