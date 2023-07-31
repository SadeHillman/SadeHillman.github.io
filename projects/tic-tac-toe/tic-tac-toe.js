// 1) an array containing all the squares of the board

const cellArray = document.getElementsByTagName('td')
let noughtsTurn = 'o'
let gameOver = ''
// 2) the ability to click each square and put either an X or an O into it

function clickedCell(e) {
  let cell = e.target

  for (let i = 0; i < cellArray.length; i++) {
    cellArray[i].onclick = '' ? noughtsTurn : 'x'
  }
  console.log('Hello')
}

//3) a boolean to keep track of whose turn it is, X or O, and logic to switch turns once a player makes a move

//4) logic to display whose turn it is
//5) a function that checks if the game has been won
//6) logic to display "_ WON!" when a player wins.
