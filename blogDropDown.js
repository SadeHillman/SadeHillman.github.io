const navbarContainer = document.getElementById('navbarContainer')

const dropdownData = {
  core: [
    { text: 'Identity', href: 'identity-values.html' },
    { text: 'Learning Plan', href: 'learning-plan.html' },
    { text: 'Neuroplasticity', href: 'neuroplasticity.html' },
    { text: 'Te Whare Tapa Wha', href: 'te-whare-tapa-wha.html' },
  ],
  tech: [
    { text: 'CSS: Display block vs inline', href: 'html-css.html' },
    { text: 'Javasript & DOM', href: 'javascript-dom.html' },
    { text: 'Problem Solving', href: 'problem-solving.html' },
  ],
  fun: [
    {
      text: 'Javascript Cafe',
      href: '../projects/javascript-cafe/javacafe.html',
    },
    {
      text: 'Bouncing Balls',
      href: '../projects/jsbouncyballs/bouncyballs.html',
    },
    {
      text: 'Meditation',
      href: '../projects/jsmeditation/maditation.html',
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
