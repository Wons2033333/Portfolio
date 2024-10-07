

window.onload = loginLoad;

function loginLoad() {
 
  document.getElementById("myLogin").onsubmit = checkLogin;
}

function checkLogin() {
  const urlParams = new URLSearchParams(window.location.search);
  var username = urlParams.get('username');
  var password = urlParams.get('password');

  var loginUsername = document.forms["myLogin"]["username"].value;
  var loginPassword = document.forms["myLogin"]["password"].value;


  if (loginUsername == username && loginPassword == password) {
    alert("เข้าสู่ระบบสำเร็จ!");
    
  } else {
    alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง กรุณากรอกใหม่");
    return false; 
  }
}

