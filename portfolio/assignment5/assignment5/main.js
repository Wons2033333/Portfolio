var postCount = 0;

function loadingPage() {
  document.getElementById("top").innerHTML = "Welcome to the Forum";

}

function postFunction() {
  const message = document.getElementById("message").value;
  const topic = document.getElementById("topic");
  const reply1 = document.getElementById("reply1");
  const reply2 = document.getElementById("reply2");

  if (message === "") {
    alert("Please type a message.");
  }

  if (postCount === 0) {
    topic.innerHTML = message;
    postCount = 1;
  } else if (postCount === 1) {
    reply1.innerHTML = message;
    postCount = 2;
  } else if (postCount === 2) {
    reply2.innerHTML = message;
    postCount = 3;
  } else {
    alert("Please clear all messages");
  }
  document.getElementById("message").value = "";
}
function showimage(){
  document.getElementById("top").innerHTML = reply1;
}

function clearFunction() {
  document.getElementById("topic").innerHTML = "";
  document.getElementById("reply1").innerHTML = "";
  document.getElementById("reply2").innerHTML = "";
  document.getElementById("message").value = "";

  postCount = 0;
}

window.onload = loadingPage;
