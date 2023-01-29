// ****** select items **********

/*TODO

- add item function
- append html elements to new article element
- append the element to DOM 
- create local storage function graps (id, value)
- create alert function for the three status
- create set back to default function for resetting
- create clearItems for clearing the full items in the grocery
- create deleteItem function to remove a single item
- create delete item local storage function (id)
- create deleteItem function for editing the clicked item
- create editItem function (editID)
    
 */

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
// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItems);
window.addEventListener("DOMContentLoaded", setUpItems);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  let value = grocery.value;
  let id = Date.now();
  console.log(value);
  if (value && !editFlag) {
    displayAlert("you added an item", "success");
    createListItem(id, value);
    addToLocalStorage(id, value);
  } else if (value && editFlag) {
    displayAlert("you editted the item", "success");
    console.log(`Testing ${editElement.innerText}`);
    editElement.textContent = value;
    // setBackToDefault();
    editLocalStorage(editID, value);
  } else {
    displayAlert("please write item's name", "danger");
  }
  // you can use this function for every condition above
  // also you can use it here but it should be at the end of the condition
  setBackToDefault();
}

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

function clearItems() {
  // you target the item container even it's not on DOM
  // due to you only use the clear all BUTTON for when the items appear on DOM
  let items = document.querySelectorAll(".grocery-item");
  if (list.children.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  localStorage.removeItem("list");
  container.classList.remove("show-container");
  setBackToDefault();
  displayAlert("All items removed", "danger");
}

function editItem(e) {
  let element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  console.log(editElement);
  editID = element.dataset.id;
  editFlag = true;
  submitBtn.textContent = "edit";
  grocery.value = editElement.textContent;
}

function deleteItem(e) {
  let element = e.currentTarget.parentElement.parentElement;
  let id = element.dataset.id;
  list.removeChild(element);
  if (list.childElementCount == 0) {
    container.classList.remove("show-container");
  }
  setBackToDefault();
  removeFromLocalStorage(id);
  displayAlert(
    `-[${e.currentTarget.parentElement.previousElementSibling.textContent}]- removed`,
    "danger"
  );
}

function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  let grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  console.table(items);
  localStorage.setItem("list", JSON.stringify(items));
}
function editLocalStorage(id, value) {
  let items = getLocalStorage();

  items = items.map((item) => {
    if (item.id == id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter((item) => {
    if (item.id != id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function getLocalStorage() {
  return localStorage.getItem("list") ? JSON.parse(localStorage.list) : [];
}
// ****** SETUP ITEMS **********
function setUpItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      createListItem(item.id, item.value);
    });
  }
}

function createListItem(id, value) {
  let element = document.createElement("article");
  element.classList.add("grocery-item");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `
    
    <p class="title">${value}</p>
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
  // edit & delete BUTTONS
  let editBtn = element.querySelector(".edit-btn");
  let deleteBtn = element.querySelector(".delete-btn");

  editBtn.addEventListener("click", editItem);
  deleteBtn.addEventListener("click", deleteItem);

  list.appendChild(element);
  container.classList.add("show-container");
}
