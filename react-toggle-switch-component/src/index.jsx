import React from 'react';
import ReactDOM from 'react-dom';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
    this.getId = this.getId.bind(this);
  }

  handleClick() {
    this.setState({ isToggleOn: !this.state.isToggleOn });
  }

  getId() {
    if (this.state.isToggleOn) {
      return 'on';
    }
    return 'off';
  }

  render() {
    const getId = this.getId();
    const upperCase = getId.toUpperCase();
    return (
      <label htmlFor="switch">
       <button onClick = {this.handleClick} id="container">
          <button id={getId}></button>
        </button>  {upperCase}</label>

    );
  }
}

ReactDOM.render(
  <ToggleSwitch />,
  document.querySelector('#root')
);
