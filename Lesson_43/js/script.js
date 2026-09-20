"use strict";
// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
// const ads = document.querySelectorAll(".promo__adv img");
// ads.forEach((item) => {
//   item.remove();
// });

// // 2) Изменить жанр фильма, поменять "комедия" на "драма"
// const genre = document.querySelector(".promo__genre");
// genre.textContent = "драма";
// // 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// // Реализовать только при помощи JS
// const poster = document.querySelector(".promo__bg");
// poster.style.backgroundImage = 'url("img/bg.jpg")';

// // 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// // Отсортировать их по алфавиту
// const movieList = document.querySelector(".promo__interactive-list");

// movieList.innerHTML = "";
// movieDB.movies.sort();
// movieDB.movies.forEach((movie, i) => {
//   const li = document.createElement("li");
//   li.classList.add("promo__interactive-item");
//   li.textContent = `${i + 1}. ${movie}`;
//   movieList.append(li);
// });
// movieDB.movies.forEach((film, i) => {
//   movieList.innerHTML += `
//         <li class="promo__interactive-item">${i + 1}. ${film}
//             <div class="delete"></div>
//         </li>
//     `;
// });
// 5) Добавить нумерацию выведенных фильмов

//========================================================================================================================================================
const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};
// 1. Изменить логотип сайта.
// Замени изображение логотипа на icons/new-logo.svg.
// 2. Изменить заголовок страницы.
// Текст в блоке .promo__title должен стать:
// ИНТЕРСТЕЛЛАР
// 3. Изменить описание фильма.
// В .promo__descr установить:
// ИСТОРИЯ ПУТЕШЕСТВИЯ ЧЕРЕЗ ПРОСТРАНСТВО И ВРЕМЯ
// 4. Изменить рейтинги.
// В первом <span> блока .promo__ratings установить:
// IMDb: 8.7
// Во втором:
// Кинопоиск: 8.6
// 5. Добавить новый фильм в массив movieDB.movies.
// Интерстеллар
const logo = document.querySelector(".header__logo"),
  promoTitle = document.querySelector(".promo__title"),
  promoDescr = document.querySelector(".promo__descr"),
  promoRatings = document.querySelector(".promo__ratings"),
  newMovie = "Интерстеллар",
  movieList = document.querySelector(".promo__interactive-list");

logo.innerHTML = '<img src="icons/new-logo.svg" alt="logo">';
promoTitle.textContent = "ИНТЕРСТЕЛЛАР";
promoDescr.textContent = "ИСТОРИЯ ПУТЕШЕСТВИЯ ЧЕРЕЗ ПРОСТРАНСТВО И ВРЕМЯ";
promoRatings.innerHTML = "<span>IMDb: 8.7</span><span>Кинопоиск: 8.6</span>";

movieDB.movies.push(newMovie);
movieList.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
  const li = document.createElement("li"),
    div = document.createElement("div");
  li.classList.add("promo__interactive-item");
  div.classList.add("delete");
  li.textContent = `${i + 1}. ${film}`;
  li.prepend(div);
  movieList.append(li);
});
// movieDB.movies.forEach((item, i) => {
//   movieList.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${item}
//                             <div class="delete"></div>
//                         </li>`;
// });
// После этого список фильмов на странице должен автоматически сформироваться заново из массива, быть отсортирован по алфавиту и иметь нумерацию.

// 6. Сделать так, чтобы список фильмов очищался перед повторным формированием.

// То есть если код формирования списка запустить второй раз, старые <li> не должны продублироваться.

// 7. Добавить каждому фильму кнопку удаления.

// У каждого <li> внутри должен появиться:

// <div class="delete"></div>

// В итоге структура одного элемента должна быть примерно такой:

// <li class="promo__interactive-item">
//     1. Интерстеллар
//     <div class="delete"></div>
// </li>
// Небольшая подсказка

// Для этой задачи тебе пригодятся:

// querySelector
// querySelectorAll
// textContent
// src
// classList.add()
// createElement()
// append()
// sort()
// forEach()
// индекс i

// А №7 специально оставил чуть интереснее: тебе понадобится создать два элемента — li и div, а затем вложить div внутрь li.
