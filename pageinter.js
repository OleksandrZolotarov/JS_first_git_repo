"use strict";

//Lesson 42========================================================================================================================================================

//    <div class="box" id="box"></div>
//     <button>1</button>
//     <button>2</button>
//     <button>3</button>
//     <button>4</button>
//     <button>5</button>

//     <div class="circle"></div>
//     <div class="circle"></div>
//     <div class="circle"></div>

//     <div class="wrapper">
//         <div class="heart"></div>
//         <div class="heart"></div>
//         <div class="heart"></div>
//     </div>

const button = document.querySelectorAll("button"),
  wrapper = document.getElementsByClassName("wrapper"),
  wrapperqs = document.querySelectorAll(".wrapper"),
  circles = document.getElementsByClassName("circle"),
  hearts = document.querySelectorAll(".heart"),
  heart = document.querySelector(".heart");

// hearts.forEach((item) => {
//   item.style.cssText = "background-color:blue;width:200px";
// });
const heartBefore = getComputedStyle(heart, "::before");
const heartAfter = getComputedStyle(heart, "::after");
console.log(heartBefore);
hearts.forEach((item) => {
  item.style.setProperty("--heart-color", "blue");
});
const div = document.createElement("div");
div.style.cssText = "border:2px solid blue; width:100px;height:100px";
document.body.append(div);
const text = document.createTextNode("Tut byl ya");
document.body.append(text);
div.classList.add("square");
div.insertAdjacentHTML("afterbegin", "<h2>Hello World</h2>");
div.innerHTML = "<h2>Hello World</h2>";
