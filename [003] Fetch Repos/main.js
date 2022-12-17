let text = document.querySelector("[type= text]");
let btn = document.querySelector(".get-button");
let showData = document.querySelector(".show-data");

function clickOnBtn(e) {
  e.addEventListener("click", () => {
    addText(text.value);
    text.value = "";
  });
}
clickOnBtn(btn);

function addText(textValue) {
  let repoBox = document.createElement("div");
  repoBox.classList.add("repo-box");

  let span = document.createElement("span");
  span.innerText = textValue;
  async function fet() {
    let data = await fetch("GET", `https://api.github.com/users/${textValue}`);
    console.log(await data.json());
    data.then((result) => console.log(result))
  }
  fet()
  repoBox.append(span);
  document.body.append(repoBox);
}
