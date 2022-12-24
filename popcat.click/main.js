const btn = document.querySelector(".btn");

let e = new Event("click");

console.log(btn);
setInterval(() => {
  for (let i = 0; i < 100; i++) {
    btn.dispatchEvent(e);
  }
}, 10000);

btn.onclick = function () {
  console.log("Do You Love Me");
};
