import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { updateTimer } from '../actions/timerActions'

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayTime: {
        mins: "00",
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
            { this.props.displayTime.mins }
          </span>
          :
          <span id="timer-secs">
          { this.props.displayTime.secs }
          </span>
        </div>
    </div>
    )
  }
}

Timer.propTypes = {
  displayTime: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  displayTime: state.timer.displaytime
});

export default connect(mapStateToProps, { updateTimer })(Timer)