const loadText = document.querySelector('.loading-text')
const background = document.querySelector('.background-image')

let load = 0
let interval = setInterval(blurring, 30) // 30 miliseconds

function blurring() {
  load++

  if (load > 99) {
    clearInterval(interval) // this method clears a timer set with the setInterval() method
  }

  loadText.innerText = `${load} %`
  loadText.style.opacity = scale(load, 0, 100, 1, 0) // opacity from 1 to 0
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)` // blur effect from 30 to 0
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

// Map a range of numbers to another range of numbers
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
