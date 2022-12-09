

let state = localStorage.getItem("status");
document.getElementById("knap").innerHTML = "Log In";

if(state === "active"){
    if (localStorage.getItem("profilePicture") === null){
        document.getElementById("profilePicture").src = "../images/profilepicture/earth.png"
    }else {
        document.getElementById("profilePicture").src = localStorage.getItem("profilePicture")
    }
    
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

if(state === "active"){
document.getElementById("homeLogo").addEventListener("click", (e) =>{
    location.href = "../html/index.html"
})
} else{
    document.getElementById("homeLogo").addEventListener("click", (e) =>{
        alert("You must register or log-in first!")
    })
}

if(state === "active"){
    document.getElementById("likedLogo").addEventListener("click", (e) =>{
        location.href = "../html/favourite.html"
    })
    } else{
        document.getElementById("likedLogo").addEventListener("click", (e) =>{
            alert("You must register or log-in first!")
        })
    }




