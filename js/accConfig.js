if (localStorage.getItem("favouriteTopics") === null) {
    localStorage.setItem("favouriteTopics", "[]");
  }
let getFavouriteTopics = JSON.parse(localStorage.getItem("favouriteTopics"))


function updateFavourite(){
    
    let listContainer = document.getElementById("ulContainer")

    for(i=0;i<getFavouriteTopics.length;i++){
        let li = document.createElement("li");
        li.innerHTML = getFavouriteTopics[i]
        listContainer.appendChild(li)
    }
}
updateFavourite()

function createFavourite(inputValue){
    let favouriteArray = [];
    favouriteArray = getFavouriteTopics;
    favouriteArray.push(inputValue)
    localStorage.setItem("favouriteTopics", JSON.stringify(favouriteArray))
    location.reload()
}

document.getElementById("addFavourite").addEventListener("click", (e)=>{
    let topic = document.getElementById("favouriteNews").value;
    if(topic === null){
        alert("Not a valid input")
    }else{
    createFavourite(topic)
    }
})

document.getElementById("deleteFavourite").addEventListener("click", (e)=>{
    localStorage.removeItem("favouriteTopics")
    location.reload()
})


document.getElementById("userNameUpdate").value = localStorage.getItem("name")
document.getElementById("userPwUpdate").value = localStorage.getItem("pw")
document.getElementById("updateButton").addEventListener("click", (e)=>{
    let inputName = document.getElementById("userNameUpdate").value
    let inputPw = document.getElementById("userPwUpdate").value
    localStorage.setItem("name", inputName)
    localStorage.setItem("pw", inputPw)
    location.reload()
})

document.getElementById("deleteAccount").addEventListener("click", (e)=>{
    localStorage.clear()
    location.href = "../html/login.html"
})

function setProfilePicure(id, imageLocation){
    document.getElementsByClassName("accountImage")[id].addEventListener("click", () =>{
        localStorage.setItem("profilePicture", imageLocation);
        document.getElementById("profilePicture").src = imageLocation;
    })
}
setProfilePicure(0,"../images/profilepicture/earth.png" )
setProfilePicure(1,"../images/profilepicture/fire.png" )
setProfilePicure(2,"../images/profilepicture/water-drop.png" )
setProfilePicure(3,"../images/profilepicture/leaf.png" )

