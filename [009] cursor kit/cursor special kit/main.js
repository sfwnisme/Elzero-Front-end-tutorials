const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", (event) => {
  let x = event.clientX;
  let y = event.clientY;

  cursor.style.left = cursor2.style.left = `${x}px`;
  cursor.style.top = cursor2.style.top = `${y}px`;
});

let allbtns = document.querySelectorAll("button");
allbtns.forEach((btn) => {
  btn.addEventListener("mouseenter", (e) => {
    cursor.classList.add("active-cursor");
    e.stopPropagation();
  });
  btn.addEventListener("mouseleave", (e) => {
    cursor.classList.remove("active-cursor");
    e.stopPropagation();
  });
});
