"use strict";
// const btn = document.querySelector("button");
const btns = document.querySelectorAll("button");
const overlay = document.querySelector(".overlay");
// btn.onclick = function () {
//   alert("click");
// };
// btn.onclick = function () {
//   alert("click2");
// };
// let i = 0;
const deleteElement = (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.type);
  //   i++;
  //   if (i === 1) {
  //     btn.removeEventListener("click", deleteElement);
  //   }
};
// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

const link = document.querySelector("a");
link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event.target);
});
btns.forEach((element) => {
  element.addEventListener("click", deleteElement, { once: true });
});
// Удаление обработчика событий========================================================================================================================================================
// const btn = document.querySelector("button");

// btn.addEventListener("click", function (event) {
//   console.log(event.target);
// });
// // Но удалить её потом таким образом нельзя:

// btn.removeEventListener("click", function (event) {
//   console.log(event.target);
// });
// Потому что это другая функция.

// Хотя код внутри абсолютно одинаковый, JavaScript воспринимает их как два разных объекта-функции.

// Можно представить так:

// function () { ... } // функция №1
// function () { ... } // функция №2

// Они выглядят одинаково, но это разные функции в памяти.
//Правильное удаление
const btn = document.querySelector("button");

const handleClick = function (event) {
  console.log(event.target);
};

btn.addEventListener("click", handleClick);

//LESSON_45========================================================================================================================================================
// console.log(document.body.childNodes);
// console.log(document.documentElement);
const wrapper = document.querySelector(".wrapper");
for (let nodes of wrapper.childNodes) {
  if (nodes.nodeName == "#text") {
    continue;
  }
  console.log(nodes);
}
// console.log(wrapper.children);

//<div class="wrapper">
//   <div class="first">
//     <button></button>
//     <button id="current"></button>
//     <button></button>
//   </div>
//   <div class="second">
//     <ul>
//       <li>1</li>
//       <li>2</li>
//       <li data-current="3">3</li>

//       <li>4</li>
//       <li>5</li>
//     </ul>
//   </div>
//   <div class="third"></div>
// </div>;
