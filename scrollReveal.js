function makeScrollReveal() {
  ScrollReveal().reveal('.scroll-reveal', {
    delay: 200,
    duration: 1000,
    distance: '20px',
    origin: 'bottom',
    easing: 'ease-out',
    mobile: false,
  })
}

makeScrollReveal()
