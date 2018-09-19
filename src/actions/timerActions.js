import { START_TIMER } from './types';
import { UPDATE_TIMER } from './types';
import { startTimer } from '../utils/TimerCalc';

export const dispatchTimer = (totalTime) => dispatch => {
  startTimer(totalTime);  
}

export const updateTimer = () => dispatch => {
  // startTimer(totalTime);  
  debugger
}