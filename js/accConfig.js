
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
/*
document.getElementById("addFavourite").addEventListener("click", (e)=>{

    let topic = document.getElementById("favouriteNews").value;

    let favouriteTopics = []
        
    
    localStorage.setItem("favouriteTopics", JSON.stringify(favouriteTopics))
    let ul = document.createElement("ul");
    let li = document.createElement("li");

    li.innerHTML = JSON.parse(localStorage.getItem("favouriteTopics"));
    ul.appendChild(li)
    document.getElementById("listContainer").appendChild(ul)
})
*/
