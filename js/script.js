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
      "Ла-ла лэнд-1",
      "Скотт Пилигрим против...",
      
  ]
};
// movieDB.movies.sort();
 const promoList = document.querySelector('.promo__interactive-list');
 
 
 movieDB.movies.forEach((item, i) => { 
   promoList.innerHTML += `<li class="promo__interactive-item"> ${i + 1 } ${item}<div class="delete"></div>
   </li>`;
   // console.log(item);
  });



// Добавляем фильмы из формы ввода в массив с фильмами
const inputValue = document.querySelector('.adding__input');
const btn = document.querySelector('button');
const checkBox = document.querySelector('[data-checkBox]');


// let i = 0;
btn.addEventListener('click', (e)=> {
  e.preventDefault(); // отключаем перезагрузку страницы
  let inputLength = inputValue.value.length;
  let inputText = inputValue.value;
  if(inputLength > 5) {
   }
   // этот прием удаляет и заменяет предыдущие значения, не подойдет
  // movieDB.movies[i] = inputText.slice(0, 5) + '\u2026';
// push вставляет сразу в конец, а надо вставлять сразу в нужное место по алфавиту

 movieDB.movies.push(inputText.slice(0, 5) + '\u2026');
  // i++;
  movieDB.movies.sort();
  console.log(movieDB);
  promoList.innerHTML = '';  // очищаем после каждого ввода все фильмы и заново прогоняем цикл и берем данные из массива
  
  movieDB.movies.forEach((item, i) => { 
    promoList.innerHTML += `<li class="promo__interactive-item"> ${i + 1 } ${item}<div class="delete"></div>
    </li>`;
    // console.log(item);
   
   });
 
   

});

// movieDB.movies.sort();
// const promoList = document.querySelector('.promo__interactive-list');
// promoList.innerHTML = '';
// movieDB.movies.forEach((item, i) => { 
//   promoList.innerHTML += `<li class="promo__interactive-item"> ${i + 1 } ${item}<div class="delete"></div>
//   </li>`;
//   // console.log(item);
//  });

// const promoList = document.querySelectorAll('.promo__interactive-item');
// promoList.forEach((item, i) => { 
//   //Сначала удаляем содержимое из HTML
//   item.innerHTML =  '';
//   // item.innerHTML = `${i + 1 } `+movieDB.movies[i];
//   // Но лучше так, так как позже надо будет класс delete использовать
//   item.innerHTML = `<li class="promo__interactive-item"> ${i + 1 } ${movieDB.movies[i]}<div class="delete"></div>
// </li>`;
//   //или так
//   //  item.insertAdjacentHTML('afterbegin', `${i+1} `); 
//  });


//  console.log(movieDB.movies);

// Удаляем фильмы из базы по клику на корзине
const trash = document.querySelectorAll('.delete');
trash.forEach((item, i) => {
    item.addEventListener('click', ()=> { 
      trash[i].parentNode.remove(); // удалем весь родительский узел у корзины
    });
  
 });

   //Проверяем чекбокс на галочку
   checkBox.addEventListener('change', ()=> { 
    if(checkBox.checked) {
      console.log('Да');
    } else {
      console.log('Нет');
    }
    
  });