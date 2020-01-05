function updateClock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = " am"

  if (hours >= 0 && hours < 12) {
    ampm = "am";
  } else if (hours == 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
    ampm = " pm"
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  let timeString = hours + ":" + minutes + ":" + seconds + ampm

  document.querySelector(".time").innerHTML = timeString;
}

setInterval(updateClock, 1000);
