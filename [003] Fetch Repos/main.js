let theInput = document.querySelector("[type= text]");
let getButton = document.querySelector(".get-button");
let repoData = document.querySelector(".show-data");

// using 'Enter' key on the keyboard to implement the function
theInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    getRepos();
    event.value = "";
  }
});

// on click implement the function
getButton.onclick = function () {
  getRepos();
  theInput.value = "";
};

function getRepos() {
  if (theInput.value == "") {
    console.log("Input empty");
    repoData.innerHTML = "<span>Please Write Github Username</span>";
  } else {
    console.log(theInput.value);
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((response) => response.json())
      .then((repositories) => {
        console.log(repositories);

        //empty the container
        repoData.innerHTML = "";
        //loop on repositories
        repositories.forEach((repo) => {
          //create the main div element
          let mainDiv = document.createElement("div");
          mainDiv.className = "main-div";

          // create Repo name Text
          let repoName = document.createElement("span");
          let repoNameText = document.createTextNode(repo.name);
          repoName.append(repoNameText);
          // Append The Text To Main Div
          mainDiv.append(repoName);

          // Create Links Container
          let links = document.createElement("div");
          links.className = "links";

          // Creat link
          let link = document.createElement("a");
          link.innerHTML = "visit";
          link.href = repo.html_url;
          link.setAttribute("target", `_blank`);

          //append link To Links container
          links.append(link);

          // stars
          let stars = document.createElement("span");
          let starsText = document.createTextNode(
            `${repo.stargazers_count}.stars`
          );
          stars.append(starsText);

          // append stars to links container
          links.append(stars);

          //append links To mainDiv
          mainDiv.append(links);

          // Append The Main Div To Container
          repoData.append(mainDiv);
        });
      });
  }
}
