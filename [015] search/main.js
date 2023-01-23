let search = document.querySelector("[type=search]");
let nam = document.querySelectorAll(".name");
let info = document.querySelectorAll(".info");
console.log(nam.innerText);

let arr = [];

nam.forEach((n) => {
  arr.push(n.innerText);
});
console.log(arr);

// function find(s, a, i) {
//   s.addEventListener("keydown", (e) => {
//     // console.log(e.target.value);
//     a.forEach((x) => {
//       if (x.includes(e.target.value.toLowerCase())) {
//         console.log(x);
//         nam.forEach((n) => {
//           if (n.innerText.includes(x)) {
//             n.parentElement.style.display = "block";
//           } else {
//             n.parentElement.style.display = "none";
//           }
//         });
//       }
//     });
//   });
// }
// find(search, arr, info);

search.addEventListener("keyup", filter);
function filter() {
  let searchValue = search.value;

  nam.forEach((n) => {
    let text = n.textContent.toLocaleLowerCase();
    if (text.includes(searchValue)) {
      n.parentElement.style.display = "";
      n.target.style.color = "red";
      console.log(n.parentElement.parentNode);
    } else {
      n.parentElement.style.display = "none";
    }
  });
}
