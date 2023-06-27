/* 

Here is one of the projects im working on to focus on how to 
implament addEventlisteners, for-loops, creating objects and making
functions.

Ive left comments above each as a way to determin how much i understand
and areas i need further research. 

*/

// get canvas element
let canvas = document.getElementById('canvas')

// get 2d context of canvas
let c = canvas.getContext('2d')

//width and height of the window
let tx = window.innerWidth
let ty = window.innerHeight

// set width and height of the canvas to match the window dimensions
canvas.width = tx
canvas.height = ty

//mouse coordinates
let mousex = 0
let mousey = 0

// move mouse over cicle....i guess event is an old way to do it but i wanted to stick to the code while learning
addEventListener('mousemove', function () {
  mousex = event.clientX
  mousey = event.clientY
})

// gravity
let grav = 0.99

// stroke width of canvas, understand what is does but not sure why its needed here?
c.strokeWidth = 5

//generate random color, return r,g,b,a
function randomColor() {
  return (
    'rgba(' +
    Math.round(Math.random() * 250) +
    ',' +
    Math.round(Math.random() * 250) +
    ',' +
    Math.round(Math.random() * 250) +
    ',' +
    Math.ceil(Math.random() * 10) / 10 +
    ')'
  )
}

// creating Ball objects
function Ball() {
  // random color
  this.color = randomColor()

  // random radius
  this.radius = Math.random() * 20 + 14
  this.startradius = this.radius

  // random start position
  this.x = Math.random() * (tx - this.radius * 2)
  this.y = Math.random() * (tx - this.radius)

  // speed
  this.dy = Math.random() * 2
  this.dx = Math.round((Math.random() - 0.5) * 10)
  this.vel = Math.random() / 5

  // canvas stuff
  this.update = function () {
    //starts new path or circle
    c.beginPath()

    //circle parameter
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)

    //fill color
    c.fillStyle = this.color

    //add it all together
    c.fill()
  }
}

// store ball objects
let bal = []

// a for loop making new balls
for (let i = 0; i < 50; i++) {
  bal.push(new Ball())
}

// animate the balls
function animate() {
  // check window dimensions
  if (tx != window.innerWidth || ty != window.innerHeight) {
    // fix window dimesions
    tx = window.innerWidth
    ty = window.innerHeight

    // fix canvas to window dimensions
    canvas.width = tx
    canvas.height = ty
  }

  //
  requestAnimationFrame(animate)

  // clear canvas
  c.clearRect(0, 0, tx, ty)

  // not sure yet
  for (let i = 0; i < bal.length; i++) {
    bal[i].update()
    bal[i].y += bal[i].dy
    bal[i].x += bal[i].dx

    //making the ball bounce
    if (bal[i].y + bal[i].radius >= ty) {
      bal[i].dy = -bal[i].dy * grav
    } else {
      bal[i].dy += bal[i].vel
    }

    //if it hits an edge bounce the other way
    if (bal[i].x + bal[i].radius > tx || bal[i].x - bal[i].radius < 0) {
      bal[i].dx = -bal[i].dx
    }

    //mouse range, make ball bigger else back to original size
    if (
      mousex > bal[i].x - 20 &&
      mousex < bal[i].x + 20 &&
      mousey > bal[i].y - 50 &&
      mousey < bal[i].y + 50 &&
      bal[i].radius < 70
    ) {
      bal[i].radius += 5
    } else {
      //
      if (bal[i].radius > bal[i].startradius) {
        bal[i].radius -= 5
      }
    }
  }
}

// call the animate function
animate()

// add a new ball, remove the oldest ball
setInterval(function () {
  bal.push(new Ball())
  bal.splice(0, 1)
}, 400)
