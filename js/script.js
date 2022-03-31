/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


// Я сам))
//Удалем рекламу
// document.querySelector('.promo__adv').remove(); // простой вариант
// или через цикл. удаляем именно изображения реклам но не блок
const adv = document.querySelectorAll('.promo__adv img');
adv.forEach(item => { 
  item.remove(); 
 });


//Меняем жанр - можно через textContent также
let genre  = document.querySelector('.promo__genre');
genre.innerHTML = 'Драма';
//Меняем фон постера
const bg = document.querySelector('.promo__bg');
bg.style.background = 'url(../img/bg.jpg)';
bg.style.maxWidth  = '100%';


// формируем базу фильмов из JS и сортируем



const movieDB = {
  movies: [
    "Одержимость",
      "Логан2",
      "Лига справедливости",
      "Ла-ла лэнд-2",
      "Скотт Пилигрим против..."
  ]
};
movieDB.movies.sort();
//  console.log(movieDB.movies);
const promoList = document.querySelectorAll('.promo__interactive-item');
promoList.forEach((item, i) => { 
  //Сначала удаляем содержимое из HTML
  item.innerHTML =  '';
  item.innerHTML = `${i + 1 } `+movieDB.movies[i];
 
  //или так
  //  item.insertAdjacentHTML('afterbegin', `${i+1} `); 
 });

 //У Ивана по другому. см. в файле
 
window.addEventListener('click', function stop(){
console.log('Привет!'); 
//удаляем обработчик после клика
window.removeEventListener('click', stop);
});
