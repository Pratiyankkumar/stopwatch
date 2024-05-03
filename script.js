
let intervalId;
let count = JSON.parse(localStorage.getItem('counts')) ||{
  seconds: 0,
  minutes: 0,
  hour: 0
};



let startButtonElement = document.querySelector('.js-start-button');

document.querySelector('.js-seconds-timer').innerHTML = count.seconds;
document.querySelector('.js-minutes-timer').innerHTML = count.minutes + ':';
document.querySelector('.js-hour-timer').innerHTML = count.hour + ':';

startButtonElement.addEventListener('click', () => {
  if (startButtonElement.innerHTML === 'Start') {
    startButtonElement.innerHTML = 'Stop';
    stopWatch();
  } else {
    startButtonElement.innerHTML = 'Start';
    clearInterval(intervalId);
  }
})

let resetButtonElement = document.querySelector('.js-reset-button')
resetButtonElement.addEventListener('click', () => {
  count = {
    seconds: 0,
    minutes: 0,
    hour: 0
  };
  document.querySelector('.js-seconds-timer').innerHTML = count.seconds;
  document.querySelector('.js-minutes-timer').innerHTML = count.minutes + ':';
  document.querySelector('.js-hour-timer').innerHTML = count.hour + ':';
  updateLocalStorage();
})



function stopWatch() {
  intervalId = setInterval(() => {
    count.seconds++;

    if (count.seconds===60) {
      count.minutes+=1;
      count.seconds=0;
    }
    if (count.minutes===60) {
      count.hour+=1;
      count.minutes=0;
    }
    document.querySelector('.js-seconds-timer').innerHTML = count.seconds;
    document.querySelector('.js-minutes-timer').innerHTML = count.minutes + ':';
    document.querySelector('.js-hour-timer').innerHTML = count.hour + ':'; 
    updateLocalStorage();
  },1000)
}

function updateLocalStorage() {
  localStorage.setItem('counts', JSON.stringify(count))
};