

function homePage(){
    location.href = "index.html"
}

document.getElementById("profilePicture").src = "../images/userNone.png"
document.getElementById("accountName").innerHTML = localStorage.getItem("name")
    
   