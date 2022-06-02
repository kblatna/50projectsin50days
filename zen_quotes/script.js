const quoteEl = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const quoteBtn = document.getElementById('quoteBtn')

let url = 'https://type.fit/api/quotes'

getQuotes()

// USING Async/Await
async function getQuotes() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch(url, config)
  const items = await res.json()

  let item = items[Math.floor(Math.random() * items.length)] // random select of quote

  quoteEl.innerHTML = `„${item.text}“` // add quote to DOM
  if (item.author !== null) {
    quoteAuthor.innerHTML = item.author
  } else {
    quoteAuthor.innerText = 'Author unknown'
  }
}

// USING .then()
/*function getQuotes() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  fetch(url, config)
    .then((response) => response.json())
    .then((items) => {
      let item = items[Math.floor(Math.random() * items.length)] // random select of quote

      quoteEl.innerHTML = `„${item.text}“` // add quote to DOM
      if (item.author !== null) {
        quoteAuthor.innerHTML = item.author
      } else {
        quoteAuthor.innerText = 'Author unknown'
      }
    })
}*/

quoteBtn.addEventListener('click', () => {
  getQuotes()
})
