import React, { Component } from 'react'

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        displayTime: 0,
    };
  }

  render() {
    return (
      <div class="countdown">
        <h1>
          Time left (MM:SS):
        </h1>
        <div class="">
          <span id="timer-mins">
            { this.state.displayTime.mins }
          </span>
          :
          <span id="timer-secs">
          { this.state.displayTime.mins }
          </span>
        </div>
    </div>
    )
  }
}

export default Timer