import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginForm.css';
import { updateUser, updateLoggedInStatus } from '../actions/index';
import { fetchUserLogin } from '../apiCalls';
import { Redirect } from 'react-router'

class LoginForm extends Component {
  constructor(props) {
    super(props);
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
        const { updateUser, updateLoggedInStatus } = this.props;
        updateUser({ ...data.user });
        updateLoggedInStatus(true);
      })
      .catch(error => console.log('error: ', error));
  }

  render() {
    return (
      (this.props.isLoggedIn)
        ? <Redirect to='/'/>
        : <section className='login-section'>
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

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  updateLoggedInStatus: status => dispatch(updateLoggedInStatus(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
