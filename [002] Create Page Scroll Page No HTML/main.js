// function
function scrollerFunction() {
  let scroller = document.createElement("div");
  scroller.className = "scroller";
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;

    scroller.style.width = `${(scrollTop / height) * 100}%`;
  });
  document.body.append(scroller);
}
scrollerFunction();
