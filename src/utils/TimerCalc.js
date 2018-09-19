let totalTime;
let intervalTimer

const RESET_TIMER = () => {
  if (intervalTimer !== undefined){
    clearInterval(intervalTimer)
  }
}

export const START_TIMER = () => {
  // RESET_TIMER() 
  
  const minutes = parseInt(document.getElementById("input-minute").value) || 0; // prevent NaN
  const seconds = parseInt(document.getElementById("input-second").value) || 0;
  
  totalTime = totalTimeInSeconds(minutes, seconds);
  
  countDownFn();
}

const totalTimeInSeconds = (mins, secs) => {
  return mins * 60 + secs
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

const countDownFn = () => {
  intervalTimer = setInterval(timer, 1000)
}

const decrementTime = () => {
  totalTime--;
}

export const test = () => {
  console.log('test');
}

// export default displayTime();