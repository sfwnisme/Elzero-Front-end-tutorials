let form = document.getElementById("form");
let inputs = document.querySelectorAll("input");
let userName = document.getElementById("username");
let email = document.getElementById("email");
let pass = document.getElementById("password");
let pass2 = document.getElementById("password2");

console.log(pass2);
let validation = false;
// ====| FORM SUBMITION

form.addEventListener("submit", (e) => {
  if (validation) {
    validateInputs();
    console.log("FORM IS VALID");
  } else {
    console.log("FORM IS NOT VALID");
    validateInputs();
  }
  e.preventDefault(false);
});

// ====| ERROR AND SUCCESS FUNCTIONS
// ====| ERROR
function setError(element, message) {
  let inputParent = element.parentElement;
  let ele = inputParent.querySelector(".message");

  ele.classList.add("error-text");
  ele.classList.remove("success-text");
  ele.textContent = message;
  inputParent.classList.add("error");
  inputParent.classList.remove("success");
  validation = false;
}

// ====| SUCCESS
function setSuccess(element, message) {
  let inputParent = element.parentElement;
  let ele = inputParent.querySelector(".message");

  inputParent.classList.add("success");
  inputParent.classList.remove("error");
  ele.classList.add("success-text");
  ele.classList.remove("error-text");
  ele.textContent = message;
  validation = true;
}

// ====| EMAIL
// this function will target the email input value not the input HTMLelement
function isValidEmail(email) {
  validation = true;
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateInputs() {
  let userValue = userName.value.trim();
  let emailValue = email.value.trim();
  let passValue = pass.value.trim();
  let pass2Value = pass2.value.trim();

  // ====| conditions
  // user name
  if (userValue === "") {
    console.log("nothing");
    setError(userName, "write your name");
    console.log("%cNAME => write your name", "color: #ff3860  ");
  } else {
    setSuccess(userName, "valid");
    console.log("%cNAME => valid", "color: #09c372");
  }

  // email
  if (emailValue === "") {
    setError(email, "your email should not be empty");
    console.log("%cEMAIL => write your email", "color: #ff3860  ");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "your email is not valid");
    console.log("%cEMAIL => your email is not valid", "color: #ff3860 ");
  } else {
    setSuccess(email, "valid");
    console.log("%cEMAIL => valid", "color: #09c372");
  }
  // password
  if (passValue === "") {
    setError(pass, "write your password");
    console.log("%cPASSWORD ONE => write your password", "color: #ff3860");
  } else if (passValue.length < 8) {
    setError(pass, "passowrd must be 8 characters or more");
    console.log(
      "%cPASSWORD ONE => passowrd must be 8 characters or more",
      "color: #ff3860"
    );
  } else {
    setSuccess(pass, "valid");
    console.log("%cPASSWORD ONE => valid", "color: #09c372");
  }

  // password two
  if (pass2Value === "") {
    setError(pass2, "confirm your passowrd");
    console.log("%cPASSWORD TWO => confirm your password", "color: #ff3860");
  } else if (pass2Value !== passValue) {
    setError(pass2, "your password is not matching");
    console.log(
      "%cPASSWORD TWO => your password is not matching",
      "color: #ff3860"
    );
  } else {
    setSuccess(pass2, "valid: match passowrd");
    console.log("%cPASSWORD TWO => valid: match passowrd", "color: #09c372");
  }
}

/**STEPS
 * create submit event for the 'form'
 * create global function for the event to make the proccess more clear
#** FUNCTION CONTENT **#
 ** remove the spaces from the whole inputs using tirm `input.value.trim()`
 ** create functions for the ERRORS and SUCCESSES
#*** FUNCTIONS CONTENT => ERRORS and SUCCESSES ***#
#**** ERROR FUNCTION ****#
 **** create TWO parameters (element, message)
 **** (element) === the input 
 **** (message) === the message you want if there is error
 **** start remove the success notes and create error notes
 **** change the the error message => error element textContent = message
#**** SUCCESS FUNCTION ****#
 **** create TWO parameters (element, message)
 **** start remove error notes and add success notes
 **** remove the error message 
 **** add success message

 */

let region = new Intl.DisplayNames(["en"], { type: "region" });

console.log(region.of("ae".toUpperCase()));
