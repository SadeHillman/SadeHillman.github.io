const navbarContainer = document.getElementById('navbarContainer')

const dropdownData = {
  core: [
    { text: 'About Me', href: 'blog/about-me.html' },
    { text: 'Identity', href: 'blog/identity-values.html' },
    { text: 'Learning Plan', href: 'blog/learning-plan.html' },
    { text: 'Neuroplasticity', href: 'blog/neuroplasticity.html' },
    { text: 'Te Whare Tapa Wha', href: 'blog/te-whare-tapa-wha.html' },
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
