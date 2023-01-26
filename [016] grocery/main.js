// ****** select items **********

const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editID = "";

form.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();
  let value = grocery.value;
  // console.log(value);

  if (value && !editFlag) {
    console.log("adding items");
    displayAlert("adding items", "success");
    newItems(value);
    grocery.value = "";
  } else if (value && editFlag) {
    console.log("editting items");
    displayAlert("editting items", "success");
  } else {
    console.log("nothing to action");
    displayAlert("nothing to action", "danger");
  }
}
// adding alert

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

function newItems(itemValue) {
  let id = Date.now();
  let element = document.createElement("aricle");
  element.classList.add("grocery-item");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);

  element.innerHTML = `
  
  <p class="title">${itemValue}</p>
  <div class="btn-container">
    <!-- edit btn -->
    <button type="button" class="edit-btn">
      <i class="fas fa-edit"></i>
    </button>
    <!-- delete btn -->
    <button type="button" class="delete-btn">
      <i class="fas fa-trash"></i>
    </button>
  </div>
  
  `;
  list.append(element);
  container.classList.add("show-container");
  localStorage.setItem("items", list.innerHTML);
}
addEventListener("DOMContentLoaded", () => {
  if (localStorage.items) {
    list.innerHTML = localStorage.items;
    container.classList.add("show-container");
  }
});

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
////
// ****** EVENT LISTENERS **********
// form.addEventListener("submit", addItem);
// function addItem(e) {
//   e.preventDefault();
//   let value = grocery.value;
//   let id = new Date().getTime().toString();
//   console.log(id);
//   //filter conditions
//   if (value && !editFlag) {
//     let element = document.createElement("article");
//     // add class
//     element.classList.add("grocery-item");
//     // add id
//     let attr = document.createAttribute("data-id");
//     attr.value = id;
//     element.setAttributeNode(attr);
//     element.innerHTML = `
//     <p class="title">${value}</p>
//       <div class="btn-container">
//         <!-- edit btn -->
//         <button type="button" class="edit-btn">
//           <i class="fas fa-edit"></i>
//         </button>
//         <!-- delete btn -->
//         <button type="button" class="delete-btn">
//           <i class="fas fa-trash"></i>
//         </button>
//       </div>
//     `;
//     // append child
//     list.appendChild(element);
//     container.classList.add("show-container");
//     // display alert
//     displayAlert("added value", "success");
//     // local storage
//     localStorage.setItem("items", list.innerHTML);
//   } else if (value && editFlag) {
//     console.log("you can edit freely");
//     displayAlert("edited value", "success");
//   } else {
//     console.log("you have nothing to add or edit");
//     displayAlert("empty value", "danger");
//   }
// }

// // display alert

// function displayAlert(text, action) {
//   alert.textContent = text;
//   alert.classList.add(`alert-${action}`);

//   setTimeout(() => {
//     alert.textContent = "";
//     alert.classList.remove(`alert-${action}`);
//   }, 1000);
// }

// // ****** FUNCTIONS **********

// // ****** LOCAL STORAGE **********

// // ****** SETUP ITEMS **********

// window.addEventListener("load", () => {
//   if (localStorage.items) {
//     list.innerHTML = localStorage.items;
//     container.classList.add("show-container");
//   }
// });
