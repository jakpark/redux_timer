import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { totalTimeInSeconds } from '../utils/TimerCalc';
import { dispatchTimer } from '../actions/timerActions';

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

  handleInput(e) {
    if ( e.target.value == "" ) { e.target.value = 0 }
    let parsedVal = parseInt(e.target.value);
    
    this.setState({[e.target.name]: parsedVal });
  }

  handleSubmit(e) {
    e.preventDefault();

    const totalTime = totalTimeInSeconds(this.state.mins, this.state.secs);
    this.props.dispatchTimer(totalTime);
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

TimerForm.propTypes = {
  dispatchTimer: PropTypes.func.isRequired
}

export default connect(null, { dispatchTimer })(TimerForm);