const btnEl = document.querySelector(".btn");
const btnEl2 = document.querySelector(".btn2");

btnEl.addEventListener("mouseover", (event) => {
  let x = event.pageX - btnEl.offsetLeft;
  let y = event.pageY - btnEl.offsetTop;

  console.log(y);

  document.documentElement.style.setProperty("--pageX", `${x}px`);
  document.documentElement.style.setProperty("--pageY", `${y}px`);
});

btnEl2.addEventListener("mousemove", (event) => {
  let x = event.pageX - btnEl2.offsetLeft;
  let y = event.pageY - btnEl2.offsetTop;

  console.log(y);

  document.documentElement.style.setProperty("--pageX", `${x}px`);
  document.documentElement.style.setProperty("--pageY", `${y}px`);
});
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (event) => {
  let x = event.clientX;
  let y = event.clientY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});
