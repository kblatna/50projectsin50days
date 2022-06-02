const quoteEl = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const quoteBtn = document.getElementById('quoteBtn')

let url = 'https://type.fit/api/quotes'

getQuotes()

function getQuotes() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  fetch(url, config)
    .then((response) => response.json())
    .then((items) => {
      //console.log(data)

      let item = items[Math.floor(Math.random() * items.length)]
      console.log(item)

      quoteEl.innerHTML = item.text
      quoteAuthor.innerHTML = item.author
    })
}
