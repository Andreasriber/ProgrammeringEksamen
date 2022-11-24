


document.getElementById("rgstr_btn").addEventListener("click", (event) =>{
    const name = document.getElementById('name');
    const pw = document.getElementById('pw');

    localStorage.setItem('name', name.value);
    localStorage.setItem('pw', pw.value);
    
    alert('Your account has been created');
    document.getElementById("accountName").innerHTML = localStorage.getItem("name");
    localStorage.setItem("status", "active")
})


//checking
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}

function removeLocal(){
    localStorage.removeItem("name")
    localStorage.removeItem("pw")
    localStorage.removeItem("status")
    document.getElementById("accountName").innerHTML = ""
}

function logOut(){
    localStorage.setItem("status", "inactive")
}






