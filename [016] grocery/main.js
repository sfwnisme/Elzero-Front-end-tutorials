let input = document.querySelector("[type=text]");
let submit = document.querySelector("[type=submit]");
let itemBox = document.querySelector(".items");
// let btns = document.querySelector(".btns");
// let del = document.querySelector(".delete");
// let edit = document.querySelector(".edit");
// console.log(edit);
let arr;
if (localStorage.product) {
  arr = JSON.parse(localStorage.product);
} else {
  arr = [];
}
// createItem2();

submit.addEventListener("click", newObj);

function newObj() {
  if (input.value != "") {
    obj = {
      itemTitle: input.value,
      id: Date.now(),
    };
    arr.push(obj);
    console.log(arr);
    localStorage.setItem("product", JSON.stringify(arr));
  }
  input.value = "";
  createItem2();
}

function createItem2() {
  for (let i = 0; i < arr.length; i++) {
    let data = `
    <div class="item">
            <p class="name">${arr[i].itemTitle}</p>
            <div class="btns">
              <button class="delete">delete</button>
              <button class="edit">edit</button> 
            </div>
    `;
    itemBox.innerHTML = data;
  }
  console.log(arr);
}

// function createItem() {
//   arr.forEach((e) => {
//     console.log(e);
//     let btns = document.createElement("div");
//     btns.className = "btns";

//     // let btns = document.createElement("div");
//     // btns.className = "btns";

//     let itemCont = document.createElement("div");
//     itemCont.className = "item";

//     let itemName = document.createElement("p");
//     itemName.className = "name";
//     itemName.innerText = e.itemTitle;

//     let itemDel = document.createElement("button");
//     itemDel.className = "delete";
//     itemDel.innerText = "delete";

//     let itemEdit = document.createElement("button");
//     itemEdit.className = "edit";
//     itemEdit.innerText = "edit";

//     itemCont.append(itemName);
//     btns.append(itemDel);
//     btns.append(itemEdit);
//     itemBox.append(itemCont);
//     itemCont.append(btns);
//   });
// }
