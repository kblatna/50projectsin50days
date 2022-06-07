const textarea = document.getElementById('textarea')
const tagsHolder = document.getElementById('tags')

textarea.focus()

function createTags(input) {
  const tags = input
    .split(',') // split input text with comma
    .filter((tag) => tag.trim() !== '') // filter empty spaces and remove them a nebere v potaz dvě čárky (,,)
    .map((tag) => tag.trim()) // remove spaces from text before comma (for example: apple , pear , => apple, pear)

  tagsHolder.innerHTML = '' // Pokud tu tento innerHTML není, tak se přidává tag po každém stisknutí klávesy

  tags.forEach((tag) => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsHolder.appendChild(tagEl)
  })
}

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)
})
