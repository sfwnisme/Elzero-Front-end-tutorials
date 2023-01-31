const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let num = document.querySelector(".number");

let counter = 1;
num.innerHTML = counter;
const size = carouselImages[0].clientWidth;
console.log(size);
document.documentElement.style.setProperty("--img-size", size);

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  counter++;
  // console.log(counter)
  carouselSlide.style.transition = `0.4s`;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});
prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  counter--;
  // console.log(counter)
  carouselSlide.style.transition = `0.4s`;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});
// switch using arrow keys
document.addEventListener("keydown", (e) => {
  if (counter >= carouselImages.length - 1) return;
  if (e.key == "ArrowRight") {
    counter++;
    console.log(counter);
    carouselSlide.style.transition = `0.4s`;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
document.addEventListener("keydown", (e) => {
  if (counter <= 0) return;
  if (e.key == "ArrowLeft") {
    counter--;
    console.log(counter);
    carouselSlide.style.transition = `0.4s`;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

carouselSlide.addEventListener("transitionend", () => {
  console.log("Fired");
  if (carouselImages[counter].id == "lastClone") {
    console.log("last");
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImages[counter].id == "firstClone") {
    counter = 1;
    carouselSlide.style.transition = "none";
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
num.innerHTML = counter;
