"use strict";
const btn = document.querySelector("button");
// btn.onclick = function () {
//   alert("click");
// };
// btn.onclick = function () {
//   alert("click2");
// };
btn.addEventListener("mouseenter", () => {
  alert("click");
  alert("click2");
});
