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

/*TODO
[x] - select the parent parent element 
[x] - create variable selects the title of the item
[ ] - grap the textContent of the clicked item to the input value
[ ] - change the innerText of the submit button to edit
[ ] - change editFlag value to true
[ ] - create if condition
    -- if editFalg is true
    --- add click

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

// ****** FUNCTIONS **********

//############################[1]###########################
function addItem(e) {
  e.preventDefault();
  let value = grocery.value;
  let id = new Date().getTime().toString();
  console.log(id);
  //filter conditions
  //
  //
  //
  if (value && !editFlag) {
    let element = document.createElement("article");
    // add class
    element.classList.add("grocery-item");
    // add id
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
    //
    //
    //
    // delete item
    let deleteBtn = element.querySelector(".delete-btn");
    // edit item
    let editBtn = element.querySelector(".edit-btn");
    // delete and edit click events
    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);

    // append child
    list.appendChild(element);
    container.classList.add("show-container");
    // display alert
    displayAlert("added value", "success");
    // local storage
    addToLocalStorage(id, value);
    // back to default
    setBackToDefault();
    //#######################[0]#############################
  } else if (value && editFlag) {
    console.log("you can edit freely");
    editElement.textContent = value;
    displayAlert("edited value", "success");
    // edit local storage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    console.log("you have nothing to add or edit");
    displayAlert("empty value", "danger");
  }
}

// display alert

//set alert function
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

//remove all function
function clearItems() {
  let items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach((item) => {
      list.remove(item);
      // item.remove() // you can also use this
    });
  }
  container.classList.remove("show-container");
  setBackToDefault();
  // localStorage.removeItem(list);
  displayAlert("deleted all items", "danger");
}
// delete item
function deleteItem(e) {
  console.log("delete item");
  let element = e.currentTarget.parentElement.parentElement;
  let id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert(
    `${element.querySelector(".title").innerText} removed`,
    "danger"
  );
  setBackToDefault();
  // remove from local storage
  // removeFromLocalStorage(id);
}

// edit item
function editItem(e) {
  console.log("edit item");
  let element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // editElement = e.currentTarget.parentElement.parentElement.querySelector('.title');
  console.log(editElement);
  grocery.value = editElement.textContent;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit";
}

// set back to default function
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
function addToLocalStorage(id, value) {}
function removeFromLocalStorage(e) {
  localStorage.removeItem(e);
  console.log(`dataset id is [[[${e}]]]`);
}
function editLocalStorage(id, value) {}
