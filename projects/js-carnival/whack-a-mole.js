// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
import { getRandomNumber } from './random-number.js'
//- The ability to store or get references to the cells in the HTML table.
let table = document.querySelector('table')
let cells = Array.from(table.getElementsByTagName('td'))
let counter = 0
let countdownInterval
//- A function to randomly select which cell should show the mole.
//used import

//- A way to show a mole in the chosen cell.
function showMole() {
  let randomIndex = getRandomNumber(0, cells.length)
  let randomCell = cells[randomIndex]

  let moleImage = document.createElement('img')
  moleImage.src = 'images/mole.PNG'
  moleImage.style.maxWidth = '100%'

  let existingMoleImage = randomCell.querySelector('img')
  if (existingMoleImage) {
    randomCell.removeChild(existingMoleImage)
  }

  randomCell.innerHTML = ''
  randomCell.appendChild(moleImage)

  moleImage.addEventListener('click', function () {
    let audio = new Audio('whack-audio.wav')
    audio.play()
    counter++
    updateScore()

    if (timer === 10 && counter === 1) {
      startCountdown()
    }
  })
}

for (let cell of cells) {
  cell.addEventListener('click', function () {
    if (cell.querySelector('img') !== null) {
      cell.removeChild(cell.querySelector('img'))
      showMole()
    }
  })
}

function updateScore() {
  const score = document.getElementById('score')
  score.textContent = `Score: ${counter}`
}

const score = document.createElement('p')
score.id = 'score'
score.textContent = `Score: ${counter}`
document.body.appendChild(score)

let timer = 10

const countdown = document.createElement('p')
countdown.id = 'countdown'
countdown.textContent = `Time Left: ${timer}s`
document.body.appendChild(countdown)

function startCountdown() {
  const countdownInterval = setInterval(() => {
    timer--
    countdown.textContent = `Time Left: ${timer}s`

    if (timer === 0) {
      endGame()
    }
  }, 1000)
}

function endGame() {
  countdown.remove()
  score.remove()
  table.remove()
  const gameOver = document.createElement('h1')
  gameOver.textContent = `Your Score: ${counter}`
  document.body.appendChild(gameOver)
}

showMole()

//
