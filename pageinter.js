"use strict";

// //Lesson 42========================================================================================================================================================

// //    <div class="box" id="box"></div>
// //     <button>1</button>
// //     <button>2</button>
// //     <button>3</button>
// //     <button>4</button>
// //     <button>5</button>

// //     <div class="circle"></div>
// //     <div class="circle"></div>
// //     <div class="circle"></div>

// //     <div class="wrapper">
// //         <div class="heart"></div>
// //         <div class="heart"></div>
// //         <div class="heart"></div>
// //     </div>

// const button = document.querySelectorAll("button"),
//   wrapper = document.getElementsByClassName("wrapper"),
//   wrapperqs = document.querySelectorAll(".wrapper"),
//   circles = document.getElementsByClassName("circle"),
//   hearts = document.querySelectorAll(".heart"),
//   heart = document.querySelector(".heart");

// // hearts.forEach((item) => {
// //   item.style.cssText = "background-color:blue;width:200px";
// // });
// const heartBefore = getComputedStyle(heart, "::before");
// const heartAfter = getComputedStyle(heart, "::after");
// console.log(heartBefore);
// hearts.forEach((item) => {
//   item.style.setProperty("--heart-color", "blue");
// });
// const div = document.createElement("div");
// div.style.cssText = "border:2px solid blue; width:100px;height:100px";
// document.body.append(div);
// const text = document.createTextNode("Tut byl ya");
// document.body.append(text);
// div.classList.add("square");
// div.insertAdjacentHTML("afterbegin", "<h2>Hello World</h2>");
// div.innerHTML = "<h2>Hello World</h2>";

//Lesson 46. Recursion========================================================================================================================================================
// function pow(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
function pow(x, n) {
  if (n === 0) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
// console.log(pow(2, 11));
// pow(2, 2);
// pow(2, 3);
//========================================================================================================================================================

let students = {
  js: [
    { name: "John", progress: 100 },
    { name: "Ivan", progress: 60 },
  ],
  html: {
    basic: [
      { name: "Peter", progress: 20 },
      { name: "Ann", progress: 18 },
    ],
    pro: [{ name: "Sam", progress: 10 }],
  },
};

function getTotalProgressByRecursion(data) {
  if (Array.isArray(data)) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i].progress;
    }
    return [total, data.length];
  } else {
    let total = [0, 0];
    for (let subData of Object.values(data)) {
      const subDataArr = getTotalProgressByRecursion(subData);
      total[0] += subDataArr[0];
      total[1] += subDataArr[1];
    }
    return total;
  }
}
const result = getTotalProgressByRecursion(students);
// console.log(result[0] / result[1]);

// function getTotlaProgressByIteration(data) {
//   let total = 0,
//     students = 0;
//   for (let course of Object.values(data)) {
//     if (Array.isArray(course)) {
//       students += course.length;
//       for (let i = 0; i < course.length; i++) {
//         total += course[i].progress;
//       }
//     } else {
//       for (let subCourse of Object.values(course)) {
//         students += subCourse.length;
//         for (let i = 0; i < subCourse.length; i++) {
//           total += subCourse[i].progress;
//         }
//       }
//     }
//   }
//   return total / students;
// }
// console.log(getTotlaProgressByIteration(students));

function pow(num, degree) {
  if (degree === 0) {
    return 1;
  } else {
    return (num *= pow(num, degree - 1));
  }
}
// console.log(pow(2, 0));
pow(2, 2);
pow(2, 3); // 8
pow(3, 2); // 9
pow(5, 1); // 5

//========================================================================================================================================================
let students = {
  frontend: [
    { name: "Alex", progress: 80 },
    { name: "Maria", progress: 70 },
  ],

  backend: {
    node: [
      { name: "Peter", progress: 50 },
      { name: "Anna", progress: 90 },
    ],

    database: [
      { name: "Sam", progress: 40 },
      { name: "Kate", progress: 60 },
    ],
  },
};
function getAverageProgress(data) {
  if (Array.isArray(data)) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i].progress;
    }
    return [total, data.length];
  } else {
    let total = 0,
      count = 0;
    for (let value of Object.values(data)) {
      let result = getAverageProgress(value);
      total += result[0];
      count += result[1];
    }
    return [total, count];
  }
}
let result = getAverageProgress(students);
console.log(result[0] / result[1]);

//========================================================================================================================================================
let courses = {
  javascript: [
    { name: "Tom", progress: 75 },
    { name: "Lisa", progress: 85 },
  ],

  frontend: {
    html: [
      { name: "Mark", progress: 60 },
      { name: "Emma", progress: 80 },
    ],

    css: [{ name: "Nick", progress: 90 }],
  },

  backend: [
    { name: "John", progress: 50 },
    { name: "Kate", progress: 70 },
  ],

  backendA: [
    { name: "John", progress: 140 },
    { name: "Kate", progress: 70 },
  ],

  backendB: [
    { name: "John", progress: 5500 },
    { name: "Kate", progress: 755 },
  ],
};

function getAvarageProgress(data) {
  if (Array.isArray(data)) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i].progress;
    }
    return [total, data.length];
  } else {
    let total = 0,
      count = 0;
    for (let value of Object.values(data)) {
      let result = getAvarageProgress(value);
      total += result[0];
      count += result[1];
    }
    return [total, count];
  }
}
let result = getAvarageProgress(courses);
console.log(result[0] / result[1]);

//========================================================================================================================================================
// Напишите функцию, которая вычисляет факториал.

// Задание простое, но нужно понимать что такое факториал вообще. Факториал  – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

// Отсюда мы можем понять, что функция должна принимать 1 аргумент, который будет являться числом. Будет неплохо, если вы на собеседовании сразу напишите проверку на приходящее значение :) Поэтому, если в нашу функцию приходит дробное число или не число  - возвращается строка с любым сообщением на ваше усмотрение. Если 0 и меньше - возвращается число 1.

// Сам же факториал с примерами выглядит вот так:

// n! = n * (n - 1) * (n - 2) * ...*1 - это общая формула

// Примеры значений для разных n:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// То есть, вызов нашей функции factorial(5) возвращает число 120

// factorial(4) => 24

// Решить задачу нужно через рекурсию.

function factorial(n) {
  if (!Number.isInteger(n) || isNaN(n)) {
    return "error";
  }
  if (n <= 0) {
    return 1;
  } else {
    let result = n * factorial(n - 1);
    return result;
  }
}
console.log(factorial(5));
