let s = document.querySelector(".s");

window.onscroll = function () {
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  console.log(height);

  let scrollTop = document.documentElement.scrollTop;
  console.log(`scrollTop ${scrollTop}`);

  s.setAttribute("style", `width: ${(scrollTop / height) * 100}%`);
};

/**
 * clientHeight is a fixed number
 * scrollHeight is a fixed number
 * scrollY is an ever-changing digital
 * *** 
  So, we used fixed number to get the full page height
  and reduce the clientHeight to avoid more number
  and only got the documentElemen height

  We used the scrollY value to dividing it with 
  documentElement ever-changing digital number then
  group them to multiply with 100 in purpose getting the persent
 */
