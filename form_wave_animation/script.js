const labels = document.querySelectorAll('.form-control label')

labels.forEach((label) => {
  label.innerHTML = label.innerText // innerHTML returns HTML content & innerText returns text content of an element
    .split('') // split labels to letters
    .map( //map letters and add span to each letter
      (letter, i) =>
        `<span style="transition-delay: ${i * 50}ms">${letter}</span>` // added inline style for counting delay for each of letter
    ) 
    .join('') // returns array as a string
})
