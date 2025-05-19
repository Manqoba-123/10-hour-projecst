const buttonEl = document.getElementById("submit-btn");
const fromDateEl = document.getElementById("date-from");
const toDateEl = document.getElementById("date-to");
const daysEl = document.querySelector(".days-c .numbers");
const hoursEl = document.querySelector(".hours-c .numbers");
const minutesEl = document.querySelector(".minutes-c .numbers");
const secondsEl = document.querySelector(".seconds-c .numbers");

let countDownInterval;

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function countDown(endDate) {
  const currentDate = new Date();
  const totalSeconds = (endDate - currentDate) / 1000;

  if (totalSeconds <= 0) {
    clearInterval(countDownInterval);
    resetDisplay();
    alert("Countdown done");
    return false;
  }

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.textContent = formatTime(days);
  hoursEl.textContent = formatTime(hours);
  minutesEl.textContent = formatTime(minutes);
  secondsEl.textContent = formatTime(seconds);

  return true;
}

buttonEl.onclick = function startCountDown() {
  //statement of clearing the existing countdown
  if (countDownInterval) {
    clearInterval(countDownInterval);
  }

  //Get dates values
  const fromDate = fromDateEl.value;
  const toDate = toDateEl.value;

  //Validating the inputs of dates
  if (!fromDate || !toDate) {
    alert("Please put both from and to dates you want to calculate");
    resetDisplay();
    return;
  }

  const start = new Date(fromDate);
  const end = new Date(toDate);

  //Making sure from date is before to date
  if (end <= start) {
    alert("Invalid calculation 'Date to' must be after 'Date from'.");
    resetDisplay();
    return;
  }
  
  //resetDisplay();

  countDownInterval = setInterval(function () {
    if(!countDown(end)) {
        clearInterval(countDownInterval)
    }
  }, 1000);
  countDown(end);
};