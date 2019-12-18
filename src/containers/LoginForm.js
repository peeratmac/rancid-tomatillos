import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <section className="login-section">
        <form>
          <div className="input-container">
            <label for="email-input">Email:</label>
            <input id="email-input" type="text" placeholder="Email Address" value={this.state.email} name="email" onChange={event => this.handleInputChange(event)} />
          </div>
          <div className="input-container">
            <label for="password-input">Password:</label>
            <input id="password-input" type="text" placeholder="Password" value={this.state.password} name="password" onChange={event => this.handleInputChange(event)} />
          </div>
        </form>
        <h1>LoginForm</h1>
      </div>
    );
  }
}

export default connect(null, null)(LoginForm);
