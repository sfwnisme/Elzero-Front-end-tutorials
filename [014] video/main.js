let vid = document.querySelector("video");
let btn = document.querySelector("button");

// vid.play()
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (vid.paused) {
    vid.play();
    // vid.currentTime = 0;
    vid.duration
  } else {
    vid.pause();
  }
});
