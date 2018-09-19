import React, { Component } from 'react'

class TimerForm extends Component {
  render() {
    return (
      <div class="user-input">
        <h1>Input Time:</h1>
        <label for="">
          Minute
          <input type="number" oninput="this.value = Math.abs(this.value)" onkeyup="if(this.value > 15) this.value = 15;" min="0" max="15" id="input-minute"/>
        </label>
        <label for="">
          Seconds
          <input type="number" oninput="this.value = Math.abs(this.value)" onkeyup="if(this.value > 60) this.value = 60;" min="0" max="60" id="input-second"/>
        </label>

        <button type="submit" onclick="START_TIMER()" value="Click"/>
      </div>
    )
  }
}

export default TimerForm;