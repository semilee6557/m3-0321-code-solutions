import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPlay: false, time: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.changeController = this.changeController.bind(this);
    this.timerOn = this.timerOn.bind(this);
    this.timerOff = this.timerOff.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick() {
    this.handleTimer();
    this.setState({ isPlay: !this.state.isPlay });
  }

  handleTimer() {
    if (!this.state.isPlay) {
      this.timerOn();
    } else {
      this.timerOff();
    }
  }

  handleReset() {
    if (!this.state.isPlay) {
      this.setState({ time: 0 });
    }
  }

  changeController() {
    if (this.state.isPlay) {
      return (<i className="fas fa-pause"></i>);
    }
    return (<i className="fas fa-play"></i>);
  }

  timerOn() {
    this.IntervalId = setInterval(() => {
      let current = this.state.time;
      current++;
      this.setState({ time: current });
    }, 1000);
  }

  timerOff() {
    clearInterval(this.IntervalId);
  }

  render() {
    const controller = this.changeController();
    return (
      <div className="container">
       <button onClick={this.handleReset} className="stopWatch"> {this.state.time} </button>
        <button onClick={this.handleClick} className="control">{controller}</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Stopwatch />,
  document.querySelector('#root')
);
