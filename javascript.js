/*let username = "Niyazbek"
const number = 1
alert("Hello , " + username + "!")
alert(number + 1)           // Комментарий однострочный
/* Многострочный комментарий
  1
  2
  3
  4
 */
/*
let age = prompt('Сколько тебе лет?', 100);
alert(`Тебе ${age} лет!`); // Тебе 100 лет!
*/
/*
let year = prompt("В каком году был EXPO?");
if(year == 2017){
  alert(`Да, ты прав!`)
}
else {
  alert(`Нет, подумай еще!`)
}
*/
/*
let year = prompt('Когда было Expo?', ' ');

let message = (year < 2016) ? 'Рановато!' :
  (year > 2017) ? 'Поздновато' :
  (age == 2021) ? 'В этом году нет EXPO' :
  'ДА , правильно!';

alert( message );
*/
/*
let year = 0;
while(year != 2017){
  year = prompt("В каком году был EXPO?", '');
  if(year == 2017){
    alert(`Да, ты прав!`);
  }
  else{
    alert(`Попробуй еще раз!`);
  }
}*/
/* .contains
   .closest
   .classList
   Как скрыть по содержимому html тэга (kinopoisk)
   Как скрыть по содержимому аттрибута
*/

document.querySelector('.hider').onclick = function() {
  document.querySelector('.pictureContainer').classList.remove('hide');
};

document.querySelector('.fighter').onclick = function() {
  document.querySelector('.pictureContainer').classList.add('hide');
};

document.querySelector('.closeBut').onclick = function() {
  document.querySelector('.footer').classList.add('hide');
};


var el = document.querySelectorAll(".desktop-rating-selection-film-item p")

const ext = ["Зеленая книга"];

el.forEach(el =>
  ext.includes(el.innerText) &&
  el.closest(".desktop-rating-selection-film-item").setAttribute("style", "visibility: hidden;")
)
