let todaysDate = document.getElementById("date");

const days = [
  "Søndag",
  "Mandag",
  "Tirsdag",
  "Onsdag",
  "Torsdag",
  "Fredag",
  "Lørdag",
];
const months = [
  "Januar",
  "Februar",
  "Marts",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "December",
];

let newDate = new Date();

todaysDate.innerHTML =
  "D." +
  newDate.getDate() +
  " " +
  days[newDate.getDay()] +
  ", " +
  months[newDate.getMonth()] +
  " " +
  newDate.getFullYear();
