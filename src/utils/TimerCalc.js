let timerInterval
let timeCounter

const resetTimer = () => {
  if (timerInterval !== undefined){
    clearInterval(timerInterval);
  }
}


export const totalTimeInSeconds = (mins, secs) => {
  return mins * 60 + secs;
}

export const startTimer = (totalTime) => {
  resetTimer();
  timeCounter = totalTime;
  render();
  setTimerInterval();
}

const displayTime = () => {
  let mins = Math.floor(timeCounter / 60);
  let secs = timeCounter % 60;
  
  if ( mins < 10 ) {
    mins = "0" + mins;
  }

  if ( secs < 10 ) {
    secs = "0" + secs;
  }

  return { mins: mins, secs: secs }
}


const render = () => {
  console.log('render');

  const timerMin = document.getElementById("timer-mins");
  const timerSec = document.getElementById("timer-secs");
  // add test for 1 minute 1 second
  timerMin.innerHTML = displayTime(timeCounter).mins;
  timerSec.innerHTML = displayTime(timeCounter).secs;
  // debugger
  if (timeCounter <= 0){
    console.log('clearInterval')
    clearInterval(timerInterval);
  } else {
    decrementTime();
  }
}

const setTimerInterval = () => {
  timerInterval = setInterval(render, 1000);
}

const decrementTime = () => {
  console.log("decrementTime")
  timeCounter--;
}