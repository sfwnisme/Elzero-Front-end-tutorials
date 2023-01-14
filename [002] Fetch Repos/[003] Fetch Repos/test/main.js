let theInput = document.querySelector("[type= text]");
let getButton = document.querySelector(".get-button");
let repoData = document.querySelector(".show-data");

theInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    add();
    theInput.value = "";
  }
});

getButton.onclick = function () {
  add();
  theInput.value = "";
};

function add() {
  if (theInput.value == "") {
    console.log("none");
    repoData.innerHTML = "<span>Please enter github username";
  } else {
    console.log("sdf");
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        repoData.innerHTML = "";

        data.forEach((e) => {
          let cont = document.createElement("div");
          cont.className = "main-div";

          // repo name
          let repoName = document.createElement("span");
          repoName.innerHTML = e.name;

          // buttons container
          let btns = document.createElement("div");
          btns.classList.add("links");

          // visit button
          let visit = document.createElement("a");
          visit.innerHTML = "Visit";
          visit.href = e.html_url;

          //stars
          let stars = document.createElement("span");
          stars.innerHTML = `${e.stargazers_count} Stars`;

          btns.append(visit);
          btns.append(stars);
          // append container to repoData
          cont.append(repoName);
          cont.append(btns);
          repoData.append(cont);
        });
      });
  }
}
