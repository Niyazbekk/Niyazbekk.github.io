let $start = document.querySelector('#start') // Вызываем элементы с аттрибутом start
let $game = document.querySelector('#game')
let $time = document.querySelector('#time')
let $result = document.querySelector('#result')
let $timeHeader = document.querySelector('#time-header')
let $resultHeader = document.querySelector('#result-header')
let $gameTime = document.querySelector('#game-time')

let colors = ['#CB356B', '#BD3F32', '#3A1C71', '#D76D77', '#283c86', '#45a247', '#8e44ad', '#155799', '#159957', '#000046', '#1CB5E0', '#2F80ED'] // создаем список
let score = 0
let isGameStarted = false

$start.addEventListener('click', startGame)  // Создание события по клику мыши
$game.addEventListener('click', handleBoxClick)
$gameTime.addEventListener('input', setGameTime)

function show($el) {
  $el.classList.remove('hide')  // Создаем функцию которая убирает class - hide
}

function hide($el) {
  $el.classList.add('hide') // Создаем функцию которая добавляет class - hide
}


function startGame() {
  score = 0
  setGameTime()
  $gameTime.setAttribute('disabled', 'true')  // Добавляет аттрибут disabled
  isGameStarted = true
  $game.style.backgroundColor = '#fff'  // Добавляет стиль выбранному элементу
  hide($start)

  let interval = setInterval(function() {
    let time = parseFloat($time.textContent) // возращает содержимое всех элементов, включая  <script> и <style>

    if (time <= 0) {
      clearInterval(interval)
      endGame()
    } else {
      $time.textContent = (time - 0.1).toFixed(1)  // форматирует число, используя запись с фиксированной запятой
    }
  }, 100)

  renderBox()
}

function setGameScore() {
  $result.textContent = score.toString()
}

function setGameTime() {
  let time = +$gameTime.value
  $time.textContent = time.toFixed(1)
  show($timeHeader)
  hide($resultHeader)
}

function endGame() {
  isGameStarted = false
  setGameScore()
  $gameTime.removeAttribute('disabled') // Убирает аттрибут у выбранного элемента
  show($start)
  $game.innerHTML = ''
  $game.style.backgroundColor = '#ccc'
  hide($timeHeader)
  show($resultHeader)
}

function handleBoxClick(event) {
  if (!isGameStarted) {
    return
  }

  if (event.target.dataset.box) {  // target является ссылкой на объект, который был инициатором события ; dataset предоставляет доступ как для чтения, так и для изменения всех аттрибутов
    score++
    renderBox()
  }
}

function renderBox() {
  $game.innerHTML = ''
  let box = document.createElement('div')
  let boxSize = getRandom(30, 100) // Получить рандом от и до
  let gameSize = $game.getBoundingClientRect() // возвращает размер элемента и его позицию
  let maxTop = gameSize.height - boxSize
  let maxLeft = gameSize.width - boxSize
  // [1, 2, 3] -> length == 3
  let randomColorIndex = getRandom(0, colors.length)
  let randomColorBackground = getRandom(0, colors.length)
  box.style.height = box.style.width = boxSize + 'px'
  box.style.position = 'absolute'
  box.style.borderRadius = '50%'
  box.style.backgroundColor = colors[randomColorIndex]
  document.body.style.background = colors[randomColorBackground] // Changing colors of background with random
  box.style.top = getRandom(0, maxTop) + 'px'
  box.style.left = getRandom(0, maxLeft) + 'px'
  box.style.cursor = 'pointer'
  box.setAttribute('data-box', 'true')

  $game.insertAdjacentElement('afterbegin', box)

}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}


let strNumber = '0506 06132020 9 474000 25725710'

let arrayOfNumber = strNumber.split('')

let minute = arrayOfNumber.slice(0,2).join('')
let sec = arrayOfNumber.slice(2 , 4).join('')
let month = arrayOfNumber.slice(5 , 7).join('')
let day = arrayOfNumber.slice(7 , 9).join('')
let year = arrayOfNumber.slice(9, 13).join('')
let code = parseInt(arrayOfNumber[14])
let dialed = arrayOfNumber.slice(16, 22).join('')
let charged = arrayOfNumber.slice(23, 29).join('')
let time = parseInt(arrayOfNumber.slice(29, 31).join(''))

let objectNumber = {
  duration : sec ,
  startDate : new Date(`${year}-${month}-${day}`),
  accesCode : code ,
  dialedNumber : dialed ,
  chargedNumber : charged ,
  timeInQueue : time
}
