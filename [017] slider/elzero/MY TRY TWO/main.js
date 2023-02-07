let content = document.querySelectorAll("img");
let nextBtn = document.querySelector(".next");
let previousBtn = document.querySelector(".prev");
let numberContainer = document.querySelector(".slide-number");
let numberOfBox = 0;
let indicators = document.querySelector(".indicators");
let ul = document.createElement("ul");

// this will apply the first box onloading the content "window"
addEventListener("DOMContentLoaded", () => {
  content[0].classList.add("active");
  numberOfSlide(0);
});
function numberOfSlide(n) {
  return (numberContainer.textContent = n + 1);
}
slider(content, numberOfBox, "active", nextBtn, previousBtn);

function slider(boxes, position, className, next, previous) {
  next.addEventListener("click", increase);
  previous.addEventListener("click", decrease);
  // next box
  function increase() {
    boxes.forEach((img) => {
      img.classList.remove(className);
    });
    position++;
    if (position == boxes.length) {
      position = 0;
    }
    boxes[position].classList.add(className);

    console.log(boxes[position]);
    console.log(position);
    numberOfSlide(position);
  }
  // previous box
  function decrease() {
    boxes.forEach((img) => {
      img.classList.remove(className);
    });
    position--;
    if (position < 0) {
      position = boxes.length - 1;
    }
    boxes[position].classList.add(className);
    numberOfSlide(position);
  }
}
for (let i = 0; i < content.length; i++) {
  let li = document.createElement("li");
  ul.appendChild(li);
  indicators.append(ul);
  console.log(li);
  if (li[i] == numberOfSlide()) {
    li[i].classList.add("active");
  }
}
