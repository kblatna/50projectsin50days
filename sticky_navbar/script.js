const nav = document.querySelector('.nav')

window.addEventListener('scroll', fixNav)

// window.scrollY -> Y positin when scrolling
// nav.offsetHeight -> height of navigation

function fixNav() {
  if (window.scrollY > nav.offsetHeight) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}