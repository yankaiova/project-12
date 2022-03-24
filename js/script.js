/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)
2) Изменить жанр фильма, поменять "комедия" на "драма"
3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 
5) Добавить нумерацию выведенных фильмов */

'use strict';

const promo = document.querySelector('.promo'),
promoAdvs = promo.querySelector('.promo__adv'),
promoGenre = promo.querySelector('.promo__genre'),
promoBg = promo.querySelector('.promo__bg'),
movieOnPage = promo.querySelectorAll('.promo__interactive-item');


promoGenre.innerHTML = "драма";
promoAdvs.remove();
promoBg.style.background = 'url("img/bg.jpg") center center/cover no-repeat';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
movieDB.movies.sort();

for (let i = 0; i < movieOnPage.length; i++) {
    movieOnPage[i].innerHTML = movieDB.movies[i];
    movieOnPage[i].insertAdjacentHTML("afterbegin", `${i+1} `);
}
