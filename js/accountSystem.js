//register
//fiks if else til hvornår den er godtaget
document.getElementById("rgstr_btn").addEventListener("click", (event) => {
  const name = document.getElementById("name");
  const pw = document.getElementById("pw");
  
  localStorage.setItem("name", name.value);
  localStorage.setItem("pw", pw.value);
  
  alert("Your account has been created");
  
  document.getElementById("accountName").innerHTML =
    localStorage.getItem("name");
    localStorage.setItem("status", "active");
    location.reload();
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
