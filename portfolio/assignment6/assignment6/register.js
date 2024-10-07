// window.onload = pageLoad;
// function pageLoad(){

// }

// function validateForm() {
//     //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
// }

window.onload = pageLoad;

function pageLoad() {
  var form = document.getElementById("myRegister");
  form.onsubmit = validateForm;
}

function validateForm() {
  var errormsg = document.getElementById("errormsg");
  errormsg.innerHTML = "";

  var firstname = document.forms["myRegister"]["firstname"].value;
  var lastname = document.forms["myRegister"]["lastname"].value;
  var gender = document.forms["myRegister"]["gender"].value;
  var bday = document.forms["myRegister"]["bday"].value;
  var email = document.forms["myRegister"]["email"].value;
  var username = document.forms["myRegister"]["username"].value;
  var password = document.forms["myRegister"]["password"][0].value;
  var reTypePassword = document.forms["myRegister"]["password"][1].value;

  if (
    firstname === "" ||
    gender === "" ||
    lastname === "" ||
    bday === "" ||
    email === "" ||
    username === "" ||
    password === "" ||
    reTypePassword === ""
  ) {
    errormsg.innerHTML = "กรุณากรอกข้อมูลให้ครบทุกช่อง!";
    return false;
  }

  if (password !== reTypePassword) {
    errormsg.innerHTML = "รหัสผ่านไม่ตรงกัน!";
    console.log(password);
    return false;
  }

  console.log(password);
  alert("การสมัครเสร็จสิ้น!");
}
