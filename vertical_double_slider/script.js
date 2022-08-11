const slider = document.querySelector('.slider-container')
const slideLeft = document.querySelector('.left-slide')
const slideRight = document.querySelector('.right-slide')
const buttonUp = document.querySelector('.down-button')
const buttonDown = document.querySelector('.up-button')
const slidesLength = slideRight.querySelectorAll('div').length - 1

let currentSlideIndex = 0

slideLeft.style.top = `-${slidesLength * 100}vh` // Podle toho kolik máme slidů, tak se nastaví mínusová hodnota viewheight. Tady -300px, protože máme 4 slidy

buttonUp.addEventListener('click', () => changeSlides('up'))
buttonDown.addEventListener('click', () => changeSlides('down'))

//clientHeight -> inner height of an element in pixels. It includes padding but excludes borders, margins, and horizontal scrollbars (if present).

const changeSlides = (direction) => {
  if (direction === 'up') {
    currentSlideIndex++
    if (currentSlideIndex > slidesLength) {
      currentSlideIndex = 0
    }
  } else if (direction === 'down') {
    currentSlideIndex--
    if (currentSlideIndex < 0) {
      currentSlideIndex = slidesLength
    }
  }

  // Moves slides in Y axis into negative/positive positions according to viewport
  slideRight.style.transform = `translateY(-${
    currentSlideIndex * slider.clientHeight
  }px)`
  slideLeft.style.transform = `translateY(${
    currentSlideIndex * slider.clientHeight
  }px)`
}
