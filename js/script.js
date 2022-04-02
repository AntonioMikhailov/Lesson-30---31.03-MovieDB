/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
window.addEventListener('load', ()=> {
 
const adv = document.querySelectorAll('.promo__adv img');
const bg = document.querySelector('.promo__bg');
let genre  = document.querySelector('.promo__genre');
const formAdd = document.querySelector('form.add'); // сначала тег form + класс add
const inputValue = document.querySelector('.adding__input');
const btn = document.querySelector('button');
const checkBox = document.querySelector('[data-checkBox]'); // или по типу ('[type="checkbox"]')
const promoList = document.querySelector('.promo__interactive-list');

//Удаляем рекламу
const deleteAdv = (removeElement)=> {
  removeElement.forEach(item => { 
    item.remove(); 
  });
};

deleteAdv(adv);

//Меняем жанр и фон - можно через textContent также
const changeSome = ()=> {
  genre.innerHTML = 'Драма';
  //Меняем фон постера
bg.style.background = 'url(../img/bg.jpg)';

};
changeSome();




// формируем базу фильмов из JS и сортируем
const movieDB = {
  movies: [
    "Одержимость",
       "Логан2",
      "Лига справедливости",
      "Ла-ла лэнд-1",
      "Скотт Пилигрим против...",
    ]
};

// 1 - В HTML пишем теги с ыильмами на то случай если у кого то будет отключен JS чтобы шаблон с фил. бфл виден.
// 2. Запускаем ф.createMovieList - она очищает HTML и добавляет из массива наши ф. + сортирует их. Туда же надо добавить Обрабьотчик удаления фильмов .т.к. если снаружи фун. то не будет удалять новые фил.
// 3. Создаем Обработчки Клик для ввода новых фильмов - 

// Сортируем фильмы в массиве сразу 
const sortArr = (arr) => {
  arr.sort();
};


// Добавляем фильмы из формы ввода в массив с фильмами
// Добавляем независмимые параметры в ф. чтобы можно было любой элемент добавлять  и только в аргументах при вызове ставить нужные элементы из DOM 13-23 №33
function createMovieList(films, parent) { 
  parent.innerHTML = '';  // очищаем HTML 
  sortArr(films);

  films.forEach((item, i) => { 
    parent.innerHTML += `<li class="promo__interactive-item"> ${i + 1 } ${item}<div class="delete"></div>
    </li>`;
   });
     // Удаляем фильмы из базы по клику на корзине / Важно поместить внутрь Функции createMovieList иначе новые ф. не удаляет
 
  document.querySelectorAll('.delete').forEach((item, i) => {
    item.addEventListener('click', (e)=> { 
     item.parentNode.remove(); // удалем весь родительский узел у корзины или  item.parentElement
   
      movieDB.movies.splice(i, 1);
      createMovieList(films,parent); // рекурсия - еще раз вызываем себя - ф. чтобы заново отсортировала массив ( как бы освежает сама себя)
      console.log(movieDB.movies);
      
    });
  
 });
}
createMovieList(movieDB.movies,promoList);

// Добавляем фильмы в массив и HTML по клику на кнопке -Добавить
 formAdd.addEventListener('submit', (event)=> { // но можно click 
  event.preventDefault(); // отключаем перезагрузку страницы и отправку формы
  let newFilm = inputValue.value;
  let favorite = checkBox.checked; // true
  if(newFilm) { // если не пустая строка ввода
    if(newFilm.length > 3) {
      newFilm = newFilm.slice(0, 3) + '\u2026'; // или substring
      // newFilm =`${newFilm.slice(0, 5)}...` ;
     } 
        //Проверяем чекбокс на галочку
    if(favorite) {
      console.log('Любимый фильм Мой!');
    } else {
      console.log('Нет');
    }
    
    movieDB.movies.push(newFilm);
    sortArr(movieDB.movies);
   createMovieList(movieDB.movies,promoList);

   //  inputValue.value = ''; // или просто input очистить после клика
   //или
// event.target.reset();
   formAdd.reset(); // или обратиться к самой форме
    console.log(movieDB);

  }
}); 
 






}); //конец load

