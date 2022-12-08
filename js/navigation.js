

let state = localStorage.getItem("status");
document.getElementById("knap").innerHTML = "Log In";

if(state === "active"){
    document.getElementById("profilePicture").src = "../images/natur.jpg"
    document.getElementById("accountName").innerHTML = localStorage.getItem("name")
    document.getElementById("knap").innerHTML = "Log Ud";

    document.getElementById("profilePicture").addEventListener("click",(e)=>{
        location.href = "../html/config.html"
    })
    document.getElementById("knap").addEventListener("click", (e)=>{
        localStorage.setItem("status", "unactive")
    })
} else{
    document.getElementById("profilePicture").src = "../images/userNone.png"
    document.getElementById("accountName").innerHTML = ""
}
  
document.getElementById("knap").addEventListener("click", (e)=>{
    location.href = "../html/login.html"
})


document.getElementById("homeLogo").addEventListener("click", (e) =>{
    location.href = "../html/index.html"
})







