let form = document.getElementById("form");
let userName = document.getElementById("username");
let email = document.getElementById("email");
let pass = document.getElementById("password");
let pass2 = document.getElementById("password2");

console.log(pass2);

form.addEventListener("submit", (e) => {
  validateInputs();
  e.preventDefault();
});

function validateInputs() {
  let userValue = userName.value.trim();
  let emailValue = email.value.trim();
  let passValue = pass.value.trim();
  let pass2Value = pass2.value.trim();
  console.log(emailValue);

  // ====| conditions
  // user name
  if (userValue === "") {
    console.log("nothing");
    setError(userName, "you mush write your name");
  } else {
    setSuccess(userName);
  }

  // email
  if (emailValue === "") {
    setError(email, "your email should not be empty");
  } else if (!scssEmail(email)) {
    setError(email, "your email is not valid");
  } else {
    setSuccess(email);
  }
}

function setError(element, msg) {
  let inputParent = element.parentElement;
  let ele = inputParent.querySelector(".error");
  ele.textContent = msg;
}
function setSuccess(element) {
  let inputParent = element.parentElement;
  let ele = inputParent.querySelector(".error");
  ele.textContent = "";
  inputParent.classList.add("success");
  inputParent.classList.remove("error");
}

function scssEmail(element) {
  let re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  re.test(String(element).toLowerCase());
}
