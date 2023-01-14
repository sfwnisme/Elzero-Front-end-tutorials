let a;
// all the browsers in phones
// SOLUTION LINK => https://www.tutorialspoint.com/How-to-detect-a-mobile-device-with-JavaScript
// ANOTHER SOLUTION LINK => https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3
if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/iPod/i) ||
  navigator.userAgent.match(/BlackBerry/i) ||
  navigator.userAgent.match(/Windows Phone/i)
) {
  a = "you'r using mobile";
} else {
  a = "you'r using desktop";
}

document.body.append(a);
