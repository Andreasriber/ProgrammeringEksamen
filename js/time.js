
function setDate(){
let todaysDate = document.getElementById("date");
//prettier-ignore
const days = ["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag",];
//prettier-ignore
const months = ["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December",];
let newDate = new Date();
//prettier-ignore
todaysDate.innerHTML = "D."+newDate.getDate()+" "+days[newDate.getDay()]+", "+months[newDate.getMonth()]+" "+newDate.getFullYear();
}
setDate();


function setClock() {
  let today = new Date();
  let clockTime = document.getElementById("clockTime");
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  clockTime.innerHTML = hours + ":" + minutes + ":" + seconds;
  setTimeout(setClock, 1000);
}

function checkTime(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}
setClock();