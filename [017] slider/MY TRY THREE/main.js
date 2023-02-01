/* 
  [1] launch helper variables
  [2] create paginations
  [3] create main function
  [4] create remove activation function
  [5] switch items onclick
  [6] switch items using arrows
*/

let imgs = Array.from(document.querySelectorAll("img"));
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let indicators = document.querySelector(".indicators");
let slideNumber = document.querySelector(".slide-number");

let leng = imgs.length;
let counter;
console.log(leng);
if (localStorage.position) {
  counter = localStorage.position;
} else {
  counter = 1;
}
next.addEventListener("click", nextBtn);
prev.addEventListener("click", prevBtn);

document.addEventListener("keydown", nextArw);
document.addEventListener("keydown", prevArw);

function nextBtn() {
  this.classList.contains("disabled") ? false : counter++, theChecker();
  console.log(counter);
  localStorage.setItem("position", counter);
}
function prevBtn() {
  this.classList.contains("disabled") ? false : counter--, theChecker();
  localStorage.setItem("position", counter);
}

function nextArw(e) {
  if (e.key === "ArrowRight") {
    next.counter++, theChecker();
  }
}
function prevArw(e) {
  if (e.key === "ArrowLeft") {
    prev.classList.contains("disabled") ? false : counter--, theChecker();
  }
}

// creating indicators list
let ul = document.createElement("ul");
for (let i = 1; i <= leng; i++) {
  let li = document.createElement("li");
  li.textContent = i;
  ul.appendChild(li);
}
indicators.appendChild(ul);
let indiList = indicators.querySelectorAll("ul li");

theChecker();
function theChecker() {
  removeActive();

  // active slide number
  slideNumber.textContent = `${counter} of ${leng}`;

  // active firs image
  imgs[counter - 1].classList.add("active");

  // active first indicator
  indiList[counter - 1].classList.add("active");

  // disable the buttons
  counter >= leng
    ? next.classList.add("disabled")
    : next.classList.remove("disabled");

  counter == 1
    ? prev.classList.add("disabled")
    : prev.classList.remove("disabled");
}

// removing activation from the elements
function removeActive() {
  // imgs
  imgs.forEach((img) => img.classList.remove("active"));

  // indicators
  indiList.forEach((list) => list.classList.remove("active"));
}
