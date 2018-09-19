let totalTime;
let intervalTimer

const RESET_TIMER = () => {
  if (intervalTimer !== undefined){
    clearInterval(intervalTimer)
  }
}


export const totalTimeInSeconds = (mins, secs) => {
  return mins * 60 + secs
}

export const START_TIMER = (totalTime) => {
  // RESET_TIMER() 
  countDownFn(totalTime);
}

const displayTime = (totalTime) => {
  let mins = Math.floor(totalTime / 60)
  let secs = totalTime % 60
  
  return { mins: mins, secs: secs }
}


const timer = () => {
  const timerMin = document.getElementById("timer-mins");
  const timerSec = document.getElementById("timer-secs");
  
  // add test for 1 minute 1 second
  timerMin.innerHTML = displayTime().mins
  timerSec.innerHTML = displayTime().secs
  
  if (totalTime <= 0){
    clearInterval(intervalTimer);
  }
  decrementTime()
}

const countDownFn = (totalTime) => {
  intervalTimer = setInterval(timer, 1000)
}

const decrementTime = () => {
  totalTime--;
}

export const test = () => {
  console.log('test');
}