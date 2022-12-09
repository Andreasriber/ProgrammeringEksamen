//register
//fiks if else til hvornår den er godtaget
document.getElementById("rgstr_btn").addEventListener("click", (event) => {
  const name = document.getElementById("name");
  const pw = document.getElementById("pw");
  
  if(pw.value.length === 0 || name.value.length === 0){
    alert("Please type in a username/password")
  } else if(pw.value.length < 8){
    alert("Your password must be atleast 8 characters")
  } else{
    localStorage.setItem("name", name.value);
  localStorage.setItem("pw", pw.value);
  
  alert("Your account has been created");
  
  document.getElementById("accountName").innerHTML =
    localStorage.getItem("name");
    localStorage.setItem("status", "active");
    location.href = "../html/index.html"
  }
  
});

//checking - LOGIN
document.getElementById("login_btn").addEventListener("click", (e) => {
  var storedName = localStorage.getItem("name");
  var storedPw = localStorage.getItem("pw");
  var userName = document.getElementById("userName");
  var userPw = document.getElementById("userPw");

  if (userName.value == storedName && userPw.value == storedPw) {
    alert("You are logged in.");
    localStorage.setItem("status", "active");
    location.href = "../html/index.html";
  } else {
    alert("Error on login");
  }
});
