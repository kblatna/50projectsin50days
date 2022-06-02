const frogs = [
  {
    name: 'Boreal Chorus Frog',
    url: 'http://www.naturenorth.com/spring/sound/Frog_B_Chorus.jpg',
  },
  {
    name: 'Copes Gray Treefrog',
    url: 'http://www.naturenorth.com/spring/sound/Treefrog_Gray.jpg',
  },
  {
    name: 'Great Plains Toad',
    url: 'http://www.naturenorth.com/spring/sound/Toad_Gr_Plains.jpg',
  },
  {
    name: 'Green Frog',
    url: 'http://www.naturenorth.com/spring/sound/Frog_Green.jpg',
  },
  {
    name: 'Leopard Frog',
    url: 'http://www.naturenorth.com/spring/sound/Frog_Leopard.jpg',
  },
  {
    name: 'Mink Frog',
    url: 'http://www.naturenorth.com/spring/sound/Frog_Mink.jpg',
  },
]

frogs.forEach((frog) => {
  const btn = document.createElement('button') // create button
  btn.classList.add('btn') // add class for this button
  btn.innerHTML = frog.name //add name of frog from frogs array to button text


  const img = document.createElement('img') // add img element
  btn.appendChild(img) // add img to btn
  img.src = frog.url //add url to img source


  let frogSound = document.getElementById(frog.name) // find the specific frog
  let isPlaying = false // default state 

  function togglePlay() { // toggle between states
    isPlaying ? frogSound.pause() : frogSound.play()
  }


  frogSound.onplaying = () => { //change the state
    isPlaying = true
  }
  frogSound.onpause = () => {
    isPlaying = false
  }

  btn.addEventListener('click', () => {
    stopPlay()
    togglePlay()
  })

  document.getElementById('buttons').appendChild(btn) // find div and added all buttons in it
})

// function for stoping the previous sound
function stopPlay() {
  frogs.forEach((frog) => {
    const frogSound = document.getElementById(frog.name)
    frogSound.pause()
    frogSound.currentTime = 0
  })
}
