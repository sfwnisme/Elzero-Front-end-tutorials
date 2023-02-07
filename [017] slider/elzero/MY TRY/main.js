let imgs = document.querySelectorAll("img");
let nxt = document.querySelector(".next");
let pre = document.querySelector(".prev");
let slidNumber = document.querySelector(".slide-number");
let num = 1;
nxt.addEventListener("click", increase);
pre.addEventListener("click", decrease);
let firstImg = document.getElementsByTagName("img")[0];
window.addEventListener("DOMContentLoaded", () => {
  firstImg.classList.add("active");
  slidNumber.innerText = num;
});

function increase() {
  num++;
  if (num > imgs.length) {
    num = 1;
  }
  console.log(num);
  firstImg.src = `imgs/0${num}.bmp`;
  slidNumber.innerText = num;
}
function decrease() {
  num--;
  if (num == 0) {
    num = imgs.length;
  }
  console.log(num);
  firstImg.src = `imgs/0${num}.bmp`;
  slidNumber.innerText = num;
}

// arr.push;
