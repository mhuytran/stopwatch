// main function w/ clock logic

function displayTime() {
  let recordedSeconds = ++seconds;
  let remainingSeconds;
  let minutes;
  let hours;

  // 1 min = 60 seconds
  // 1 hour = 60 minutes.
  // 00:00:00

  if (recordedSeconds < 10) {
    clockHeader.textContent = `00:00:0${recordedSeconds}`;
  } else if (recordedSeconds >= 10 && recordedSeconds < 60) {
    clockHeader.textContent = `00:00:${recordedSeconds}`;
  }

  // if else block for minutes
  else if (recordedSeconds >= 60 && recordedSeconds < 3600) {
    minutes = Math.floor(recordedSeconds / 60);
    remainingSeconds = recordedSeconds % 60;

    if (minutes < 10 && remainingSeconds < 10) {
      clockHeader.textContent = `00:0${minutes}:0${remainingSeconds}`;
    } else if (minutes < 10 && remainingSeconds < 60) {
      clockHeader.textContent = `00:0${minutes}:${remainingSeconds}`;
    } else if (minutes > 10 && minutes < 60 && remainingSeconds < 10) {
      clockHeader.textContent = `00:${minutes}:0${remainingSeconds}`;
    } else if (minutes > 10 && minutes < 60 && remainingSeconds < 60) {
      clockHeader.textContent = `00:${minutes}:${remainingSeconds}`;
    }
  } else if (recordedSeconds === 3600) {
    hours = Math.floor(recordedSeconds / 3600);
    clockHeader.textContent = `0${hours}:00:00`;
  } else if (recordedSeconds > 3600) {
    hours = Math.floor(recordedSeconds / 3600);
    minutes = Math.floor((recordedSeconds - 3600 * hours) / 60);
    remainingSeconds = (recordedSeconds - (3600 * hours) / 60) % 60;

    if (hours < 10 && minutes < 10 && remainingSeconds < 10) {
      clockHeader.textContent = `0${hours}:0${minutes}:0${remainingSeconds}`;
    } else if (hours < 10 && minutes < 10 && remainingSeconds >= 10) {
      clockHeader.textContent = `0${hours}:0${minutes}:${remainingSeconds}`;
    } else if (hours < 10 && minutes > 10 && remainingSeconds < 10) {
      clockHeader.textContent = `0${hours}:${minutes}:0${remainingSeconds}`;
    } else if (hours < 10 && minutes > 10 && remainingSeconds >= 10) {
      clockHeader.textContent = `0${hours}:${minutes}:${remainingSeconds}`;
    } else if (
      hours >= 10 &&
      hours < 24 &&
      minutes < 10 &&
      remainingSeconds < 10
    ) {
      clockHeader.textContent = `${hours}:0${minutes}:0${remainingSeconds}`;
    } else if (
      hours >= 10 &&
      hours < 24 &&
      minutes < 10 &&
      remainingSeconds >= 10
    ) {
      clockHeader.textContent = `${hours}:0${minutes}:${remainingSeconds}`;
    } else if (
      hours >= 10 &&
      hours < 24 &&
      minutes > 10 &&
      remainingSeconds < 10
    ) {
      clockHeader.textContent = `${hours}:${minutes}:0${remainingSeconds}`;
    } else if (
      hours >= 10 &&
      hours < 24 &&
      minutes > 10 &&
      remainingSeconds >= 10
    ) {
      clockHeader.textContent = `${hours}:${minutes}:${remainingSeconds}`;
    } else if (hours === 24) {
      console.log(`${hours}:00:00`);
      console.log("Reset");
      clearInterval(testInterval);
    }
  }
}

// default seconds and button for local to global access
var seconds = 0;
var button;

// default time of 00:00:00

const defaultTime = `00:00:00`;

//displaying default time as header tag
var clockHeader = document.querySelector(".clock");

clockHeader.textContent = defaultTime;

// start button
$(".start").on("click", () => {
  button = setInterval(displayTime, 1000);
});

// stop button
$(".stop").on("click", () => {
  clearInterval(button);
});

// reset button

$(".reset").on("click", () => {
  seconds = 0;

  clockHeader.textContent = defaultTime;

  clearInterval(button);
});

// toggle-dark mode button code w/ jQuery

var darkModeButton = $(".toggle-dark-mode");

darkModeButton.on("click", () => {
  if (darkModeButton.hasClass("btn-outline-dark")) {
    document.body.classList.toggle("change-to-dark");
    document.querySelector(".clock").classList.toggle("chng-to-whitefont");
    document.querySelector(".copyright").classList.toggle("chng-to-whitefont");
    darkModeButton.removeClass("btn-outline-dark");
    darkModeButton.addClass("btn-outline-light");
    darkModeButton.children().replaceWith("<i class='far fa-sun'></i>");
  } else {
    document.body.classList.toggle("change-to-dark");
    document.querySelector(".clock").classList.toggle("chng-to-whitefont");
    document.querySelector(".copyright").classList.toggle("chng-to-whitefont");
    darkModeButton.removeClass("btn-outline-light");
    darkModeButton.addClass("btn-outline-dark");
    darkModeButton.children().replaceWith("<i class='far fa-moon'></i>");
  }
});
