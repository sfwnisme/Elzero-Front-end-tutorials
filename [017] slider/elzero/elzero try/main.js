let imgs = Array.from(document.querySelectorAll("img"));
let slideNumber = document.querySelector(".slide-number");
let indicators = document.querySelector(".indicators");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let current = 1;
let current_1 = parseInt(current) - 1;
let currentLenght = imgs.length;

// next and previous events
next.addEventListener("click", nextBtn);
prev.addEventListener("click", prevBtn);

function nextBtn() {
  if (this.classList.contains("disabled")) {
    return false;
  } else {
    current++;
    checker();
  }
}
function prevBtn() {
  if (this.classList.contains("disabled")) {
    return false;
  } else {
    current--;
    checker();
  }
}

// create indicators
let ul = document.createElement("ul");
for (let i = 1; i <= currentLenght; i++) {
  let li = document.createElement("li");
  li.setAttribute("data-id", i);
  li.appendChild(document.createTextNode(i));
  ul.appendChild(li);
}
indicators.appendChild(ul);
let indicatorsArr = Array.from(document.querySelectorAll("ul li"));

indicatorsArr.forEach((li) => {
  li.addEventListener("click", (l) => {
    current = parseInt(l.target.dataset.id);
    checker();
  });
});

// checker function
function checker() {
  // you must put this removeActive() function here on the top
  // because the javaScript system is synchronous
  removeActive();
  // slide number
  slideNumber.innerText = `${current} of ${currentLenght}`;
  // active image
  imgs[current - 1].classList.add("active");

  // active indicator first bullet
  indicatorsArr[current - 1].classList.add("active");
  //

  // next and previous activation
  if (current == 1) {
    prev.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
  }

  if (current === currentLenght) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled");
  }
}
checker();
function removeActive() {
  // remove active from imgs
  imgs.forEach((img) => img.classList.remove("active"));

  // remove active from indicatorsArr
  indicatorsArr.forEach((arr) => arr.classList.remove("active"));
}
