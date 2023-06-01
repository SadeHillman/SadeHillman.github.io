// get imgs with .slide //
let slides = document.querySelectorAll('.slide')
// start from 0 //
let currentSlide = 0
//display img for 3000 mil secs//
let slideInterval = setInterval(nextSlide, 3000)
//start with first img on loading by adding active//
slides[currentSlide].classList.add('active')

//creating function//
function nextSlide() {
  //removing current img by removing active//
  slides[currentSlide].classList.remove('active')
  //taking current img index adding 1 to move to next img using modular to loop back to start//
  currentSlide = (currentSlide + 1) % slides.length
  //adding active again to display new imgs"
  slides[currentSlide].classList.add('active')
}
