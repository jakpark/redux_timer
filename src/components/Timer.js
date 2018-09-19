import React, { Component } from 'react'

class Timer extends Component {
  render() {
    return (
      <div class="countdown">
        <h1>
          Time left (MM:SS):
        </h1>
        <div class="">
          <span id="timer-mins">
            0
          </span>
          :
          <span id="timer-secs">
            0
          </span>
        </div>
    </div>
    )
  }
}

export default Timer