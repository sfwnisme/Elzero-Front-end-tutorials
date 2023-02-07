/**
 * function container for the process
 * create helper variable contains the number of the image
 * active all first actions
 * create bullets
 * disabled buttons
 * remove all active actions function to using is while click on next or previous
 * execute the buttons and bullets 

*/

let imgs = document.querySelectorAll("img");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let indicators = document.querySelector(".indicators");
let slideNumber = document.querySelector(".slide-number");
let counter = 1;
let leng = Array.from(imgs).length;
console.log(leng);

// BULLETS
let ul = document.createElement("ul");
for (let i = 1; i <= leng; i++) {
  let li = document.createElement("li");
  li.textContent = i;
  li.setAttribute("data-id", i);
  ul.append(li);
  indicators.append(ul);
}
let bullets = indicators.querySelectorAll("ul li");
console.log(bullets);

// EVENTS
next.addEventListener("click", nextBtn);
prev.addEventListener("click", prevBtn);
bullets.forEach((bullet) =>
  bullet.addEventListener("click", (btn) => {
    counter = btn.target.dataset.id;
    console.log(counter);
    check();
  })
);

// FUNCTIONS
// next button function
function nextBtn() {
  if (this.classList.contains("disabled")) return false;
  counter++;
  check();
}

// previous button function
function prevBtn() {
  if (this.classList.contains("disabled")) return false;
  counter--;
  check();
}

// checking the whole process function
check();
function check() {
  removeActivation();
  // display the number of the image
  slideNumber.textContent = `${counter} of ${leng}`;
  // active first image
  imgs[counter - 1].classList.add("active");
  // active bullet
  bullets[counter - 1].classList.add("active");
  //active the buttons
  if (counter == leng) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled");
  }
  if (counter == 1) {
    prev.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
  }
}

// remove all active classes function
function removeActivation() {
  // imgs
  imgs.forEach((img) => img.classList.remove("active"));
  // bullets
  bullets.forEach((bullet) => bullet.classList.remove("active"));
}
