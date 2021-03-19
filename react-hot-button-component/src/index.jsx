import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: 0, color: 'white' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newClickNum = this.state.clicked + 1;

    this.setState({ clicked: newClickNum });

    const colorList = ['darkblue', 'purple', 'hotpink', 'orange', 'yellow', 'white'];
    let newColor = '';
    if (Number.isInteger((newClickNum) / 3) && (newClickNum) < 19) {
      newColor = colorList[(newClickNum) / 3 - 1];
      this.setState({ color: newColor });
    }
  }

  render() {
    return (
      <button onClick={this.handleClick} className={this.state.color}>Hot Button</button>
    );
  }
}

ReactDOM.render(
  <Button />,
  document.querySelector('#root')
);
