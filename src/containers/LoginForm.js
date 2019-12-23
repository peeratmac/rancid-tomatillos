import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginForm.css';
import { updateUser, updateLoggedInStatus, handleError } from '../actions/index';
import { fetchUserLogin, fetchRatings } from '../apiCalls';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  validateInputs = () => {
    if (this.state.email === '' || this.state.password === '') {
      this.setState({error: 'All input fields required'})
    }
  }

  handleInputChange(event) {
    this.setState({error: ''});
    this.props.handleError('');
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.validateInputs();
    if (this.state.error === '') {
      fetchUserLogin(this.state.email, this.state.password)
        .then(data => {
          const { updateUser, updateLoggedInStatus } = this.props;
          fetchRatings(data.user.id)
            .then(ratingData => {
              updateLoggedInStatus(true);
              updateUser({ ...data.user, ratings: ratingData.ratings });
            })
            .catch(error => {
              console.log('Error retrieving ratings')
            })
        })
        .catch(error => {
          this.props.handleError('Invalid login attempt, please try again')
        })
    }
  }

  render() {
    return this.props.isLoggedIn ? (
      <Redirect to='/' />
    ) : (
      <section className='login-section'>
        <div className='form-container'>
          <h1 className='form-title'>Login Form</h1>
          <h1 className='error-styling'>{this.state.error}</h1>
          {!this.state.error && <h1 className='error-styling'>{this.props.errorMessage}</h1>}
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

export const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  errorMessage: state.errorMessage
})

export const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  updateLoggedInStatus: status => dispatch(updateLoggedInStatus(status)),
  handleError: errorMessage => dispatch(handleError(errorMessage))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

LoginForm.propTypes = {
  isLoggedIn: PropTypes.bool,
  updateUser: PropTypes.func,
  updateLoggedInStatus: PropTypes.func,
  handleError: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  errorMessage: PropTypes.string
};
