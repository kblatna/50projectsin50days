/*const rippleBtn = document.getElementById('ripple')

rippleBtn.addEventListener('click', (e) => {
  const xInside = e.clientX - e.target.offsetLeft
  const yInside = e.clientY - e.target.offsetTop

  const circle = document.createElement('span')
  circle.classList.add('circle')
  circle.style.top = yInside + 'px'
  circle.style.left = xInside + 'px'

  rippleBtn.appendChild(circle)
  setTimeout(() => circle.remove(), 500)
})*/

/* Solution if we have more than one button*/
const buttons = document.querySelectorAll('.ripple')

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    const x = e.clientX // provides the horizontal coordinate within the application's viewport at which the event occurred (only mouseEvents)
    const y = e.clientY

    const xInside = x - e.target.offsetLeft // Target = gets the element on which the event originally occurred
    const yInside = y - e.target.offsetTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    this.appendChild(circle) // if we have more button, we need to point to the "this" actual button, but it is not work with arrow function
    setTimeout(() => circle.remove(), 500) // we need to remove this circle from DOM after some while
  })
})
