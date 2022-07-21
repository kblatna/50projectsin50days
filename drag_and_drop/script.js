const filledEl = document.querySelector('.fill')
const emptyItems = document.querySelectorAll('.empty')

filledEl.addEventListener('dragstart', dragStart)
filledEl.addEventListener('dragend', dragEnd)

for (const item of emptyItems) {
  item.addEventListener('dragover', dragOver)
  item.addEventListener('dragenter', dragEnter)
  item.addEventListener('dragleave', dragLeave)
  item.addEventListener('drop', dragDrop)
}

function dragStart() {
  this.className += ' hold'
  setTimeout(() => (this.className = 'invisible'), 0)
}

function dragEnd() {
  this.className = 'fill'
  // this = <div class="fill" draggable="true"></div>
}

function dragOver(e) {
  e.preventDefault() // has a default action -> reset the current drag operation to "none"
}

function dragEnter(e) {
  e.preventDefault() // has a default action -> reject immediate user selection as potentioal target
  this.className += ' hovered'
}

function dragLeave() {
  this.className = 'empty' // cancel the hovered class
}

function dragDrop() {
  this.className = 'empty' // cancel the hovered class
  this.append(filledEl) // add the whole element
}
