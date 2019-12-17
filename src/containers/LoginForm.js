import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1>LoginForm</h1>
      </div>
    );
  }
}

export default connect(null, null)(LoginForm);
