const github = document.querySelector(".github");
const avatar = document.querySelector(".avatar img");
const username = document.querySelector(".username");
const followers = document.querySelector(".followers");
const visit = document.querySelector(".visit");

fetch(`https://api.github.com/users/sfwnisme`).then((res) => res.json()).then((data) => {
console.log(data)
  // avatar
  avatar.src = data.avatar_url;
  username.innerText = data.login;
  followers.innerText = data.followers
  visit.href = data.html_url
})
