const navbarContainer = document.getElementById('navbarContainer')

const dropdownData = {
  core: [
    { text: 'Bootcamp Wellbeing', href: 'blog/wellbeingLp.html' },

    { text: 'Identity', href: 'blog/identity-values.html' },
    { text: 'Neuroplasticity', href: 'blog/neuroplasticity.html' },
    {
      text: 'Foundations Reflections',
      href: 'blog/foundations-reflections.html',
    },
  ],
  tech: [
    { text: 'CSS: Display block vs inline', href: 'blog/html-css.html' },
    { text: 'Javasript & DOM', href: 'blog/javascript-dom.html' },
    { text: 'Problem Solving', href: 'blog/problem-solving.html' },
  ],
  fun: [
    {
      text: 'Javascript Cafe',
      href: 'projects/javascript-cafe/javacafe.html',
    },
    {
      text: 'Bouncing Balls',
      href: 'projects/jsbouncyballs/bouncyballs.html',
    },
    {
      text: 'Meditation',
      href: 'projects/jsmeditation/maditation.html',
    },
    {
      text: 'Whack-a-mole',
      href: 'projects/js-carnival/whack-a-mole.html',
    },
    {
      text: 'Unicorns',
      href: 'projects/js-carnival/inflate-the-unicorn.html',
    },
    {
      text: 'Dress Ups',
      href: 'projects/js-carnival/dress-the-clown.html',
    },
  ],
}

// Generate the dropdown menu items dynamically
Object.keys(dropdownData).forEach((key) => {
  const dropdownContainer = document.getElementById(`${key}Dropdown`)

  dropdownData[key].forEach((item) => {
    const link = document.createElement('a')
    link.href = item.href || '#'
    link.textContent = item.text || item

    dropdownContainer.appendChild(link)
  })
})
