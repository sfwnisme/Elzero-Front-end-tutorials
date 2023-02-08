let box = document.querySelector(".box");
let info = document.querySelector(".info");
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let counter = 0;
let leng = Array.from(document.querySelectorAll(".info")).length;

// let size = info.getBoundingClientRect().width;
// console.log(size);
let size = info.clientWidth;
console.log(size);
document.documentElement.style.setProperty("--info-size", size + "px");
console.log(leng);
next.addEventListener("click", nextBtn);
prev.addEventListener("click", prevBtn);

function nextBtn() {
  if (counter == leng - 1) {
    counter = 0;
  } else {
    counter++;
    console.log(`laksdkfaskldf ${counter}`);
  }
  box.style.cssText = `
  transform: translateX(-${size * counter}px)
  `;
  console.log(counter);
  box.style.transition = "200ms";
}
function prevBtn() {
  if (counter <= 0) {
    box.style.transition = "0ms !important";
    counter = leng - 1;
  } else {
    counter--;
  }
  // counter--;
  box.style.cssText = `
  
  transform: translateX(-${size * counter}px)
  
  `;
  box.style.transition = "200ms";
  console.log(counter);
}
