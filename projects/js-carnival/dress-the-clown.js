import { save } from './screenshot.js'

let headIndex = 0
let bodyIndex = 0
let shoesIndex = 0
let clothingIndex = 0

function changeClothes() {
  let bodyPart = ''
  let bodyPartIndex = 0

  if (clothingIndex === 0) {
    bodyPart = 'head'
    bodyPartIndex = headIndex
  } else if (clothingIndex === 1) {
    bodyPart = 'body'
    bodyPartIndex = bodyIndex
  } else if (clothingIndex === 2) {
    bodyPart = 'shoes'
    bodyPartIndex = shoesIndex
  }

  let element = document.getElementById(bodyPart)
  let src = `./images/${bodyPart}${bodyPartIndex}.png`
  element.src = src
}

function changeClothingIndex(delta) {
  clothingIndex = (clothingIndex + delta + 3) % 3
  changeClothes()
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowRight') {
    if (clothingIndex === 0) {
      headIndex = (headIndex + 1) % 6
    } else if (clothingIndex === 1) {
      bodyIndex = (bodyIndex + 1) % 6
    } else if (clothingIndex === 2) {
      shoesIndex = (shoesIndex + 1) % 6
    }
    changeClothes()
  } else if (event.code === 'ArrowLeft') {
    if (clothingIndex === 0) {
      headIndex = (headIndex - 1 + 6) % 6
    } else if (clothingIndex === 1) {
      bodyIndex = (bodyIndex - 1 + 6) % 6
    } else if (clothingIndex === 2) {
      shoesIndex = (shoesIndex - 1 + 6) % 6
    }
    changeClothes()
  } else if (event.code === 'ArrowUp') {
    changeClothingIndex(-1)
  } else if (event.code === 'ArrowDown') {
    changeClothingIndex(1)
  }
})

// Save feature
document.getElementById('saveButton').addEventListener('click', function () {
  save({ head: head, body: body, shoes: shoes })
})

changeClothes()

console.log('Dress The Clown!')
