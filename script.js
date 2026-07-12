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
// let i = 2;
// while (i <= 16) {
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   } else {
//     console.log(i);
//   }
//   i++;
// }

// 5.Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// const arrayOfNumbers = [];

// for (let i = 5; i <= 10; i++) {
//   arrayOfNumbers[i - 5] = i;
// }

// console.log(arrayOfNumbers[1]);
// return arrayOfNumbers;

//Advanced tasks

// 1.Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   result[i] = arr[i];
// }
// console.log(result);
// // Пишем решение вот тут

// // Не трогаем
// return result;

//2.Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// const data = [5, 10, "Shopping", 20, "Homework"];

// // Пишем решение вот тут
// for (let i = 0; i < data.length; i++) {
//   if (typeof data[i] === "number") {
//     data[i] = data[i] * 2;
//   } else if (typeof data[i] === "string") {
//     data[i] = data[i] + " - done";
//   }
// }
// console.log(data);
// // Не трогаем
// return data;

//3.Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// const data = [5, 10, "Shopping", 20, "Homework"];
// const result = [];
// for (let i = 0; i < data.length; i++) {
//   result[data.length - 1 - i] = data[i];
// }
// // Пишем решение вот тут
// console.log(result);
// // Не трогаем
// return result;

// Coding Exercise 5: (**) Задача на формирование фигуры
//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// const rows = 6;
// let result = "";

// for (let row = 1; row <= rows; row++) {
//   for (let spaces = 0; spaces < rows - row; spaces++) {
//     result += " ";
//   }
//   for (let stars = 0; stars < row * 2 - 1; stars++) {
//     result += "*";
//   }
//   result += "\n";
// }
// console.log(result);

// for (let line = 0; line <= 5; line++) {
//   //spaces
//   for (let spaces = 0; spaces < lines - line; spaces++) {
//     result += " ";
//   }
//   for (let stars = 0; stars < 2 * line + 1; stars++) {
//     result += "*";
//   }
//   result += "\n";
// }
// console.log(result);
// Проверяется именно переменная result, формируйте строку в ней

// *
// **
// ***
// ****
// *****
// ******
// let result = "";
// const length = 6;
// for (let i = 1; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }
//   result += "\n";
// }
// console.log(result);

//Lesson 23. Практика, ч2. Применяем условия и циклы

// let numberOfFilms = +prompt("Сколько фильмов ви посмотрели?", "");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };
// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
// for (let i = 0; i < 2; i++) {
//   const a = prompt("Останній фільм,що дивилися", ""),
//     b = prompt("На сколько оцените фильм?", "");

//   // 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
//   // отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
//   // возвращаем пользователя к вопросам опять
//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("Done");
//   } else {
//     console.log("error");
//     i--;
//   }

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// if (personalMovieDB.count < 10) {
//   console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   alert("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//   console.log("Вы киноман");
// } else {
//   console.log("An Error occured");
// }
// console.log(personalMovieDB);

// 4) Потренироваться и переписать цикл еще двумя способами*/
// let i = 0;
// while (i < 2) {
//   const a = prompt("Останній фільм,що дивилися", ""),
//     b = prompt("На сколько оцените фильм?", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("Done");
//     i++;
//   } else {
//     console.log("error");
//     i--;
//   }
// }
// let i = 0;
// do {
//   const a = prompt("Останній фільм,що дивилися", ""),
//     b = prompt("На сколько оцените фильм?", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("Done");
//     i++;
//   } else {
//     console.log("error");
//   }
// } while (i < 2);
//========================================================================================================================================================

// // 1) Создай переменную:
// let numberOfGames = +prompt("Сколько игр ты уже прошёл?", "");
// // 2) Создай массив для хранения игр:
// const gamesDB = [];
// // 3) При помощи цикла 2 раза спроси у пользователя:// название последней игры
// // оценку этой игры (от 1 до 10)

// for (let i = 0; i < numberOfGames; i++) {
//   // 4) Условия проверки (как у тебя с фильмами):
//   const gameName = prompt("название последней игры", "");
//   const gameRate = +prompt("оценку этой игры(от 1 до 10)", "");
// Пользователь НЕ должен:

// вводить пустую строку ""
// нажимать Cancel (null)
// вводить название длиннее 30 символов

// Если ошибка → повторить ввод заново
//   if (
//     gameName !== null &&
//     gameName !== "" &&
//     gameName.length <= 30 &&
// !isNaN(gameRate) &&
//     gameRate >= 1 &&
//     gameRate <= 10
//   ) {
//     gamesDB.push({
//       name: gameName,
//       rating: gameRate,
//     });
//   } else {
//     i--;
//   }
// }
// 6) После цикла выведи оценку пользователя:
// если игр меньше 5 → "Ты новичок"
// если от 5 до 15 → "Ты обычный игрок"
// если больше 15 → "Ты геймер"
// иначе → "Ошибка данных"
// if (gamesDB.length < 5) {
//   console.log("Ты новичок");
// } else if (gamesDB.length >= 5 && gamesDB.length < 15) {
//   console.log("Ты обычный игрок");
// } else if (gamesDB.length >= 15) {
//   console.log("Ты геймер");
// } else {
//   console.log("ERROR");
// }
// console.log(gamesDB);

//  🧠 Задача: «Моя библиотека книг»

// const booksDB = [];
// let numberOfBooks = +prompt("Сколько книг прочитал?", "");

// for (let i = 0; i < numberOfBooks; i++) {
//   const bookName = prompt("Название книги?", "");
//   const bookRate = +prompt("Оценку книги от 1 до 10", "");
//   if (
//     bookName != null &&
//     !isNaN(bookRate) &&
//     bookRate >= 1 &&
//     bookRate <= 10 &&
//     bookName != "" &&
//     bookName.length <= 40
//   ) {
//     booksDB.push({ title: bookName, rating: bookRate });
//   } else {
//     console.log("Ошибка ввода");
//     i--;
//   }
// }
// console.log(booksDB);

// if (booksDB.length < 3) {
//   console.log("Вы начинающий читатель");
// } else if (booksDB.length >= 3 && booksDB.length <= 10) {
//   console.log("Вы любите читать");
// } else if (booksDB.length > 10) {
//   console.log("You are a real bookworm");
// } else {
//   console.log("Error");
// }
// const totalBookRating = 0;
// const totalBookNumber=0;

// После вывода массива посчитай среднюю оценку всех книг.

// Например:

// 10 + 9 + 10 = 29

// 29 / 3 = 9.67

// и выведи:

// Средняя оценка книг: 9.67
// Столько раз, сколько указал пользователь в numberOfBooks, спроси:

// Название книги.
// Оценку книги от 1 до 10.
// 4. Проверка данных

// Пользователь НЕ должен:

// нажимать Cancel;
// оставлять пустую строку;
// вводить название длиннее 40 символов;
// вводить оценку меньше 1 или больше 10.

// Если данные неверны:

// вывести в консоль "Ошибка ввода";
// повторить текущую итерацию.
// 5. Если данные верны

// Добавить объект в массив:

// {
//   title: "название книги",
//   rating: оценка
// }
// 6. После завершения цикла

// Вывести весь массив:

// console.log(booksDB);
//
// Пример результата массива

// После ввода:

// Гарри Поттер
// 10

// 1984
// 9

// Мастер и Маргарита
// 10

// в консоли должно быть примерно:

// [
//   { title: "Гарри Поттер", rating: 10 },
//   { title: "1984", rating: 9 },
//   { title: "Мастер и Маргарита", rating: 10 }
// ]
// Дополнительное задание ⭐

// Это уже хорошая тренировка:

// циклов for;
// проверки данных;
// массивов;
// объектов;
// накопления суммы в переменной.

// function showFirstMessage(text) {
//   console.log(text);
// }
// showFirstMessage("Hello World");

// function calc(a, b) {
//   return a + b;
// }
// calc(5, 6);

// let x = calc(5, 6);
// console.log(x);
// let num = 20;
// function showFirstMessage(text) {
//   console.log(text);
//   num = 10;
// }
// console.log(num);
// showFirstMessage("Hello World");

// function calc(a, b) {
//   return a + b;
// }
// console.log(calc(2, 3));
// console.log(calc(5, 3));
// console.log(calc(6, 3));
// console.log(calc(8, 3));

// function ret() {
//   let num = 50;
//   return num;
//   console.log(ret);
// }
// function ret() {
//   let num = 50;
//   return num;
// }

// console.log(ret); // сама функция
// console.log(ret()); // результат работы функции

// function ret() {
//   let num = 50;
//   return num;
// }
// const num2 = ret();
// console.log(num2);

// const usdCurrRate = 28;
// const euroCurrRate = 32;
// const gbpCurrRate = 36;
// function convert(amount, curr) {
//   console.log(curr * amount);
// }
// convert(200, usdCurrRate);
// convert(250, euroCurrRate);
// convert(200, gbpCurrRate);

// const usdRate = 40,
//   euroRate = 45,
//   gbpRate = 52;

// function convert(amount, curr) {
// //   console.log(amount * curr);
// // }
// // convert(100, usdRate);
// // convert(50, euroRate);
// // convert(20, gbpRate);

// // Не запуская программу, ответь:

// // Какие аргументы будут переданы при вызове для евро? 50,45
// // Какие значения получат параметры amount и rate внутри функции при этом вызове?50,45
// // Чему будет равен результат вычисления внутри функции? 6750
// // Какая переменная существует только внутри функции и недоступна снаружи? Нет такой

// //========================================================================================================================================================

// const usdRate = 40;
// const euroRate = 45;
// const gbpRate = 52;
// function convert(amount, currency) {
//   let rate;
//   if (currency === "USD") {
//     rate = usdRate;
//   } else if (currency === "EUR") {
//     rate = euroRate;
//   } else if (currency === "GBP") {
//     rate = gbpRate;
//   } else {
//     return "Unknown currency";
//   }
//   return amount * rate;
// }
// console.log(convert(100, "USD"));
// console.log(convert(50, "EUR"));
// console.log(convert(20, "GBP"));
// console.log(convert(10, "JPY"));

// //  2. Внутри функции:

// // Функция должна:

// // Проверить, какая валюта передана (currency)
// // Выбрать соответствующий курс
// // Посчитать сумму в гривнах
// // вернуть результат (return)
// // 3. Логика выбора валюты

// // Используй условия:

// // "USD" → usdRate
// // "EUR" → euroRate
// // "GBP" → gbpRate
// // 4. Если валюта неизвестна

// // Верни строку:

// // "Unknown currency"
// // 📌 Вызовы функции

// // Сделай такие вызовы:

// //========================================================================================================================================================
// // Lesson 26
// // 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

// // Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

// // P.S. возвращать - это использовать ключевое слово return.
// const hello = "Привет,";
// function sayHello(name) {
//   return hello + name;
// }
// console.log(sayHello("Антон"));
// //========================================================================================================================================================

// function sayHello(name) {
//   return `Привет, ${name}!`;
// }
// //========================================================================================================================================================

// const userName = "Антон";

// function sayHello(name) {
//   return `Привет, ${name}!`;
// }

// console.log(sayHello(userName));

// //========================================================================================================================================================

// function sayHello(name) {
//   return `Привет, ${name}!`;
// }

// console.log(sayHello("Антон"));

// // 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// // Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

// function returnNeighboringNumbers(number) {
//   return [number - 1, number, number + 1];
// }

// console.log(returnNeighboringNumbers(5));

// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// function getMathResult(a, b) {
//   if (typeof b !== "number" || b <= 0) {
//     return a;
//   }

//   let result = "";

//   for (let i = 1; i <= b; i++) {
//     if (i === 1) {
//       result += a;
//     } else {
//       result += "---" + a * i;
//     }
//   }

//   return result;
// }
// console.log(getMathResult(3, 0));
// function getMathResult(start, count) {
//   if (typeof count !== "number" || count <= 0) {
//     return start;
//   }
//   let str = "";
//   for (let i = 1; i <= count; i++) {
//     if (i === count) {
//       str += `${start * i}`;
//     } else {
//       str += `${start * i} --- `;
//     }
//   }
//   return str;
// }
// console.log(getMathResult(5, 5));
// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20

// Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя.
// function getMathResult(num, times) {
//   if (typeof times !== "number" || times <= 0) {
//     return num;
//   }

//   let str = "";

//   for (let i = 1; i <= times; i++) {
//     if (i === times) {
//       str += `${num * i}`;
//       // Тут без черточек в конце
//     } else {
//       str += `${num * i}---`;
//       // Это тоже самое, что и
//       // str = str + num * i + "---"
//     }
//   }

//   return str;
// }
// function getMathResult(num, times) {
//   if (typeof times !== "number" || times <= 0) {
//     return num;
//   }
//   let str = "";
//   for (let i = 1; i <= times; i++) {
//     if (i === times) {
//       str += `${num * i}`;
//     } else {
//       str += `${num * i}---`;
//     }
//   }
//   return str;
// }
// console.log(getMathResult(5, 3));

// Создайте функцию getSquareSequence(base, count).

// Функция принимает два аргумента:

// base — число;
// count — количество элементов последовательности.

// Функция должна вернуть строку, состоящую из квадратов чисел, начиная с base, разделённых символом " | ".

// После последнего числа разделителя быть не должно.

// Пример
// getSquareSequence(2, 4);

// должно вернуть:

// "4 | 9 | 16 | 25"

// Потому что:

// 2² = 4
// 3² = 9
// 4² = 16
// 5² = 25
// Особые случаи

// Если count:

// не является числом (typeof);
// равен нулю;
// меньше нуля;

// то функция должна вернуть только значение base.

// Примеры
// getSquareSequence(2, 0);    // 2
// getSquareSequence(2, -3);   // 2
// getSquareSequence(2, '5');  // 2

// function getSquareSequence(base, count) {
//   if (typeof count !== "number" || count <= 0) {
//     return base;
//   }

//   let str = "";
//   for (let i = 0; i < count; i++) {
//     if (i !== count - 1) {
//       str += `${(base + i) * (base + i)} | `;
//     } else {
//       str += `${(base + i) * (base + i)} `;
//     }
//   }
//   return str;
// }
// console.log(getSquareSequence(5, 6));

// //========================================================================================================================================================
// // Создайте функцию getCubeSequence(start, count).
// function getCubeSequence(start, count) {
//   if (typeof count !== "number" || count <= 0) {
//     return start;
//   }
//   let str = "";
//   for (let i = 0; i < count; i++) {
//     if (i !== count - 1) {
//       str += `${(start + i) * (start + i) * (start + i)} <-> `;
//     } else {
//       str += `${(start + i) * (start + i) * (start + i)}`;
//     }
//   }
//   return str;
// }
// console.log(getCubeSequence(2, 4));

// Функция принимает два аргумента:

// start — число, с которого начинается последовательность;
// count — количество чисел в последовательности.

// Функция должна вернуть строку, содержащую кубы последовательных чисел, начиная с start.

// Числа должны быть разделены строкой:

//  <->

// После последнего числа разделителя быть не должно.

// Пример
// getCubeSequence(2, 4);

// Должно вернуть:

// 8 <-> 27 <-> 64 <-> 125

// Потому что:

// 2³ = 8
// 3³ = 27
// 4³ = 64
// 5³ = 125
// Особые случаи

// Если count:

// не является числом (typeof);
// равен нулю;
// меньше нуля;

// то функция должна вернуть только значение start.

//========================================================================================================================================================
// Создай функцию getOddSequence(start, count).
// Функция принимает:
// start — число, с которого начинается последовательность
// count — сколько чисел нужно сгенерировать
// function getOddSequence(start, count) {
//   if (typeof count !== "number" || count <= 0) {
//     return start;
//   }
//   let string = "";
//   for (let i = 0; i < count; i++) {
//     if (i !== count - 1) {
//       string += `${start + i * 2} + `;
//     } else {
//       string += `${start + i * 2}`;
//     }
//   }
//   return string;
// }
// console.log(getOddSequence(7, 10));
// // 📌 Условие
// // Функция должна вернуть строку, где идут нечётные числа, начиная с start, разделённые:
// //  +
// // После последнего числа разделителя быть не должно.
// // 📍 Пример
// // getOddSequence(3, 5);
// // Результат:
// // 3 + 5 + 7 + 9 + 11
// // ⚠️ Особые случаи
// // Если:
// // count не число
// // count <= 0
// // то вернуть просто start.
// // 💡 Подсказка (важная)
// // Попробуй решить через:
// // for (let i = 0; i < count; i++)
// // И подумай:
// // 👉 как получить число 3, 5, 7, 9, 11 через start и i?

// // Место для третьей задачи
// function getMathResult(start, count) {
//   if (typeof count !== "number" || count <= 0) {
//     return start;
//   }
//   let str = "";
//   for (let i = 1; i <= count; i++) {
//     if (i !== count) {
//       str += `${start * i}---`;
//     } else {
//       str += `${start * i}`;
//     }
//   }
//   return str;
// }
// console.log(getMathResult(3, 5));

// let str = "test";
// console.log(str.toUpperCase());

// function getEvevnNum(start, count) {
//   if (typeof count !== "number" || count <= 0) {
//     return start;
//   }
//   if (start % 2 !== 0) {
//     return "ERROR";
//   }
//   let str = "";
//   for (let i = 0; i < count; i++) {
//     if (i !== count - 1) {
//       str += `${start + i * 2} ~ `;
//     } else {
//       str += `${start + i * 2}`;
//     }
//   }
//   return str;
// }
// console.log(getEvevnNum(4, 3));
//========================================================================================================================================================

// function getTripleSequence(start, count) {
//   if (typeof count !== "number" || count <= 0) {
//     return start;
//   }
//   let str = "";
//   for (let i = 0; i < count; i++) {
//     if (i !== count - 1) {
//       str += `${start + i * 3} => `;
//     } else {
//       str += `${start + i * 3}`;
//     }
//   }
//   return str;
// }
// console.log(getTripleSequence(4, 10));

// function getTripleSequence(start, count) {
//   if (typeof count !== "number" || count <= 0) {
//     return start;
//   }
//   let str = "";
//   for (let i = 0; i < count; i++) {
//     if (i !== count - 1) {
//       str += `${start + (start + i ** 2)} => `;
//     } else {
//       str += `${start + (start + i ** 2)}`;
//     }
//   }
//   return str;
// }
// console.log(getTripleSequence(4, 10));

//========================================================================================================================================================

// str+= start+start*i
// 2 | 5 | 10 | 17 | 26 | 37

// let strw = "Widget with id";

// alert(strw.indexOf(" ")); // 0, потому что подстрока 'Widget' найдена в начале
// alert(strw.indexOf("widget")); // -1, совпадений нет, поиск чувствителен к регистру

// alert(strw.indexOf("id"));

// let strw = "Widget with id";

// for (let i = 0; i < strw.length; i++) {
//   console.log(i, strw[i]);
// }
// const logg = "Hello World";
// // console.log(logg.slice(-11, -4));
// console.log(logg.substring(4, 8));

// const num = 12.49;
// console.log(Math.round(num));

// const test = "12.2 px";
// console.log(parseInt(test));

// const test = "12.2px";
// console.log(parseFloat(test));

//Lesson27========================================================================================================================================================

///* Задание на урок:

// 1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// P.S. Функции вызывать не обязательно */

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов ви посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов ви посмотрели?", "");
  }
}
// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Останній фільм,що дивилися", ""),
      b = prompt("На сколько оцените фильм?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("Done");
    } else {
      console.log("error");
      i--;
    }
  }
}
// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("An Error occured");
  }
}
// detectPersonalLevel();

//*Задание на урок:

// 1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// P.S. Функции вызывать не обязательно */
// function showMyDB() {
//   if (personalMovieDB.privat !== true) {
//     console.log(personalMovieDB);
//   }
// }
// showMyDB();

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     const question = prompt(`Ваш любимый жанр под номером ${i}`);
//     personalMovieDB.genres[i - 1] = question;
//   }
// }
// console.log(personalMovieDB);
// writeYourGenres();

//Better variant
// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//   }
// }
// console.log(personalMovieDB);
// writeYourGenres();

//Lesson 28 Exercises========================================================================================================================================================
//Задачи:

// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

// Примеры:

// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

function calculateVolumeAndArea(a) {
  if (isNaN(a) || typeof a == " " || a <= 0 || a % 1 !== 0) {
    return "При вычислении произошла ошибка";
  }
  const volume = a * a * a;
  const area = 6 * a * a;
  return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}
console.log(calculateVolumeAndArea(5));

// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:
// Функция принимает только целое число от 1 до 36.

// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

// "Ошибка. Проверьте правильность введенного номера места"

// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

// Пример:

// getCoupeNumber(33)  => 9

// getCoupeNumber(7)  => 2

// getCoupeNumber(300)  => "Таких мест в вагоне не существует"

// getCoupeNumber(0)  => "Таких мест в вагоне не существует"

// getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

// getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

// getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"
function getCoupeNumber(a) {
  if (typeof a !== "number" || a < 0 || a % 1 !== 0) {
    return "Ошибка. Проверьте правильность введенного номера места";
  }
  if (a === 0 || a > 36) {
    return "Таких мест в вагоне не существует";
  }

  return Math.ceil(a / 4);
}
console.log(getCoupeNumber(5));

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

function getTimeFromMinutes(m) {
  if (isNaN(m) || m < 0 || m % 1 !== 0) {
    return "Ошибка, проверьте данные";
  }
  const hours = Math.floor(m / 60);
  let hourWord;
  if (hours === 1) {
    hourWord = "час";
  } else if (hours > 1 && hours < 5) {
    hourWord = "часа";
  } else {
    hourWord = "часов";
  }
  return `Это ${hours} ${hourWord} и ${m % 60} минут`;
}

console.log(getTimeFromMinutes(61));

// let num = 5.9;
// console.log(Math.floor(num));

// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:

// findMaxNumber(1, 5, 6.6, 11); =>  11

// findMaxNumber(1, 5, '6', '10');  =>  0

function findMaxNumber(a, b, c, d) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof c !== "number" ||
    typeof d !== "number" ||
    a === undefined ||
    b === undefined ||
    c === undefined ||
    d === undefined
  ) {
    return 0;
  }
  // if (a > b && a > c && a > d) {
  //   return a;
  // }
  // if (b > a && b > c && b > d) {
  //   return b;
  // }
  // if (c > a && c > b && c > d) {
  //   return c;
  // }
  // if (d > a && d > b && d > c) {
  //   return d;
  // }
  else {
    return Math.max(a, b, c, d);
  }
}

console.log(findMaxNumber(8, 5, 55.3, 3));

//Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.

// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

// Пример:

// fib(4) => ''0 1 1 2"

// fib(7) => ''0 1 1 2 3 5 8"

// fib('7') => ''"

// fib(1) => "0"

// fib(0) => ''"
function fib(n) {
  let prev = 0;
  let next = 1;
  let result = "";
  for (let i = 0; i < n; i++) {
    result += next;
  }
  return result;
}

console.log(fib(7));

function fib(num) {
  if (typeof num !== "number" || num <= 0 || !Number.isInteger(num)) {
    return "";
  }

  let result = "";
  let first = 0;
  let second = 1;

  for (let i = 0; i < num; i++) {
    if (i + 1 === num) {
      result += `${first}`;
      // Без пробела в конце
    } else {
      result += `${first} `;
    }

    let third = first + second;
    first = second;
    second = third;
  }

  return result;
}

console.log(fib(7));
