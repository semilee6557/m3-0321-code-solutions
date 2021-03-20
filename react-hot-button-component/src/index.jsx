import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.getClass = this.getClass.bind(this);
  }

  handleClick() {
    this.setState({ clicked: this.state.clicked + 1 });
  }

  getClass() {
    const colorList = ['darkblue', 'purple', 'hotpink', 'orange', 'yellow', 'white'];
    let color = 'white';
    if (this.state.clicked >= 3 && this.state.clicked <= 18) {
      color = colorList[parseInt(this.state.clicked / 3) - 1];
    }
    return color;
  }

  render() {
    const colorClass = this.getClass();
    return (
      <button onClick={this.handleClick} className={colorClass}>Hot Button</button>
    );
  }
}

ReactDOM.render(
  <Button />,
  document.querySelector('#root')
);
