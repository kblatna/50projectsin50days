const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes() // We call the function because we want to see the first three boxes at the start before we start to scroll

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4 // trigger point

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top // line 24

    if (boxTop < triggerBottom) {
      // Pokud je vršek boxu na menších souřadnicích od vrchu než je výška okna, znamená to, že se má zobrazit
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}

// We can use very good library Animate on Scroll, but in this case, it is not neccesary :)

// getBoundinfClientRect find positions of element in viewport: x,y, width, height, top, right, bottom, left
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
