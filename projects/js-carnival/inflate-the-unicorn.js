import canvasConfetti from 'https://cdn.skypack.dev/canvas-confetti'

const unicornImages = document.getElementsByClassName('inflate-an-image')
const unicorn = [0, 0, 0]

for (let i = 0; i < unicornImages.length; i++) {
  unicornImages[i].onclick = () => unicornClicked(i)
}

function unicornClicked(index) {
  unicorn[index] = (unicorn[index] + 1) % 4
  unicornImages[index].src = `images/unicorn-${unicorn[index]}.png`

  if (unicorn[0] === 3 && unicorn[1] === 3 && unicorn[2] === 3) {
    canvasConfetti()
  }
}
