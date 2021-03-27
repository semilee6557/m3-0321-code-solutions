import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  }

  render() {
    let message = '';
    let mark = '';
    if (!this.state.password) {
      message = 'A password is reqired.';
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
