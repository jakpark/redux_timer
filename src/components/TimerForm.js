import React, { Component } from 'react'
import { test } from '../utils/TimerCalc';

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
    this.setState({[e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    test();

    // START_TIMER();
    // this.value = Math.abs(this.value)
  }

  render() {
    return (
      <div>
        <h1>Input Time:</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Minute
            <input type="number" 
                  name="mins" 
                  onChange={this.handleInput} 
                  value={this.state.mins} min="0" max="15"/>
          </label>
          <label>
            Seconds
            <input type="number" 
                  name="secs"  
                  onChange={this.handleInput} 
                  value={this.state.secs} min="0" max="60"/>
          </label>
          <hr/>
          <button type="submit" value="Click">
          Start Timer
          </button>
        </form>
      </div>
    )
  }
}

export default TimerForm;