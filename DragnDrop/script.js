const item = document.querySelector('.item')   // Берем наш обьект который хотим перетащить
const placeholders = document.querySelectorAll('.placeholder')       // Берем наши места куда перетаскивают

item.addEventListener('dragstart', dragstart)       // Добавляем событие при начале перетаскивания
item.addEventListener('dragend', dragend)           // Добавляем событие в конце перетаскивания

for (const placeholder of placeholders) {     // цикл выбора каждого места перетаскивания
  placeholder.addEventListener('dragover', dragover)        //Добавляем событие при наведении на placeholder с перестаскиванием
  placeholder.addEventListener('dragenter', dragenter)     //Добавляем событие при входе в placeholder с перестаскиванием
  placeholder.addEventListener('dragleave', dragleave)    //Добавляем событие при выходе из placeholder с перестаскиванием
  placeholder.addEventListener('drop', dragdrop)         //Добавляем событие при drop в placeholder с перестаскиванием
}

function dragstart(event) {     // функция старта перетаскивания
  event.target.classList.add('hold')   // Добавляет класс hold
  setTimeout(() => event.target.classList.add('hide'), 0) //позволяет вызвать функцию один раз через определённый интервал времени.
}

function dragend(event) {    // функция конца перетаскивания
  event.target.className = 'item'
}

function dragover(event) {     // функция наведения с перетаскиванием
  event.preventDefault()  //если событие не обрабатывается явно, его действие по умолчанию не должно выполняться так, как обычно.
}

function dragenter(event) {    // функция входа в placeholder с перестаскиванием
  event.target.classList.add('hovered')  // Добавляет класс hovered
}

function dragleave(event) {    // функция выхода в placeholder с перестаскиванием
  event.target.classList.remove('hovered')   // Убирает класс hovered
}

function dragdrop(event) {    // функция drop в placeholder с перестаскиванием
  event.target.classList.remove('hovered')   // Убирает класс hovered
  event.target.append(item)      // Добавляет item в placeholder
}
