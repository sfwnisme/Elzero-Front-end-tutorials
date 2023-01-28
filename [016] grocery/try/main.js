// ****** select items **********

/*TODO
[x] - create helper variables
[x] - create addItem function
    [x] - if the input value not empty an the editFlag empty
    [x] - if the input value and editflag not empty
    [x] - if the input value and editflag empty
[x] - create alert function for the notifications of the actions like edit remove add
[x] - create function to reset the input and clear its value
[ ] - create localstorage function
[x] - create remove all items function
[x] - create remove a single item function
[ ] - create edit item function
    
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
    createListItem(id, value);
    console.log("value no edit");
    // adding the items

    // display alert
    displayAlert("new item added", "success");
    // locals storage
    addToLocalStorage(id, value);
    // set back settings to default
    setBackToDefault();
  } else if (value && editFlag) {
    console.log("value and edit");

    editElement.textContent = value;
    // edit local storage
    editLocalStorage(editID, value);

    displayAlert("item edit", "success");
    setBackToDefault();
  } else {
    console.log("no value no edit");
    displayAlert("no items", "danger");
  }
}

function clearItems() {
  let items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
    container.classList.remove("show-container");
  }
  setBackToDefault();
  localStorage.removeItem("list");
}

// display alert actions
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // this function will remove the previous class in 1s to let the new class active
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// delete item
function deleteItem(e) {
  let element = e.currentTarget.parentElement.parentElement;
  let id = element.dataset.id;
  console.log(element);
  list.removeChild(element);
  if (list.childElementCount == 0) {
    container.classList.remove("show-container");
  }
  // setBackToDefault()
  displayAlert("item has deleted!", "danger");
  setBackToDefault();
  // remove from localStorage
  removeFromLocalStorage(id);
  console.log(id);
}

// edit item
function editItem(e) {
  let element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  grocery.value = editElement.textContent;
  editID = element.dataset.id;
  editFlag = true;
  console.log(editID);
  submitBtn.textContent = "edit";
}

// set back to default
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
  // displayAlert()
}
// ****** LOCAL STORAGE **********
// add to local storage
function addToLocalStorage(id, value) {
  // save values and ids as an object
  let grocery = { id, value };
  // condition to confirm if the array has values or not
  let items = getLocalStorage();
  // push the objects to the array
  items.push(grocery);
  console.log(items);

  localStorage.setItem("list", JSON.stringify(items));
}
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  console.log(items);
  items = items.filter((item) => {
    // if all ids not equal the removed id just return the unremoved ids
    if (item.id != id) {
      console.log(item.id);
      return item;
    }
  });
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

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
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
  // insert HTML values
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
  // select edit & delete buttons
  let editBtn = element.querySelector(".edit-btn");
  let deleteBtn = element.querySelector(".delete-btn");

  editBtn.addEventListener("click", editItem);
  deleteBtn.addEventListener("click", deleteItem);

  // append element to HTML
  list.appendChild(element);
  container.classList.add("show-container");
}
