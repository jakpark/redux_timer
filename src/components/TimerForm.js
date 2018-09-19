import React, { Component } from 'react'

class TimerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        mins: '',
        secs: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // onKeyUp="if(this.value > 15) this.value = 15;"
  // onKeyUp="if(this.value > 60) this.value = 60;"

  handleInput(e) {
    // this.value = Math.abs(this.value)
  }
  handleSubmit(e) {
    e.preventDefault();
    debugger

    // START_TIMER();
    // this.value = Math.abs(this.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Input Time:</h1>
        <label>
          Minute
          <input type="number" onChange={this.handleInput} value={this.mins} min="0" max="15" id="input-minute"/>
        </label>
        <label>
          Seconds
          <input type="number" onChange={this.handleInput} value={this.secs} min="0" max="60" id="input-second"/>
        </label>
        <hr/>
        <button type="submit" value="Click">
        Start Timer
        </button>
      </form>
    )
  }
}

export default TimerForm;