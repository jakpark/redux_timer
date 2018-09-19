import { START_TIMER } from './types';
import { startTimer } from '../utils/TimerCalc';

export const dispatchTimer = (totalTime) => dispatch => {
  startTimer(totalTime);  
}