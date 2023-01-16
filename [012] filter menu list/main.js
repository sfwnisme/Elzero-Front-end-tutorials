//solution source: https://www.youtube.com/watch?v=ksjgob6b3Ro&ab_channel=WebTutorials

let box = document.querySelectorAll(".box");
let list = document.querySelectorAll(".list li");
console.log(list);

window.addEventListener("load", () => {
  if (localStorage.getItem("data")) {
    box.forEach((b) => {
      b.style.display = "none";
    });
    document.querySelectorAll(localStorage.getgit statusItem("data")).forEach((e) => {
      e.style.display = "flex";
      list.forEach((li) => {
        if (li.dataset.color == localStorage.getItem("data")) {
          li.classList.add("active-list");
        }
      });
    });
  }
});

list.forEach((li) => {
  li.addEventListener("click", (l) => {
    //*****[save list name active to localStorage]*****
    l.target.parentElement.querySelectorAll(".active-list").forEach((e) => {
      e.classList.remove("active-list");
    });
    l.target.classList.add("active-list");
    //************************************* */
    //*****[filter the menu process*****
    let listData = l.target.dataset.color;
    localStorage.setItem("data", listData);
    box.forEach((b) => {
      b.style.display = "none";
    });
    document.querySelectorAll(listData).forEach((e) => {
      e.style.display = "flex";
    });
    console.log(listData);
    //************************************* */
  });
});
