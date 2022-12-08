let clockTime = document.getElementById("clockTime");

function startClock() {
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  clockTime.innerHTML = hours + ":" + minutes + ":" + seconds;
  setTimeout(startClock, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

startClock();

function clockTest() {
  console.log("Det virker");
}
