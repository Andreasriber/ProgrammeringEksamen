

let clockTime = document.getElementById("clockTime")
let date = document.getElementById("date")


// RESSOURCES brugt
/*


DET ANDET VAR LORT
https://www.youtube.com/watch?v=E0UGGxd2DOo&ab_channel=dcode
http://worldtimeapi.org/ */


    
fetch("http://worldtimeapi.org/api/timezone/Europe/Copenhagen")
  .then((response) => response.json())              
  .then((data) =>{
  
  clockTime.innerHTML = data.datetime
  console.log(data.datetime)
  
  
});  
  



