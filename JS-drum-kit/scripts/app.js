function main() {
 
  document.addEventListener('keydown', (e) => {
    console.log(e)
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!audio) return 
    audio.currentTime = 0
    audio.play()
    
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    key.classList.add('playing')
  })
}

window.addEventListener('DOMContentLoaded', main)