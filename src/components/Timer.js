import React, { Component } from 'react'

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayTime: {
        mins: 0,
        secs: "00"
      }
    };
  }

  render() {
    return (
      <div>
        <h1>
          Time left (MM:SS):
        </h1>
        <div>
          <span id="timer-mins">
            { this.state.displayTime.mins }
          </span>
          :
          <span id="timer-secs">
          { this.state.displayTime.secs }
          </span>
        </div>
    </div>
    )
  }
}

export default Timer