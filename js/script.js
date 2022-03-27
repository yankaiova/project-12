/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const promo = document.querySelector('.promo'),
promoAdvs = promo.querySelector('.promo__adv'),
promoGenre = promo.querySelector('.promo__genre'),
promoBg = promo.querySelector('.promo__bg'),
movieOnPage = promo.querySelectorAll('.promo__interactive-item'),
formClass = promo.querySelector('.add'),
btn = formClass.lastElementChild,
addInput = formClass.querySelector('.adding__input'),
yes = formClass.getElementsByTagName('input')[1];
const list = promo.querySelectorAll('ul');

promoGenre.innerHTML = "драма";
promoAdvs.remove();
promoBg.style.background = 'url("img/bg.jpg") center center/cover no-repeat';

for (let movie of movieOnPage){//запись фильмов с прошлой лабы переделала
    movie.remove();
}

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ],
    createMovieOnPage: function(){
        for (let i = 0; i < movieDB.movies.length; i++) {
        movieDB.movies.sort();
        const newli = document.createElement("li");
        newli.innerText = movieDB.movies[i];
        newli.insertAdjacentHTML("afterbegin", `${i+1} `);
        newli.classList.add("promo__interactive-item");
        list[1].appendChild(newli);

        const newbutton = document.createElement("button");
        newbutton.innerText = 'Кинуть в корзину';
        newbutton.classList.add("btn-delete");
        list[1].appendChild(newbutton);
        }
    },
    deleteMovieOnPage: function(){
        while (list[1].firstChild) {
            list[1].removeChild(list[1].firstChild);
        }
    }
};
movieDB.createMovieOnPage();

const newMovie = (e) => {
    e.preventDefault();
    if (addInput.value.length > 21) {
        addInput.value = addInput.value.slice(0,21)+'...';
    } 
    if (yes.checked) {
        console.log("Добавляем любимым фильм " + addInput.value);
    }
    movieDB.deleteMovieOnPage();
    movieDB.movies.push(addInput.value);
    movieDB.createMovieOnPage();
}
btn.addEventListener('click', newMovie);

const btnDelete = document.querySelectorAll('.btn-delete'); //удаление работает один раз
for (let i = 0; i < btnDelete.length; i++){    
    btnDelete[i].addEventListener('click', (e) => {
       e.preventDefault();
    movieDB.movies.splice(i,1);
    console.log(movieDB);
   movieDB.deleteMovieOnPage();
    movieDB.createMovieOnPage();
}, {once: true});
}


