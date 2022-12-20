const boxes = document.querySelectorAll(".box");
console.log(boxes);

window.addEventListener("scroll", checkBoxes);
function checkBoxes() {
  let triggerBottom = window.innerHeight * 0.8;
  // console.log(triggerBottom);
  boxes.forEach((box) => {
    let boxTop = box.getBoundingClientRect().top;
    // console.log(boxTop)
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
      let wid = window.innerWidth;
      box.style.cssText = `transform: translatex(${wid}px);
      -webkit-transform: translatex(${wid}px);
      -moz-transform: translatex(${wid}px);
      -ms-transform: translatex(${wid}px);
      -o-transform: translatex(${wid}px)
      opacity: 0;
      `;
    }
  });
}
console.log(window.innerWidth);
console.log(window.innerHeight);

checkBoxes();
let box = document.querySelector(".box")
console.log(box.getBoundingClientRect().top)
console.log(box.clientHeight)