const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('vis')
      }
    })
  },
  {
    threshold: 0.3,
  }
)

const images = document.querySelectorAll('.spotlight')
images.forEach((img) => {
  observer.observe(img)
})

// Menu for mobile
document.querySelector('.menu-link').addEventListener('click', (e) => {
  const menu = document.querySelector('#menu')
  menu.classList.toggle('active')
})

const logoObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector('#menu .logo').classList.remove('active')
      } else {
        document.querySelector('#menu .logo').classList.add('active')
      }
    })
  },
  {
    threshold: 0.2,
  }
)

logoObserver.observe(document.querySelector('header'))
