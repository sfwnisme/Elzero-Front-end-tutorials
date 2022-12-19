let section = document.querySelector("[data-section = sec]");
let span = document.querySelectorAll("[data-section = sec] span");
console.log(section);
console.log(span);

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 200) {
    console.log("hi");

    span.forEach((e) => {
      e.style.width = e.dataset.width;
    });
  } else {
    span.forEach((e) => {
      e.style.width = 0;
    });
  }
};
