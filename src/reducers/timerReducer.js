import { START_TIMER } from '../actions/types';

const initialState = {
  displayTime: {
    mins: "00",
    secs: "00"
  }
}

export default function(state = initialState, action){
  switch(action.type) {
    default: 
      return state;
  }
}