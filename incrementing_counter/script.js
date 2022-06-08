const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
  counter.innerText = 0 // Due to the innertext, it is a string, so we need to make a number from this in the line 10

  //const updateCounter = () => { It is also possible to have normal function here
  function updateCounter() {
    let target = Number(counter.getAttribute('data-target'))
    let value = Number(counter.innerText)

    const increment = target / 200 // split target by same number to have same start point

    if (value < target) {
      counter.innerText = value + increment // number + number, but due to innerText it is a string again
      setTimeout(updateCounter, 1) // call the function with timeout
    } else {
      counter.innerText = target
    }
  }
  updateCounter()
})
