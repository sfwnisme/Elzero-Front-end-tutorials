let filter = document.querySelector(".filter");
let box = document.querySelector(".box");
let info = document.querySelectorAll(".info");
// array of the cataloge items
let arr = Array.from(info);
console.log(arr);
// get all cataloge items names
let x = arr.reduce(
  (value, item) => {
    let data = item.dataset.name;
    if (!value.includes(data)) {
      value.push(data);
    }
    return value;
  },
  ["all"]
);

console.log(x);

filterAppend(filter);

function filterAppend(cont) {
  x.forEach((x) => {
    let p = document.createElement("p");
    p.textContent = x;
    cont.append(p);
  });
}

let filterItem = document.querySelectorAll(".filter p");
console.log(filterItem);

implement();
function implement() {
  filterItem.forEach((item) => {
    item.addEventListener("click", (e) => {
      removeItems();
      let dataItem = e.target.textContent;
      let products = arr.filter((a) => {
        if (a.dataset.name == dataItem) {
          return a;
        }
      });
      // box.innerHTML = products;
      box.append(...products);
      console.log(...products);
      let all = arr.filter((a) => {
        if (dataItem == "all") {
          return a;
        }
      });

      // box.append(...all);
      console.log(...all);
      box.append(...all);
    });
  });
}
function removeItems() {
  box.innerHTML = "";
}
