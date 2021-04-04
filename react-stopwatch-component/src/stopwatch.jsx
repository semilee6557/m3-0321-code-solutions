import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPlay: false, time: { mins: 0, sec: 0, milisec: 0 }, lap: [], nextLapId: 1 };
    this.handleClick = this.handleClick.bind(this);
    this.changeController = this.changeController.bind(this);
    this.timerOn = this.timerOn.bind(this);
    this.timerOff = this.timerOff.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleLap = this.handleLap.bind(this);
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
      this.setState({ time: { mins: 0, sec: 0, milisec: 0 } });
      this.setState({ lap: [] });
      this.setState({ nextLapId: 1 });
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
      let { mins, sec, milisec } = this.state.time;
      milisec++;
      if (milisec === 10) {
        milisec = 0;
        sec++;
      } else if (sec === 60) {
        sec = 0;
        mins++;
      }
      this.setState({ time: { mins: mins, sec: sec, milisec: milisec } });
    }, 100);
  }

  timerOff() {
    clearInterval(this.IntervalId);
  }

  displayTime() {
    let { mins, sec, milisec } = this.state.time;
    if (mins < 10) {
      mins = '0' + mins;
    }
    if (sec < 10) {
      sec = '0' + sec;
    }
    if (milisec < 10) {
      milisec = '0' + milisec;
    }
    return { mins: mins, sec: sec, milisec: milisec };
  }

  handleLap() {
    const split = this.displayTime();
    const data = this.state.lap;
    data.push({ id: this.state.nextLapId, time: split });
    this.setState({ lap: data });
    let nextLapId = this.state.nextLapId;
    nextLapId++;
    this.setState({ nextLapId: nextLapId });
  }

  render() {
    const controller = this.changeController();
    const { mins, sec, milisec } = this.displayTime();
    return (
      <div className="container">
        <button onClick={this.handleReset} className="stopWatch"> {mins}:{sec}:{milisec} </button>
        <button onClick={this.handleClick} className="control">{controller}</button>
        <button onClick={this.handleLap}>Split</button>
        <Table lap={this.state.lap} />
      </div>
    );
  }
}

function Table(props) {

  const lap = props.lap;

  const lapList = lap.map((data, index) => {
    const id = index + 1;
    return (<tbody key={id}>
      <tr>
       <th scope="row" >{id}</th>
        <td>{data.time.mins}:{data.time.sec}:{data.time.milisec}</td>
       <td>Split</td>
      </tr>
     </tbody>
    );
  }
  );
  return (
    <table className="table">
      {lapList}
    </table>
  );

}

export default Stopwatch;
