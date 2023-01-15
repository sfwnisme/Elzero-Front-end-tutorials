/* =====[CURSOR ELEMENTS]===== */
// cursor box
let cursorBox = document.createElement("div");
cursorBox.className = "cursor-box";

// cursor elements
let cursorOne = document.createElement("div");
cursorOne.className = "cursor-one";
let cursorTwo = document.createElement("div");
cursorTwo.className = "cursor-two";

//append childs
cursorBox.appendChild(cursorOne);
cursorBox.appendChild(cursorTwo);
// append
document.body.append(cursorBox);
/* =============================== */

/* =====[CURSOR EVENTS]===== */
function cursorBOM() {
  document.addEventListener("mousemove", (event) => {
    let x = event.clientX;
    let y = event.clientY;

    // you can use
    // let x = event.pageX;
    // let y = event.pageY;

    document.documentElement.style.setProperty("--x", `${x}px`);
    document.documentElement.style.setProperty("--y", `${y}px`);
  });
}
cursorBOM();
/* =============================== */

/* =====[CURSOR AUTO FUNCTION]===== */
let allbtns = document.querySelectorAll("button");
let allLinks = document.querySelectorAll("a");

addAndRemove(allbtns, cursorOne, cursorTwo);
addAndRemove(allLinks, cursorOne, cursorTwo);

function addAndRemove(element, one, two) {
  element.forEach((ele) => {
    ele.addEventListener("mouseenter", (e) => {
      one.classList.add("active");
      two.classList.add("disable");
    });
  });
  element.forEach((ele) => {
    // you can also use 'mouseout'
    ele.addEventListener("mouseleave", (e) => {
      one.classList.remove("active");
      two.classList.remove("disable");
    });
  });
  element.forEach((ele) => {
    // you can also use 'mouseout'
    ele.addEventListener("click", (e) => {
      one.classList.add("clicked");
      setTimeout(() => {
        one.classList.remove("clicked");
      }, 50);
    });
  });
}
/* =============================== */
