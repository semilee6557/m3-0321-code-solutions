import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '', regexMessage: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    const value = event.target.value;
    const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-zA-Z]).+$/gm;
    const result = value.match(regex);
    if (!result) {
      this.setState({ regexMessage: 'Password require to include a digit, a capital letter and a special caracter.' });
    } else {
      this.setState({ password: value, regexMessage: '' });
    }
  }

  render() {
    let message = '';
    let mark = '';
    if (!this.state.password && !this.state.regexMessage) {
      message = 'A password is reqired.';
      mark = 'fa-times';
    } else if (!this.state.password) {
      message = this.state.regexMessage;
      mark = 'fa-times';
    } else if (this.state.password.length < 7) {
      message = 'Your password is too short.';
      mark = 'fa-times';
    } else {
      mark = 'fa-check';
    }

    return (
    <form onSubmit="this.handleSubmit">
      <label htmlFor="signup-password">Password: </label>
      <div className="input-line">
      <input type="password" name="password" id="signup-password" onChange={this.handleChange} />
      <i className={`fas ${mark}`} ></i>
      </div>
      <div className="error-message">{message}</div>
    </form>
    );
  }
}

export default ValidatedInput;
