// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const toggleBtn = document.querySelector('.toggle')
const html = document.querySelector('html')
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const dateNumEl = document.querySelector('.date-circle')
console.log(dateNumEl)

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

toggleBtn.addEventListener('click', () => {
  html.classList.toggle('dark')
  if (toggleBtn.innerText === 'Dark Mode') {
    toggleBtn.innerText = 'Light Mode'
  } else {
    toggleBtn.innerText = 'Dark Mode'
  }
})

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

function setTime() {
  const time = new Date()

  const month = time.getMonth()
  const day = time.getDay()
  const hours = time.getHours()
  const halfHours = hours % 12  //for the clock face and if we want 12 hours clock (am/pm)
  const minutes = time.getMinutes() 
  const seconds = time.getSeconds()

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(halfHours, 0, 11, 0, 360)}deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

  timeEl.innerText = `${hours}:${minutes > 9 ? minutes : '0' + minutes}`
  dateEl.innerText = `${days[day]}, ${months[month]}`
  dateNumEl.innerText = day
}

setInterval(setTime, 1000) // call the function setTime every second
