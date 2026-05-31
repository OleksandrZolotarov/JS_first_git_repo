//SECTION 2. Основи Java Script
// LESSON 10 Классификация типов данных в JavaScript//
//11. (д) Разница между объектами и массивами и неочевидные синтаксические возможности

"use strict";
// const arr = [1, 2, 3];
// console.log(arr[2])

// let number = -4;
// // console.log(number)
// console.log(number / 0);

//string
// const person = "Alex";
// console.log(person);

//Objects

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// }
// console.log(obj["age"])

//Arrays

// let arr = ['plum.png', 'orange.jpg', 'orange-orange.jpg'];
// console.log(arr[1]);

// const arrObj = {
//     a: 'a',
//     '1': 'b',
//     2: 'c'
// }
// arrObj['b'] = 1234;
// arrObj.c = 333;
// console.log(arrObj['c'])
// console.log(arrObj['b'])

//Homework
//Задачи:

//Создайте переменную с названием магазина (магазин - store, имя - name) и поместите в неё любое название на ваш выбор.

// Создайте объект под названием storeDescription

// Во внутрь этого объекта напрямую поместите свойство budget и укажите его как 10000. Напрямую - это сразу внутри фигурных скобок, мы его расширяем на месте

// Во внутрь объекта storeDescription напрямую поместите свойство employees. Это должен быть массив, который содержит имена трех сотрудников на ваш выбор

// Во внутрь объекта storeDescription напрямую поместите свойство products. Это должен быть тоже объект, который содержит два товара и их цену. То есть, нужно создать пару ключ-значение в виде товар: цена Данные на ваш выбор.

// Во внутрь объекта storeDescription напрямую поместите свойство open. Тут можно контролировать: или магазин открыт, или закрыт, то есть логическое значение. Сделайте его открытым
// let storeName = 'Secretinme';
// const storeDescription = {
//     budget: 10000,
//     employees: ['John', 'Andrew', 'Sveta'],
//     products: { oranges: 500, plums: 400 },
//     open: true
// };
//========================================================================================================================================================

// LESSON 12 Простое общение с пользователем
// alert('Hello');
// const result = confirm('Are you here?');
// console.log(result)
// const answer = prompt('Are you 18?', 'Yes');
// console.log(typeof (answer))
// const answer = prompt('Are you 18?', 'Yes');
// console.log(typeof (answer))

// const answers = [];
// answers[0] = prompt('Are you 18?', '');
// answers[1] = prompt('Name?', '');
// answers[2] = prompt('Surname?', '');

// const category = 'toys';
// // console.log('http://someurl.com/' + category)
// console.log(`http://someurl.com/${category}/5`)

// const user = 'Alex';
// alert(`Привіт,${user}`)

// // LEsson 14 Оператори
// console.log('arr' + "-object");
// console.log(4 + "-object");
// console.log(4 + +"5");

// // Increment and decrement
// let incr = 10,
//     decr = 10;
// console.log(++incr); //новое значение
// console.log(--decr);
// console.log(incr++); //старое значение
// console.log(decr--);

// //Другие оператори
// console.log(100 % 2);
// console.log(2 * 4 === '8');

// const isChecked = true;
// const isClose = false;
// const isOpen = true;

// console.log(isChecked && isClose && isOpen);

// console.log(`\`` === "`");

//========================================================================================================================================================

//LESSON 17 Practice 1. Application creation

// let numberOfFilms = +prompt("Сколько фильмов ви посмотрели?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false

// }

// const a = prompt("Останній фільм,що дивилися", ""),
//     b = prompt("На сколько оцените фильм?", ""),
//     c = prompt("Останній фільм,що дивилися", ""),
//     d = prompt("На сколько оцените фильм?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

//========================================================================================================================================================
//LESSON 19 Условия

// if (4 == 4) { console.log('OK') }
// else { console.log('Error') }

// if (1) { console.log(typeof (true)) }

// const num = 'net';
// // if (num < 49) { console.log('Error'); }
// // else if (num > 51) { console.log('BOLSHE') }
// // else { console.log("RAVNO") }

// // (num === 50) ? console.log('OK!') : console.log("Error");

// switch (num) {
//     case 'string': console.log('DA');
//         break;
//     case 100: console.log('>Net>');
//         break;
//     case 51: console.log('OK');
//     default: console.log('Ne odno');
//         break
// }
// const num = 'net';

// switch (typeof num) {
//     case 'string':
//         console.log('DA');
//         break;
//     case 'number':
//         console.log('>Net>');
//         break;
//     case 'boolean':
//         console.log('OK');
//         break;
//     default:
//         console.log('Ne odno');
// }
// console.log(NaN || 2 || undefined);
// console.log(undefined && 2 && undefined);
// console.log(1 && 2 && 3);
// console.log(!1 || 1);
// console.log(25 || null && !3); console.log(NaN || null || !3 || undefined || 5);

// console.log(NaN || null && !3 && undefined || 5);
// console.log(5 === 5 && 3 > 1 || 5);
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// }
// const hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//     console.log('Done!')
// }
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// }
// let num = 50;
// while (num < 55) {
//     console.log(num);
//
// }

// let num = 50;

// // do {
// //     num++;
// //     console.log(num);

// // } while (num < 56);
// for (let i = 0; i <= 10; i++) {
//     num++;
//     if (num === 55) { continue; }
//     console.log(num);
// }
// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//     alert(i);
//     i++;
// }
// let num = 1;
// for (i = 0; i < 11; i++) {
//     num++;
//     if (num === 3 && num === 5 && num === 7 && num === 9)
// }

//LESSON 22 Цикл в цикле и метки

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//         for (let k = 0; k < 3; k++) { console.log(k); }
//     }
// }
// The Pattern of OutputThe console will look like this (truncated):0 (i)0 (j)0, 1, 2 (k)1 (j)0, 1, 2 (k)2 (j)0, 1, 2 (k)1 (i) ... and so on.

// *
// **
// ***
// ****
// *****
// ******
// let result = "";
// const length = 6;
// for (let i = 4; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }
//   result += "\n";
// }
// console.log(result);

// let result = " ";
// const length = 10;

// for (let i = 1; i <= length; i++) {
//   for (let j = 1; j <= i; j++) {
//     result += j + " ";
//   }
//   result += "\n";
// }

// console.log(result);

// for (let i = 1; i < 10; i++) {

//   if (i % 2 == 0) continue;

//   console.log(i); // 1, затем 3, 5, 7, 9
// }

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     break;
//   }
//   console.log(i);
// }
// for (let i = 1; i < 10; i++) {
//   if (i === 6) break;

//   console.log(i);
// }
// for (let i = 0; i < 3; i++) {
//   console.log(i++);
// }
// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }
// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }
// let i = 0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++;
// }
// let i = 1;

// do {
//   alert(i--);
// } while (--i);

// METKI
// for (let i = 0; i < 3; i++) {
//   console.log(`First Level ${i}`);
//   for (let j = 0; j < 2; j++) {
//     console.log(`Second Level ${j}`);
//     for (let k = 0; k < 3; k++) {
//       console.log(`Third Level ${k}`);
//     }
//   }
// }

//Задачи
// 1.При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// for (let i = 0; i < 11; i++) {
//   if (i >= 5 && i <= 10) {
//     console.log(i);
//   }
// }

// 2.При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
// for (let i = 20; i >= 10; i--) {
//   if (i === 13) {
//     break;
//   }
//   console.log(i);
// }

// 3.При помощи цикла for выведите чётные числа от 2 до 10 включительно

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 4.Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

//  Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// let i = 2;
// while (i <= 16) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
//   i++;
// }
let i = 2;
while (i <= 16) {
  if (i % 2 === 0) {
    i++;
    continue;
  } else {
    console.log(i);
  }
  i++;
}

// 5.Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

let arr = [5, 6, 7, 8, 9, 10];
