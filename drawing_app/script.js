// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
const canvas = document.getElementById('canvas')
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const sizeEl = document.getElementById('size')
const colorEl = document.getElementById('color')
const clearEl = document.getElementById('clear')
const ctx = canvas.getContext('2d')

let isPressed = false
let color = 'black' // default color
let size = 10
let x
let y

canvas.addEventListener('mousedown', (e) => {
  isPressed = true
  x = e.offsetX // find event coordinates of X
  y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
  isPressed = false
  x = undefined
  y = undefined
})

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    // update current position
    x = x2
    y = y2
  }
})

// function from Canvas API
function drawCircle(x, y) {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

// function from Canvas API
function drawLine(x1, y1, x2, y2) {
  // move positions
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2 // Multiply by two, because it should be same, that size of the circle
  ctx.stroke()
}

colorEl.addEventListener('change', (e) => (color = e.target.value))

function updateSizeOnScreen() {
  sizeEl.innerText = size
}

decreaseBtn.addEventListener('click', () => {
  size -= 5

  if (size < 5) {
    size = 5
  }
  updateSizeOnScreen()
})

increaseBtn.addEventListener('click', () => {
  size += 5

  if (size > 50) {
    size = 50
  }
  updateSizeOnScreen()
})



clearEl.addEventListener('click', () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
)
