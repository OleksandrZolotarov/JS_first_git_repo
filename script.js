//SECTION 2. Основи Java Script
// LESSON 10 Классификация типов данных в JavaScript//
//11. (д) Разница между объектами и массивами и неочевидные синтаксические возможности

"use strict"
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
const num = 'net';

switch (typeof num) {
    case 'string':
        console.log('DA');
        break;
    case 'number':
        console.log('>Net>');
        break;
    case 'boolean':
        console.log('OK');
        break;
    default:
        console.log('Ne odno');
}