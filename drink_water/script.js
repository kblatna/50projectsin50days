const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

smallCups.forEach((cup, id) => {
  cup.addEventListener('click', () => highlightCups(id))
})

function highlightCups(id) {
  // if clicked cup contains full class & next cup does not contain full class -> afterclick it removes full class from clicked cup
  if (
    smallCups[id].classList.contains('full')
    //&& !smallCups[id].nextElementSibling.classList.contains('full') // but there is a pproblem with last cup, which dont have nextSibling. It work correctly without it.
  ) {
    id--
  }

  // id = number of clicked cup
  // i = takes clicked cup and all previous cups

  smallCups.forEach((cup, i) => {
    if (i <= id) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })
  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length // lenght = the number of clicked cups
  const totalCups = smallCups.length // all 8 cups

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${(fullCups / totalCups) * 330}px` // 330px is height of big cup
    percentage.innerText = `${(fullCups / totalCups) * 100}%`
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    liters.innerText = `${(250 * fullCups) / 1000}L` // 2 litres minus the drunk cups. 250 (ml) is one cup, we have to dived by thousand to get the litres.
  }
}
