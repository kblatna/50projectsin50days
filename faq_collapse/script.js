const faq = document.querySelectorAll('.faq')

faq.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active')
  })
})

// If we want have only clickable icons, we can add active class to parent via parentNode

/*
const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active')
  })
}) */
