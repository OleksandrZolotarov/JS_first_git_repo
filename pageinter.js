"use strict";
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

const box = document.querySelectorAll(".button"),
  button = document.getElementsByTagName("button"),
  wrapper = document.getElementsByClassName("wrapper"),
  wrapperqs = document.querySelectorAll(".wrapper"),
  circles = document.getElementsByClassName("circle"),
  hearts = document.querySelectorAll(".heart");
console.log(hearts);
console.log(wrapperqs);
