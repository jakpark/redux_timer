let timerInterval

const resetTimer = () => {
  if (timerInterval !== undefined){
    clearInterval(timerInterval)
  }
}


export const totalTimeInSeconds = (mins, secs) => {
  return mins * 60 + secs
}

export const startTimer = (totalTime) => {
  resetTimer() 
  setTimerInterval(totalTime);
}

const displayTime = (totalTime) => {
  console.log('displayTime');
  let mins = Math.floor(totalTime / 60)
  let secs = totalTime % 60
  
  return { mins: mins, secs: secs }
}


const renderTime = (totalTime) => {
  console.log('rendertime');

  const timerMin = document.getElementById("timer-mins");
  const timerSec = document.getElementById("timer-secs");
  // add test for 1 minute 1 second
  timerMin.innerHTML = displayTime(totalTime).mins
  timerSec.innerHTML = displayTime(totalTime).secs
  debugger
  if (totalTime <= 0){
    clearInterval(timerInterval);
  }
  decrementTime(totalTime);
}

const setTimerInterval = (totalTime) => {
  timerInterval = setInterval(renderTime(totalTime), 1000)
}

const decrementTime = (totalTime) => {
  totalTime--;
}

export const test = () => {
  console.log('test');
}